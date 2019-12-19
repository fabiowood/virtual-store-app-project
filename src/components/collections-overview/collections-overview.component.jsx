import React from 'react';
import { connect } from 'react-redux';
import { selectOneCollectionToDisplay } from '../../redux/shop/shop.selectors';
import { createStructuredSelector} from 'reselect';
import './collections-overview.scss';

// Components Dependencies

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections}) => {
  return (
    <section className='collections-overview'>
        {
          collections.map(({id, ...otherSectionProps}) => {
            return (
              <CollectionPreview key={id} {...otherSectionProps} />
            )
          })
        }
      
      </section>
  )
}

const mapStateToProps = createStructuredSelector({
  // collections: selectShopCollections => with data normalization, wew created a new selector, to convert our object into an array (see shop.selectors.js):
  collections: selectOneCollectionToDisplay
})

export default connect(mapStateToProps)(CollectionsOverview);