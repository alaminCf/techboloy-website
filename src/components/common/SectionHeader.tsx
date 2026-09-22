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
    <div className={`max-w-3xl mb-12 sm:mb-16 ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wide uppercase border border-brand-purple/20 bg-brand-purple/5 text-brand-purple">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          darkTheme ? 'text-white' : 'text-slate-900'
        }`}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            darkTheme ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
