import { Soda } from "@dorkodu/soda";

export function DescriptiveItem({title, description, badge}) {
  return (
    <div class="descriptive-item">
      {(badge) ? <i class="badge">{badge}</i> : ""}
      <div>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </div>
    </div>
  );
}