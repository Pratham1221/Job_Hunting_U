
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Zap, ArrowRight, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      id: 'mastermind',
      icon: Users,
      title: 'The Mastermind',
      subtitle: 'Done With You',
      description: 'Collaborative training where we teach you cutting-edge AI tools for your job search. We guide you through resume tailoring, stakeholder connection strategies, and rigorous interview prep. Perfect for self-starters who want expert guidance.',
      features: ['AI tool mastery', 'Resume tailoring', 'Stakeholder connection', 'Interview prep sessions'],
      themeClass: 'card-mastermind',
      badgeClass: 'badge-mastermind',
      buttonText: 'Learn More',
      buttonVariant: 'outline'
    },
    {
      id: 'vip',
      icon: Sparkles,
      title: 'The VIP Tier',
      subtitle: 'Done For You',
      description: 'Our premium white-glove service. We build and manage your automated backend systems and handle your entire job pipeline management. You focus on showing up to interviews while we do the heavy lifting.',
      features: ['White-glove service', 'Automated backend systems', 'Job pipeline management', 'Direct employer outreach'],
      featured: true,
      themeClass: 'card-vip',
      badgeClass: 'badge-vip',
      buttonText: 'Apply for VIP',
      buttonVariant: 'default'
    },
    {
      id: 'community',
      icon: TrendingUp,
      title: 'The Community Hub',
      subtitle: 'Coming June 27th!',
      description: 'Join our exclusive Skool community. Access expert guidance, engage with peers sharing the same journey, and unlock comprehensive courses to accelerate your job search.',
      features: ['Skool community access', 'Expert guidance', 'Peer engagement', 'Exclusive courses'],
      comingSoon: true,
      themeClass: 'card-community',
      badgeClass: 'badge-community',
      buttonText: 'Join the Waitlist',
      buttonVariant: 'outline'
    }
  ];

  const testimonials = [
    {
      name: 'Maya Chen',
      role: 'Product Manager at Shopify',
      quote: 'JobHuntingU transformed my job search from a lonely grind into an empowering journey. The AI strategies cut my application time in half, and the community kept me motivated through every rejection.',
      avatar: 'MC',
      color: 'bg-primary'
    },
    {
      name: 'Raj Patel',
      role: 'Senior Developer at Amazon',
      quote: 'After 6 months of searching alone, I joined the VIP tier and landed 3 offers in 8 weeks. The personalized approach and automated outreach were game-changers.',
      avatar: 'RP',
      color: 'bg-secondary'
    },
    {
      name: 'Lucia Torres',
      role: 'Marketing Director at Lululemon',
      quote: 'The Mastermind program gave me the tools and confidence I needed. Jerry and the team genuinely care about your success, not just another sale.',
      avatar: 'LT',
      color: 'bg-accent-foreground'
    },
    {
      name: 'Kwame Asante',
      role: 'Data Analyst at Microsoft',
      quote: 'I was skeptical about AI in job searching, but the results speak for themselves. My interview rate tripled, and I finally understood how to stand out in a crowded market.',
      avatar: 'KA',
      color: 'bg-primary'
    }
  ];

  const team = [
    {
      name: 'Jerry J. Hunter',
      title: 'CEO & Founder',
      bio: 'Former corporate recruiter turned job search strategist. Jerry founded JobHuntingU after witnessing countless talented professionals struggle in silence. His mission: make job hunting less isolating and more effective.',
      avatar: 'JH',
      image: '/jerry-hunter.webp'
    },
    {
      name: 'Srini Kancharla',
      title: 'AI HR Business Partner',
      bio: 'AI researcher and career coach specializing in automation and optimization. Anika designs the intelligent systems that power our job search tools.',
      avatar: 'SK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Marcus Williams',
      title: 'Community Director',
      bio: 'Former HR leader with a passion for building supportive communities. Marcus ensures every member feels heard, valued, and motivated.',
      avatar: 'MW',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Srini Kancharla',
      title: 'AI HR Business Partner',
      bio: 'AI researcher and career coach specializing in automation and optimization. Anika designs the intelligent systems that power our job search tools.',
      avatar: 'SK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`About JobHuntingU - Transforming the Job Search Experience`}</title>
        <meta name="description" content="Learn how JobHuntingU combines AI-powered strategies with community support to help job seekers land their dream roles faster. Meet our team and discover our mission." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1637622124152-33adfabcc923)' }}
        />
        <div className="hero-overlay absolute inset-0 bg-black/60" />
        
        <div className="section-container relative z-10 text-center text-white pt-20">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}
            {...fadeInUp}
          >
            You shouldn't have to job hunt alone.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The modern job search is exhausting, isolating, and fraught with rejection. JobHuntingU is here to change the narrative. We combine high-energy community support with cutting-edge AI strategies to help you land your dream role, faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-200 active:scale-[0.98]">
              <Link to="/contact">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
                Born from a need for real support
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  JobHuntingU was founded by Jerry J. Hunter, a former corporate recruiter who spent years on the other side of the hiring table. After transitioning careers himself, Jerry experienced firsthand the brutal reality of modern job searching: endless applications disappearing into black holes, generic advice that didn't work, and the crushing isolation of rejection after rejection.
                </p>
                <p>
                  He realized that job seekers needed more than resume templates and interview tips. They needed a system that actually worked, community support to stay motivated, and cutting-edge tools to compete in an AI-driven hiring landscape.
                </p>
                <p>
                  In early 2026, Jerry launched JobHuntingU in Vancouver with a simple mission: combine the efficiency of AI automation with the power of human connection. What started as a small coaching practice has grown into a comprehensive ecosystem serving job seekers across Canada and beyond.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80" 
                alt="Team collaboration and support at JobHuntingU"
                className="rounded-2xl shadow-brand-lg w-full object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Ecosystem / Services Section */}
      <section className="py-24 bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Core Ecosystem / Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the pathway that best fits your goals, timeline, and working style. We've built an ecosystem to support every type of candidate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {services.slice(0, 2).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`plan-card ${service.themeClass}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex flex-col space-y-4">
                        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm`}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                          <span className="font-medium opacity-90">{service.subtitle}</span>
                        </div>
                      </div>
                      {service.featured && (
                        <span className={`plan-badge ${service.badgeClass}`}>
                          Recommended
                        </span>
                      )}
                    </div>
                    
                    <p className="leading-relaxed mb-8 opacity-90 min-h-[4.5rem]">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm md:text-base font-medium">
                          <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 opacity-80" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="plan-cta">
                      <Button 
                        size="lg" 
                        variant={service.buttonVariant}
                        className={`w-full font-semibold ${
                          service.buttonVariant === 'outline' 
                            ? 'bg-transparent border-current hover:bg-black/5 hover:text-current' 
                            : 'bg-foreground text-background hover:bg-foreground/90'
                        }`}
                      >
                        {service.buttonText}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={`plan-card ${services[2].themeClass}`}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shrink-0">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{services[2].title}</h3>
                    <p className="leading-relaxed opacity-90 max-w-3xl">
                      {services[2].description}
                    </p>
                  </div>
                </div>
                <span className={`plan-badge ${services[2].badgeClass} shrink-0`}>
                  {services[2].subtitle}
                </span>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 pt-4 border-t border-current/10">
                {services[2].features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm font-medium">
                    <CheckCircle2 className="mr-2 h-4 w-4 shrink-0 opacity-80" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button 
                  size="lg"
                  className="w-full md:w-auto bg-transparent border border-current text-current hover:bg-black/5 font-semibold transition-all duration-200 active:scale-[0.98]"
                >
                  {services[2].buttonText}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Empowering the modern candidate
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-primary text-primary-foreground border-none shadow-lg">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Immediate mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Our current focus is Vancouver, where we're building a tight-knit community of 10-20 individuals who are serious about transforming their job search. We believe in quality over quantity, providing personalized attention and proven strategies that actually work.
                  </p>
                  <p className="leading-relaxed">
                    Every member receives hands-on support, access to our AI tools, and the accountability needed to stay consistent. We're not just teaching job search tactics — we're building a movement of empowered professionals who refuse to settle.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-secondary text-secondary-foreground border-none shadow-lg">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-foreground/10 mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Global vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Our vision extends far beyond Vancouver. We're planning expansion to Toronto by late 2026, followed by major cities across Canada and eventually globally. The job search crisis isn't local — it's universal.
                  </p>
                  <p className="leading-relaxed">
                    We envision a world where no one has to navigate the job market alone, where AI amplifies human potential instead of replacing it, and where community support is the norm, not the exception. JobHuntingU will be the platform that makes this vision reality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Success stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real people who transformed their job search
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <Card className="transition-all duration-300 hover:shadow-brand h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Avatar className="h-12 w-12 rounded-xl">
                        <AvatarFallback className={`${testimonial.color} text-white rounded-xl`}>
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="leading-relaxed text-sm italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Meet the team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </motion.div>

          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">
            {team.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                className="flex-shrink-0 w-[320px] snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <Avatar className="h-24 w-24 rounded-2xl mb-4 mx-auto">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl rounded-2xl">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>

                    <div className="text-center mb-4">
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {member.title}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Ready to transform your job search?
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Join JobHuntingU today and discover how community support and AI-powered strategies can help you land your dream role faster than you ever thought possible.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-200 active:scale-[0.98]">
              <Link to="/contact">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
