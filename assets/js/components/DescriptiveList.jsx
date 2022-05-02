import { Soda } from "@dorkodu/soda";

// container for all descriptive list items
export function DescriptiveList({title, message, children}) {
  return (
    <dl class="descriptive-list">
      <h2 class="__title">{title}</h2>
      <p class="__message">
        {message}
      </p>
      {children}
    </dl>
  );
}

export function DescriptiveListItem({title, description, badge}) {
  return (
    <div class="__element">
      {badge}
      <div>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </div>
    </div>
  );
}