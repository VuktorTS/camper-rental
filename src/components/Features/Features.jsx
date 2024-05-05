import { TypeCardItem } from "../TypeCardItem/TypeCardItem";
import {
  DetailItem,
  DetailsList,
  FeaturesContainr,
  TitleDetails,
  TypeCartList,
} from "./Features.styled";
import icons from "../../img/sprite.svg";
import { categories } from "../variables/categories";
import { details } from "../variables/details";

export const Features = ({ adverd }) => {
  return (
    <FeaturesContainr>
      <TypeCartList>
        <TypeCardItem icon="icon-adults" text="adults" value={adverd.adults} />
        <TypeCardItem icon="icon-transmission" text="Automatic" />
        <TypeCardItem icon="icon-engine" text="Petrol" />
        {categories.map((category) => (
          <TypeCardItem
            key={category}
            icon={category}
            value={adverd.details[category] > 1 && adverd.details[category]}
            text={category.charAt(0).toUpperCase() + category.slice(1)}
          />
        ))}
      </TypeCartList>
      <TitleDetails>Vehicle details</TitleDetails>
      <DetailsList>
        {details.map((detail) => (
          <DetailItem key={detail}>
            <span>{detail}</span>
            <span>{adverd[detail]}</span>
          </DetailItem>
        ))}
      </DetailsList>
    </FeaturesContainr>
  );
};