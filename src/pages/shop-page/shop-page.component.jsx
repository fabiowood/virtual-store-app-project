import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { firestore, convertCollectionsFromSnapshotToMap } from '../../firebase/firebase.utilities';
import {createStructuredSelector} from 'reselect';
import { selectIsFetchingCollections, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { /*fetchCollectionsStartAsync, */ fetchCollectionsStart } from '../../redux/shop/shop.actions';
import './shop-page.styles.scss';

// Components Dependencies

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection-page/collection-page.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Convert the components below to new components, so that they can receive WithSpinner and display the spinner while the application is fetching the collections data, till the reducer is updated with a new state (the shop data from the back-end):

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

componentDidMount() {
  // this.props.fetchCollectionsStartAsync() => this was used with redux-thunk! Replaced by redux-saga:
  this.props.fetchCollectionsStart()
}

render() {
  const { match, /*isFetchingCollections,*/ isCollectionLoaded } = this.props;
    return (
    <section className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => ( <CollectionsOverviewWithSpinner isLoading={ !isCollectionLoaded}  {...props } /> ) } />
      <Route path={`${match.path}/:collectionId`} render={(props) => ( <CollectionPageWithSpinner isLoading={ !isCollectionLoaded } {...props } /> ) } />
    </section>
  )
 }
} 

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsFetchingCollections,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()) => this was used with redux-thunk! Replaced by redux-saga:
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

// ******** ALTERNATIVES TO WRITE ASSYNCHRONOUS FUNCTIONS - WHENEVER THERE IS NOT AN OBSERVABLE - OBSERVER PATTERN ************ //

    // componentDidMount() {
    //   const { updateCollections } = this.props;
    //   const collectionRef = firestore.collection('collections');
    //   collectionRef.get().then(collectionSnapshot => {
    //     const collectionsMap = await convertCollectionsFromSnapshotToMap(collectionSnapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({
    //       loading: false,
    //     })
    //   })
    // }

   



