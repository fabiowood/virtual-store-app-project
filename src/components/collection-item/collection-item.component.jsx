import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <article className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </div>
        <button>Add to Cart</button>
    </article>
  );
};

export default CollectionItem;
