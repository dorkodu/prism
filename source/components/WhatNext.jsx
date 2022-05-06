import { Soda } from "@dorkodu/soda";

// container for all descriptive list items
export function WhatNext({action, title, link}) {
  return (
    <a class="what-next" href={link}>
      <span class="__action">{action}</span>
      <h5 class="__title">{title}</h5>
    </a>
  );
}
       
