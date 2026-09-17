import { GraduationCap, Briefcase } from 'lucide-react';
import type { ExperienceItem, EducationItem } from '../models/aboutModel';

interface AboutViewProps {
  experience: ExperienceItem[];
  education: EducationItem[];
}

export default function AboutView({ experience, education }: AboutViewProps) {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Experience Section */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground">Experience</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
          From university to the professional world, here is my academic and career
          journey as a software engineer.
        </p>
        <div className="space-y-8 mb-24">
          {experience.map((item, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-border ml-2 pb-8 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-primary" />
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                {item.period}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-primary/80 font-medium mb-2">{item.company}</p>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((item, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-border ml-2 pb-8 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-primary" />
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                {item.period}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-primary/80 font-medium">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
