export const social = {
  github: 'https://github.com/7000RAKESH',
  linkedin: 'https://linkedin.com/in/rakesh-t-0709bb207',
  email: 'mailto:rakeshmca222@gmail.com',
};

export const navigation = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

export const projects = [
  {
    title: 'CraftMyPlate', subtitle: 'Web Platform', category: 'Production web application', visual: 'food',
    description: "A customer-facing web experience extending CraftMyPlate’s existing mobile ordering experience to the web.",
    details: ['Professional contribution as a Software Development Engineer Intern at CraftMyPlate.', 'Responsive interfaces, reusable components, and API-integrated ordering workflows.'],
    technologies: ['Next.js', 'TypeScript', 'Hono', 'TanStack Query', 'AWS'],
    live: 'https://craftmyplate.in/', source: undefined,
  },
  {
    title: 'Behind the scenes.', subtitle: 'Operations Platform', category: 'Internal operations applications', visual: 'operations',
    description: 'A connected suite of applications supporting order management, kitchen preparation, packing, and dispatch.',
    details: ['Operations Manager — order management, scheduling, and special instructions.', 'Kitchen Tool — daily preparation tasks and item-status updates.', 'Packer Tool — measurements and packing verification.', 'Dispatcher Tool — packing images, driver and vehicle details, and location tracking.', 'Professional contributions at CraftMyPlate. Internal company work; no public demo or source code.'],
    technologies: ['Next.js', 'TypeScript', 'Hono', 'TanStack Query', 'Zustand', 'dnd-kit', 'Prisma', 'SQL', 'Turborepo', 'pnpm', 'AWS', 'Docker'],
    live: undefined, source: undefined,
  },
  {
    title: 'Job Hunter', subtitle: 'A better next step.', category: 'Full-stack job portal', visual: 'jobs',
    description: 'A full-stack job portal connecting candidate and recruiter workflows, from discovery to application management.',
    details: ['Candidate and recruiter authentication with JWT.', 'Job browsing, saved jobs, resume uploads, job posting, and application-status management.', 'Live demo is hosted externally and may be unavailable.', 'Backend: https://job-hunter-backend-a8qv.onrender.com/'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Bootstrap', 'shadcn/ui', 'Cloudinary', 'JWT'],
    live: 'https://job-hunter-eight-sigma.vercel.app/', source: 'https://github.com/7000RAKESH/Job-Hunter',
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'Redux Toolkit', 'Zustand', 'TanStack Query', 'SCSS', 'Tailwind CSS', 'Bootstrap', 'Responsive Web Design', 'dnd-kit', 'shadcn/ui', 'Material UI'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Hono', 'REST API Development', 'API Integration', 'Prisma ORM', 'GraphQL — Basic Exposure'] },
  { title: 'Database', items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Cloudinary'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Turborepo', 'pnpm', 'Husky', 'Vercel', 'Render'] },
  { title: 'Tools & Testing', items: ['Git', 'GitHub', 'Figma', 'Postman', 'Jest', 'Mixpanel', 'Cursor AI', 'Hoppscotch', 'JWT Authentication', 'Agile/Scrum'] },
];

export const experience = [
  { company: 'CraftMyPlate', role: 'Software Development Engineer Intern', dates: 'April 2026 — Present', current: true, description: 'Contributing to a customer-facing web platform and internal operations applications that connect ordering, kitchen preparation, packing, and dispatch.', responsibilities: ['Develop responsive interfaces, reusable components, and API-integrated workflows for the customer-facing website.', 'Contribute to order management, pickup and dispatch scheduling, and special instructions in the Operations Manager.', 'Build and improve kitchen preparation tracking, packing verification, and dispatcher workflows.', 'Work within a Turborepo and pnpm monorepo; manage server state with TanStack Query and client state with Zustand.', 'Build drag-and-drop interfaces with dnd-kit and use Mixpanel for product analytics.'], technologies: ['Next.js', 'TypeScript', 'Hono', 'Prisma', 'SQL', 'AWS', 'Docker'], url: 'https://craftmyplate.in/' },
  { company: 'HUEMN (Ve.ai)', role: 'Frontend Developer Intern', dates: 'July 2024 — October 2024', current: false, description: 'Built responsive web interfaces and reusable frontend features in a collaborative, Agile product team.', responsibilities: ['Developed web interfaces with React.js, JavaScript, and SCSS.', 'Collaborated with cross-functional teams on reusable components and frontend features.', 'Developed desktop application features using Electron.js and Swift.', 'Participated in sprint planning, stand-ups, and code reviews.'], technologies: ['React.js', 'JavaScript', 'SCSS', 'Electron.js', 'Swift'], url: undefined },
];