import { useSelector } from "react-redux";
import { gerFavoriteSelector } from "../redux/adverts/advertsSelectors";
import { CatalogContainer } from "./CatalogPage.styled";
import { AsvertsFilter } from "../components/AsvertsFilter/AsvertsFilter";
import { AsvertsList } from "../components/AdvertsList/AsvertsList";

export const FavoritesPage = () => {
  const favorite = useSelector(gerFavoriteSelector);
  return (
    <CatalogContainer>
      <AsvertsFilter />
      <AsvertsList adverds={favorite} />
    </CatalogContainer>
  );
};
