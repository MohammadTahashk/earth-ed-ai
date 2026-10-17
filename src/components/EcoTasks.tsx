import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Leaf,
  Trophy,
  HelpCircle,
  ChevronDown,
  Recycle,
  Droplets,
  Lightbulb,
  Bike,
  ShoppingBag,
  TreePine,
  Utensils,
  Car,
  Sprout,
  CheckCircle2,
  RotateCcw,
  Target,
} from 'lucide-react';
import { DemoProgress, readDemoProgress, resetDemoProgress, saveQuizAttempt, checkAchievements, startDemoTask, submitDemoTask } from '../lib/demoProgress';

type EcoTask = {
  icon: React.ElementType;
  title: string;
  description: string;
  points: number;
  carbonSaved: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  benefit: string;
  evidence: string;
};

type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

const ecoTasks: EcoTask[] = [
  {
    icon: Recycle,
    title: 'Sort Household Recycling',
    description: 'Properly separate paper, plastic, glass, and metal into the correct bins for a full week.',
    points: 50,
    carbonSaved: '2.4 kg',
    duration: '7 days',
    difficulty: 'Easy',
    benefit: 'Keeps recyclable materials out of landfill.',
    evidence: 'Describe your sorting system and upload a photo when production verification is enabled.',
  },
  {
    icon: Droplets,
    title: 'Five-Minute Shower Challenge',
    description: 'Keep every shower under five minutes for seven consecutive days to conserve water.',
    points: 40,
    carbonSaved: '1.8 kg',
    duration: '7 days',
    difficulty: 'Easy',
    benefit: 'Reduces household water use.',
    evidence: 'Record your shower times and describe the change.',
  },
  {
    icon: Lightbulb,
    title: 'Switch to LED Bulbs',
    description: 'Replace at least three incandescent bulbs at home with energy-efficient LED alternatives.',
    points: 60,
    carbonSaved: '3.2 kg',
    duration: '1 hour',
    difficulty: 'Medium',
    benefit: 'Uses less electricity than incandescent lighting.',
    evidence: 'List the bulbs replaced and the room where each was installed.',
  },
  {
    icon: Bike,
    title: 'Bike to School Week',
    description: 'Commute by bicycle or walk instead of using a car for five school days in a row.',
    points: 75,
    carbonSaved: '5.6 kg',
    duration: '5 days',
    difficulty: 'Medium',
    benefit: 'Avoids vehicle fuel use and tailpipe emissions.',
    evidence: 'Log each walk or bicycle trip with date and distance.',
  },
  {
    icon: ShoppingBag,
    title: 'Plastic-Free Grocery Run',
    description: 'Complete a full grocery shopping trip using only reusable bags and containers.',
    points: 35,
    carbonSaved: '1.1 kg',
    duration: '1 shopping trip',
    difficulty: 'Easy',
    benefit: 'Avoids single-use shopping bags and containers.',
    evidence: 'Describe the reusable items used during the trip.',
  },
  {
    icon: TreePine,
    title: 'Plant a Native Tree',
    description: 'Plant and care for a native tree species in your yard or an approved community area.',
    points: 100,
    carbonSaved: '21.0 kg',
    duration: '2 hours + ongoing care',
    difficulty: 'Hard',
    benefit: 'Supports local habitat and can store carbon as it grows.',
    evidence: 'Provide the species, planting location, and care plan.',
  },
  {
    icon: Utensils,
    title: 'Meatless Monday Month',
    description: 'Skip meat every Monday for four weeks and document your plant-based meals.',
    points: 80,
    carbonSaved: '12.4 kg',
    duration: '4 weeks',
    difficulty: 'Medium',
    benefit: 'Can reduce food-related emissions when replacing high-impact foods.',
    evidence: 'Share a dated meal log for the four Mondays.',
  },
  {
    icon: Car,
    title: 'Carpool Coordination',
    description: 'Organize a carpool with at least two classmates for two weeks of school commutes.',
    points: 55,
    carbonSaved: '7.3 kg',
    duration: '2 weeks',
    difficulty: 'Hard',
    benefit: 'Shares trips and reduces fuel use per passenger.',
    evidence: 'Describe the group size and dates of shared commutes.',
  },
  {
    icon: Sprout,
    title: 'Start a Kitchen Herb Garden',
    description: 'Grow three edible herbs at home to reduce store-bought packaging and food miles.',
    points: 45,
    carbonSaved: '0.9 kg',
    duration: '30 minutes + care',
    difficulty: 'Easy',
    benefit: 'Builds food-growing skills and may reduce packaging.',
    evidence: 'List the herbs planted and explain how they are being cared for.',
  },
  {
    icon: Lightbulb,
    title: 'Unplug Vampire Electronics',
    description: 'Unplug all unused chargers and devices nightly for two weeks to cut standby power.',
    points: 30,
    carbonSaved: '1.5 kg',
    duration: '15 minutes + 2 weeks',
    difficulty: 'Easy',
    benefit: 'Reduces standby electricity consumption.',
    evidence: 'List the devices unplugged and the routine used.',
  },
];

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Which gas is the primary contributor to the greenhouse effect on Earth?',
    options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'],
    correctIndex: 1,
    explanation: 'Carbon dioxide traps heat in the atmosphere, making it the leading greenhouse gas from human activity.',
  },
  {
    question: 'How long does it take for a single plastic bottle to decompose in a landfill?',
    options: ['10 years', '50 years', '200 years', '450 years'],
    correctIndex: 3,
    explanation: 'A plastic bottle can take up to 450 years to break down, which is why recycling matters.',
  },
  {
    question: 'Which everyday action saves the most water at home?',
    options: ['Turning off the tap while brushing teeth', 'Taking baths instead of showers', 'Watering plants at noon', 'Running half-full laundry loads'],
    correctIndex: 0,
    explanation: 'Simply turning off the tap while brushing can save up to 8 gallons of water per day.',
  },
  {
    question: 'Which renewable energy source currently generates the most electricity worldwide?',
    options: ['Solar', 'Wind', 'Hydropower', 'Geothermal'],
    correctIndex: 2,
    explanation: 'Hydropower remains the largest source of renewable electricity globally.',
  },
  {
    question: 'Which shopping habit most reduces packaging waste?',
    options: ['Buying individually wrapped snacks', 'Bringing reusable bags and containers', 'Choosing single-use plastics', 'Buying smaller packages more often'],
    correctIndex: 1,
    explanation: 'Bringing your own reusable bags and containers dramatically cuts single-use packaging waste.',
  },
];

