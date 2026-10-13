import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navigation,
  Projects,
  Skills,
} from "@/components/portfolio";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rakesh Tadi | Software Engineer & Frontend Developer" },
      {
        name: "description",
        content:
          "Rakesh Tadi is a software engineer in Hyderabad building thoughtful web experiences with React, Next.js, TypeScript, and modern full-stack technologies.",
      },
      { property: "og:title", content: "Rakesh Tadi | Software Engineer & Frontend Developer" },
      {
        property: "og:description",
        content:
          "Explore Rakesh’s professional contributions, frontend expertise, and full-stack projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
