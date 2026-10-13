import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Layers,
  Workflow,
  Briefcase,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { experience, navigation, projects, skillGroups, social } from "@/lib/portfolio";
import resume from "@/assets/resume.asset.json";
import sculpture from "@/assets/editorial-sculpture.jpg";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="page-width nav-inner">
        <a href="#home" className="brand" aria-label="Rakesh Tadi home">
          <span className="brand-symbol">
            r<span className="text-primary">.</span>
          </span>
          <span>
            RAKESH TADI<span className="text-primary">.</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((name) => (
            <a key={name} href={`#${name.toLowerCase()}`}>
              {name}
            </a>
          ))}
        </nav>
        <Button asChild variant="outline" className="talk-button">
          <a href={social.email}>
            Let’s Talk <ArrowUpRight />
          </a>
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </DialogTrigger>
          <DialogContent
            className="mobile-navigation"
            onCloseAutoFocus={(event) => event.preventDefault()}
          >
            <DialogTitle>RAKESH TADI.</DialogTitle>
            <DialogDescription className="sr-only">Portfolio navigation</DialogDescription>
            <nav aria-label="Mobile navigation">
              {navigation.map((name) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase()}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    const id = name.toLowerCase();
                    window.setTimeout(() => {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                      window.history.replaceState(null, "", `#${id}`);
                    }, 150);
                  }}
                >
                  {name}
                  <ArrowUpRight />
                </a>
              ))}
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero">
      <motion.img
        src={sculpture}
        width={1536}
        height={1024}
        alt="Abstract folded sculpture in chrome, electric blue, and coral"
        className="hero-art"
        animate={reduced ? {} : { y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="page-width hero-inner">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow">
              <span className="small-cross">+</span> SOFTWARE DEVELOPMENT ENGINEER
            </div>
          </Reveal>
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Rakesh
            <span className="hero-name-last">
              Tadi<span className="text-coral">.</span>
            </span>
          </motion.h1>
          <Reveal>
            <h2 className="hero-statement">
              Building thoughtful
              <br />
              digital experiences<span className="text-coral">.</span>
            </h2>
            <p className="hero-description">
              With modern web technology. I build responsive, user-centric applications with React,
              Next.js, and TypeScript — connecting thoughtful interfaces with APIs, databases, and
              cloud infrastructure.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#projects">
                  Explore My Work <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={resume.url}
                  download="Rakesh-Tadi-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download /> Download Resume
                </a>
              </Button>
            </div>
            <div className="hero-social">
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Rakesh on GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Rakesh on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <span className="social-divider" />
              <span>
                <MapPin size={13} /> Hyderabad, India
              </span>
            </div>
          </Reveal>
        </div>
        <div className="art-caption">
          <span className="caption-cross">+</span>
          <span>
            THOUGHTFUL INTERFACES.
            <br />
            SOLID ENGINEERING.
          </span>
        </div>
        <div className="hero-bottom">
          <span>
            <span className="status-dot" /> FRONTEND FOCUSED. FULL-STACK CAPABLE.
          </span>
          <a href="#about">
            SCROLL TO EXPLORE <ArrowDown size={15} />
          </a>
          <span className="hero-index">01 — 06</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  number,
  label,
  title,
  aside,
}: {
  number: string;
  label: string;
  title: ReactNode;
  aside?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span className="text-primary">{number} /</span> {label}
        </div>
        <h2>{title}</h2>
      </div>
      {aside && <p>{aside}</p>}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="chips">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-band">
      <div className="page-width">
        <Reveal>
          <SectionHeading
            number="02"
            label="THE PERSON BEHIND THE PIXELS"
            title={
              <>
                A little about me<span className="text-coral">.</span>
              </>
            }
          />
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-monogram" aria-hidden="true">
              rt<span>.</span>
              <Code2 size={38} />
            </div>
            <span className="monogram-caption">ENGINEER BY PRACTICE. CREATOR AT HEART.</span>
          </Reveal>
          <Reveal>
            <p className="about-lead">
              I turn complex workflows into
              <br className="hidden md:block" />{" "}
              <span className="text-primary">intuitive interfaces.</span>
            </p>
            <p className="body-copy">
              I’m a Software Development Engineer based in Hyderabad, India, with hands-on
              experience building production web applications and internal operations tools. My work
              spans modern frontend development, reusable components, API integration, application
              state management, and multi-application architectures.
            </p>
            <p className="body-copy">
              I enjoy solving practical engineering problems — and bringing care to the details that
              make a product feel right.
            </p>
            <div className="about-highlights">
              {[
                "Production web application development",
                "React and Next.js",
                "TypeScript and reusable UI architecture",
                "API integration and state management",
                "Full-stack collaboration",
                "Responsive user experiences",
              ].map((item) => (
                <div key={item}>
                  <ArrowUpRight size={15} className="text-coral" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-band alternate-band">
      <div className="page-width">
        <Reveal>
          <SectionHeading
            number="03"
            label="WHERE I’VE CONTRIBUTED"
            title={
              <>
                Real teams. Real products<span className="text-primary">.</span>
              </>
            }
            aside="Hands-on experience, from customer-facing interfaces to the tools behind the scenes."
          />
        </Reveal>
        <div className="experience-list">
          {experience.map((role) => (
            <Reveal className="experience-row" key={role.company}>
              <div className="experience-date">
                <span className={role.current ? "timeline-dot current" : "timeline-dot"} />
                {role.dates}
                <span>Hyderabad, India</span>
                {role.current && <span className="current-label">CURRENT ROLE</span>}
              </div>
              <div>
                <div className="role-title">
                  <h3>{role.company}</h3>
                  {role.url && (
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Visit CraftMyPlate"
                    >
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
                <h4>{role.role}</h4>
                <p className="body-copy">{role.description}</p>
                <ul className="responsibilities">
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Chips items={role.technologies} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`project-visual ${project.visual}`} aria-hidden="true">
      {project.visual === "food" ? (
        <>
          <span className="visual-label">CUSTOMER EXPERIENCE</span>
          <div className="food-wordmark">
            craft<span>my</span>plate<span className="food-asterisk">✳</span>
          </div>
          <div className="food-rule" />
          <span className="visual-bottom">
            GOOD FOOD. THOUGHTFULLY CONNECTED. <ArrowUpRight />
          </span>
        </>
      ) : project.visual === "operations" ? (
        <>
          <span className="visual-label">CONNECTED OPERATIONS</span>
          <div className="operations-flow">
            <div>
              <Briefcase />
              <span>Manage</span>
            </div>
            <span className="flow-connector" />
            <div>
              <Layers />
              <span>Prepare</span>
            </div>
            <span className="flow-connector" />
            <div>
              <Workflow />
              <span>Dispatch</span>
            </div>
          </div>
          <span className="visual-bottom">
            FROM ORDER TO DELIVERY <ArrowUpRight />
          </span>
        </>
      ) : (
        <>
          <span className="visual-label">YOUR NEXT CHAPTER</span>
          <div className="job-wordmark">
            Job Hunter
            <span>
              Find your next.
              <ArrowUpRight />
            </span>
          </div>
          <span className="visual-bottom">
            DISCOVER. CONNECT. GROW. <ArrowUpRight />
          </span>
        </>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-band">
      <div className="page-width">
        <Reveal>
          <SectionHeading
            number="04"
            label="SELECTED WORK"
            title={
              <>
                Built with purpose<span className="text-coral">.</span>
              </>
            }
            aside="A selection of professional contributions and personal projects. Thoughtful on the surface. Robust underneath."
          />
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <Dialog>
                <article className="project-card">
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="project-preview-button"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ProjectVisual project={project} />
                    </Button>
                  </DialogTrigger>
                  <div className="project-info">
                    <div className="project-category">
                      <span>
                        0{index + 1} / {project.category}
                      </span>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`Open ${project.title} details`}
                        >
                          <ArrowUpRight />
                        </Button>
                      </DialogTrigger>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Chips items={project.technologies.slice(0, 4)} />
                  </div>
                </article>
                <DialogContent className="case-study">
                  <span className="eyebrow text-primary">{project.category}</span>
                  <DialogTitle className="text-3xl">
                    {project.title} — {project.subtitle}
                  </DialogTitle>
                  <DialogDescription className="body-copy">{project.description}</DialogDescription>
                  <ul className="responsibilities">
                    {project.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Chips items={project.technologies} />
                  <div className="flex flex-wrap gap-3">
                    {project.live && (
                      <Button asChild>
                        <a href={project.live} target="_blank" rel="noreferrer">
                          Visit website <ExternalLink />
                        </a>
                      </Button>
                    )}
                    {project.source && (
                      <Button asChild variant="outline">
                        <a href={project.source} target="_blank" rel="noreferrer">
                          <Github /> Source code
                        </a>
                      </Button>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
        <p className="work-note">
          CraftMyPlate projects represent professional contributions. Internal tools are not
          publicly accessible.
        </p>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-band alternate-band">
      <div className="page-width">
        <Reveal>
          <SectionHeading
            number="05"
            label="MY ENGINEERING TOOLKIT"
            title={
              <>
                The right tools.
                <br />
                The right details<span className="text-primary">.</span>
              </>
            }
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} className="skill-group">
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <Chips items={group.items} />
            </Reveal>
          ))}
        </div>
        <Reveal className="education">
          <GraduationCap size={28} className="text-primary" />
          <div>
            <span className="eyebrow">EDUCATION / 2024</span>
            <h3>Bachelor of Technology — Computer Science Engineering</h3>
            <p>Malla Reddy Institute of Technology and Science · JNTU Hyderabad</p>
          </div>
          <span className="education-grade">
            6.7<span> / 10 CGPA</span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-band contact-section">
      <div className="page-width">
        <Reveal>
          <div className="eyebrow">
            <span className="text-primary">06 /</span> LET’S BUILD SOMETHING MEANINGFUL
          </div>
          <h2>
            Have a project or
            <br />
            opportunity in mind<span className="text-coral">?</span>
          </h2>
          <div className="contact-bottom">
            <p>
              I’m interested in building thoughtful web experiences and connecting with teams
              working on meaningful products. Let’s connect.
            </p>
            <Button asChild size="lg" className="contact-cta">
              <a href={social.email}>
                Say hello <ArrowUpRight />
              </a>
            </Button>
          </div>
          <a className="email-link" href={social.email}>
            rakeshmca222@gmail.com <ArrowUpRight size={22} />
          </a>
          <div className="contact-links">
            <span>
              <MapPin size={16} /> Hyderabad, Telangana, India
            </span>
            <a href={social.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="page-width footer">
      <a href="#home" className="brand">
        RAKESH TADI<span className="text-primary">.</span>
      </a>
      <span>© {new Date().getFullYear()} Rakesh Tadi · Built with React & TypeScript.</span>
      <a href="#home">
        BACK TO TOP <ArrowRight size={14} className="-rotate-90" />
      </a>
    </footer>
  );
}
