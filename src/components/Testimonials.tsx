import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Grade 8 Student',
      school: 'Green Valley Middle School',
      avatar: '👧',
      rating: 5,
      quote: 'EcoLearn made sustainability fun! I\'ve earned over 500 EcoCoins and learned so much about protecting our planet. My whole class is now competing to complete the most eco-challenges!',
      impact: '47 tasks completed, 12kg CO₂ saved'
    },
    {
      name: 'Ms. Rodriguez',
      role: 'Science Teacher',
      school: 'Riverside High School',
      avatar: '👩‍🏫',
      rating: 5,
      quote: 'This platform transformed how I teach environmental science. Students are more engaged than ever, and the analytics help me track their real-world impact. It\'s incredible to see them apply what they learn!',
      impact: 'Teaching 150+ students, 2.3 tons CO₂ saved by class'
    },
    {
      name: 'Marcus Johnson',
      role: 'Grade 10 Student',
      school: 'Tech Innovation Academy',
      avatar: '👦',
      rating: 5,
      quote: 'The leaderboard feature is amazing! Our school just won the monthly sustainability challenge. I love how we can see our environmental impact in real-time and compete with schools globally.',
      impact: '89 tasks completed, #3 in school ranking'
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Principal',
      school: 'Sunshine Elementary',
      avatar: '👩‍💼',
      rating: 5,
      quote: 'EcoLearn has revolutionized environmental education at our school. Parents report kids are implementing eco-practices at home, and our school\'s carbon footprint has decreased by 15% this year!',
      impact: '500+ students enrolled, 15% carbon reduction'
    },
    {
      name: 'Emma Thompson',
      role: 'Grade 6 Student',
      school: 'Forest Hills Elementary',
      avatar: '👧',
      rating: 5,
      quote: 'I love the daily eco-challenges and earning badges! My favorite was the "Plastic-Free Week" challenge. Now my whole family uses reusable bags and bottles. I can\'t wait for the next challenge!',
      impact: '34 badges earned, 8kg CO₂ saved'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Students, <span className="text-emerald-600">Teachers & Schools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community members who are making a real difference in environmental education and sustainability.
          </p>
        </div>

        {/* Main testimonial display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonials[activeTestimonial].avatar}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-emerald-500 mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-emerald-600 font-medium">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonials[activeTestimonial].school}
                    </p>
                  </div>
                  
                  <div className="mt-4 sm:mt-0 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
                    <p className="text-emerald-700 text-sm font-medium">
                      📊 {testimonials[activeTestimonial].impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeTestimonial ? 'bg-emerald-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Quick stats from testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9/5</h3>
            <p className="text-gray-600">Average rating from 10,000+ users</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">85%</h3>
            <p className="text-gray-600">Teachers report improved engagement</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">92%</h3>
            <p className="text-gray-600">Students continue eco-practices at home</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;