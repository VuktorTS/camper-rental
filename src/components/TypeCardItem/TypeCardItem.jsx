import icons from "../../img/sprite.svg";
export const TypeCardItem = ({ icon, value = "", text }) => {
  return (
    <li>
      <svg>
        <use href={`${icons}#${icon}`}></use>
      </svg>
      {value} {text}
    </li>
  );
};
