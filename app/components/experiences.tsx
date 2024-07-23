import { Fragment } from "react";

const EXPERIENCES_DATA = [
  {
    id: "project-kapsurvey",
    timeline: "2024 — Present",
    title: "Software Web Engineer, ReactJS",
    description: `Build and maintain critical components used to construct Klaviyo’s frontend, 
    across the whole product. Work closely with cross-functional teams, including developers, 
    designers, and product managers, to implement and advocate for best practices in web accessibility.`,
    company: "KS-APS",
    companyLink: "https://ks-aps.com/",
    techList: ["React", "Formik", "Ant Design"],
  },
  {
    id: "project-oda",
    timeline: "2023 — 2024",
    title: "Software Web Engineer, ReactJS",
    description: `Build and maintain critical components used to construct Klaviyo’s frontend,
       across the whole product. Work closely with cross-functional teams, including
        developers, designers, and product managers, to implement and advocate 
        for best practices in web accessibility.`,
    company: "Kutia",
    companyLink: "https://www.klaviyo.com/",
    techList: ["React", "TypeScript", "Tailwind CSS"],
    links: [
      {
        title: "ScreenTime 2.0",
        href: "https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents",
      },
      {
        title: "Android App",
        href: "https://play.google.com/store/apps/details?id=com.starry.management&amp;hl=en_US&amp;gl=US",
      },
    ],
  },
];

type TechnologiesProps = {
  techList: string[];
};
function Technologies({ techList = [] }: TechnologiesProps) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {techList.map((tech) => (
        <li key={tech} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
            {tech}
          </div>
        </li>
      ))}
    </ul>
  );
}

type RelatedLinksProps = {
  links: { title: string; href: string }[];
};
function RelatedLinks({ links = [] }: RelatedLinksProps) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
      {links.map(({ title, href }) => (
        <li key={title} className="mr-4">
          <a
            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="${title} (opens in a new tab)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-3 w-3"
              aria-hidden="true"
            >
              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
            </svg>
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

type ExperienceProps = {
  timeline: string;
  title: string;
  company: string;
  companyLink: string;
  description: string;
  techList?: TechnologiesProps["techList"];
  links?: RelatedLinksProps["links"];
};
function Experience({
  timeline,
  title,
  company,
  companyLink,
  description,
  techList = [],
  links = [],
}: ExperienceProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label="2024 to Present"
        >
          {timeline}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                href={companyLink}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${title} at ${company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {title} ·{" "}
                  <span className="inline-block">
                    {company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
            <div className="text-slate-500" aria-hidden="true">
              React Engineer
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <RelatedLinks links={links} />
          <Technologies techList={techList} />
        </div>
      </div>
    </li>
  );
}

export default function Experiences() {
  return (
    <Fragment>
      <ol className="group/list">
        {EXPERIENCES_DATA.map((exp) => (
          <Experience key={exp.id} {...exp} />
        ))}
      </ol>
      <div className="mt-12">
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full{" "}
            <span className="inline-block">
              Résumé
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </Fragment>
  );
}
