// Cart.jsx
import PropTypes from 'prop-types'; // Import PropTypes

const Cart = ({ cartItems, onRemoveFromCart }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="p-4 bg-white shadow rounded flex items-center justify-between">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <p className="text-gray-800">${item.price}</p>
                </div>
              </div>
              {/* Remove button */}
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => onRemoveFromCart(item.id)} // Call the remove function with the item's ID
              >
                Remove
              </button>
            </div>
          ))}

          {/* Display total price */}
          <div className="mt-4 text-lg font-bold text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </div>

          {/* Checkout button */}
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

// Add PropTypes validation for cartItems and onRemoveFromCart
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired, // Add PropTypes for the remove function
};

export default Cart;
