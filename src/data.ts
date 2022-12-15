export type Paragraph = {
  key: string;
  text: string;
};

export type BioData = Paragraph[];

export const bioData: BioData = [
  {
    key: "bio-1",
    text: "Specialize in data analysis, cloud computing, and data engineering (in progress).",
  },
  {
    key: "bio-2",
    text: "Loves to automate stuffs. Interested in Data Engineering and Software Engineering.",
  },
  {
    key: "bio-3",
    text: "Open to work as a data engineer intern.",
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
    skills: ["Data Analysis", "Data Engineering", "Cloud Computing"],
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
      "SQL",
      "HTML/CSS",
    ],
  },
];
