// CartPage.jsx
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import PropTypes from 'prop-types';

const CartPage = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <Navbar />
      {/* Pass the cart items and remove function */}
      <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
      <Footer />
    </div>
  );
};

// Add PropTypes validation for cartItems and onRemoveFromCart
CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartPage;
// Cart.jsx