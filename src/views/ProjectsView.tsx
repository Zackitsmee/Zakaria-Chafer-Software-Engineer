import { FolderGit2, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProjectsView() {
  const { t } = useTranslation();

  const projects = t('projects.items', { returnObjects: true }) as Array<{
    name: string;
    website?: string;
    description: string;
    technologies: string[];
    responsibilities: string[];
  }>;

  return (
    <section id="projects" className="relative py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <FolderGit2 className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground">{t('projects.title')}</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                {project.website && (
                  <a
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline font-medium bg-primary/10 px-4 py-2 rounded-full self-start sm:self-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.website}
                  </a>
                )}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <ul className="space-y-3">
                  {project.responsibilities.map((resp, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="leading-relaxed pt-0.5">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
