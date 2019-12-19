import React from 'react';
import { connect } from 'react-redux';
import { selectOneCollection } from '../../redux/shop/shop.selectors';
import './collection-page.styles.scss';

// Components Dependencies

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ match, collection }) => {
  console.log(match);
  console.log(match.params.collectionId);
  console.log(collection);
  const { title, items } = collection;
  return(
    <section className='collection-page'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </section>
  )
}

// The function below has some different features from others: (i) it needs the props received from Route, which is nesting the CollectionPage component (see ShopPage Component); (ii) therefore, it is possible to access the 'match' object => props.match; (iii) the selectOneCollection needs to receive: the collectionId parameter (which is a string at this point => the URL parameter) and the state because, unlike other selectors, this selector will need a part of the ShopPageReducer state based on the URL parameter.

const mapStateToProps = (state, props) => {
  return (
    {
      collection: selectOneCollection (props.match.params.collectionId)(state)
    }
  )
}

export default connect(mapStateToProps)(CollectionPage);

