import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Users, TrendingUp, Gift, Zap, Target } from 'lucide-react';

const FeaturesCarousel = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Target,
      title: 'Eco-Tasks & Challenges',
      description: 'Engage in daily, weekly, and monthly sustainability challenges with AI-powered proof verification.',
      details: ['Daily eco-missions', 'Weekly team challenges', 'Monthly sustainability projects', 'AI proof-check system'],
      color: 'emerald'
    },
    {
      icon: Gift,
      title: 'Carbon Wallet & Rewards',
      description: 'Earn EcoCoins for completed tasks and redeem them for real-world rewards or donate to environmental causes.',
      details: ['Earn EcoCoins for actions', 'Redeem rewards catalog', 'Donate to eco-projects', 'Track carbon impact'],
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Interactive Leaderboards',
      description: 'Compete with classmates and schools worldwide with seasonal tournaments and filtered rankings.',
      details: ['Class competitions', 'School-wide rankings', 'Seasonal tournaments', 'Achievement tracking'],
      color: 'orange'
    },
    {
      icon: BookOpen,
      title: 'Learning Hub',
      description: 'Access interactive quizzes, educational videos, eco-games, and earn certificates for completed courses.',
      details: ['Interactive quizzes', 'Educational videos', 'Eco-themed games', 'Course certificates'],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Social Community',
      description: 'Connect with peers through eco-challenges, share on the community blog, and engage with likes and comments.',
      details: ['Peer challenges', 'Community eco-blog', 'Social interactions', 'Environmental discussions'],
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Track your environmental impact with detailed analytics and monthly sustainability reports.',
      details: ['Personal carbon footprint', 'Monthly impact reports', 'Progress tracking', 'Goal setting'],
      color: 'teal'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: 'bg-emerald-500 text-emerald-600 bg-emerald-50',
      blue: 'bg-blue-500 text-blue-600 bg-blue-50',
      orange: 'bg-orange-500 text-orange-600 bg-orange-50',
      purple: 'bg-purple-500 text-purple-600 bg-purple-50',
      green: 'bg-green-500 text-green-600 bg-green-50',
      teal: 'bg-teal-500 text-teal-600 bg-teal-50'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for <span className="text-emerald-600">Sustainable Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive platform engages students, empowers teachers, and creates lasting environmental impact.
          </p>
        </div>

        <div className="relative">
          {/* Feature showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getColorClasses(features[activeFeature].color).split(' ')[0]}`}>
                  {React.createElement(features[activeFeature].icon, { className: "h-8 w-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{features[activeFeature].title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-emerald-600 font-medium">Live Feature</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {features[activeFeature].description}
              </p>

              <div className="space-y-3">
                {features[activeFeature].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-all duration-200 transform hover:scale-105">
                Learn More
              </button>
            </div>

            <div className="relative">
              <div className={`${getColorClasses(features[activeFeature].color).split(' ').slice(2).join(' ')} rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-800">Feature Preview</h4>
                    {React.createElement(features[activeFeature].icon, { className: `h-6 w-6 ${getColorClasses(features[activeFeature].color).split(' ')[1]}` })}
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">Progress Today</span>
                      <span className="text-emerald-600 font-bold">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-4/5 transition-all duration-1000"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-emerald-600">+25</div>
                        <div className="text-xs text-gray-600">EcoCoins</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">3/4</div>
                        <div className="text-xs text-gray-600">Tasks Done</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setActiveFeature((prev) => (prev - 1 + features.length) % features.length)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeFeature ? 'bg-emerald-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveFeature((prev) => (prev + 1) % features.length)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;