import { getAllCampars } from "./services/api";

export const App = () => {
  console.log(getAllCampars());
  return <div>Hello</div>;
};
