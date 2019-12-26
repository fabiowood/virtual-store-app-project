import React from 'react';
import { Route } from 'react-router-dom';
import './shop-page.styles.scss';

// Components Dependencies

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection-page/collection-page.component';

const ShopPage = ({ match }) => (
  <section className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </section>
);

export default ShopPage;
