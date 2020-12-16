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
    alert('Pagamento efetuado com sucesso');
  }).catch(error => {
    console.log('Payment error: ', error);
    alert('Houve um problema com o pagamento. Por gentileza, verifique se os dados de seu cartão de crédito estão corretos.');
  })
}

return (
      <StripeCheckout
        label='Pagar Agora'
        name='Virtual Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Seu total é $${price}`}
        amount={priceInCentsForStripe}
        panelLabel='Pagar Agora'
        token={onToken}
        stripeKey={publishableKey}
      />
      );
};

export default StripeCheckoutButton;

