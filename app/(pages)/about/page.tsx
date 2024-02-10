import Experience from "@/components/experience";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container py-24">
      <Link href="/" className="text-gray-11 text-sm">
        &larr; Home
      </Link>
      <h1 className="text-4xl mt-8 sm:text-5xl font-semibold">About Me</h1>
      <div className="py-16 mt-8 ">
        <h2 className="text-4xl font-display">Experience</h2>
        <div className="mt-6 divide-y text-sm text-gray-11  max-w-none w-full">
          <Experience
            time="2023 - Present"
            role="Student"
            where="Dankook University Affiliated Software Highschool"
            url="https://dankook.sen.hs.kr/"
          />
          <Experience
            time="2020 - Present"
            role="Web Designer & Moderator"
            where="DevBench"
            url="https://devbench.kr"
          />
          <Experience
            time="2021 - Present"
            role="Maintainer & Community Moderator"
            where="Vignette"
            url="https://vignetteapp.org"
          />
          <Experience
            time="2021 - 2023"
            role="Graduate"
            where="SNU Science Education Institute for Gifted"
            url="http://gifted.snu.ac.kr/"
          />
          <Experience
            time="2019 - 2020"
            role="Graduate"
            where="SNUE Software Gifted Education Center"
            url="https://talented.snue.ac.kr/"
          />
        </div>
        <h2 className="mt-16 text-4xl font-display">Awards</h2>
        <div className="mt-6 text-sm text-gray-11 divide-y prose prose-xl prose-invert prose-neutral max-w-none w-full">
          <div className="flex gap-1 sm:py-4 py-3">
            <div className="sm:max-w-28 sm:min-w-28 sm:text-sm max-w-16 min-w-16 text-xs">
              2022
            </div>
            <div className="flex flex-wrap gap-1 justify-between w-full">
              <div className="w-full sm:w-auto">
                <a
                  href={"https://www.clawar.org/icres2022/"}
                  className="w-full sm:w-auto"
                >
                  ICRES
                </a>
                {` `}
                Student Discussion Competition
              </div>
              <div> Bronze Medalist</div>
            </div>
          </div>

          <div className="flex gap-1 sm:py-4 py-3">
            <div className="sm:max-w-28 sm:min-w-28 sm:text-sm max-w-16 min-w-16 text-xs">
              2019
            </div>
            <div className="flex flex-wrap gap-1 justify-between w-full">
              <Link
                href="https://www.facebook.com/juniorswcup"
                className="w-full sm:w-auto"
              >
                Samsung Junior Software Cup
              </Link>
              <div> Finalist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
