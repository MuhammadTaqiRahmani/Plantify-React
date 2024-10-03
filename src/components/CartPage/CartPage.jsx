// CartPage.jsx
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import PropTypes from 'prop-types'; // Import PropTypes

const CartPage = ({ cartItems }) => {
  return (
    <div>
      <Navbar />
      <Cart cartItems={cartItems} /> {/* Pass cart items to the Cart component */}
      <Footer />
    </div>
  );
};

// Add PropTypes validation for cartItems
CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CartPage;
