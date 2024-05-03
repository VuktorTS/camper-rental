import { AsvertsList } from "../components/AdvertsList/AsvertsList";
import { AsvertsFilter } from "../components/AsvertsFilter/AsvertsFilter";
import { CatalogContainer } from "./CatalogPage.styled";

export const CatalogPage = () => {
  return (
    <CatalogContainer>
      <AsvertsFilter />
      <AsvertsList />
    </CatalogContainer>
  );
};
