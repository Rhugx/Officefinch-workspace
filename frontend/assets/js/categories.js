document.addEventListener('DOMContentLoaded', () => {
  const categoriesGrid = document.getElementById('categories-grid');
  if (!categoriesGrid) {
    console.error('Categories grid not found!');
    return;
  }

  const fetchCategories = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const categoryParam = urlParams.get('category'); // from services.js redirect

      const response = await fetch('http://localhost:5000/api/categories'); // Adjust the URL as needed***********
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const categories = await response.json();
      categoriesGrid.innerHTML = '';

      if (categories.length === 0) {
        categoriesGrid.innerHTML =
          '<p class="text-center text-gray-500 col-span-full">No categories found.</p>';
        return;
      }

      // ✅ Optional filter: show only categories relevant to the selected mainCategory
      let filtered = categories;
      if (categoryParam === 'Office & Breakroom') {
        filtered = categories.filter((c) =>
          ['Printing Media', 'Ergonomics & Seating'].includes(c.name)
        );
      } else if (categoryParam === 'IT & Electronics') {
        filtered = categories.filter((c) =>
          ['Accessories & Peripherals', 'Printer Cartridges'].includes(c.name)
        );
      } else if (categoryParam === 'Janitorial & Safety') {
        filtered = categories.filter((c) =>
          ['Accessories & Peripherals','Facility Maintenance'].includes(c.name)
        );
      }

      filtered.forEach((category) => {
        const link = document.createElement('a');
        link.href = `products.html?supplyType=${encodeURIComponent(category.name)}`;
        link.className =
          'bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] block';

        let subCategoriesHTML = '';
        if (category.subCategories?.length > 0) {
          subCategoriesHTML = `
            <ul class="mt-3 list-disc list-inside text-sm text-gray-500 space-y-1">
              ${category.subCategories.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          `;
        }

        link.innerHTML = `
          <img
            class="h-40 w-full object-cover"
            src="${category.imageUrl}"
            alt="${category.name}"
            onerror="this.onerror=null;this.src='https://placehold.co/600x400/9ca3af/FFFFFF?text=Image+Not+Found'"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900">${category.name}</h3>
            <p class="mt-2 text-gray-600 text-sm">${category.description}</p>
            ${subCategoriesHTML}
          </div>
        `;

        categoriesGrid.appendChild(link);
      });
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      categoriesGrid.innerHTML =
        '<p class="text-center text-gray-500 col-span-full">Error loading categories. Is your backend running?</p>';
    }
  };

  fetchCategories();
});
