import React from "react";
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import "./collection-item.styles.scss";

// Components Dependencies

import CustomButton from '../custom-button/custom-button.component';


const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
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
        <CustomButton hoverAddToCart onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </article>
  );
};

// Whenever that is an event (a click button), we will call the addItem() function. This function will receive the clicked item as an argument and then dispatch the addItem() action creator. This action that returns is an object, with the type ADD_ITEM_TO_CART and the payload as 'item', which is the actual item chosen by the user to be added to the cart. 

// This object will then be passed to the Store, which will then trigger the redux flow, changing the state and making DOM updates.

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
