import { GraduationCap } from 'lucide-react';

const TIMELINE = [
  {
    year: 'Present',
    title: 'Software Engineering Career',
    description:
      'Building full-stack applications and continuing to grow as a developer. Passionate about clean code, scalable architecture, and user-centered design.',
  },
  {
    year: 'University',
    title: 'Computer Engineering',
    description:
      'Completed a rigorous university curriculum in Computer Engineering, covering fundamentals of programming, data structures, algorithms, databases, and software architecture. Gained hands-on experience through projects and coursework in web development.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground">My Parcours</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          From university to the professional world, here is my academic and career
          journey as a software engineer.
        </p>
        <div className="space-y-8">
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-border ml-2 pb-8 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-primary" />
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                {item.year}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
