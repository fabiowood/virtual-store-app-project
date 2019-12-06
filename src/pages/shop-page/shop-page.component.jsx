import React, { Component } from 'react';
import './shop-page.styles.scss';
import SHOP_DATA from './shop.data';

// Components Dependencies

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    console.log(SHOP_DATA);
    this.state = {
      collections: SHOP_DATA,
    }    
  }
  render() {
    const { collections } = this.state;
    return(
      <section className='shop-page'>
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
}


export default ShopPage;