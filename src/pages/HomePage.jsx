import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Sparkles,
  Bot,
  Target,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const HomePage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stats = [
    { label: 'Avg. interview rate increase', value: '3.2x' },
    { label: 'Time to first offer', value: '8–12 weeks' },
    { label: 'Active job seekers helped', value: '500+' },
    { label: 'Offer success rate (VIP)', value: '78%' },
  ];

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Job Search System',
      description:
        'Automatically optimize resumes, tailor applications, and identify high-conversion job postings using AI workflows.',
    },
    {
      icon: Users,
      title: 'Community Accountability',
      description:
        'Stay consistent with structured peer groups, expert feedback, and daily momentum tracking.',
    },
    {
      icon: Target,
      title: 'Interview-First Strategy',
      description:
        'We reverse-engineer your job search starting from interviews, not applications.',
    },
  ];

  const servicesPreview = [
    {
      icon: Users,
      title: 'Mastermind',
      desc: 'Done-with-you coaching, AI tools, resume + interview systems.',
    },
    {
      icon: Sparkles,
      title: 'VIP Tier',
      desc: 'Fully done-for-you job search automation + outreach.',
    },
    {
      icon: TrendingUp,
      title: 'Community',
      desc: 'Skool-based community + courses + peer accountability.',
    },
  ];

  const testimonials = [
    {
      name: 'Maya Chen',
      role: 'Product Manager',
      quote:
        'I went from months of silence to multiple interviews within weeks. The system actually works.',
      avatar: 'MC',
    },
    {
      name: 'Raj Patel',
      role: 'Software Engineer',
      quote:
        'The VIP automation completely changed my job search. I stopped guessing and started getting interviews.',
      avatar: 'RP',
    },
    {
      name: 'Lucia Torres',
      role: 'Marketing Lead',
      quote:
        'Structured, practical, and motivating. It feels like having a job search operating system.',
      avatar: 'LT',
    },
  ];

  return (
    <>
      <Helmet>
        <title>JobHuntingU — AI-Powered Job Search System</title>
        <meta
          name="description"
          content="Land interviews faster with AI-powered job search systems, coaching, and automation."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')] bg-cover bg-center opacity-40" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.h1
            {...fadeUp}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Stop applying blindly.
            <br />
            Start getting interviews.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-white/80"
          >
            JobHuntingU combines AI automation + coaching + community to
            transform your job search into a structured system that actually works.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM / VALUE */}
      <section className="py-20 bg-background">
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              The job search is broken.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most candidates waste months sending resumes into a black hole.
              No feedback. No strategy. No system.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We fix that by turning your job search into a repeatable,
              AI-assisted pipeline that focuses on outcomes—not effort.
            </p>
          </div>

          <Card className="p-6">
            <CardTitle className="mb-4">What changes with us</CardTitle>
            <ul className="space-y-3">
              {[
                'Fewer applications, higher quality',
                'Interview-first targeting strategy',
                'AI-assisted resume optimization',
                'Clear weekly execution system',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="section-container text-center mb-12">
          <h2 className="text-3xl font-bold">Your job search, rebuilt</h2>
        </div>

        <div className="section-container grid md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card key={i}>
                <CardHeader>
                  <Icon className="w-6 h-6 mb-2" />
                  <CardTitle>{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {f.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-background">
        <div className="section-container text-center mb-12">
          <h2 className="text-3xl font-bold">Choose your path</h2>
        </div>

        <div className="section-container grid md:grid-cols-3 gap-6">
          {servicesPreview.map((s, i) => {
            const Icon = s.icon;
            return (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="mx-auto mb-4 w-8 h-8" />
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-muted">
        <div className="section-container text-center mb-12">
          <h2 className="text-3xl font-bold">Real results</h2>
        </div>

        <div className="section-container grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback>{t.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm italic">"{t.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">
            Ready to change your job search?
          </h2>
          <p className="mb-8 text-primary-foreground/80 max-w-xl mx-auto">
            Join JobHuntingU and turn your job hunt into a structured system that
            actually gets results.
          </p>

          <Button asChild size="lg" className="bg-secondary text-black">
            <Link to="/contact">
              Start Now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;