import React from 'react';
// destructuring
const Figure = ({imageUrl, name, description, date, tag}) => {
  return (
    <figure>
      <img
        src={imageUrl}
        alt={name} />
      <figcaption>{`${description} ${date} ${tag}`}</figcaption>
    </figure>
  );
}

export default Figure;
