import React, { useState } from 'react';
import { User, GraduationCap, Users, Building, Target, ArrowRight, CheckCircle, Mail, MapPin, Calendar } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const roles = [
    {
      id: 'student',
      title: 'Students',
      icon: GraduationCap,
      description: 'Join missions, build streaks, and become an environmental champion',
      color: 'from-emerald-500 to-green-600',
      benefits: [
        'Access to daily personalized eco-missions',
        'Build and maintain environmental habit streaks',
        'Connect with like-minded peers globally',
        'Earn verifiable environmental credentials',
        'Track your real-world environmental impact'
      ],
      cta: 'Start Your Environmental Journey',
      pricing: 'Free for individual students'
    },
    {
      id: 'educator',
      title: 'Educators & Teachers',
      icon: User,
      description: 'Transform your classroom with engaging environmental curriculum',
      color: 'from-teal-500 to-cyan-600',
      benefits: [
        'Ready-to-use gamified environmental lesson plans',
        'Student progress tracking and analytics dashboard',
        'Classroom competition and collaboration tools',
        'Alignment with environmental education standards',
        'Professional development and training resources'
      ],
      cta: 'Revolutionize Your Classroom',
      pricing: 'Starting at $8/student/month'
    },
    {
      id: 'activist',
      title: 'Activists & NGOs',
      icon: Target,
      description: 'Organize and amplify environmental campaigns with built-in engagement',
      color: 'from-amber-500 to-orange-600',
      benefits: [
        'Campaign management and coordination tools',
        'Community mobilization and engagement features',
        'Real-time impact tracking and reporting',
        'Volunteer coordination and recognition systems',
        'Integration with existing advocacy platforms'
      ],
      cta: 'Amplify Your Environmental Impact',
      pricing: 'Custom pricing for organizations'
    },
    {
      id: 'institution',
      title: 'Institutions & Corporations',
      icon: Building,
      description: 'Scale sustainability programs across your entire organization',
      color: 'from-violet-500 to-purple-600',
      benefits: [
        'Enterprise-grade analytics and reporting dashboard',
        'Custom mission creation and deployment tools',
        'Integration with existing sustainability programs',
        'ESG reporting and compliance documentation',
        'White-label options and custom branding'
      ],
      cta: 'Transform Your Organization',
      pricing: 'Contact for enterprise pricing'
    }
  ];

  const currentRole = roles.find(role => role.id === selectedRole);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Join the Environmental Education Revolution
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Whether you're a student ready to take action, an educator transforming curriculum, an activist 
          building movements, or an institution scaling sustainability – EarthEd has the tools you need.
        </p>
      </div>

      {/* Role Selection */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Path to Environmental Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                selectedRole === role.id
                  ? `border-emerald-500 bg-gradient-to-br ${role.color} text-white shadow-xl transform scale-105`
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg text-gray-900'
              }`}
            >
              <role.icon className={`h-8 w-8 mb-4 ${selectedRole === role.id ? 'text-white' : 'text-gray-600'}`} />
              <h3 className="text-lg font-bold mb-2">{role.title}</h3>
              <p className={`text-sm leading-relaxed ${selectedRole === role.id ? 'text-white/90' : 'text-gray-600'}`}>
                {role.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Role Details */}
      {currentRole && (
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <div className={`bg-gradient-to-r ${currentRole.color} p-4 rounded-2xl w-fit mb-6`}>
                <currentRole.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentRole.title}</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{currentRole.description}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">What You'll Get:</h3>
              <div className="space-y-4 mb-8">
                {currentRole.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Pricing</h4>
                <p className="text-2xl font-bold text-emerald-600 mb-2">{currentRole.pricing}</p>
                {selectedRole === 'student' && (
                  <p className="text-sm text-gray-600">Always free for individual students. Premium features available for schools.</p>
                )}
                {selectedRole === 'educator' && (
                  <p className="text-sm text-gray-600">Free trial available. Volume discounts for larger institutions.</p>
                )}
                {selectedRole === 'activist' && (
                  <p className="text-sm text-gray-600">Sliding scale pricing based on organization size and budget.</p>
                )}
                {selectedRole === 'institution' && (
                  <p className="text-sm text-gray-600">Enterprise solutions tailored to your organization's needs.</p>
                )}
              </div>

              <button className={`w-full bg-gradient-to-r ${currentRole.color} text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center space-x-2`}>
                <span>{currentRole.cta}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedRole === 'student' ? 'School/University' : 
                     selectedRole === 'educator' ? 'School/Institution' :
                     selectedRole === 'activist' ? 'Organization/NGO' :
                     'Company/Institution'}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="What are you hoping to achieve with environmental education?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Stories by Role */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories from Our Community</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              type: 'Student Success',
              name: 'Maya Patel, Age 16',
              location: 'Denver, Colorado',
              story: 'Started with EarthEd in my sophomore year and built a 156-day streak of sustainable actions. Now I lead our school\'s environmental club and have inspired 89 classmates to join EarthEd.',
              impact: '156-day streak, 89 peers inspired',
              avatar: '🌱'
            },
            {
              type: 'Educator Impact',
              name: 'Dr. James Wilson',
              location: 'Austin, Texas',
              story: 'Integrated EarthEd into my AP Environmental Science curriculum. Student engagement increased 340% and test scores improved by an average of 23 points.',
              impact: '340% engagement increase, 23-point test improvement',
              avatar: '📚'
            },
            {
              type: 'Activist Achievement',
              name: 'Community Action Network',
              location: 'Portland, Oregon',
              story: 'Used EarthEd to coordinate our city-wide plastic reduction campaign. Engaged 2,300 residents and documented a 45% reduction in single-use plastic consumption.',
              impact: '2,300 residents engaged, 45% plastic reduction',
              avatar: '🌍'
            },
            {
              type: 'Corporate Transformation',
              name: 'GreenTech Solutions',
              location: 'San Francisco, California',
              story: 'Implemented EarthEd across our 800-person company. Employee sustainability engagement increased 280% and our carbon footprint decreased 35%.',
              impact: '280% engagement increase, 35% carbon reduction',
              avatar: '🏢'
            }
          ].map((story, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-3xl">{story.avatar}</div>
                <div>
                  <div className="text-emerald-600 font-semibold text-sm mb-1">{story.type}</div>
                  <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <MapPin className="h-3 w-3" />
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                "{story.story}"
              </blockquote>
              <div className="bg-emerald-50 rounded-lg p-3">
                <span className="text-emerald-700 font-semibold text-sm">Impact: {story.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of students, educators, activists, and organizations who are already creating 
            measurable environmental impact with EarthEd.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-2xl w-fit mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Get in Touch</h3>
            <p className="text-white/70">Fill out the form above or email us directly at hello@earthed.org</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-2xl w-fit mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Schedule Demo</h3>
            <p className="text-white/70">We'll schedule a personalized demo tailored to your specific needs and goals</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 p-4 rounded-2xl w-fit mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Launch Impact</h3>
            <p className="text-white/70">Start creating measurable environmental change in your community</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-white/10 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-2xl font-bold">24-48hrs</div>
              <div className="text-white/70 text-sm">Response Time</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-white/70 text-sm">Demo & Consultation</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold">Custom</div>
              <div className="text-white/70 text-sm">Implementation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;