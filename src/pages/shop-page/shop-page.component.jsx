import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore, convertCollectionsFromSnapshotToMap } from '../../firebase/firebase.utilities';
import './shop-page.styles.scss';

// Components Dependencies

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection-page/collection-page.component';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends Component {

unsubscribeFromSnapshot = null;


componentDidMount() {
  const { updateCollections } = this.props;
  const collectionRef = firestore.collection('collections');
  this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async collectionSnapshot => {
    const collectionsMap = await convertCollectionsFromSnapshotToMap(collectionSnapshot);
    updateCollections(collectionsMap);
  })
}

// componentWillUnmount () {
//   this.unsubscribeFromSnapshot();
// }

render() {
  const { match } = this.props;
  return (
    <section className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </section>
  )
 }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);

// The functional component is no longer necessary, because now we want to access the shop data from firebase, by using a life cycle method from React, and this is only possible in class components:

// const ShopPage = ({ match }) => (
//   <section className="shop-page">
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </section>
// );
