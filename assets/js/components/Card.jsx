import { Soda } from "@dorkodu/soda";
export function Card({badge, tag, title, message, content}) {
  //! NOTE: badge and tag should not be together
  return (
    <div class="card">
      {(badge) ? <i class="badge">{badge}</i> : ""}
      {(tag && !badge) ? <p class="__tag">{tag}</p> : ""} 
      {(title) ? <h4>{title}</h4> : ""}
      {(message) ? <p>{message}</p> : ""}
      {content ?? ""}
    </div>
  )
}