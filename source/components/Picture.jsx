import { Soda } from "@dorkodu/soda";

export function Picture({ source, title }) {
  if (!title) title = "";
  
  return (
    <div class="picture">
      <img src={source} alt={title} title={title}/>
      {title !== "" ? <p>{title}</p> : ""}
    </div>
  )
}