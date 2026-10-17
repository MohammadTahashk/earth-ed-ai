import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Leaf, Users, Award } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-teal-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-emerald-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Leaf className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-emerald-600 font-medium">Sustainable Education Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empower Students to
              <span className="text-emerald-600 block">Change the World</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Join thousands of students, teachers, and schools in our gamified eco-education platform. 
              Complete sustainability challenges, earn EcoCoins, and make a real environmental impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/signup" className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                <span>Start Your Eco Journey</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-200">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">50K+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">2M+</div>
                <div className="text-sm text-gray-600">Tasks Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">1.5K</div>
                <div className="text-sm text-gray-600">Schools</div>
              </div>
            </div>
          </div>

          {/* Hero illustration/animation */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Join Your Class</h3>
                    <p className="text-gray-600 text-sm">Connect with classmates on eco-missions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Complete Eco-Tasks</h3>
                    <p className="text-gray-600 text-sm">Daily challenges that make a difference</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Earn Rewards</h3>
                    <p className="text-gray-600 text-sm">EcoCoins, badges, and real-world prizes</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border-l-4 border-emerald-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-emerald-800">Your Impact Today</p>
                      <p className="text-sm text-emerald-600">3 tasks • 150 EcoCoins earned</p>
                    </div>
                    <div className="text-2xl">🌱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;