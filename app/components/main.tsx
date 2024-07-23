"use client";

import { use, useRef } from "react";
import Experiences from "./experiences";
import Footer from "./footer";
import Projects from "./projects";
import Section from "./section";
import SectionLink from "./section-link";
import { useIntersectionObserver } from "usehooks-ts";

export default function Main() {
  const contentRef = useRef(null);
  const { isIntersecting, ref: intersectingRef } = useIntersectionObserver({
    root: contentRef.current,
    threshold: 0.5,
  });

  console.log(isIntersecting);
  return (
    <main id="content" className="pt-24 w-full lg:py-24">
      <Section id="about" ariaLabel="About Me">
        <div>
          <p className="mb-4">
            Back in 2022, I decided to apply for internship at{" "}
            <SectionLink href="https://www.kutia.net/" label="Kutia" /> and
            tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I&apos;ve had the privilege
            of building software for a{" "}
            <SectionLink
              href="https://www.i-aps.com/"
              label="huge corporation"
            />{" "}
            and build large data collection systems such as{" "}
            <SectionLink href="https://www.kapsurvey.com/" label="KAPsurvey" />
          </p>
          <p className="mb-4">
            My main focus these days is building high performance, accessible
            web applications for our customers at{" "}
            <SectionLink href="https://www.kapsurvey.com/" label="KAPsurvey" />.
            I most enjoy building software in the sweet spot where design and
            engineering meet — things that look good but are also built well
            under the hood. In my free time, I try to learn and improve the
            codebase by learning new technologies and implementing best
            practices.
          </p>
          <p>
            When I&apos;m not at the computer, I&apos;m usually motorcycling,
            driving, reading, hanging out with my friends, or running around my
            family owned car repair shop.
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
  );
}
