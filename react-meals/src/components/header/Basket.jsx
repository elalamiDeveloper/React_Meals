import { useState } from 'react';
import styled from 'styled-components';

import COLORS from '../../utils/contants/colors';

import { SlBasket } from '../UI/Icons';

const BasketContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding: 1.5rem 3rem;
  background: ${COLORS.primaryColor800};
  border-radius: 50px;
  cursor: pointer;

  .basket-icon {
    font-size: 2.6rem;
  }

  .basket-text {
    font-size: 1.8rem;
  }

  .products-nbr-in-basket {
    font-size: 1.8rem;
    font-weight: 700;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    background: ${COLORS.primaryColor500};
  }
`;

const Basket = () => {
  const [basketListProductsModal, setBasketListProductsModal] = useState(false);

  const showBasketListProductModalHandler = () => {
    console.log('SHOW MODAL');
  };

  return (
    <BasketContainer onClick={showBasketListProductModalHandler}>
      <SlBasket className="basket-icon" />
      <span className="basket-text">Your Cart</span>
      <span className="products-nbr-in-basket">1</span>
    </BasketContainer>
  );
};
export default Basket;
