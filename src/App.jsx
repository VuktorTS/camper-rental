import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "./redux/adverts/advertsOperations";
import { advertsSelector } from "./redux/adverts/advertsSelectors";

export const App = () => {
  const dispatch = useDispatch();
  const result = useSelector(advertsSelector);
  console.log("🚀 ~ App ~ result:", result);
  useEffect(() => {
    dispatch(getAdverts(3));
  }, []);

  return <div>Hello</div>;
};
