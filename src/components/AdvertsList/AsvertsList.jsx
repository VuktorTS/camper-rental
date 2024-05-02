import { useDispatch, useSelector } from "react-redux";
import { AdverdsCardItem } from "../AdverdsCardItem/AdverdsCardItem";
import { List } from "./AdvertsList.styled";
import { advertsSelector } from "../../redux/adverts/advertsSelectors";
import { useEffect } from "react";
import { getAdverts } from "../../redux/adverts/advertsOperations";
export const AsvertsList = () => {
  const adverds = useSelector(advertsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverts(1));
  }, []);
  return (
    <List>
      {adverds.length &&
        adverds.map((adverd) => (
          <AdverdsCardItem key={adverd._id} adverd={adverd} />
        ))}
    </List>
  );
};
