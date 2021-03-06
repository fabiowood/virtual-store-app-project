import React from 'react';
import './collection-preview.styles.scss';

// Components Dependencies

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  return (
    <section className='collection-preview'>
      <h1 className='title'>{ title.toUpperCase() }</h1>
      <div className='preview'>
      {
        items.filter((item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item} /> )
      }
      </div>
    </section>
  )
}

export default CollectionPreview;