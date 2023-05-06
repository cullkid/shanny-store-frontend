import React from 'react';
import './List.scss';
import Card from '../card product/CardProduct';
import useFetch from '../../hooks/useFetch';
import CardProduct from '../card product/CardProduct';

const CardCategory = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? 'loading'
        : data?.map((item) => <CardProduct item={item} key={item.id} />)}
    </div>
  );
};

export default CardCategory;
