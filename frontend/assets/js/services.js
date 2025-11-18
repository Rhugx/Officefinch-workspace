// document.addEventListener('DOMContentLoaded', () => {
//   const servicesGrid = document.getElementById('services-grid');
//   if (!servicesGrid) {
//     console.error('Services grid not found!');
//     return;
//   }

//   const fetchServices = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/services');
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//       const data = await response.json();
//       const services = data.data || [];
//       servicesGrid.innerHTML = '';

//       if (services.length === 0) {
//         servicesGrid.innerHTML =
//           '<p class="text-center text-gray-500 col-span-full">No services found.</p>';
//         return;
//       }

//       services.forEach((service) => {
//         // ✅ Make the entire card clickable and link directly to products.html
//         const link = document.createElement('a');
//         link.href = `products.html?category=${encodeURIComponent(service.mainCategory)}`;
//         link.className =
//           'bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] block';

//         link.innerHTML = `
//           <div class="p-6">
//             <div class="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-orange text-white mb-4">
//               <i class="fas fa-${service.icon} text-2xl"></i>
//             </div>
//             <h3 class="text-xl font-semibold text-gray-900">${service.mainCategory}</h3>
//             <p class="mt-2 text-gray-600 text-sm">${service.description}</p>
//             <ul class="mt-3 list-disc list-inside text-sm text-gray-500 space-y-1">
//               ${service.subCategories.map((s) => `<li>${s}</li>`).join('')}
//             </ul>
//           </div>
//         `;

//         servicesGrid.appendChild(link);
//       });
//     } catch (error) {
//       console.error('Failed to fetch services:', error);
//       servicesGrid.innerHTML =
//         '<p class="text-center text-gray-500 col-span-full">Error loading services. Check your backend connection.</p>';
//     }
//   };

//   fetchServices();
// });


document.addEventListener('DOMContentLoaded', () => {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) {
    console.error('Services grid not found!');
    return;
  }

  const fetchServices = async () => {
    try {
      const response = await fetch('https://officefinch-workspace.onrender.com/api/services');// Adjust the URL as needed***********
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const services = data.data || [];
      servicesGrid.innerHTML = '';

      if (services.length === 0) {
        servicesGrid.innerHTML =
          '<p class="text-center text-gray-500 col-span-full">No services found.</p>';
        return;
      }

      services.forEach((service) => {
        // ✅ Make the whole card clickable (linked to products.html by main category)
        const card = document.createElement('a');
        card.href = `products.html?category=${encodeURIComponent(service.mainCategory)}`;
        card.className =
          'bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] block p-6 cursor-pointer';

        // Card inner HTML (no clickable subcategory links)
        card.innerHTML = `
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-orange text-white mb-4">
            <i class="fas fa-${service.icon} text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">${service.mainCategory}</h3>
          <p class="mt-2 text-gray-600 text-sm">${service.description}</p>
          <ul class="mt-3 list-disc list-inside text-sm text-gray-500 space-y-1">
            ${service.subCategories.map((s) => `<li>${s}</li>`).join('')}
          </ul>
        `;

        servicesGrid.appendChild(card);
      });
    } catch (error) {
      console.error('Failed to fetch services:', error);
      servicesGrid.innerHTML =
        '<p class="text-center text-gray-500 col-span-full">Error loading services. Check your backend connection.</p>';
    }
  };

  fetchServices();
});


