import React from 'react';
import { useSelector } from 'react-redux';

const Categories = React.memo(function Categories({ items, onSelectCategory }) {
  const button = useSelector(({ filters }) => filters.category);

  return (
    <div className="categories">
      <ul>
        <li className={button === null ? 'active' : ''} onClick={() => onSelectCategory(null)}>
          Все
        </li>
        {items.map((obj, id) => (
          <li
            className={button === id ? 'active' : ''}
            key={`${obj.name}__${id}`}
            onClick={() => onSelectCategory(id)}>
            {obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
