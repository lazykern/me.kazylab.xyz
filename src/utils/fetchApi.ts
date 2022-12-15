import { api } from "../config";

export async function fetchApi(path: string) {
  const res = await fetch(`${api}/${path}`);
  return res;
}
