import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Leaf } from 'lucide-react';

const ImpactCounters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const counters = [
    {
      icon: Users,
      value: 52847,
      label: 'Active Students',
      suffix: '+',
      color: 'emerald',
      description: 'Students engaged daily'
    },
    {
      icon: Award,
      value: 2847392,
      label: 'Tasks Completed',
      suffix: '+',
      color: 'blue',
      description: 'Eco-challenges finished'
    },
    {
      icon: Leaf,
      value: 156789,
      label: 'CO₂ Saved (kg)',
      suffix: '',
      color: 'green',
      description: 'Carbon footprint reduced'
    },
    {
      icon: TrendingUp,
      value: 1847,
      label: 'Partner Schools',
      suffix: '+',
      color: 'orange',
      description: 'Educational institutions'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const CounterItem = ({ counter, index }: { counter: any; index: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = counter.value / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          setCount(Math.min(Math.round(stepValue * currentStep), counter.value));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isVisible, counter.value]);

    const getColorClasses = (color: string) => {
      const colorMap = {
        emerald: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        blue: 'text-blue-600 bg-blue-50 border-blue-200',
        green: 'text-green-600 bg-green-50 border-green-200',
        orange: 'text-orange-600 bg-orange-50 border-orange-200'
      };
      return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
    };

    const formatNumber = (num: number) => {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
      }
      return num.toLocaleString();
    };

    return (
      <div 
        className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 ${getColorClasses(counter.color)}`}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getColorClasses(counter.color)}`}>
            <counter.icon className={`h-8 w-8 ${getColorClasses(counter.color).split(' ')[0]}`} />
          </div>
          <div className="text-right">
            <div className={`text-3xl font-bold ${getColorClasses(counter.color).split(' ')[0]}`}>
              {formatNumber(count)}{counter.suffix}
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{counter.label}</h3>
        <p className="text-gray-600 text-sm">{counter.description}</p>
        
        {/* Progress indicator */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">Growth this month</span>
            <span className={`text-xs font-medium ${getColorClasses(counter.color).split(' ')[0]}`}>
              +{Math.floor(Math.random() * 15 + 5)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className={`h-1.5 rounded-full transition-all duration-1000 ${getColorClasses(counter.color).split(' ')[0].replace('text-', 'bg-')}`}
              style={{ 
                width: `${Math.floor(Math.random() * 40 + 60)}%`,
                transitionDelay: `${index * 300}ms`
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-green-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-600 font-medium">Live Impact Metrics</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Measuring Our <span className="text-emerald-600">Global Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the real-time impact of our eco-education platform as students worldwide take action for sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <CounterItem key={index} counter={counter} index={index} />
          ))}
        </div>

        {/* Additional impact visualization */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Environmental Impact Timeline
            </h3>
            <p className="text-gray-600">Track how our community's actions create positive change</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Today</h4>
              <p className="text-gray-600 text-sm">
                4,247 new eco-tasks completed<br />
                +2.3 tons CO₂ saved
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">This Week</h4>
              <p className="text-gray-600 text-sm">
                28,591 tasks completed<br />
                +15.7 tons CO₂ saved
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">This Month</h4>
              <p className="text-gray-600 text-sm">
                156,847 tasks completed<br />
                +89.2 tons CO₂ saved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;