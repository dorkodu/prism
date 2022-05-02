import { Soda } from "@dorkodu/soda";

//* layouts
import { IntroSection } from "../layouts/IntroSection";

//* components
import { Picture } from "../components/Picture";
import { LinkButton } from "../components/LinkButton";

//* images
import ErrorPhoto from "../../../images/opendoodles/CoffeeDoddle.svg";

export function Oops() {
  return (
    <IntroSection
      title="oops!"
      tagline="something's wrong :("
      statement="no worries, one more chance."
      picture={<Picture source={ErrorPhoto} />}
      links={[
        <LinkButton type="primary" label="back to frontpage." link="/" />,
        <LinkButton type="secondary" label="surprise?" link="https://dorkodu.com/about" />
      ]}
    />
  );
}