// Helper function to get feedback based on score
const getQuizFeedback = (percentage: number): string => {
  if (percentage === 100) return "Excellent! You're an Eco Champion!";
  if (percentage >= 80) return "Great job! You understand environmental sustainability.";
  if (percentage >= 60) return "Good effort! Keep learning about our planet.";
  if (percentage >= 40) return "Keep practicing! Every step toward learning matters.";
  return "Keep learning about our planet and try again!";
};

const EcoTasks: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [progress, setProgress] = useState<DemoProgress>(() => readDemoProgress());
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<{ correct: number; total: number } | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleStartTask = (index: number) => {
    const newProgress = startDemoTask(index);
    setProgress(newProgress);
  };

  const handleSubmitTask = (index: number, evidenceDescription: string) => {
    const evidence = window.prompt(`Evidence for "${ecoTasks[index].title}"\n\n${evidenceDescription}`);
    if (!evidence?.trim()) return;
    const newProgress = submitDemoTask(index, evidence);
    setProgress(newProgress);
  };

  const handleResetProgress = () => {
    if (window.confirm('Reset all local demo progress? This cannot be undone.')) {
      resetDemoProgress();
      setProgress(readDemoProgress());
      setSelectedAnswers({});
      setQuizSubmitted(false);
      setQuizScore(null);
    }
  };

  const handleSubmitQuiz = () => {
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < quizQuestions.length) {
      if (!window.confirm(`You've answered ${answeredCount} of ${quizQuestions.length} questions. Submit anyway?`)) {
        return;
      }
    }

    let correct = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctIndex) {
        correct++;
      }
    });

    const newProgress = saveQuizAttempt(correct, quizQuestions.length);
    setProgress(newProgress);
    setQuizScore({ correct, total: quizQuestions.length });
    setQuizSubmitted(true);
    checkAchievements(newProgress);
  };

  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setOpenQuestion(0);
  };

  const totalPoints = ecoTasks.reduce((sum, task) => sum + task.points, 0);
  const totalCarbon = ecoTasks.reduce((sum, task) => sum + parseFloat(task.carbonSaved), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">EcoLearn</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero / intro */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Sprout className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-700 font-medium text-sm">Eco-Tasks & Learning Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Take Action, <span className="text-emerald-600">Submit Evidence</span>, Learn More
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Browse the top sustainability challenges you can start today, then test your eco-knowledge
            with our interactive quiz. Every action adds up to real environmental impact.
          </p>
          <div className="mx-auto mt-5 flex max-w-2xl flex-col items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-left sm:flex-row">
            <p className="text-sm text-amber-800">
              <strong>Local demo progress:</strong> {progress.completedTaskIds.length} completed · {progress.points} points
            </p>
            <button onClick={handleResetProgress} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100">
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <Trophy className="h-7 w-7 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{totalPoints}</div>
              <div className="text-sm text-gray-600">Total Points Available</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-5">
              <Leaf className="h-7 w-7 text-emerald-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{totalCarbon.toFixed(1)} kg</div>
              <div className="text-sm text-gray-600">CO₂ You Could Save</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-5">
              <HelpCircle className="h-7 w-7 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{quizQuestions.length}</div>
              <div className="text-sm text-gray-600">Quiz Questions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Top 10 Eco-Tasks */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-emerald-500 p-3 rounded-xl">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Top 10 Eco-Tasks</h2>
              <p className="text-gray-600">Start a challenge, submit evidence, and await authorized verification before any reward is issued.</p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-3xl shadow-lg overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                  <th className="px-6 py-4 font-semibold">Task Title</th>
                  <th className="px-6 py-4 font-semibold">Description</th>
                  <th className="px-6 py-4 font-semibold text-center">Points</th>
                  <th className="px-6 py-4 font-semibold text-center">Carbon Saved</th>
                  <th className="px-6 py-4 font-semibold text-center">Submission Status</th>
                </tr>
              </thead>
              <tbody>
                {ecoTasks.map((task, index) => (
                  (() => {
                    const status = progress.taskStatuses[index] ?? 'not-started';
                    const isSubmitted = status === 'pending-verification';
                    return (
                  <tr
                    key={index}
                    className="border-b border-gray-100 last:border-0 hover:bg-emerald-50/50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <task.icon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <span className="font-medium text-gray-900">{task.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm leading-relaxed max-w-md">
                      {task.description}
                      <div className="mt-2 text-xs text-gray-500">{task.benefit} · {task.duration} · {task.difficulty}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm">
                        {task.points} pts
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => isSubmitted ? undefined : status === 'in-progress'
                          ? handleSubmitTask(index, task.evidence)
                          : handleStartTask(index)}
                        disabled={isSubmitted}
                        className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700 disabled:cursor-default disabled:bg-gray-100 disabled:text-gray-500"
                      >
                        {isSubmitted && <CheckCircle2 className="h-4 w-4" />}
                        {isSubmitted ? 'Pending verification' : status === 'in-progress' ? 'Submit evidence' : 'Start task'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
                        {task.carbonSaved}
                      </span>
                    </td>
                  </tr>
                    );
                  })()
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {ecoTasks.map((task, index) => (
              (() => {
                const status = progress.taskStatuses[index] ?? 'not-started';
                const isSubmitted = status === 'pending-verification';
                return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-emerald-400"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <task.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 leading-tight">{task.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{task.description}</p>
                <p className="mb-4 text-xs text-gray-500">{task.benefit} · {task.duration} · {task.difficulty}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm">
                    {task.points} pts
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm">
                    {task.carbonSaved} CO₂
                  </span>
                </div>
                <button
                  onClick={() => isSubmitted ? undefined : status === 'in-progress'
                    ? handleSubmitTask(index, task.evidence)
                    : handleStartTask(index)}
                  disabled={isSubmitted}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700 disabled:bg-gray-100 disabled:text-gray-500"
                >
                  {isSubmitted && <CheckCircle2 className="h-4 w-4" />}
                  {isSubmitted ? 'Pending verification' : status === 'in-progress' ? 'Submit evidence' : 'Start task'}
                </button>
              </div>
                );
              })()
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Quiz Questions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-blue-500 p-3 rounded-xl">
              <HelpCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Test Your Eco-Knowledge</h2>
              <p className="text-gray-600">Tap a question to reveal the answer choices. Select one to check your work.</p>
            </div>
          </div>

          <div className="space-y-3">
            {quizQuestions.map((item, qIndex) => {
              const isOpen = openQuestion === qIndex;
              const selected = selectedAnswers[qIndex];
              const hasAnswered = selected !== undefined;
              const showFeedback = quizSubmitted && hasAnswered;

              return (
                <div
                  key={qIndex}
                  className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleQuestion(qIndex)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-emerald-50/50 transition-colors duration-150"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-semibold text-sm">
                        {qIndex + 1}
                      </span>
                      <span className="font-medium text-gray-900">{item.question}</span>
                    </div>
                    <ChevronDown
                      className={`flex-shrink-0 h-5 w-5 text-gray-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1">
                      <div className="space-y-2 ml-11">
                        {item.options.map((option, oIndex) => {
                          const isCorrect = oIndex === item.correctIndex;
                          const isSelected = selected === oIndex;

                          let optionClasses = 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50';
                          if (showFeedback) {
                            if (isCorrect) {
                              optionClasses = 'border-emerald-500 bg-emerald-50';
                            } else if (isSelected) {
                              optionClasses = 'border-red-400 bg-red-50';
                            } else {
                              optionClasses = 'border-gray-200 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={oIndex}
                              onClick={() => handleAnswerSelect(qIndex, oIndex)}
                              disabled={quizSubmitted}
                              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 text-left transition-all duration-150 ${optionClasses} ${
                                quizSubmitted ? 'cursor-default' : 'cursor-pointer'
                              }`}
                            >
                              <span className="text-gray-700 text-sm">{option}</span>
                              {showFeedback && isCorrect && (
                                <span className="flex-shrink-0 ml-2 text-emerald-600 font-semibold text-sm">Correct</span>
                              )}
                              {showFeedback && isSelected && !isCorrect && (
                                <span className="flex-shrink-0 ml-2 text-red-500 font-semibold text-sm">Your pick</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showFeedback && (
                        <div className="ml-11 mt-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
                          <p className="text-sm text-blue-800 leading-relaxed">
                            <span className="font-semibold">Explanation: </span>
                            {item.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quiz Score and Submit Section */}
          {quizScore && quizSubmitted ? (
            <div className="mt-8 space-y-6">
              {/* Results Summary */}
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white shadow-xl">
                <div className="text-center">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                  <h3 className="text-3xl font-bold mb-2">Quiz Completed!</h3>
                  
                  {/* Detailed Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 max-w-2xl mx-auto">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl font-bold">{quizScore.total}</div>
                      <div className="text-sm text-blue-100">Total Questions</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl font-bold text-green-300">{quizScore.correct}</div>
                      <div className="text-sm text-blue-100">Correct</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl font-bold text-red-300">{quizScore.total - quizScore.correct - (quizScore.total - Object.keys(selectedAnswers).length)}</div>
                      <div className="text-sm text-blue-100">Incorrect</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-3xl font-bold text-gray-300">{quizScore.total - Object.keys(selectedAnswers).length}</div>
                      <div className="text-sm text-blue-100">Unanswered</div>
                    </div>
                  </div>

                  {/* Score and Percentage */}
                  <div className="mb-6">
                    <p className="text-4xl font-bold mb-2">{Math.round((quizScore.correct / quizScore.total) * 100)}%</p>
                    <p className="text-xl mb-4">
                      Final Score: {quizScore.correct}/{quizScore.total}
                    </p>
                    <p className="text-lg text-blue-100">
                      {getQuizFeedback(Math.round((quizScore.correct / quizScore.total) * 100))}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleRestartQuiz}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
                    >
                      <RotateCcw className="h-5 w-5" />
                      Try Again
                    </button>
                    <Link
                      to="/dashboard"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                    >
                      View Dashboard
                      <Target className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Detailed Answer Review */}
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Answer Review</h4>
                <p className="text-gray-600 mb-6">Review all questions with correct answers and explanations:</p>
                
                <div className="space-y-4">
                  {quizQuestions.map((item, qIndex) => {
                    const selected = selectedAnswers[qIndex];
                    const isCorrect = selected === item.correctIndex;
                    const wasAnswered = selected !== undefined;

                    return (
                      <div key={qIndex} className={`rounded-xl border-2 p-4 ${
                        !wasAnswered ? 'border-gray-300 bg-gray-50' :
                        isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
                      }`}>
                        <div className="flex items-start gap-3 mb-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-semibold text-sm mt-1">
                            {qIndex + 1}
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 mb-2">{item.question}</p>
                            
                            {wasAnswered ? (
                              <>
                                <p className="text-sm text-gray-700 mb-1">
                                  <span className="font-medium">Your answer:</span> {item.options[selected]}
                                  {isCorrect ? (
                                    <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>
                                  ) : (
                                    <span className="ml-2 text-red-600 font-semibold">✗ Incorrect</span>
                                  )}
                                </p>
                                {!isCorrect && (
                                  <p className="text-sm text-green-700 font-medium mb-1">
                                    Correct answer: {item.options[item.correctIndex]}
                                  </p>
                                )}
                              </>
                            ) : (
                              <p className="text-sm text-gray-600 mb-1">
                                <span className="font-medium">Not answered</span>
                                <span className="ml-2">→ Correct answer: {item.options[item.correctIndex]}</span>
                              </p>
                            )}
                            
                            <div className="mt-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
                              <p className="text-sm text-blue-900">
                                <span className="font-semibold">Explanation:</span> {item.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ready to check your answers?</h3>
                  <p className="text-gray-600 mt-1">
                    {Object.keys(selectedAnswers).length} of {quizQuestions.length} questions answered
                  </p>
                </div>
                <button
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(selectedAnswers).length === 0}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Submit Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer note */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">EcoLearn</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Every eco-task completed and every question answered brings us closer to a sustainable future.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default EcoTasks;
