import { nanoid } from "nanoid";
import { FilterCard } from "../FilterCard/FilterCard";
import {
  ButtonSearch,
  EquipmentBox,
  EquipmentList,
  EquipmentTitle,
  FilterContainer,
  FilterSection,
  FilterTitle,
  InputCity,
  LocationSection,
  LocationTitle,
  TypeBox,
  TypeList,
  TypeTitle,
} from "./AsvertsFilter.styled";
const equipments = [
  { icon: "icon-airConditioner", text: "AC" },
  { icon: "icon-transmission", text: "Automatic" },
  { icon: "icon-kitchen", text: "Kitchen" },
  { icon: "icon-tv", text: "TV" },
  { icon: "icon-shower", text: "Shwer/WC" },
];
const types = [
  { icon: "icon-van", text: "Van" },
  { icon: "icon-fully-integrated", text: "Fully Intergrated" },
  { icon: "icon-alcove", text: "Alcove" },
];

export const AsvertsFilter = () => {
  return (
    <FilterContainer>
      <LocationSection>
        <LocationTitle>Location</LocationTitle>
        <InputCity />
      </LocationSection>
      <FilterSection>
        <FilterTitle>Filters</FilterTitle>
        <EquipmentBox>
          <EquipmentTitle>Vehicle equipment</EquipmentTitle>
          <EquipmentList>
            {equipments.map((equipment) => (
              <FilterCard
                key={nanoid()}
                icon={equipment.icon}
                text={equipment.text}
                size="SM"
              />
            ))}
          </EquipmentList>
        </EquipmentBox>
        <TypeBox>
          <TypeTitle>Vehicle type</TypeTitle>
          <TypeList>
            {types.map((type) => (
              <FilterCard
                key={nanoid()}
                icon={type.icon}
                text={type.text}
                size="XL"
              />
            ))}
          </TypeList>
        </TypeBox>
      </FilterSection>
      <ButtonSearch type="button">Search</ButtonSearch>
    </FilterContainer>
  );
};
