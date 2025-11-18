// document.addEventListener('DOMContentLoaded', () => {
//   const productsGrid = document.getElementById('products-grid');
//   const pageTitle = document.getElementById('page-title');

//   if (!productsGrid || !pageTitle) {
//     console.error('Products grid or title not found!');
//     return;
//   }

//   const fetchProducts = async () => {
//     try {
//       const urlParams = new URLSearchParams(window.location.search);
//       const category = urlParams.get('category'); // Coming from services.js

//       let queryString = '';
//       let titleText = 'All Products';

//       if (category) {
//         queryString = `?category=${encodeURIComponent(category)}`;
//         titleText = `Products for: ${category}`;
//       }

//       // Update page title dynamically
//       pageTitle.textContent = titleText;

//       // Fetch products based on category (or all if none)
//       const response = await fetch(`http://localhost:5000/api/products${queryString}`);
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//       const products = await response.json();
//       productsGrid.innerHTML = '';

//       if (products.length === 0) {
//         productsGrid.innerHTML =
//           '<p class="text-center text-gray-500 col-span-full">No products found for this category.</p>';
//         return;
//       }

//       products.forEach((product) => {
//         const card = document.createElement('div');
//         card.className =
//           'bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:scale-[1.03]';

//         card.innerHTML = `
//           <img
//             class="h-48 w-full object-cover"
//             src="${product.imageUrl}"
//             alt="${product.name}"
//             onerror="this.onerror=null;this.src='https://placehold.co/600x400/9ca3af/FFFFFF?text=Image+Not+Found'"
//           />
//           <div class="p-6">
//             <h3 class="text-xl font-semibold text-gray-900">${product.name}</h3>
//             <p class="mt-2 text-gray-600 text-sm">${product.description}</p>
//           </div>
//         `;
//         productsGrid.appendChild(card);
//       });
//     } catch (error) {
//       console.error('Failed to fetch products:', error);
//       productsGrid.innerHTML =
//         '<p class="text-center text-gray-500 col-span-full">Error loading products. Is your backend running?</p>';
//     }
//   };

//   fetchProducts();
// });

document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('products-grid');
  const pageTitle = document.getElementById('page-title');

  if (!productsGrid || !pageTitle) {
    console.error('Products grid or title not found!');
    return;
  }

  const fetchProducts = async () => {
    try {
      // Get both parameters from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category');
      const supplyType = urlParams.get('supplyType');

      // Build the query string dynamically
      const query = new URLSearchParams();
      if (category) query.append('category', category);
      if (supplyType) query.append('supplyType', supplyType);

      const queryString = query.toString() ? `?${query.toString()}` : '';

      // Update page title
      let titleText = 'All Products';
      if (category && supplyType) {
        titleText = `${supplyType} Products in ${category}`;
      } else if (category) {
        titleText = `Products for: ${category}`;
      }
      pageTitle.textContent = titleText;

      // Fetch products based on category/supplyType
      const response = await fetch(`https://officefinch-workspace.onrender.com/api/products${queryString}`); // Adjust the URL as needed***********
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const products = await response.json();
      productsGrid.innerHTML = '';

      if (products.length === 0) {
        productsGrid.innerHTML =
          '<p class="text-center text-gray-500 col-span-full">No products found for this selection.</p>';
        return;
      }

      // Render products dynamically
      products.forEach((product) => {
        const card = document.createElement('div');
        card.className =
          'bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:scale-[1.03]';

        card.innerHTML = `
          <img
            class="h-48 w-full object-cover"
            src="${product.imageUrl}"
            alt="${product.name}"
            onerror="this.onerror=null;this.src='https://placehold.co/600x400/9ca3af/FFFFFF?text=Image+Not+Found'"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900">${product.name}</h3>
            <p class="mt-2 text-gray-600 text-sm">${product.description}</p>
          </div>
        `;
        productsGrid.appendChild(card);
      });
    } catch (error) {
      console.error('Failed to fetch products:', error);
      productsGrid.innerHTML =
        '<p class="text-center text-gray-500 col-span-full">Error loading products. Is your backend running?</p>';
    }
  };

  fetchProducts();
});
