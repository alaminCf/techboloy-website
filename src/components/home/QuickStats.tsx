import React, { useEffect, useState, useRef } from 'react';
import { useCMS } from '../../context/CMSContext';

interface CounterProps {
  end: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1800; // ms
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = end / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={elementRef} className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 dark:text-white">
      <span className="text-gradient-purple">{count}</span>
      <span className="text-brand-magenta">{suffix}</span>
    </div>
  );
};

export const QuickStats: React.FC = () => {
  const { company } = useCMS();

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 p-8 sm:p-10 backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
          {company.stats.map((stat, idx) => (
            <div 
              key={stat.id} 
              className={`text-center space-y-2 ${idx > 1 ? 'pt-6 lg:pt-0' : ''} ${idx === 1 ? 'max-lg:pt-0' : ''} px-2 sm:px-4`}
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[220px] mx-auto hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
