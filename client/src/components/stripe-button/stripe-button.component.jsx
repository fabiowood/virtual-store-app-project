import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {

const priceInCentsForStripe = price * 100;
const publishableKey = 'pk_test_bxIFqEFOlSBXLGQkxxJcTUHm00XhXqInQA';
const onToken = token => {
  axios({
    url: 'payment',
    method: 'post',
    data: {
      amount: priceInCentsForStripe,
      token: token
    }
  }).then(response => {
    alert('Payment successfully completed');
  }).catch(error => {
    console.log('Payment error: ', error);
    alert('There was a problem with the payment. Please make sure to use the correct credit card.');
  })
}

return (
      <StripeCheckout
        label='Pay Now'
        name='Virtual Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceInCentsForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
      );
};

export default StripeCheckoutButton;

