// import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery_BG.css';

export const Gallery_BG = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const products = [
    { id: 1, name: 'Lexicon Luxe | Plant', price: 10, image: 'https://theplantpoint.co.uk/cdn/shop/files/aglaonemamria1_800x.jpg?v=1689159941' },
    { id: 2, name: 'Adjective Attire | Plant', price: 12, image: 'https://www.ourhouseplants.com/imgs-content/Aglaonema-Chinese-Evergreen-Maria.jpg' },
    { id: 3, name: 'ThreadCraft Vibes | Plant', price: 14, image: 'https://www.mountjoyflowers.com/media/images/cache/aa03633ca3feaeed2f8d2b153edcfe0b.330x370.jpg' },
    { id: 4, name: 'Botanic Bliss | Plant', price: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWML8qVzS8g5m3bjKPfjpm1wAfIjhxg6jSkINVGwziDbT6_nX1NRkbKgMCoQNl8_hKAc&usqp=CAU' },
    { id: 5, name: 'Verbal Vogue Tees | Plant', price: 15, image: 'https://image.floranext.com/instances/shop_flowersonbroadstreet_com/catalog/product/f/l/flowersonbroad-83_65ba79f3962ed.jpg.webp?h=700&w=700&r=255&g=255&b=255' },
    { id: 6, name: 'Jargon Jungle | Plant', price: 14, image: 'https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1695431058/vendor/9236/catalog/product/2/0/20210824100542_file_61256d3608218_61256d88b5299._64e0dba07672b.jpg' },
];


  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product detail page with the product ID
  };

  return (
    <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12" id="for-margin">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id='for-bottommargin'>
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
               onClick={() => handleProductClick(product.id)}> {/* Call the function on click */}
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover object-top" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">${product.price}</h4>
                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
