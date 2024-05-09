import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-12 px-32 py-8 fixed top-0 bg-black justify-start items-center inline-flex">
        <div className="justify-start items-center gap-5 flex">
          <img className="w-12 h-12" src="https://via.placeholder.com/50x50" />
          <div className="text-white text-base font-bold font-['Inter']">
            lazykern
          </div>
        </div>
        <div className="flex gap-4 ml-auto">
          <nav className="justify-end items-center gap-7 flex">
            <ul className="flex gap-4">
              <li className="text-right text-sm font-normal font-['Inter']">
                ABOUT
              </li>
              <li className="text-right text-sm font-normal font-['Inter']">
                SKILLS
              </li>
              <li className="text-right text-sm font-normal font-['Inter']">
                INTERESTS
              </li>
              <li className="text-right text-sm font-normal font-['Inter']">
                LINKS
              </li>
            </ul>
          </nav>
          <div>|</div>
          <nav className="justify-start items-center gap-7 flex">
            <ul className="flex gap-4">
              <li className="text-right text-white text-sm font-normal font-['Inter']">
                BLOG
              </li>
              <li className="text-right text-white text-sm font-normal font-['Inter']">
                RESUME
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="snap-y snap-proximity overflow-y-scroll h-screen z-0">
        <div className="max-w-2xl px-10 md:px-0 mx-auto snap-center h-screen content-center">
          <div className="justify-start items-end mb-2">
            <div className="md:text-5xl text-3xl font-bold">
              Phusit Somboonyingsuk
            </div>
            <div className="text-m font-bold">
              AKA lazykern, kazylern, and phusitsom
            </div>
          </div>
          <div className="self-stretch mb-4">
            <span className="text-white text-m font-normal font-['Inria Sans']">
              Hello, nice to meet you! You can call me Pooh or Keji (けじ). I am
              a laid-back software engineer with many interests, not just nerdy
              things but hobbies as well!
            </span>
          </div>
          <div className="self-stretch flex-col justify-center items-start">
            <div className="text-white text-2xl font-bold font-['Inter'] mb-2">
              What I do
            </div>
            <div className="self-stretch mb-2">
              <span className="text-white text-m font-normal font-['Inter']">
                My background is mostly in Data Engineering, but I can do Web
                Development and Mobile App Development as well!
              </span>
            </div>
            <div className="self-stretch">
              <span className="text-white text-m font-normal font-['Inter']">
                Currently, I{"'"}m a{" "}
              </span>
              <span className="text-white text-m font-bold font-['Inter']">
                DevOps Engineer Intern at Innovative Extremist (INOX){" "}
              </span>
              <span className="text-white text-m font-normal font-['Inter']">
                and will continue as a Data Engineer Intern in the next few
                months.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto snap-center h-screen content-center">
          HI
        </div>
      </main>
    </>
  );
}
