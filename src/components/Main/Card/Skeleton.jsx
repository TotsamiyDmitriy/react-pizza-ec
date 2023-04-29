import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="135" cy="100" r="100" />
    <rect x="1" y="225" rx="6" ry="6" width="280" height="32" />
    <rect x="2" y="280" rx="6" ry="6" width="280" height="80" />
    <rect x="3" y="380" rx="6" ry="6" width="100" height="46" />
    <rect x="150" y="380" rx="23" ry="23" width="130" height="46" />
  </ContentLoader>
);

export default CardLoader;
