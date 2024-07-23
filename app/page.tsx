import { useEffect } from "react";
import Experiences from "./components/experiences";
import Footer from "./components/footer";
import Navbar from "./components/nav";
import Projects from "./components/projects";
import Section from "./components/section";
import SectionLink from "./components/section-link";
import Socials from "./components/socials";

export default function Page() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <div className="w-full">
        <header className="lg:sticky lg:top-0 lg:flex h-full lg:max-h-screen w-full lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Artan Hysenaj</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              React engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build pixel-perfect, high-performance, and accessible digital
              experiences.
            </p>
            <Navbar />
          </div>
          <Socials />
        </header>
      </div>
      <main id="content" className="pt-24 w-full lg:py-24">
        <Section id="about" ariaLabel="About Me">
          <div>
            <p className="mb-4">
              Back in 2022, I decided to apply for internship at{" "}
              <SectionLink href="https://www.kutia.net/" label="Kutia" /> and
              tumbled head first into the rabbit hole of coding and web
              development. Fast-forward to today, and I&apos;ve had the
              privilege of building software for a{" "}
              <SectionLink
                href="https://www.i-aps.com/"
                label="huge corporation"
              />{" "}
              and build large data collection systems such as{" "}
              <SectionLink
                href="https://www.kapsurvey.com/"
                label="KAPsurvey"
              />
            </p>
            <p className="mb-4">
              My main focus these days is building high performance, accessible
              web applications for our customers at{" "}
              <SectionLink
                href="https://www.kapsurvey.com/"
                label="KAPsurvey"
              />
              . I most enjoy building software in the sweet spot where design
              and engineering meet — things that look good but are also built
              well under the hood. In my free time, I try to learn and improve
              the codebase by learning new technologies and implementing best
              practices.
            </p>
            <p>
              When I&apos;m not at the computer, I&apos;m usually motorcycling,
              driving, reading, hanging out with my friends, or running around
              my family owned car repair shop.
            </p>
          </div>
        </Section>
        <Section id="experience" ariaLabel="Work Experience">
          <Experiences />
        </Section>
        <Section id="projects" ariaLabel="Selected projects">
          <Projects />
        </Section>

        <Footer />
      </main>
    </div>
  );
}
