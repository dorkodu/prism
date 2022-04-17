import { Soda } from "@dorkodu/soda";

export function Picture({ source, alt, title }) {
  if (!alt) alt = "";
  if (!title) title = "";
  
  return (
    <div class="picture">
      <img src={source} alt={alt} title={title}/>
      {alt !== "" ? <p>{alt}</p> : ""}
    </div>
  )
}