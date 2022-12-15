import { NextApiRequest, NextApiResponse } from "next";

export type Skills = {
  type: string;
  skills: string[];
};

export type SkillsData = Skills[];

const skills: SkillsData = [
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(skills);
  }
}
