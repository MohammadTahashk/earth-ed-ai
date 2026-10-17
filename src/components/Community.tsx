import React from 'react';
import { Users, Heart, MessageCircle, Share2, Camera, Trophy, Zap, Star, MapPin, Calendar } from 'lucide-react';

const Community: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'High School Student',
      location: 'Seattle, WA',
      quote: 'EarthEd turned my environmental anxiety into environmental action. Seeing my friends\' snaps every day keeps me motivated, and I\'ve maintained my reusable water bottle streak for 127 days!',
      avatar: '👩‍🎓',
      streaks: 127,
      impact: '89 plastic bottles saved'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'College Environmental Club President',
      location: 'Austin, TX',
      quote: 'Our campus sustainability engagement increased 340% after implementing EarthEd. Students are actually competing to see who can reduce their carbon footprint the most.',
      avatar: '👨‍🎓',
      streaks: 89,
      impact: 'Led 234 students to action'
    },
    {
      name: 'Dr. Emily Foster',
      role: 'Environmental Science Teacher',
      location: 'Portland, OR',
      quote: 'For the first time in 15 years of teaching, my students are asking for MORE environmental challenges. EarthEd has completely transformed my classroom dynamic.',
      avatar: '👩‍🏫',
      streaks: 156,
      impact: '12 class competitions organized'
    },
    {
      name: 'James Thompson',
      role: 'Corporate Sustainability Manager',
      location: 'New York, NY',
      quote: 'EarthEd helped us achieve our employee engagement goals 6 months ahead of schedule. The gamification aspect made sustainability fun instead of preachy.',
      avatar: '👨‍💼',
      streaks: 203,
      impact: '450 employees engaged'
    }
  ];

  const communityStats = [
    {
      icon: Users,
      stat: '15,247',
      label: 'Active Community Members',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Camera,
      stat: '127K+',
      label: 'Snaps Shared This Month',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Heart,
      stat: '2.3M',
      label: 'Community Encouragements',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: Trophy,
      stat: '1,456',
      label: 'Active Team Challenges',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const recentActivity = [
    {
      user: 'GreenGuru23',
      action: 'completed the "Bike to Work Week" challenge',
      time: '2 minutes ago',
      likes: 23,
      avatar: '🚴‍♀️'
    },
    {
      user: 'EcoWarriorMia',
      action: 'shared an amazing composting setup snap',
      time: '15 minutes ago',
      likes: 89,
      avatar: '♻️'
    },
    {
      user: 'SustainableSteve',
      action: 'reached a 200-day streak milestone!',
      time: '1 hour ago',
      likes: 156,
      avatar: '🔥'
    },
    {
      user: 'ClimateChampion',
      action: 'organized a neighborhood cleanup mission',
      time: '3 hours ago',
      likes: 234,
      avatar: '🧹'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          A Community That Changes Everything
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Individual actions become collective impact when supported by a thriving community of eco-champions. 
          Discover how peer encouragement, shared experiences, and collaborative challenges amplify environmental change.
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {communityStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl w-fit mx-auto mb-4`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.stat}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* The Power of Peer Motivation */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 mb-16 border border-emerald-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Science of Social Environmental Action
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Research consistently shows that environmental behavior change is most successful when supported by 
                social networks and peer encouragement. EarthEd harnesses this psychological principle by creating 
                a supportive ecosystem where every action is witnessed, celebrated, and amplified by the community.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When learners share their "snaps" – photos and videos of their environmental actions – they create 
                authentic proof of their commitment while inspiring others to take similar steps. This isn't about 
                virtue signaling; it's about creating positive peer pressure that makes sustainable choices feel 
                normal, social, and rewarding.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Community Impact Multipliers:</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-gray-700">Users in active communities are 73% more likely to maintain long-term habits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full" />
                    <span className="text-gray-700">Peer encouragement increases mission completion rates by 156%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                    <span className="text-gray-700">Community challenges generate 4x more environmental impact than individual goals</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Real Community Story</h3>
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-6 mb-6">
                <p className="text-gray-800 font-medium mb-2">
                  "The Metal Bottle Revolution at Jefferson Middle School"
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  When 12-year-old Alex posted a snap of his new metal water bottle, it sparked a campus-wide movement. 
                  Within three weeks, 89% of students had switched to reusable bottles, collectively preventing 
                  2,340 plastic bottles from entering the waste stream.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">347</div>
                  <div className="text-xs text-gray-600">Students Inspired</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-600">2,340</div>
                  <div className="text-xs text-gray-600">Bottles Prevented</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-600">21 days</div>
                  <div className="text-xs text-gray-600">To Full Adoption</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              From Individual Competition to Collective Action
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Unlike traditional environmental programs that focus on individual responsibility, EarthEd emphasizes 
              collaborative impact. Teams, schools, and organizations work together toward shared environmental goals, 
              creating a sense of collective efficacy that drives sustained engagement and measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Community Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Voices from Our Community
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-emerald-600 font-medium">{testimonial.role}</p>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">{testimonial.streaks} day streak</span>
                  </div>
                </div>
                <div className="text-sm text-emerald-600 font-medium">
                  {testimonial.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Community Feed */}
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Live Community Activity</h2>
          <div className="flex items-center space-x-2 text-emerald-600">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Live Updates</span>
          </div>
        </div>
        
        <div className="space-y-6">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-2xl">{activity.avatar}</div>
              <div className="flex-1">
                <p className="text-gray-800">
                  <span className="font-semibold text-emerald-600">{activity.user}</span> {activity.action}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span>{activity.time}</span>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-rose-500" />
                    <span>{activity.likes} likes</span>
                  </div>
                  <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg">
            Join the Conversation
          </button>
        </div>
      </div>

      {/* Community Features */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: Users,
            title: 'Local Groups',
            description: 'Connect with eco-champions in your area through location-based community groups.',
            features: ['Geographic matching', 'Local environmental challenges', 'Neighborhood cleanup coordination', 'Regional impact tracking']
          },
          {
            icon: Trophy,
            title: 'Team Challenges',
            description: 'Participate in collaborative missions that require teamwork and coordination.',
            features: ['Multi-participant missions', 'School vs school competitions', 'Corporate team building', 'Achievement sharing']
          },
          {
            icon: Star,
            title: 'Mentorship Network',
            description: 'Learn from experienced eco-activists and guide newcomers on their sustainability journey.',
            features: ['Peer mentorship matching', 'Expert-led discussions', 'Skill development workshops', 'Leadership opportunities']
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl w-fit mb-6">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
            <div className="space-y-2">
              {feature.features.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Our Growing Community?</h2>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Become part of a movement where individual actions create collective impact, where peer support amplifies 
          environmental change, and where sustainability becomes a shared adventure rather than a solo journey.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all shadow-xl">
            Join EarthEd Community
          </button>
          <div className="flex items-center space-x-4 text-white/70">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Free to start</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span className="text-sm">15K+ members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;