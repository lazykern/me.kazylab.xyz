export type Paragraph = {
  key: string;
  text: string;
};

export type BioData = Paragraph[];

export const bioData: BioData = [
  {
    key: "bio-1",
    text: "Phusit is a third year undergraduate computer engineering student at Kasetsart University based in Bangkok.",
  },
  {
    key: "bio-2",
    text: "All his interest goes to Data (Platform) Engineering. To make a platform reliable and easy to maintain is his passion.",
  },
  {
    key: "bio-3",
    text: "He loves doing photography, drawing pixel arts, making songs, and automating stuffs.",
  },
];

export type Skills = {
  type: string;
  skills: string[];
};

export type SkillsData = Skills[];

export const skillsData: SkillsData = [
  {
    type: "Core",
    skills: ["Data Engineering", "Cloud Computing"],
  },
  {
    type: "Languages",
    skills: [
      "Python",
      "JavaScript/TypeScript",
      "Rust",
      "C",
      "C++",
      "Java",
      "Dart",
      "SQL",
      "HTML/CSS",
    ],
  },
];

export type Page = {
  title: string;
  href: string;
};

export type PageData = Page[];

export const pageData: PageData = [
  {
    title: "about",
    href: "/",
  },
  {
    title: "projects",
    href: "/projects",
  },
  {
    title: "links",
    href: "https://linktr.ee/phusitsom",
  },
];
