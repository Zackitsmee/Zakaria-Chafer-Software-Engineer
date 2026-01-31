// @ts-expect-error - JSX component from shadcn registry
import LiquidEther from './LiquidEther';

const TECH_STACK = [
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'Angular', slug: 'angular', color: '#DD0031' },
  { name: 'TailwindCSS', slug: 'tailwindcss', color: '#06B6D4' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
  { name: 'Python', slug: 'python', color: '#3776AB' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
  { name: 'Postman', slug: 'postman', color: '#FF6C37' },
  { name: 'Express', slug: 'express', color: '#E8E8E8' },
];

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* LiquidEther Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          resolution={0.5}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" aria-hidden />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero / Intro */}
        <div className="flex-1 flex flex-col justify-center px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4">Full Stack Developer</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Hi, I&apos;m Zakaria Chafer
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I build modern web applications from front to back. With a passion for
              clean architecture and seamless user experiences, I craft scalable
              solutions using React, Angular, Node.js, and more. Let&apos;s build something
              great together.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="relative z-10 px-6 pb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Technologies I Use
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-sm hover:border-white/20 hover:bg-card transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/10 p-2"
                  style={{ color: tech.color }}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-foreground text-sm sm:text-base truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
