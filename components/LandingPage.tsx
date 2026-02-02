import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, Star, ChevronDown, ChevronUp, Instagram, Facebook, Linkedin, Twitter, Sparkles, BarChart3, Bot, Settings, Search, Code2, Rocket, LineChart, Zap, MessageSquare, ShieldCheck, Mail } from 'lucide-react';

// --- Shared UI Components ---

const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-surface border border-white/10 text-white ${className}`}>
    {children}
  </div>
);

const SectionHeader: React.FC<{ badge: string; title: string; description: string; align?: 'center' | 'left' }> = ({ badge, title, description, align = 'center' }) => (
  <div className={`flex flex-col gap-4 mb-16 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <Badge className="bg-primary/20 text-primary border-primary/20">{badge}</Badge>
    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-tight">
      {title}
    </h2>
    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
      {description}
    </p>
  </div>
);

const Button: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline'; className?: string; href?: string }> = ({ children, variant = 'primary', className = "", href = "#" }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300";
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_-5px_rgba(129,74,200,0.5)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white/10 bg-transparent text-white hover:bg-white/5",
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

// --- Sections ---

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
           <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
             <Bot size={20} />
           </div>
           <span className="text-xl font-bold tracking-tight">XTRACT</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {['Home', 'About', 'Blog', 'Contact'].map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
           <Button variant="primary">Book a call</Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
           {['Home', 'About', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-300 hover:text-white">
              {item}
            </a>
          ))}
          <Button className="w-full">Book a call</Button>
        </div>
      )}
    </nav>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Badge className="bg-surface/80 backdrop-blur border-white/10 py-1.5 px-4">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            New AI Features Available
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Intelligent <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Automation</span> for <br />
          Modern Businesses.
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Xtract brings AI automation to your fingertips & streamlines tasks, allowing you to focus on what truly matters: growth and innovation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="primary" className="h-12 px-8 text-base">Get in touch</Button>
          <Button variant="outline" className="h-12 px-8 text-base group">
            View services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Abstract Visual / Void */}
        <div className="mt-16 w-full max-w-4xl relative aspect-video rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
            {/* Simple particle simulation with CSS */}
            <div className="absolute inset-0 opacity-50">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className="absolute rounded-full bg-white" 
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        opacity: Math.random(),
                        animation: `float ${Math.random() * 10 + 10}s infinite linear`
                      }}
                 />
               ))}
            </div>
            <div className="z-20 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl mx-auto mb-4 opacity-50 animate-pulse"></div>
                <p className="text-gray-500 text-sm">Interactive AI Core Visualization</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export const Logos: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 mb-8">Over 50+ businesses trust us</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* SVG Placeholders for Logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-32 bg-white/20 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Our Services" 
          title="AI Solutions That Take Your Business to the Next Level" 
          description="We design, develop, and implement automation tools that help you work smarter, not harder." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col h-full group">
            <div className="h-64 bg-surface rounded-xl mb-6 relative overflow-hidden border border-white/5 flex flex-col">
               {/* Mock UI: Workflow */}
               <div className="bg-white/5 p-3 border-b border-white/5 flex items-center justify-between">
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 </div>
                 <div className="text-[10px] text-gray-500">Workflow Dashboard</div>
               </div>
               <div className="p-4 space-y-3">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="flex items-center gap-3 p-2 bg-white/5 rounded border border-white/5">
                      <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary"><Check size={14}/></div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-white/20 rounded mb-1"></div>
                        <div className="h-1.5 w-16 bg-white/10 rounded"></div>
                      </div>
                      <div className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] rounded">Done</div>
                   </div>
                 ))}
               </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-gray-400">Streamline internal operations by automating manual workflows like data entry and reporting.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-surface">Task Bots</Badge>
              <Badge className="bg-surface">100+ Automations</Badge>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col h-full group">
            <div className="h-64 bg-surface rounded-xl mb-6 relative overflow-hidden border border-white/5 flex items-center justify-center">
               {/* Mock UI: Chat */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative z-10 w-64 space-y-4">
                 <div className="flex justify-end">
                    <div className="bg-primary text-white text-xs p-3 rounded-l-xl rounded-tr-xl max-w-[80%]">
                      Schedule a meeting for tomorrow.
                    </div>
                 </div>
                 <div className="flex justify-start">
                    <div className="bg-white/10 text-gray-200 text-xs p-3 rounded-r-xl rounded-tl-xl max-w-[80%]">
                      Done. I've added "Strategy Sync" to your calendar for 10 AM.
                    </div>
                 </div>
               </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">AI Assistant</h3>
            <p className="text-gray-400">From managing calendars to drafting emails, our AI assistants work around the clock.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-surface">Summaries</Badge>
              <Badge className="bg-surface">Scheduling</Badge>
            </div>
          </div>
          
           {/* Card 3 */}
           <div className="glass-card p-8 rounded-2xl flex flex-col h-full group">
            <div className="h-64 bg-surface rounded-xl mb-6 relative overflow-hidden border border-white/5 flex items-center justify-center p-6">
                {/* Mock UI: Code/System */}
                <div className="w-full h-full border border-white/10 rounded-lg p-4 font-mono text-xs text-gray-500 bg-black">
                   <div className="flex gap-4 mb-4">
                      <div className="text-purple-400">def</div>
                      <div className="text-yellow-200">optimize_system</div>
                      <div className="text-white">():</div>
                   </div>
                   <div className="pl-4 space-y-2">
                      <div className="flex gap-2">
                         <span className="text-blue-400">if</span>
                         <span>efficiency &lt; 100:</span>
                      </div>
                      <div className="pl-4 text-green-400"># Auto-scaling resources</div>
                      <div className="pl-4">scale_up()</div>
                      <div className="pl-4">return <span className="text-orange-300">True</span></div>
                   </div>
                </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Custom Projects</h3>
            <p className="text-gray-400">We offer strategic consulting and develop custom AI projects aligned with your unique goals.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-surface">Consulting</Badge>
              <Badge className="bg-surface">Custom AI</Badge>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col h-full group">
            <div className="h-64 bg-surface rounded-xl mb-6 relative overflow-hidden border border-white/5 flex items-center justify-center">
               <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-full blur-xl"></div>
                  <BarChart3 className="w-full h-full text-white/20 p-8" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur rounded p-2 flex items-center gap-3 border border-white/5">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-black font-bold text-xs">+34%</div>
                    <div className="text-xs text-white font-medium">Monthly Growth</div>
                  </div>
               </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Sales & Marketing</h3>
            <p className="text-gray-400">AI tools for lead generation, personalized outreach, and automated content creation.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-surface">Leads</Badge>
              <Badge className="bg-surface">Content</Badge>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export const Process: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Smart Analyzing",
      desc: "We assess your needs and identify AI solutions.",
      icon: <Search className="text-primary" />
    },
    {
      step: "02",
      title: "AI Development",
      desc: "Our team builds intelligent automation systems.",
      icon: <Code2 className="text-secondary" />
    },
    {
      step: "03",
      title: "Seamless Integration",
      desc: "We smoothly integrate AI solutions into your stack.",
      icon: <Zap className="text-yellow-400" />
    },
    {
      step: "04",
      title: "Continuous Optimization",
      desc: "We refine performance for long-term growth.",
      icon: <LineChart className="text-green-400" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Our Process" 
          title="Simple, Smart, and Scalable" 
          description="From analysis to deployment, we ensure a smooth transition to AI-driven workflows." 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="glass-card p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl group-hover:opacity-20 transition-opacity">{s.step}</div>
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      company: "TrailForge",
      title: "40% Less Inventory Waste",
      desc: "AI-driven forecasting optimized inventory cycles.",
      image: "https://picsum.photos/id/103/600/400"
    },
    {
      company: "ScaleByte",
      title: "3x More Closed Deals",
      desc: "AI sales assistant automated outreach and scoring.",
      image: "https://picsum.photos/id/180/600/400"
    },
    {
      company: "FinSolve",
      title: "20% Cost Reduction",
      desc: "Automating 50% of operations in just 2 months.",
      image: "https://picsum.photos/id/20/600/400"
    }
  ];

  return (
    <section id="cases" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Case Studies" 
          title="Real Results, Real Growth" 
          description="See how our AI automation solutions have transformed businesses across various industries." 
          align="left"
        />

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {cases.map((c, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[400px] snap-center glass-card rounded-2xl overflow-hidden flex flex-col">
              <div className="h-64 relative">
                <img src={c.image} alt={c.company} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 font-bold text-xl">{c.company}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                <p className="text-gray-400 mb-6 flex-1">{c.desc}</p>
                <div className="pt-6 border-t border-white/10">
                   <div className="flex gap-2 flex-wrap">
                      <Badge className="bg-white/5">Automation</Badge>
                      <Badge className="bg-white/5">Growth</Badge>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Benefits: React.FC = () => {
  const benefits = [
    "Increased Productivity",
    "Better Customer Experience",
    "24/7 Availability",
    "Cost Reduction",
    "Data-Driven Insights",
    "Scalability & Growth"
  ];

  return (
    <section id="benefits" className="py-24 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader badge="Benefits" title="Why Choose AI?" description="Unlock the potential of your business." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors flex items-start gap-4">
              <div className="mt-1 text-primary"><Check size={20} /></div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{b}</h3>
                <p className="text-sm text-gray-400">Leverage AI to analyze vast data sets and identify trends.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader badge="Pricing" title="Flexible Plans for Your Needs" description="Start small or scale big. We have the right plan for you." />
        
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button 
            onClick={() => setAnnual(!annual)}
            className={`w-14 h-7 rounded-full p-1 transition-colors duration-300 ${annual ? 'bg-primary' : 'bg-gray-700'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annually</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="glass-card p-8 rounded-2xl border-white/10 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-medium text-gray-400 mb-2">Starter</h3>
            <div className="text-4xl font-bold mb-4">${annual ? '370' : '37'}<span className="text-lg font-normal text-gray-500">/{annual ? 'yr' : 'mo'}</span></div>
            <p className="text-sm text-gray-400 mb-8">Perfect for small businesses starting with AI.</p>
            <Button variant="outline" className="w-full mb-8">Choose Plan</Button>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2"><Check size={16} className="text-primary"/> Basic workflow automation</li>
              <li className="flex gap-2"><Check size={16} className="text-primary"/> AI personal assistant</li>
              <li className="flex gap-2"><Check size={16} className="text-primary"/> Standard reporting</li>
            </ul>
          </div>

          {/* Professional */}
          <div className="glass-card p-8 rounded-2xl border-primary/50 relative overflow-hidden transform md:-translate-y-4 shadow-2xl shadow-primary/10">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg font-medium">Popular</div>
            <h3 className="text-xl font-medium text-gray-400 mb-2">Professional</h3>
            <div className="text-4xl font-bold mb-4">${annual ? '750' : '75'}<span className="text-lg font-normal text-gray-500">/{annual ? 'yr' : 'mo'}</span></div>
            <p className="text-sm text-gray-400 mb-8">Advanced tools for growing teams.</p>
            <Button variant="primary" className="w-full mb-8">Choose Plan</Button>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2"><Check size={16} className="text-primary"/> Advanced automation</li>
              <li className="flex gap-2"><Check size={16} className="text-primary"/> Sales & Marketing tools</li>
              <li className="flex gap-2"><Check size={16} className="text-primary"/> Priority support</li>
              <li className="flex gap-2"><Check size={16} className="text-primary"/> up to 10 AI integrations</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="glass-card p-8 rounded-2xl border-white/10 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-medium text-gray-400 mb-2">Enterprise</h3>
            <div className="text-4xl font-bold mb-4">Custom</div>
            <p className="text-sm text-gray-400 mb-8">Tailored solutions for large organizations.</p>
            <Button variant="outline" className="w-full mb-8">Contact Us</Button>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2"><Check size={16} className="text-primary"/> Fully customizable AI</li>
              <li className="flex gap-2"><Check size={16} className="text-primary"/> Dedicated consultant</li>
              <li className="flex gap-2"><Check size={16} className="text-primary"/> Enterprise compliance</li>
              <li className="flex gap-2"><Check size={16} className="text-primary"/> 24/7 VIP support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader badge="Testimonials" title="Loved by Innovators" description="Hear what our partners have to say." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
               name: "James Carter",
               role: "CEO at TechFlow",
               img: "https://picsum.photos/id/64/100/100",
               text: "AI automation transformed our operations. Scaling our workflow has never been easier!"
            },
            {
               name: "Sophia Martinez",
               role: "Ops Manager at Nexa",
               img: "https://picsum.photos/id/65/100/100",
               text: "With AI, we cut manual work and improved accuracy. Our team focuses on high-impact tasks now."
            },
            {
               name: "David Reynolds",
               role: "Head of Sales at GrowthPeak",
               img: "https://picsum.photos/id/91/100/100",
               text: "AI-driven insights doubled our sales efficiency. We engage leads at the right time now."
            }
          ].map((t, i) => (
             <div key={i} className="glass-card p-8 rounded-xl">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                   <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                   <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    "How can AI automation help my business?",
    "Is AI automation difficult to integrate?",
    "What industries can benefit from AI automation?",
    "Do I need technical knowledge to use AI automation?",
    "What kind of support do you offer?"
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader badge="FAQ" title="Got Questions?" description="We've got the answers you're looking for." />
        <div className="space-y-4">
          {faqs.map((q, i) => (
            <div key={i} className="border border-white/10 rounded-lg bg-surface overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium">{q}</span>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === i && (
                 <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                    AI automation can streamline your repetitive tasks, analyze data for better decision making, and free up your team to focus on strategic initiatives. Implementation varies by complexity, but we ensure a smooth integration process with your current stack.
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-surface to-black border border-white/10 p-12 md:p-24 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
         <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-5xl font-bold">Let AI do the Work so you can Scale Faster</h2>
            <p className="text-gray-400 text-lg">Book a Call Today and Start Automating</p>
            <Button variant="primary" className="h-14 px-8 text-lg">Book a free call</Button>
         </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
       <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
             <div className="col-span-1 md:col-span-2">
                <a href="#" className="flex items-center gap-2 mb-4">
                  <Bot size={24} className="text-white" />
                  <span className="text-2xl font-bold">XTRACT</span>
                </a>
                <p className="text-gray-500 max-w-sm mb-6">
                  Automate Smarter, Optimize Faster, and Grow Stronger.
                </p>
                
                <p className="text-sm font-semibold mb-2">Join our newsletter</p>
                <div className="flex gap-2 max-w-sm">
                   <div className="relative flex-1">
                      <Mail size={16} className="absolute left-3 top-3 text-gray-500" />
                      <input 
                        type="email" 
                        placeholder="name@email.com" 
                        className="w-full bg-surface border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50"
                      />
                   </div>
                   <Button variant="primary" className="py-2 px-4 text-sm">Subscribe</Button>
                </div>
             </div>

             <div>
                <h4 className="font-semibold mb-4 text-lg">Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                   <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                   <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                   <li><a href="#cases" className="hover:text-white transition-colors">Case Studies</a></li>
                   <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                </ul>
             </div>

             <div>
                <h4 className="font-semibold mb-4 text-lg">Socials</h4>
                <div className="flex gap-4">
                   <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                   <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                   <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                   <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                </div>
             </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
             <p>© 2024 Xtract. All rights reserved.</p>
             <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
             </div>
          </div>
       </div>
    </footer>
  );
};