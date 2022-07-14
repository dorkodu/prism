import { Soda } from "@dorkodu/soda";

// container for all descriptive list items
export function DescriptiveList({title, message, children}) {
  return (
    <dl class="descriptive-list">
      {(title)   ? <h2 class="__title">{title}</h2>   : ""}
      {(message) ? <p class="__message">{message}</p> : ""}
      {children}
    </dl>
  );
}