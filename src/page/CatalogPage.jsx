import { useDispatch, useSelector } from "react-redux";
import { AsvertsList } from "../components/AdvertsList/AsvertsList";
import { AsvertsFilter } from "../components/AsvertsFilter/AsvertsFilter";
import {
  ButtonLoadMore,
  CatalogContainer,
  ListContainder,
} from "./CatalogPage.styled";
import { useEffect, useState } from "react";
import { advertsSelector } from "../redux/adverts/advertsSelectors";
import { getAdverts } from "../redux/adverts/advertsOperations";

export const CatalogPage = () => {
  const adverds = useSelector(advertsSelector);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

useEffect(() => {
//const controller = new AbortController();
//fetch(url, { controller })
//.then(data => {
// Обработка данных
//});
//return () => {
//controller.abort();
//};
//}, []);
//Создает контроллер отмены
//внутри эффекта
//Не забудьте передать
//контроллер отмены
//в функцию fetch
//В функции очистки мы запускаем контроллер
//отмены. Если запрос уже прошел, то при попытке
//отмены ничего не произойдет
  
  useEffect(() => {
    dispatch(getAdverts(page));
  }, [dispatch, page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <CatalogContainer>
      {adverds.length > 0 && (
        <>
          <AsvertsFilter />
          <ListContainder>
            <AsvertsList adverds={adverds} />
            <ButtonLoadMore onClick={handleClick}>Loade more</ButtonLoadMore>
          </ListContainder>
        </>
      )}
    </CatalogContainer>
  );
};
