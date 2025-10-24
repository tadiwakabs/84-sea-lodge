// Load and render restaurants
fetch("src/data/restaurants.json")
    .then(res => res.json())
    .then(restaurants => {
        // Group by category
        const walking = restaurants.filter(r => r.walk);
        const driving = restaurants.filter(r => r.drive);
        const casual = restaurants.filter(r => r.casual);
        const fineDining = restaurants.filter(r => r.fineDining);
        const vegan = restaurants.filter(r => r.vegan);

        // Helper: render category with descriptions
        function renderCategory(title, list) {
            if (list.length === 0) return "";
            const items = list
                .map(
                    r => `
          <div class="p-4 border rounded-lg hover:shadow-md transition hover:bg-gray-50">
            <h3 class="font-semibold text-lg text-blue-800">${r.name}</h3>
            <p class="text-gray-800">${r.description}</p>
          </div>
        `
                )
                .join("");

            return `
        <div class="mb-10">
          <h2 class="text-2xl font-semibold text-blue-700 mb-4 text-center">${title}</h2>
          <div class="grid md:grid-cols-2 gap-4">${items}</div>
        </div>
      `;
        }

        // Helper: render Quick Suggestions (only names, grouped)
        function renderQuickSuggestions() {
            const categories = [
                { title: "Within Walking Distance", data: walking },
                { title: "Short Drive", data: driving },
                { title: "Casual & Family-Friendly", data: casual },
                { title: "Fine Dining & Ocean View", data: fineDining },
                { title: "Vegan & Healthy Eats", data: vegan }
            ];

            const suggestions = categories
                .map(cat => {
                    const sample = cat.data.slice(0, 4); // show up to 4 items
                    if (sample.length === 0) return "";
                    const items = sample
                        .map(r => `<li class="text-blue-800 font-medium">${r.name}</li>`)
                        .join("");
                    return `
            <div class="p-4 border rounded-lg hover:shadow-md transition hover:bg-gray-50">
              <h3 class="font-semibold text-lg text-blue-700 mb-2">${cat.title}</h3>
              <ul class="list-disc list-inside text-gray-700 space-y-1">${items}</ul>
            </div>
          `;
                })
                .join("");

            return `
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-blue-800 mb-6 text-center">Quick Suggestions</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">${suggestions}</div>
        </div>
      `;
        }

        // Build page content
        const content = `
      ${renderQuickSuggestions()}
      ${renderCategory("Within Walking Distance (0 – 10 minutes)", walking)}
      ${renderCategory("Short Drive (5 – 15 minutes)", driving)}
      ${renderCategory("Casual & Family-Friendly Spots", casual)}
      ${renderCategory("Fine Dining & Ocean View Experiences", fineDining)}
      ${renderCategory("Vegan & Healthy Eats", vegan)}
    `;

        // Insert into page
        const container = document.getElementById("restaurantsSection");
        container.innerHTML = content;
    })
    .catch(err => console.error("Error loading restaurants:", err));
