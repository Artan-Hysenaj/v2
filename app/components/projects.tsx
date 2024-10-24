import Image from "next/image";
import { Fragment } from "react";

const PROJECTS_DATA: (ProjectProps & { id: string })[] = [
  {
    id: "project-1",
    title: "Ticket Edit Panel",
    description: `My first ever angular app that I built to learn the basics of Angular. 
      It's a simple ticket edit panel that allows you to edit some info but puts an extra focus on pixel perfect UI.`,
    projectLink: "https://ticket-edit-panel.vercel.app/",
    projectThumb: "/images/projects/ticket-edit-panel.png",
    techList: ["Angular", "TypeScript", "Bootstrap"],
    stars: [
      { href: "https://github.com/Artan-Hysenaj/ticket-edit-panel", count: 0 },
    ],
  },
  {
    id: "project-2",
    title: "Cybertask",
    description: `A simple phonebook app that I built as a task for a job interview.`,
    projectLink: "https://cybermaniaks-task-phone-book.netlify.app/contacts",
    projectThumb: "/images/projects/cybertask.png",
    techList: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Query"],
    stars: [{ href: "https://github.com/Artan-Hysenaj/cybertask", count: 0 }],
  },

  {
    id: "project-3",
    title: "KS-APS task",
    description: `
    This task was assigned to me by KS-APS as a part of the interview process.
    It's a simple user management app that fetches data from a fake API and displays it in a table and there is 
    also a details page for each user. The main focus was project structure and code quality.
    `,
    projectLink: "https://ks-aps-optimistic-task.netlify.app/users",
    projectThumb: "/images/projects/ks-aps-task.png",
    techList: ["React", "Tailwind CSS", "React Query"],
    stars: [
      {
        href: "https://github.com/Artan-Hysenaj/ks-aps-optimistic-task",
        count: 0,
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

type GithubStarsProps = {
  stars: { href: string; count: number }[];
};
function GithubStars({ stars = [] }: GithubStarsProps) {
  return stars.map(({ href, count }) => (
    <a
      key={href}
      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${count} stars on GitHub (opens in a new tab)`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-1 h-3 w-3"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span>{count}</span>
    </a>
  ));
}

// type RelatedLinksProps = {
//   links: { title: string; href: string }[];
// };
// function RelatedLinks({ links = [] }: RelatedLinksProps) {
//   return (
//     <ul className="mt-2 flex flex-wrap" aria-label="Related links">
//       {links.map(({ title, href }) => (
//         <li key={title} className="mr-4">
//           <a
//             className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
//             href={href}
//             target="_blank"
//             rel="noreferrer noopener"
//             aria-label="${title} (opens in a new tab)"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="mr-1 h-3 w-3"
//               aria-hidden="true"
//             >
//               <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
//               <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
//             </svg>
//             <span>{title}</span>
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// }

type ProjectProps = {
  title: string;
  projectLink: string;
  projectThumb: string;
  description: string;
  techList?: TechnologiesProps["techList"];
  stars?: GithubStarsProps["stars"];
  // links?: RelatedLinksProps["links"];
};
function Project({
  title,
  projectLink,
  projectThumb,
  description,
  techList = [],
  stars = [],
}: ProjectProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={projectLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <GithubStars stars={stars} />

          <Technologies techList={techList} />
        </div>
        <Image
          alt={title}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          data-img="1"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: "transparent" }}
          src={projectThumb}
        />
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <Fragment>
      <ol className="group/list">
        {PROJECTS_DATA.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ol>
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 group"
          aria-label="View Full Project Archive"
          href="/archive"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Project{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Archive
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </Fragment>
  );
}
