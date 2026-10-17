import React from 'react';
import { BookOpen, Gamepad2, Heart, Lightbulb, Users, Zap, Camera, TrendingUp, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Reimagining Environmental Education
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're transforming how the world learns about sustainability – moving from passive consumption 
          to active engagement, from individual actions to community impact.
        </p>
      </div>

      {/* The Problem */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 lg:p-12 mb-16 border border-red-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-red-100 p-3 rounded-xl w-fit mb-6">
              <BookOpen className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem with Traditional Eco-Education</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Environmental education has been stuck in a rut for decades. Students sit through endless lectures 
                about climate change, memorize statistics about plastic pollution, and watch documentaries that leave 
                them feeling overwhelmed and powerless.
              </p>
              <p>
                The result? Despite being the most environmentally aware generation in history, young people struggle 
                to translate knowledge into consistent action. They know what they should do, but traditional education 
                fails to provide the motivation, community support, and practical framework needed for lasting change.
              </p>
              <p>
                Meanwhile, institutions pour resources into sustainability programs that produce impressive reports 
                but often fail to create meaningful behavioral shifts in their communities.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Approach Issues:</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <span className="text-gray-700">Theory-heavy content without practical application</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <span className="text-gray-700">Overwhelming doom-and-gloom messaging</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <span className="text-gray-700">Lack of community and peer motivation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <span className="text-gray-700">No system for building sustainable habits</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <span className="text-gray-700">Difficulty measuring real-world impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 mb-16 border border-emerald-100">
        <div className="text-center mb-12">
          <div className="bg-emerald-100 p-3 rounded-xl w-fit mx-auto mb-6">
            <Lightbulb className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Enter EarthEd: Gamification Meets Sustainability</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We've cracked the code on environmental engagement by borrowing the most addictive elements from 
            gaming and social media, then applying them to meaningful sustainability actions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-xl w-fit mb-4">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Gamified Missions</h3>
            <p className="text-gray-600">Turn boring eco-tasks into exciting challenges with points, levels, and rewards</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-xl w-fit mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Streak Building</h3>
            <p className="text-gray-600">Duolingo-style habit formation that makes consistency addictive</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-xl w-fit mb-4">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Social Proof</h3>
            <p className="text-gray-600">Photo verification and community sharing for authenticity and inspiration</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-3 rounded-xl w-fit mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Impact Analytics</h3>
            <p className="text-gray-600">Real-time tracking of environmental impact to show tangible results</p>
          </div>
        </div>
      </div>

      {/* Mission Example */}
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl mb-16 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How EarthEd Works: A Mission in Action</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">🌳 Today's Mission: Park Visit Challenge</h3>
            <p className="text-xl opacity-90 mb-4">
              Take a 10-minute walk to your nearest park and capture a photo of something in nature that inspires you.
            </p>
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-bold mb-2">💡 Fun Fact:</h4>
              <p>A 10-minute walk in nature can boost your mood by 71% and burn approximately 50 calories. 
              Plus, spending time in green spaces has been shown to reduce stress hormones and improve focus!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-4">
                <div className="text-2xl">📍</div>
              </div>
              <h4 className="font-bold text-lg mb-2">Step 1: Explore</h4>
              <p className="text-gray-600">Head to your local park or green space. Use our map feature to discover nearby nature spots you might not know about.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-4">
                <div className="text-2xl">📸</div>
              </div>
              <h4 className="font-bold text-lg mb-2">Step 2: Capture</h4>
              <p className="text-gray-600">Take a photo of something that catches your eye – a unique tree, colorful flowers, or interesting wildlife.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                <div className="text-2xl">🎉</div>
              </div>
              <h4 className="font-bold text-lg mb-2">Step 3: Share</h4>
              <p className="text-gray-600">Upload your snap to the community wall, earn points, and inspire others with your nature discovery.</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-6">
            <h4 className="font-bold text-xl mb-4 text-center">Mission Impact Results</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">+50 pts</div>
                <div className="text-sm text-gray-600">Mission Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">1 day</div>
                <div className="text-sm text-gray-600">Streak Extended</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">50 cal</div>
                <div className="text-sm text-gray-600">Calories Burned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">+1</div>
                <div className="text-sm text-gray-600">Community Inspiration</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Story: Born from Frustration, Driven by Hope</h2>
          <div className="text-lg leading-relaxed space-y-6">
            <p>
              EarthEd was born when our founders, both environmental science educators, realized that despite having 
              access to more environmental information than ever before, their students were struggling to take 
              meaningful action. Traditional curricula were producing environmentally aware but environmentally 
              inactive graduates.
            </p>
            <p>
              The breakthrough came when they noticed how engaged students were with social media and mobile games. 
              What if the same psychological principles that made people check Instagram 100 times a day or maintain 
              500-day Duolingo streaks could be applied to environmental action?
            </p>
            <p>
              After months of research into behavioral psychology, gamification theory, and sustainability education, 
              EarthEd was born. We launched with a simple pilot program at three local schools, and the results 
              exceeded our wildest expectations: 94% of participants maintained their eco-habits beyond the program, 
              and environmental engagement scores increased by an average of 340%.
            </p>
            <p>
              Today, EarthEd is used by hundreds of institutions worldwide, from elementary schools to universities 
              to corporate sustainability programs. But our mission remains the same: making environmental action 
              so engaging, social, and rewarding that it becomes an integral part of daily life.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">2019</div>
              <div className="text-white/80">Founded</div>
            </div>
            <ArrowRight className="h-6 w-6 text-white/60 transform rotate-90 sm:rotate-0" />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">450+</div>
              <div className="text-white/80">Partner Institutions</div>
            </div>
            <ArrowRight className="h-6 w-6 text-white/60 transform rotate-90 sm:rotate-0" />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">15K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Action Over Awareness</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe the world has enough environmental awareness. What we need is a system that transforms 
              that awareness into consistent, measurable action.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community-Driven Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Individual action is important, but collective action changes the world. We build communities 
              that amplify environmental impact through collaboration and mutual inspiration.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-4 rounded-2xl w-fit mx-auto mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Joy in Sustainability</h3>
            <p className="text-gray-600 leading-relaxed">
              Environmental action shouldn't feel like sacrifice or burden. We make sustainability joyful, 
              social, and deeply rewarding – because that's how lasting change happens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;