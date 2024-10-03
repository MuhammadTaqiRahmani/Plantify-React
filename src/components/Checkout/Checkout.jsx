import PropTypes from 'prop-types'; // Import PropTypes
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Checkout = ({ cartItems, onClearCart }) => {
  // Calculate total quantity and total price
  const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  // Handle order placement (clear the cart after placing the order)
  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    onClearCart(); // Clear the cart after placing the order
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
        
        {/* Display total number of items */}
        <p className="mt-4 text-lg">Total Items: {totalItems}</p>

        {/* Display total price */}
        <p className="text-lg">Total Price: ${totalPrice.toFixed(2)}</p>

        {/* Place Order Button */}
        <button 
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" 
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
      <Footer />
    </div>
  );
};

// Add PropTypes validation for cartItems and onClearCart
Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number, // Optional, as not all items may have a quantity field
    })
  ).isRequired,
  onClearCart: PropTypes.func.isRequired, // Add PropTypes for the clear cart function
};

export default Checkout;
