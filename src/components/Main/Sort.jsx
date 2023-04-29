import React, { useRef, useState } from 'react';

const Sort = React.memo(function Sort({ sortType, activeSortType, setSortType }) {
  const [visibleState, visibleSetState] = useState(false);

  const setActiveSortType = (type) => {
    setSortType(type);
    visibleSetState(false);
  };

  //Слушатель видимости списка сортировок

  const sortRef = useRef(null);
  React.useEffect(() => {
    const onClick = (e) => sortRef.current.contains(e.target) || visibleSetState(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const toggleVision = () => {
    visibleSetState(!visibleState);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visibleState ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVision}>
          {sortType.find((obj) => obj.type === activeSortType.type).name}
        </span>
      </div>
      {visibleState && (
        <div className="sort__popup">
          <ul>
            {sortType.map((obj, id) => (
              <li
                className={activeSortType.type === obj.type ? 'active' : ''}
                key={`${obj.type}__${id}`}
                onClick={() => setActiveSortType(obj)}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
