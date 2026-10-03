import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  darkTheme?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightWord,
  subtitle,
  align = 'center',
  darkTheme = false,
}) => {
  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-purple">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`max-w-3xl mb-8 sm:mb-14 ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 sm:mb-4 rounded-full text-xs font-semibold tracking-wide uppercase border border-brand-purple/20 bg-brand-purple/5 text-brand-purple dark:border-brand-purple/40 dark:bg-brand-purple/15 dark:text-purple-300">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          darkTheme ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            darkTheme ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
