import { NextApiRequest, NextApiResponse } from "next";
import { bioData } from "../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(bioData);
  }
}
