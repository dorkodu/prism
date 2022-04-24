import { Soda } from "@dorkodu/soda";

export function LinkButton({type, link, label}) {
  let typeSuffix = (type) ? " --" + type : "";
  return <a class={"button" + typeSuffix} href={link}>{label}</a>
}