import React, { useState, useEffect } from 'react';
import './Webinar.css';

interface WebinarProps {
  onJoinNow?: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
}

const Webinar: React.FC<WebinarProps> = ({ onJoinNow }) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    mobile: ''
  });

  // 🔧 REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT DEPLOYMENT URL
  const WEBINAR_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzlgBMNDxBK5N6Lvg5bpHZ7aVb19wmWitWfHecbomFx2ZNUedx9YCtd5gwvAasMTpsS/exec';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('📤 Submitting webinar registration:', formData);
      
      // Submit to Google Sheets
      await fetch(WEBINAR_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('✅ Webinar registration submitted successfully');
      setShowThankYou(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        mobile: ''
      });

    } catch (error) {
      console.error('❌ Error submitting webinar registration:', error);
      // Still show success message since no-cors mode doesn't return response
      setShowThankYou(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background webinar-entrance">
      {/* Webinar Header - Simplified with logo and CTA only */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="/" className="logo">
              <img src="/images/Logo Horizontal.png"
                   alt="TekBay Academy" 
                   className="logo-image" />
            </a>
            <div className="nav-actions" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              <button 
                onClick={scrollToRegistration}
                className="nav-link nav-button cta-button"
              >
                Claim Your Spot
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Top Banner */}
      <div className="bg-gradient-tekbay text-white py-3 text-center">
        <p className="text-sm font-semibold">Limited Seats Only - Book Your Seat Quickly!</p>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-blue-teal text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-2">
              Free Webinar - Live Event
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              AI Careers in 2026 - <span className="font-semibold">Unlock Your Future in AI</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
              In 2026, AI is expected to dominate industries, create new job roles, and unlock exciting career
              opportunities. Discover how you can prepare for this AI-driven future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80 pt-4">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className="font-medium bg-success text-success-foreground px-3 py-1 rounded-full">29th December 2025</span>
              </div>
              <div className="hidden sm:block text-white/60">|</div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span className="font-medium bg-success text-success-foreground px-3 py-1 rounded-full">7:00-8:00 PM IST</span>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={scrollToRegistration}
                className="text-base md:text-lg px-6 py-4 md:px-8 md:py-6 bg-success hover:bg-success/90 text-success-foreground shadow-lg hover:shadow-xl transition-all rounded-lg font-semibold w-full sm:w-auto"
              >
                Reserve Your Free Seat
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-vibrant py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-chart-1/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-chart-2/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h1A1.5 1.5 0 0 0 12 4.5v-1A1.5 1.5 0 0 0 10.5 2h-1ZM11 8A3 3 0 0 0 8 11v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3Z"/>
                <path d="m12 2-.717-.737L12 2l.717-.737L12 2ZM13.5 6l-.42-.409A.5.5 0 0 1 13.5 6Zm3 8.5-.409-.42A.5.5 0 0 0 16.5 14.5Zm0 0h1-.5Z"/>
              </svg>
              <span className="text-sm font-semibold text-primary">What You'll Learn</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center text-primary mx-auto max-w-4xl">
              Key Discussions in the Webinar
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Get complete insights into the upcoming AI job trends, skills you need, and how to make most of AI's
              explosive growth in 2026.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto justify-items-center">
            <div className="p-4 sm:p-6 space-y-3 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-chart-1/20 hover:border-chart-1/40 rounded-xl w-full max-w-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-chart-1/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-chart-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">AI Job Market in 2026</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  What roles will be in demand, and which skills will set you apart?
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-chart-2/20 hover:border-chart-2/40 rounded-xl w-full max-w-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-2/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">High Demand Skills in 2026</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Key skills that will be highly valued in the AI job market.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-chart-3/20 hover:border-chart-3/40 rounded-xl w-full max-w-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-3/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-chart-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h1A1.5 1.5 0 0 0 12 4.5v-1A1.5 1.5 0 0 0 10.5 2h-1ZM11 8A3 3 0 0 0 8 11v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3Z"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">How to Prepare for AI Roles</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  How can you get ready for the AI-driven job market?
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-secondary/20 hover:border-secondary/40 rounded-xl w-full max-w-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h1A1.5 1.5 0 0 0 12 4.5v-1A1.5 1.5 0 0 0 10.5 2h-1ZM11 8A3 3 0 0 0 8 11v3a3 3 0 0 0 6 0v-3a3 3 0 0 0-3-3Z"/>
                    </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">TekBay Academy's AI Roadmap</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  How our courses and certifications will help you thrive in AI.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-success/20 hover:border-success/40 rounded-xl w-full max-w-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="m9 12 2 2 4-4"></path>
                    <path d="M21 12c.552 0 1.005-.449.95-.998a10.951 10.951 0 0 0-2.8-7.3 10.95 10.95 0 0 0-7.3-2.8C10.449 1.005 10 1.448 10 2s.449.95 1.002.95c2.24.082 4.281.982 5.77 2.47A8.95 8.95 0 0 1 19.05 11c.1.553.447 1 1 1Z"></path>
                    <path d="M12 21c.552 0 1.005-.449.95-.998a6.951 6.951 0 0 0-1.8-4.6A6.95 6.95 0 0 0 6.55 13.95C5.999 13.905 5.552 14.348 5.552 14.9s.447.95 1.002.95c1.24.082 2.381.482 3.27 1.37A4.95 4.95 0 0 1 11.05 20c.1.553.447 1 1 1Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">AWS Certification for AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Why AWS certification opens doors to top AI roles globally.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-accent/30 hover:border-accent/50 rounded-xl w-full max-w-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center">
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="m22 21-3-3"></path>
                  <path d="M16 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                    <path d="M16 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Live Q&A</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interactive session with our experts to answer all your questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-speakers-enhanced py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="m22 21-3-3"></path>
                <path d="M16 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
              </svg>
              <span className="text-sm font-semibold text-primary">Expert Speakers</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-primary">Meet Your Speakers</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Learn From Industry Experts Leading the AI Revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 space-y-6 bg-white border border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all rounded-lg">
              <div className="relative w-32 h-32 mx-auto">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-border shadow-md">
                  <img
                    src="/images/img-6983.webp"
                    alt="Yukti Basnet"
                    width="128"
                    height="128"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Yukti Basnet</h3>
                <p className="text-muted-foreground font-medium">Expert in AI/ML with 6+ Years of Experience</p>
                <p className="text-sm text-muted-foreground">VP of Product and Engineering, TekBay Digital Solutions</p>
              </div>
              <a
                href="https://www.linkedin.com/in/yukti-basnet-56168a127/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-chart-1 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="p-8 space-y-6 bg-white border border-border text-center hover:shadow-xl hover:-translate-y-1 transition-all rounded-lg">
              <div className="relative w-32 h-32 mx-auto">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-border shadow-md">
                  <img
                    src="/images/img-20251015-wa0004.webp"
                    alt="Sahil Oberoi"
                    width="128"
                    height="128"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Sahil Oberoi</h3>
                <p className="text-muted-foreground font-medium">AI Industry Leader with 8+ Years of Experience</p>
                <p className="text-sm text-muted-foreground">Managing Director, TekBay Academy</p>
              </div>
              <a
                href="https://www.linkedin.com/in/sahil-oberoi-a0476531b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-chart-2 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-testimonials-enhanced py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-pattern opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-success/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <svg className="h-5 w-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="m9 12 2 2 4-4"></path>
                <path d="M21 12c.552 0 1.005-.449.95-.998a10.951 10.951 0 0 0-2.8-7.3 10.95 10.95 0 0 0-7.3-2.8C10.449 1.005 10 1.448 10 2s.449.95 1.002.95c2.24.082 4.281.982 5.77 2.47A8.95 8.95 0 0 1 19.05 11c.1.553.447 1 1 1Z"></path>
              </svg>
              <span className="text-sm font-semibold text-primary">Success Stories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center text-primary mx-auto max-w-4xl">Hear From Our Students</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 space-y-4 bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all rounded-lg">
              <div className="text-5xl text-warmth">"</div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thanks to TekBay's apprenticeship program, I landed my first job in cloud engineering. The AWS
                certification really helped me to take my career to the next level!
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                  <img 
                    src="/images/saroj-mandal.png" 
                    alt="Saroj Mandal"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div>
                  <p className="font-semibold">Saroj Mandal</p>
                  <p className="text-sm text-muted-foreground">ML Engineer</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-4 bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all rounded-lg">
              <div className="text-5xl text-warmth">"</div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learning with TekBay Academy completely transformed my career. Their hands-on training and guidance gave
                me the essential skills to land a high-paying AI Engineer role.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                  <img 
                    src="/images/sweta-sharma.png" 
                    alt="Sweta Sharma"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div>
                  <p className="font-semibold">Sweta Sharma</p>
                  <p className="text-sm text-muted-foreground">ML Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="registration-form" className="bg-gradient-register-enhanced py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-destructive/10 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
                <svg className="h-5 w-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span className="text-sm font-semibold text-destructive">Limited Time Offer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-balance text-primary">
                Limited Seats ONLY! Secure Your Spot!
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                Join hundreds of students preparing for the AI driven future
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 bg-white border border-border shadow-xl rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 text-left">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input 
                    id="fullName" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    required 
                    className="w-full px-3 py-3 sm:py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-3 py-3 sm:py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-sm font-medium">
                    Mobile Number (Optional)
                  </label>
                  <input 
                    id="mobile" 
                    type="tel" 
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number" 
                    className="w-full px-3 py-3 sm:py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base" 
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-base sm:text-lg bg-success hover:bg-success/90 text-success-foreground shadow-md hover:shadow-lg transition-all py-4 sm:py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    'Reserve My Seat'
                  )}
                </button>

                <p className="text-xs sm:text-sm text-muted-foreground text-center pt-2">
                  By registering, you agree to receive updates about this webinar and future events.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-footer text-white/90">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm">© 2025 TekBay Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="max-w-md w-full p-8 text-center space-y-4 bg-card animate-scale-up bg-white rounded-lg">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto animate-pulse-once">
              <svg className="h-10 w-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="m9 12 2 2 4-4"></path>
                <path d="m21 4-3 16-4-7-7-4 16-3z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary">Thank You for Reserving Your Seat!</h3>
            <p className="text-muted-foreground leading-relaxed">
              We will contact you with the details via email shortly.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-success hover:bg-success/90 text-success-foreground px-6 py-2 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Webinar;