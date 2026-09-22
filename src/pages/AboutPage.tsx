import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle2,
  MapPin,
  Calendar
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { SectionHeader } from '../components/common/SectionHeader';
import { useCMS } from '../context/CMSContext';

export const AboutPage: React.FC = () => {
  const { team, company } = useCMS();
  const leadership = team.filter((m) => m.category === 'leadership');
  const displayTeam = leadership.length > 0 ? leadership : team;
  const milestones = [
    { year: "2021", title: "Company Inception", desc: "Founded with a mission to bridge business strategy with modern software engineering in Bangladesh." },
    { year: "2022", title: "Enterprise Scaling", desc: "Expanded custom ERP and web application services across commercial and industrial manufacturing clients." },
    { year: "2023", title: "ICT Tower Headquarters", desc: "Relocated corporate operations to the 14th Floor of the ICT Tower in Agargaon, Dhaka's central tech hub." },
    { year: "2024", title: "EstatePilot & TB Host Launch", desc: "Incubated EstatePilot PropTech SaaS platform and expanded dedicated high-speed cloud infrastructure." },
    { year: "2025", title: "National Recognition", desc: "Received formal institutional accolades for excellence in technology innovation and community impact." },
    { year: "2026", title: "Global Expansion", desc: "Serving 150+ companies internationally with modern SaaS, venture incubation, and full-stack digital systems." }
  ];

  return (
    <>
      <SEOHead
        title="About Us | Techboloy - Your Technology Growth Partner"
        description="Learn about Techboloy's mission, leadership, milestones, and our headquarters at ICT Tower, Agargaon, Dhaka."
      />

      <div className="pt-28 pb-20 bg-white dark:bg-slate-950">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <SectionHeader
            badge="About Techboloy"
            title="Pioneering Digital Transformation from Bangladesh to the World"
            highlightWord="Bangladesh"
            subtitle="We are a collective of systems engineers, product designers, and growth strategists dedicated to turning technology into tangible business advantage."
            align="center"
          />
        </div>

        {/* Narrative & Headquarters Showcase */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-purple/10 text-brand-purple">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>ICT Tower, Agargaon, Dhaka</span>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                  Built on Strategic Thinking, Powered by Modern Code
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Techboloy was founded to eliminate the disconnect between business problem-solving and IT execution. Rather than acting as a traditional transactional agency, we partner closely with founders and corporate executives to engineer software products that automate operations and expand market presence.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Operating directly out of the national ICT Tower in Agargaon, our team blends deep technical competence in cloud architectures, web development, ERP platforms, and performance marketing with a pragmatic understanding of enterprise economics.
                </p>

                <div className="pt-2 flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-black text-brand-purple">200+</div>
                    <div className="text-xs text-slate-500">Delivered Systems</div>
                  </div>
                  <div className="w-px h-10 bg-slate-300 dark:bg-slate-700" />
                  <div>
                    <div className="text-2xl font-black text-brand-magenta">100+</div>
                    <div className="text-xs text-slate-500">Client Partners</div>
                  </div>
                  <div className="w-px h-10 bg-slate-300 dark:bg-slate-700" />
                  <div>
                    <div className="text-2xl font-black text-brand-purple">30+</div>
                    <div className="text-xs text-slate-500">Specialists</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative group">
                  <img
                    src="/assets/award-photo.jpg"
                    alt="Techboloy Receiving Technology Award"
                    className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full bg-brand-magenta text-xs font-bold inline-block mb-2">
                      Formal Recognition
                    </span>
                    <h4 className="text-lg font-bold">
                      Honored for Contributions to IT Development & Technology Education
                    </h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission, Vision, Core Values */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                To engineer transformative software, robust cloud systems, and data-driven growth mechanisms that empower organizations to operate efficiently and scale without limitations.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-magenta/10 text-brand-magenta flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                To establish Techboloy as a globally recognized digital transformation partner and venture studio originating from Bangladesh, renowned for world-class design and engineering.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Our Values</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Transparency in delivery, intellectual honesty, craftsmanship in execution, and unwavering long-term alignment with our clients' business success.
              </p>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader
              badge="Journey & Growth"
              title="The Techboloy Evolution"
              highlightWord="Evolution"
              subtitle="Key milestones shaping our progression from a passionate tech studio to a multi-venture technology partner."
              align="center"
              darkTheme={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-brand-purple/60 transition-colors"
                >
                  <div className="text-2xl font-black font-display text-brand-magenta mb-2">
                    {m.year}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{m.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section on About Page */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Leadership & Expertise"
            title="Meet the Leadership Team"
            highlightWord="Leadership"
            subtitle="Guiding Techboloy's technical standards, product roadmaps, and client partnerships."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {displayTeam.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-brand-purple/40"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h4>
                  <div className="text-xs text-brand-magenta font-semibold mt-0.5">{member.position}</div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="max-w-5xl mx-auto px-4 text-center pb-12">
          <div className="p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Ready to Accelerate Your Technology Roadmap?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Schedule a confidential strategy session with our technical directors at ICT Tower or online.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-brand-gradient hover:shadow-glow-sm transition-all"
              >
                <span>Initiate a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
