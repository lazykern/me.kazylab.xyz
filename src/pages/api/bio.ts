import { NextApiRequest, NextApiResponse } from "next";

export type Paragraph = {
  key: string;
  text: string;
};

export type BioData = Paragraph[];

const bio: BioData = [
  {
    key: "bio-1",
    text: "Specialize in data analysis, cloud computing, and data engineering (in progress).",
  },
  {
    key: "bio-2",
    text: "Interested in Data Engineering and Software Engineering. Loves to automate stuffs.",
  },
  {
    key: "bio-3",
    text: "Open to work as a software engineer intern.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(bio);
  }
}
