import React, { useState } from 'react';
import { Target, Zap, Camera, Users, Trophy, BarChart3, MapPin, Calendar, Award, Gamepad2, Heart, Share2 } from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('missions');

  const features = {
    missions: {
      title: 'Gamified Eco-Missions',
      icon: Target,
      color: 'from-emerald-500 to-green-600',
      description: 'Transform environmental actions into engaging challenges',
      details: [
        'Daily personalized missions based on your location and interests',
        'Progressive difficulty levels that grow with your expertise',
        'Seasonal challenges that align with environmental awareness campaigns',
        'Collaborative missions that require teamwork to complete',
        'Educational content woven seamlessly into each challenge'
      ],
      examples: [
        {
          title: 'Plastic-Free Lunch Challenge',
          description: 'Pack a zero-waste lunch and share your creative solutions',
          points: '75 points',
          difficulty: 'Beginner'
        },
        {
          title: 'Urban Wildlife Photography',
          description: 'Document local biodiversity in your neighborhood',
          points: '100 points',
          difficulty: 'Intermediate'
        },
        {
          title: 'Community Garden Builder',
          description: 'Start or contribute to a local community garden project',
          points: '250 points',
          difficulty: 'Advanced'
        }
      ]
    },
    streaks: {
      title: 'Habit-Building Streaks',
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      description: 'Build lasting environmental habits through consistency',
      details: [
        'Duolingo-style streak system that makes consistency addictive',
        'Streak shields to protect against missed days',
        'Multiple streak categories: daily actions, weekly challenges, monthly goals',
        'Community streak challenges and leaderboards',
        'Psychological insights and tips to maintain long-term habits'
      ],
      examples: [
        {
          title: '30-Day Water Bottle Streak',
          description: 'Use a reusable water bottle every day',
          current: '23/30 days',
          difficulty: 'Beginner'
        },
        {
          title: '100-Day Commute Challenge',
          description: 'Choose sustainable transportation daily',
          current: '78/100 days',
          difficulty: 'Intermediate'
        },
        {
          title: '365-Day Zero Waste',
          description: 'Minimize waste in daily activities for a full year',
          current: '124/365 days',
          difficulty: 'Expert'
        }
      ]
    },
    snaps: {
      title: 'Social Proof Snaps',
      icon: Camera,
      color: 'from-teal-500 to-cyan-600',
      description: 'Verify actions and inspire community through visual storytelling',
      details: [
        'Photo and video verification for mission authenticity',
        'AI-powered content validation to ensure legitimate submissions',
        'Creative challenges that showcase environmental creativity',
        'Before-and-after transformation documentation',
        'Community voting and appreciation systems'
      ],
      examples: [
        {
          title: 'Reusable Bag Gallery',
          description: 'Creative ways to use and decorate reusable shopping bags',
          engagement: '1,247 likes',
          difficulty: 'Community'
        },
        {
          title: 'Home Energy Audit',
          description: 'Before and after photos of home energy improvements',
          engagement: '892 likes',
          difficulty: 'DIY Project'
        },
        {
          title: 'Local Cleanup Heroes',
          description: 'Document community cleanup efforts and their impact',
          engagement: '2,156 likes',
          difficulty: 'Group Activity'
        }
      ]
    },
    community: {
      title: 'Community Wall',
      icon: Users,
      color: 'from-violet-500 to-purple-600',
      description: 'Connect, inspire, and learn from fellow eco-champions',
      details: [
        'Real-time feed of community achievements and insights',
        'Peer-to-peer encouragement and support systems',
        'Expert-led discussions and Q&A sessions',
        'Local community groups based on geographic location',
        'Mentorship programs connecting experienced eco-activists with newcomers'
      ],
      examples: [
        {
          title: 'Campus Sustainability Network',
          description: 'University students sharing dorm-room eco-hacks',
          members: '3,421 members',
          difficulty: 'Student Life'
        },
        {
          title: 'Corporate Green Teams',
          description: 'Workplace sustainability initiatives and competitions',
          members: '1,789 members',
          difficulty: 'Professional'
        },
        {
          title: 'Neighborhood Champions',
          description: 'Local residents organizing community environmental projects',
          members: '856 members',
          difficulty: 'Community'
        }
      ]
    },
    analytics: {
      title: 'Impact Analytics',
      icon: BarChart3,
      color: 'from-blue-500 to-indigo-600',
      description: 'Track and visualize your environmental impact',
      details: [
        'Real-time tracking of environmental metrics and improvements',
        'Personalized impact reports and milestone celebrations',
        'Comparative analytics showing individual vs. community impact',
        'Integration with smart home devices and apps for automatic tracking',
        'Predictive modeling to show potential future impact'
      ],
      examples: [
        {
          title: 'Carbon Footprint Reduction',
          description: 'Track daily carbon savings from sustainable choices',
          metric: '-847 lbs CO2',
          difficulty: 'Automatic'
        },
        {
          title: 'Waste Diversion',
          description: 'Monitor plastic, paper, and organic waste reduction',
          metric: '156 lbs diverted',
          difficulty: 'Manual Entry'
        },
        {
          title: 'Energy Conservation',
          description: 'Measure home and transportation energy savings',
          metric: '1,245 kWh saved',
          difficulty: 'Smart Integration'
        }
      ]
    },
    competitions: {
      title: 'Competitions & Challenges',
      icon: Trophy,
      color: 'from-rose-500 to-pink-600',
      description: 'Team up and compete in large-scale environmental challenges',
      details: [
        'School vs. school sustainability competitions',
        'Corporate team challenges with real prizes and recognition',
        'Global campaigns aligned with environmental awareness events',
        'Local community competitions that address regional environmental issues',
        'Achievement badges and certificates for major milestones'
      ],
      examples: [
        {
          title: 'Green Schools Championship',
          description: 'Annual competition between educational institutions',
          participants: '127 schools',
          difficulty: 'Institutional'
        },
        {
          title: 'Zero Waste Week Challenge',
          description: 'Community-wide waste reduction competition',
          participants: '15,432 people',
          difficulty: 'Community'
        },
        {
          title: 'Corporate Climate Action',
          description: 'Inter-company sustainability competition',
          participants: '89 companies',
          difficulty: 'Professional'
        }
      ]
    }
  };

  const tabs = [
    { id: 'missions', label: 'Missions', icon: Target },
    { id: 'streaks', label: 'Streaks', icon: Zap },
    { id: 'snaps', label: 'Snaps', icon: Camera },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'competitions', label: 'Competitions', icon: Trophy }
  ];

  const currentFeature = features[activeTab as keyof typeof features];
  const IconComponent = currentFeature.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Features That Transform Behavior
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how EarthEd combines cutting-edge behavioral psychology with environmental science 
          to create the most engaging sustainability platform ever built.
        </p>
      </div>

      {/* Feature Tabs */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
        {/* Tab Navigation */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-6 py-4 font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Feature Description */}
            <div>
              <div className={`bg-gradient-to-r ${currentFeature.color} p-4 rounded-2xl w-fit mb-6`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentFeature.title}</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{currentFeature.description}</p>
              
              <div className="space-y-4">
                {currentFeature.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-emerald-100 p-1 rounded-full mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Examples */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Examples in Action</h3>
              {currentFeature.examples.map((example, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{example.title}</h4>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {example.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{example.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {example.points || example.current || example.engagement || example.participants || example.metric}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-gray-400" />
                      <Share2 className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Additional Platform Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: 'Location-Based Missions',
              description: 'Discover eco-opportunities in your specific geographic area with missions tailored to local environmental challenges and resources.',
              color: 'from-green-500 to-emerald-600'
            },
            {
              icon: Calendar,
              title: 'Seasonal Campaigns',
              description: 'Participate in time-sensitive environmental campaigns aligned with Earth Day, Climate Week, and other global sustainability events.',
              color: 'from-blue-500 to-cyan-600'
            },
            {
              icon: Award,
              title: 'Digital Badges & Certificates',
              description: 'Earn verifiable digital credentials that showcase your environmental achievements to schools, employers, and communities.',
              color: 'from-purple-500 to-violet-600'
            },
            {
              icon: Gamepad2,
              title: 'AR Challenge Mode',
              description: 'Use augmented reality to identify environmental opportunities and challenges in your real-world surroundings.',
              color: 'from-orange-500 to-red-600'
            },
            {
              icon: Heart,
              title: 'Wellness Integration',
              description: 'Track how environmental actions improve your physical and mental health, creating positive feedback loops.',
              color: 'from-pink-500 to-rose-600'
            },
            {
              icon: Share2,
              title: 'Social Media Integration',
              description: 'Seamlessly share your environmental achievements across platforms while maintaining authentic community engagement.',
              color: 'from-indigo-500 to-blue-600'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl w-fit mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Architecture */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Built for Scale, Designed for Impact</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            EarthEd's robust platform architecture supports institutions of all sizes, from individual classrooms 
            to university-wide sustainability initiatives and corporate environmental programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-2xl w-fit mx-auto mb-4">
              <div className="text-2xl">🏫</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Educational Institutions</h3>
            <p className="text-white/70">Curriculum integration, progress tracking, and institutional reporting</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-2xl w-fit mx-auto mb-4">
              <div className="text-2xl">🏢</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Corporate Programs</h3>
            <p className="text-white/70">Employee engagement, sustainability metrics, and CSR reporting</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-2xl w-fit mx-auto mb-4">
              <div className="text-2xl">🌍</div>
            </div>
            <h3 className="text-xl font-bold mb-2">NGO & Activist Groups</h3>
            <p className="text-white/70">Campaign management, volunteer coordination, and impact measurement</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-2xl w-fit mx-auto mb-4">
              <div className="text-2xl">🏘️</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Community Organizations</h3>
            <p className="text-white/70">Local engagement, neighborhood challenges, and grassroots mobilization</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/10 rounded-2xl p-6">
            <div>
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-white/70 text-sm">Uptime</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-2xl font-bold">50M+</div>
              <div className="text-white/70 text-sm">Data Points</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-2xl font-bold">GDPR</div>
              <div className="text-white/70 text-sm">Compliant</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-white/70 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;