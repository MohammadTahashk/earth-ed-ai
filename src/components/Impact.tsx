import React from 'react';
import { TrendingUp, Users, School, Building, Globe, Target, BarChart3, Leaf, Zap, Droplets, TreePine, ArrowRight } from 'lucide-react';

const Impact: React.FC = () => {
  const globalStats = [
    {
      icon: Users,
      stat: '15,247',
      label: 'Active Users Worldwide',
      growth: '+34% this month'
    },
    {
      icon: Droplets,
      stat: '2.5M',
      label: 'Plastic Bottles Saved',
      growth: '+89K this week'
    },
    {
      icon: TreePine,
      stat: '12,340',
      label: 'Trees Equivalent Impact',
      growth: '+1,200 this month'
    },
    {
      icon: Zap,
      stat: '450K',
      label: 'kWh Energy Saved',
      growth: '+23K this week'
    }
  ];

  const audienceImpacts = [
    {
      icon: Users,
      title: 'Students',
      subtitle: 'The Next Generation of Environmental Leaders',
      color: 'from-emerald-500 to-green-600',
      stats: [
        { label: 'Average engagement increase', value: '340%' },
        { label: 'Students maintaining 30+ day streaks', value: '78%' },
        { label: 'Report increased environmental awareness', value: '89%' }
      ],
      outcomes: [
        'Transform passive environmental awareness into active daily habits',
        'Develop practical sustainability skills through hands-on missions',
        'Build confidence as environmental advocates within their communities',
        'Create peer networks that amplify sustainable behaviors',
        'Gain verifiable credentials for college and career applications'
      ],
      caseStudy: {
        title: 'Roosevelt High School Transformation',
        description: 'After implementing EarthEd across their 1,200-student campus, Roosevelt High saw a 67% reduction in cafeteria waste, 450 students switching to reusable water bottles, and the formation of 12 student-led environmental clubs.',
        metrics: [
          { label: 'Waste Reduction', value: '67%' },
          { label: 'Students Engaged', value: '892/1200' },
          { label: 'Environmental Clubs Formed', value: '12' }
        ]
      }
    },
    {
      icon: Target,
      title: 'Activists',
      subtitle: 'Amplifying Grassroots Environmental Action',
      color: 'from-teal-500 to-cyan-600',
      stats: [
        { label: 'Campaign participation increase', value: '280%' },
        { label: 'Community organizers using EarthEd', value: '1,200+' },
        { label: 'Collective actions coordinated monthly', value: '3,400+' }
      ],
      outcomes: [
        'Organize and coordinate large-scale environmental campaigns with built-in engagement tools',
        'Transform abstract activism into concrete, measurable environmental actions',
        'Build sustainable movements through gamified participation and community building',
        'Track and report real-world impact to funding organizations and stakeholders',
        'Connect local actions to global environmental movements and initiatives'
      ],
      caseStudy: {
        title: 'Pacific Northwest Plastic-Free Campaign',
        description: 'Environmental activist Sarah Kim used EarthEd to coordinate a regional plastic-free initiative across 8 cities, engaging 2,300 participants and preventing an estimated 45,000 single-use plastic items from entering waste streams.',
        metrics: [
          { label: 'Cities Coordinated', value: '8' },
          { label: 'Participants Engaged', value: '2,300' },
          { label: 'Plastic Items Prevented', value: '45,000' }
        ]
      }
    },
    {
      icon: School,
      title: 'Educational Institutions',
      subtitle: 'Revolutionizing Environmental Curriculum',
      color: 'from-amber-500 to-orange-600',
      stats: [
        { label: 'Schools and universities using EarthEd', value: '450+' },
        { label: 'Average improvement in learning outcomes', value: '156%' },
        { label: 'Faculty reporting increased student engagement', value: '94%' }
      ],
      outcomes: [
        'Integrate environmental education seamlessly across multiple academic disciplines',
        'Provide real-time analytics and reporting for institutional sustainability goals',
        'Engage students in authentic environmental stewardship beyond the classroom',
        'Create campus-wide sustainability competitions that drive measurable behavior change',
        'Generate verifiable impact data for accreditation and sustainability reporting'
      ],
      caseStudy: {
        title: 'University of Colorado Boulder Campus Challenge',
        description: 'UCB integrated EarthEd into their campus sustainability program, engaging 8,400 students in a semester-long environmental challenge that resulted in measurable reductions in energy consumption, waste production, and carbon footprint.',
        metrics: [
          { label: 'Students Participated', value: '8,400' },
          { label: 'Energy Reduction', value: '23%' },
          { label: 'Campus Waste Diverted', value: '1,200 tons' }
        ]
      }
    },
    {
      icon: Building,
      title: 'Corporate & Organizations',
      subtitle: 'Employee Engagement for Sustainability',
      color: 'from-violet-500 to-purple-600',
      stats: [
        { label: 'Companies using EarthEd for CSR', value: '120+' },
        { label: 'Employee participation in sustainability programs', value: '73%' },
        { label: 'Average reduction in workplace environmental impact', value: '45%' }
      ],
      outcomes: [
        'Drive meaningful employee engagement in corporate sustainability initiatives',
        'Generate measurable data for ESG reporting and stakeholder communications',
        'Create team-building experiences around shared environmental goals',
        'Extend sustainability impact beyond the workplace into employees\' personal lives',
        'Build corporate culture that attracts and retains environmentally conscious talent'
      ],
      caseStudy: {
        title: 'TechFlow Inc. Employee Engagement Success',
        description: 'TechFlow implemented EarthEd across their 1,500-person workforce, resulting in 89% employee participation in sustainability challenges and measurable reductions in office energy consumption, waste generation, and commuter carbon emissions.',
        metrics: [
          { label: 'Employee Participation', value: '89%' },
          { label: 'Office Energy Savings', value: '34%' },
          { label: 'Commuter Emissions Reduction', value: '28%' }
        ]
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Measurable Impact Across Communities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          EarthEd doesn't just educate about environmental issues – it creates tangible, measurable change 
          across diverse communities, from individual students to global organizations.
        </p>
      </div>

      {/* Global Impact Stats */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 mb-16 border border-emerald-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Global Environmental Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {globalStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl w-fit mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.stat}</div>
              <div className="text-gray-600 mb-2">{stat.label}</div>
              <div className="text-sm text-emerald-600 font-medium flex items-center justify-center space-x-1">
                <TrendingUp className="h-3 w-3" />
                <span>{stat.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audience-Specific Impact */}
      <div className="space-y-16">
        {audienceImpacts.map((audience, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className={`bg-gradient-to-r ${audience.color} p-4 rounded-2xl`}>
                <audience.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{audience.title}</h2>
                <p className="text-xl text-gray-600">{audience.subtitle}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {audience.stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${audience.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes & Benefits</h3>
                <div className="space-y-4">
                  {audience.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`bg-gradient-to-r ${audience.color} p-1 rounded-full mt-1 flex-shrink-0`}>
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className={`bg-gradient-to-br ${audience.color} rounded-2xl p-8 text-white`}>
                <h3 className="text-xl font-bold mb-4">{audience.caseStudy.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{audience.caseStudy.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {audience.caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-white/80 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Platform Analytics Dashboard Preview */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white mt-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Real-Time Impact Analytics</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            EarthEd provides comprehensive analytics dashboards that allow institutions, educators, and 
            organizations to track environmental impact in real-time and generate reports for stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Carbon Footprint Tracking',
              description: 'Monitor CO2 reductions from transportation, energy, and consumption choices',
              icon: '🌱'
            },
            {
              title: 'Waste Diversion Metrics',
              description: 'Track plastic, paper, and organic waste prevented from entering landfills',
              icon: '♻️'
            },
            {
              title: 'Energy Conservation',
              description: 'Measure electricity and water savings from efficiency improvements',
              icon: '⚡'
            },
            {
              title: 'Community Engagement',
              description: 'Analyze participation rates, streak maintenance, and social interactions',
              icon: '📊'
            }
          ].map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">{metric.icon}</div>
              <h3 className="text-lg font-bold mb-3">{metric.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/10 rounded-2xl p-6">
            <BarChart3 className="h-6 w-6 text-white" />
            <span className="text-lg">Generate custom impact reports for accreditation, funding, and stakeholder communications</span>
          </div>
        </div>
      </div>

      {/* Scaling Global Impact */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Scaling Environmental Education Globally</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            EarthEd's mission extends beyond individual behavior change to systemic transformation of how 
            environmental education is delivered and measured worldwide. Through partnerships with educational 
            institutions, NGOs, and corporate sustainability programs, we're creating a global network of 
            environmentally engaged communities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 rounded-2xl p-6">
              <div className="text-2xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">Educational Integration</h3>
              <p className="text-gray-600 text-sm">Curriculum alignment with sustainability standards across K-12 and higher education</p>
            </div>
            <div className="bg-teal-50 rounded-2xl p-6">
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2">NGO Partnerships</h3>
              <p className="text-gray-600 text-sm">Amplifying grassroots environmental movements through structured engagement tools</p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-6">
              <div className="text-2xl mb-3">🏢</div>
              <h3 className="font-bold text-lg mb-2">Corporate Adoption</h3>
              <p className="text-gray-600 text-sm">Employee sustainability programs that drive measurable ESG outcomes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Measure Your Environmental Impact?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands of students, educators, activists, and organizations who are using EarthEd to create 
          measurable environmental change in their communities and beyond.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg flex items-center space-x-2">
            <span>Start Tracking Impact</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2 text-white/80">
            <Globe className="h-5 w-5" />
            <span>Join 15,000+ users in 45+ countries</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;