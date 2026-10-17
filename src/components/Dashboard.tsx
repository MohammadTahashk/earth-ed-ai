import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Leaf,
  Target,
  Trophy,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { readDemoProgress, getQuizStats } from '../lib/demoProgress';

const Dashboard = () => {
  const { user } = useAuth();
  const [progress] = useState(() => readDemoProgress());
  const quizStats = getQuizStats(progress);
  const displayName = user?.fullName || user?.email?.split('@')[0] || 'Eco learner';
  const demoStats = [
    { label: 'Eco-points', value: String(progress.points), detail: 'Local demo progress', icon: Trophy, color: 'text-orange-600 bg-orange-50' },
    { label: 'Missions completed', value: String(progress.completedTaskIds.length), detail: 'of 10 available', icon: Target, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Quiz score', value: quizStats.hasAttempts ? `${quizStats.bestScore}%` : 'Not taken', detail: quizStats.hasAttempts ? `Best of ${quizStats.attempts} ${quizStats.attempts === 1 ? 'attempt' : 'attempts'}` : 'Take the quiz to learn', icon: BookOpen, color: 'text-blue-600 bg-blue-50' },
    { label: 'CO₂ saved', value: `${progress.carbonSaved.toFixed(1)} kg`, detail: 'Estimated local impact', icon: Leaf, color: 'text-teal-600 bg-teal-50' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-lg sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Student dashboard
              </p>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Welcome back, {displayName}
              </h1>
              <p className="mt-2 max-w-2xl text-gray-600">
                Continue learning, take practical action, and build your environmental impact one step at a time.
              </p>
            </div>
            <Link
              to="/eco-tasks"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 font-semibold text-white transition hover:from-emerald-600 hover:to-teal-700"
            >
              Explore eco-tasks
              <Target className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          <strong>Local demo mode:</strong> progress is saved only in this browser and is not production account data.
        </div>

        <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Progress summary">
          {demoStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-md">
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="mt-1 text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-1 text-xs text-gray-500">{stat.detail}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="rounded-3xl bg-white p-6 shadow-lg lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your learning journey</h2>
                <p className="mt-1 text-gray-600">A simple preview of your environmental progress.</p>
              </div>
              <BarChart3 className="h-7 w-7 text-emerald-500" />
            </div>
            <div className="space-y-5">
              {[
                ['Eco-task participation', Math.round((progress.completedTaskIds.length / 10) * 100), `${progress.completedTaskIds.length} of 10 tasks completed`],
                ['Quiz learning', quizStats.hasAttempts ? quizStats.bestScore : 0, quizStats.hasAttempts ? `Best score: ${quizStats.bestScore}%` : 'Take the quiz in the learning hub'],
                ['Impact tracking', progress.carbonSaved > 0 ? 25 : 0, 'Build a consistent action streak'],
              ].map(([label, percent, detail]) => (
                <div key={label as string}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-800">{label}</span>
                    <span className="text-gray-500">{percent}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-gray-100">
                    <div className="h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" style={{ width: `${percent}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-lg">
            <Award className="mb-5 h-9 w-9 text-emerald-100" />
            <h2 className="text-2xl font-bold">Next achievement</h2>
            <p className="mt-2 text-emerald-50">
            Complete {Math.max(0, 5 - progress.completedTaskIds.length)} more eco-tasks to reach the Green Starter milestone.
            </p>
            <div className="mt-6 h-3 rounded-full bg-white/20">
              <div className="h-3 rounded-full bg-white" style={{ width: `${Math.min(100, (progress.completedTaskIds.length / 5) * 100)}%` }} />
            </div>
            <p className="mt-2 text-sm text-emerald-100">{progress.completedTaskIds.length} of 5 tasks completed</p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
              <span className="text-sm">Keep your momentum going with one small action today.</span>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Ready for your next action?</h2>
              <p className="mt-1 text-gray-600">Browse practical sustainability challenges and test your knowledge.</p>
            </div>
            <Link
              to="/eco-tasks"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-500 px-5 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Open learning hub
              <BookOpen className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
