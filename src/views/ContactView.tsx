import type { ContactLink } from '../models/contactModel';

interface ContactViewProps {
  links: ContactLink[];
}

export default function ContactView({ links }: ContactViewProps) {
  return (
    <section id="contact" className="relative py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Let&apos;s connect! Whether you have a project in mind or just want to say hi,
          I&apos;d love to hear from you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Gmail' ? '_blank' : undefined}
                rel={link.name !== 'Gmail' ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{link.name}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
