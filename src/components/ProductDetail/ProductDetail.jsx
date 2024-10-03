// ProductDetail.jsx
import { useParams,  useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types'; // Import PropTypes
import './ProductDetail.css';

const ProductDetail = ({ onAddToCart }) => {  
  const { id } = useParams();
  const navigate = useNavigate(); // Use navigate hook

  const products = [
    { id: 1, name: 'Lexicon Luxe | Plant', price: 10, image: 'https://theplantpoint.co.uk/cdn/shop/files/aglaonemamria1_800x.jpg?v=1689159941', description: 'Beautiful plant for indoor décor' },
    { id: 2, name: 'Adjective Attire | Plant', price: 12, image: 'https://www.ourhouseplants.com/imgs-content/Aglaonema-Chinese-Evergreen-Maria.jpg', description: 'Evergreen plant with vibrant colors' },
    { id: 3, name: 'ThreadCraft Vibes | Plant', price: 14, image: 'https://www.mountjoyflowers.com/media/images/cache/aa03633ca3feaeed2f8d2b153edcfe0b.330x370.jpg', description: 'Perfect for home or office décor' },
    { id: 4, name: 'Adjective Attire | Plant', price: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWML8qVzS8g5m3bjKPfjpm1wAfIjhxg6jSkINVGwziDbT6_nX1NRkbKgMCoQNl8_hKAc&usqp=CAU' },
    { id: 5, name: 'Verbal Vogue Tees | Plant', price: 15, image: 'https://image.floranext.com/instances/shop_flowersonbroadstreet_com/catalog/product/f/l/flowersonbroad-83_65ba79f3962ed.jpg.webp?h=700&w=700&r=255&g=255&b=255' },
    { id: 6, name: 'Jargon Jungle | Plant', price: 14, image: 'https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1695431058/vendor/9236/catalog/product/2/0/20210824100542_file_61256d3608218_61256d88b5299._64e0dba07672b.jpg' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCartAndNavigate = () => {
    onAddToCart(product); // Add the product to the cart
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <>
      <Navbar />

      <div className="font-sans">
        <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12" id='margins'>

            {/* Product Image Section */}
            <div className="w-full lg:sticky top-0 sm:flex gap-2">
              <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
              </div>
              {/* Product image dynamically loaded */}
              <img src={product.image} alt={product.name} className="w-4/5 rounded-md object-cover" />
            </div>

            {/* Product Details Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>

              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">${product.price}</p>
                <p className="text-gray-400 text-xl">
                  <strike>$16</strike>
                  <span className="text-sm ml-1.5">Tax included</span>
                </p>
              </div>

              {/* Reviews Section */}
              <div className="flex space-x-2 mt-4">
                {/* SVG for stars */}
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>

              {/* Sizes Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {['SM', 'MD', 'LG', 'XL'].map(size => (
                    <button key={size} type="button" className="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button type="button" className="w-full mt-8 px-6 py-3 bg-green-600 hover:border-green-600 hover:bg-[#fff] text-white hover:text-green-600 text-sm font-semibold rounded-md border  border-transparent" onClick={handleAddToCartAndNavigate}>
                Add to cart
              </button>

              {/* Product Description Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">About the item</h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                  <li>{product.description}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Add PropTypes validation for onAddToCart
ProductDetail.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetail;
