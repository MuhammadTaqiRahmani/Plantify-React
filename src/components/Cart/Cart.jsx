// Cart.jsx
import PropTypes from 'prop-types'; // Import PropTypes

const Cart = ({ cartItems }) => {
  return (
    <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-4 space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="p-4 bg-white shadow rounded flex items-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-800">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Add PropTypes validation for cartItems
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cart;
