import Navbar from "./components/nav";
import Socials from "./components/socials";

export default function Page() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 h-screen w-full">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Artan Hysenaj</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            MidLevel React Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <Navbar />
        </div>
        <Socials />
      </header>
      <main
        id="content"
        className="pt-24 lg:w-1/2 lg:py-24 h-screen overflow-y-scroll border scroll-smooth"
      >
        <section
          id="about"
          className="border h-80 w-full mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 "
        ></section>
        <section
          id="experience"
          className="border h-80 w-full w-full mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-smooth"
        ></section>
        <section
          id="projects"
          className="border h-80 w-full w-full mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-smooth"
        ></section>
        <section
          id="writing"
          className="border h-80 w-full w-full mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-smooth"
        ></section>
      </main>
    </div>
  );
}
