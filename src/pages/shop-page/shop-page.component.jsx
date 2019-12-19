import React from 'react';
import { Route } from 'react-router-dom';
import './shop-page.styles.scss';

// Components Dependencies

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection-page/collection-page.component';

const ShopPage = ({ match }) => {
  return(
      <section className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </section>
    )
  }

export default ShopPage;