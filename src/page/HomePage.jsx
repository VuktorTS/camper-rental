import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAdverts } from "../redux/adverts/advertsOperations";

export const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverts(1));
  });
  return <div>Home Page</div>;
};
