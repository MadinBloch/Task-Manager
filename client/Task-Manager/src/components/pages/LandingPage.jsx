import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Zap, Users, BarChart3, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30">
                ✨ Your productivity, supercharged
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Manage Tasks
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Like a Pro</span>
              </h1>
              <p className="text-xl text-gray-400">
                Streamline your workflow, collaborate with your team, and achieve more with our powerful task management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-colors">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-purple-400">10k+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">4.9★</div>
                  <div className="text-sm text-gray-400">User Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">50k+</div>
                  <div className="text-sm text-gray-400">Tasks Completed</div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 shadow-2xl">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <div className="flex-1">
                        <div className="h-3 bg-gray-700 rounded-full w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400">Everything you need to stay organized and productive</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Blazing fast performance with real-time updates' },
              { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly with your team' },
              { icon: BarChart3, title: 'Advanced Analytics', desc: 'Track progress with detailed insights' },
              { icon: CheckCircle, title: 'Smart Automation', desc: 'Automate repetitive tasks and workflows' },
              { icon: Star, title: 'Priority Management', desc: 'Focus on what matters most' },
              { icon: Zap, title: 'Integrations', desc: 'Connect with your favorite tools' }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 group">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create Account', desc: 'Sign up in seconds and start your journey' },
              { step: '02', title: 'Add Tasks', desc: 'Create tasks, set priorities, and deadlines' },
              { step: '03', title: 'Track Progress', desc: 'Monitor your progress and achieve your goals' }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{item.step}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-400">Choose the plan that's right for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Free', price: '$0', features: ['5 Projects', 'Basic Features', 'Community Support'] },
              { name: 'Pro', price: '$12', features: ['Unlimited Projects', 'Advanced Features', 'Priority Support', 'Analytics'], featured: true },
              { name: 'Enterprise', price: '$49', features: ['Everything in Pro', 'Custom Integration', 'Dedicated Support', 'Advanced Security'] }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.featured ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500 scale-105' : 'bg-gray-800/50 border-gray-700'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all ${plan.featured ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-xl hover:shadow-purple-500/50' : 'border border-purple-500 hover:bg-purple-500/10'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Users Say</h2>
            <p className="text-xl text-gray-400">Join thousands of satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Product Manager', text: 'TaskFlow transformed how our team works. Productivity is up 40%!' },
              { name: 'Mike Chen', role: 'Freelancer', text: 'The best task manager I\'ve used. Simple yet powerful.' },
              { name: 'Emma Davis', role: 'Team Lead', text: 'Our go-to tool for managing projects. Highly recommend!' }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 md:p-20 text-center border border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using TaskFlow to manage their tasks efficiently
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      

    
    </div>
  );
}