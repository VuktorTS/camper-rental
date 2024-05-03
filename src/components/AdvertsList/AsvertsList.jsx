import { useDispatch, useSelector } from "react-redux";
import { AdverdsCardItem } from "../AdverdsCardItem/AdverdsCardItem";
import { AdverdsContainer, List, ButtonLoadMore } from "./AdvertsList.styled";
import { advertsSelector } from "../../redux/adverts/advertsSelectors";
import { useEffect, useState } from "react";
import { getAdverts } from "../../redux/adverts/advertsOperations";

export const AsvertsList = () => {
  const adverds = useSelector(advertsSelector);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts(page));
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <AdverdsContainer>
      <List>
        {adverds.length &&
          adverds.map((adverd) => (
            <AdverdsCardItem key={adverd._id} adverd={adverd} />
          ))}
      </List>
      <ButtonLoadMore onClick={handleClick}>Loade more</ButtonLoadMore>
    </AdverdsContainer>
  );
};
