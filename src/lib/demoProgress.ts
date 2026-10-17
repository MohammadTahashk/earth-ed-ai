export type Achievement = {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: number;
};

export type QuizAttempt = {
  score: number;
  total: number;
  timestamp: number;
};

export type DemoTaskStatus = 'not-started' | 'in-progress' | 'submitted' | 'pending-verification';

export type DemoProgress = {
  completedTaskIds: number[];
  taskStatuses: Record<number, DemoTaskStatus>;
  taskEvidence: Record<number, string>;
  points: number;
  carbonSaved: number;
  quizAttempts: QuizAttempt[];
  bestQuizScore: number;
  achievements: string[]; // Achievement IDs that have been unlocked
};

const STORAGE_KEY = 'earth-ed-demo-progress';
const emptyProgress: DemoProgress = { 
  completedTaskIds: [], 
  taskStatuses: {},
  taskEvidence: {},
  points: 0, 
  carbonSaved: 0,
  quizAttempts: [],
  bestQuizScore: 0,
  achievements: []
};

export const readDemoProgress = (): DemoProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyProgress;
    const parsed = JSON.parse(stored) as Partial<DemoProgress>;
    return {
      completedTaskIds: Array.isArray(parsed.completedTaskIds) ? parsed.completedTaskIds : [],
      taskStatuses: parsed.taskStatuses && typeof parsed.taskStatuses === 'object' ? parsed.taskStatuses : {},
      taskEvidence: parsed.taskEvidence && typeof parsed.taskEvidence === 'object' ? parsed.taskEvidence : {},
      points: typeof parsed.points === 'number' ? parsed.points : 0,
      carbonSaved: typeof parsed.carbonSaved === 'number' ? parsed.carbonSaved : 0,
      quizAttempts: Array.isArray(parsed.quizAttempts) ? parsed.quizAttempts : [],
      bestQuizScore: typeof parsed.bestQuizScore === 'number' ? parsed.bestQuizScore : 0,
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [],
    };
  } catch {
    return emptyProgress;
  }
};

export const completeDemoTask = (taskId: number, points: number, carbonSaved: number): DemoProgress => {
  const current = readDemoProgress();
  if (current.completedTaskIds.includes(taskId)) return current;

  const next = {
    ...current,
    completedTaskIds: [...current.completedTaskIds, taskId],
    points: current.points + points,
    carbonSaved: current.carbonSaved + carbonSaved,
    taskStatuses: { ...current.taskStatuses, [taskId]: 'pending-verification' as const },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
};

export const startDemoTask = (taskId: number): DemoProgress => {
  const current = readDemoProgress();
  if (current.completedTaskIds.includes(taskId) || current.taskStatuses[taskId]) return current;

  const next = {
    ...current,
    taskStatuses: { ...current.taskStatuses, [taskId]: 'in-progress' as const },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
};

export const submitDemoTask = (taskId: number, evidence: string): DemoProgress => {
  const current = readDemoProgress();
  if (!evidence.trim() || current.completedTaskIds.includes(taskId)) return current;

  const next = {
    ...current,
    taskStatuses: { ...current.taskStatuses, [taskId]: 'pending-verification' as const },
    taskEvidence: { ...current.taskEvidence, [taskId]: evidence.trim() },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
};

export const resetDemoProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
};

// Quiz tracking functions
export const saveQuizAttempt = (score: number, total: number): DemoProgress => {
  const current = readDemoProgress();
  const attempt: QuizAttempt = {
    score,
    total,
    timestamp: Date.now(),
  };
  
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const newBestScore = Math.max(current.bestQuizScore, percentage);
  
  const next: DemoProgress = {
    ...current,
    quizAttempts: [...current.quizAttempts, attempt],
    bestQuizScore: newBestScore,
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
};

export const getQuizStats = (progress: DemoProgress) => {
  const attempts = progress.quizAttempts.length;
  const bestScore = progress.bestQuizScore;
  const lastAttempt = progress.quizAttempts[progress.quizAttempts.length - 1];
  const lastScore = lastAttempt ? Math.round((lastAttempt.score / lastAttempt.total) * 100) : 0;
  
  return {
    attempts,
    bestScore,
    lastScore,
    hasAttempts: attempts > 0,
  };
};

// Achievement tracking
export const unlockAchievement = (achievementId: string): DemoProgress => {
  const current = readDemoProgress();
  if (current.achievements.includes(achievementId)) return current;
  
  const next: DemoProgress = {
    ...current,
    achievements: [...current.achievements, achievementId],
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
};

export const hasAchievement = (progress: DemoProgress, achievementId: string): boolean => {
  return progress.achievements.includes(achievementId);
};

// Check and auto-unlock achievements based on progress
export const checkAchievements = (progress: DemoProgress): string[] => {
  const newlyUnlocked: string[] = [];
  
  // First Mission
  if (progress.completedTaskIds.length >= 1 && !hasAchievement(progress, 'first-mission')) {
    unlockAchievement('first-mission');
    newlyUnlocked.push('first-mission');
  }
  
  // Green Starter (5 missions)
  if (progress.completedTaskIds.length >= 5 && !hasAchievement(progress, 'green-starter')) {
    unlockAchievement('green-starter');
    newlyUnlocked.push('green-starter');
  }
  
  // Eco Warrior (10 missions)
  if (progress.completedTaskIds.length >= 10 && !hasAchievement(progress, 'eco-warrior')) {
    unlockAchievement('eco-warrior');
    newlyUnlocked.push('eco-warrior');
  }
  
  // Quiz Beginner
  if (progress.quizAttempts.length >= 1 && !hasAchievement(progress, 'quiz-beginner')) {
    unlockAchievement('quiz-beginner');
    newlyUnlocked.push('quiz-beginner');
  }
  
  // Quiz Master (90%+ score)
  if (progress.bestQuizScore >= 90 && !hasAchievement(progress, 'quiz-master')) {
    unlockAchievement('quiz-master');
    newlyUnlocked.push('quiz-master');
  }
  
  // Carbon Saver (10+ kg CO₂)
  if (progress.carbonSaved >= 10 && !hasAchievement(progress, 'carbon-saver')) {
    unlockAchievement('carbon-saver');
    newlyUnlocked.push('carbon-saver');
  }
  
  return newlyUnlocked;
};
