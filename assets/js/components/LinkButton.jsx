import { Soda } from "@dorkodu/soda";

export function LinkButton({type, link, label}) {
  return <a class={"button" + (type) ? " --" + type : ""} href={link}>{label}</a>
}