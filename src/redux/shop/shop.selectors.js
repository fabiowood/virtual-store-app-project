import { createSelector } from 'reselect';

// state.shop is pointing to the property 'shop' inside the RootReducer:
const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  // Below is the path from the RootReducer to the ShopReducer, where there is a 'collections' property inside the initial state:
  shop => shop.collections
);


// The COLLECTION_ID_MAP is an object, created with the purpose of finding a number, according to the Url parameter. We need to do this, because we want to find and display the correct collection, by using its id, which is a number inside our ShopReducer collections state:

// Note: with the data normalization, this object is no longer necessary, because now only need the Url parameter to find the correct property inside the shop data object, instantaneously or nearly instantaneously:

// const COLLECTION_ID_MAP={
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   women: 4,
//   men: 5  
// }

// We will create this function to pull off the collections state, so we can select the collection with the collectionParam provided (a string converted to a number using the COLLECTION_ID_MAP). This will return an object, which is the entire collection with its properties, such as the 'items' property, that contains all products related to the collection:

export const selectOneCollection = collectionParam => {
  return (
    createSelector(
     [selectShopCollections],
     collections => collections[collectionParam]
     // The .find() method was used till the moment we stored the shop data inside and array. After that, by making the data normalization, now ths shop data are stored inside objects. The performance is improved, because there is need to iterate through an entire array, but only to find directly the correct property name, instantaneously or nearly instantaneously, that matches the url parameter:

    //  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionParam])
    )
  )
}

export const selectOneCollectionToDisplay = collectionParam => {
  return (
    createSelector(
     [selectShopCollections],
     //  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionParam])
      //  collections => collections[collectionParam]

     // The .find() method was used till the moment we stored the shop data inside an array. After that, by making the data normalization, now the shop data are stored inside objects. The performance is improved, because there is need to iterate through an entire array, but only to find directly the correct property name, instantaneously or nearly instantaneously, that matches the url parameter. 
    //  But now we have changed the array to an object and this is no longer recognized by the component (CollectionOverview) which still thinks Collections is an array. To convert an object to an array, we will use Object.Keys. With this, we will have again an array of objects:

     collections => Object.keys(collections).map(key => collections[key])
    )
  )
}