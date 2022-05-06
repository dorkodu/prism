import { Soda } from "@dorkodu/soda";

export function Image({ source, title }) {
  if (!title) title = "";
  return <img src={source} alt={title} title={title}/>;
}