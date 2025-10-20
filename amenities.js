// Filtering system for amenities
const amenities = [
    {
        // Amenity
        name: "Beach Access",
        featured: true,
        category: "Location Features",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide text-gray-600 text-gray-600 lucide-waves">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
      </svg>
    `,
    },

    {
        // Amenity
        name: "Hot Water",
        featured: true,
        category: "Comfort & Essentials",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide text-gray-600 lucide-shower-head">
        <path d="m4 4 2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01"/>
        <path d="M10 16v.01"/><path d="M13 13v.01"/><path d="M16 10v.01"/><path d="M11 20v.01"/><path d="M17 14v.01"/>
        <path d="M20 11v.01"/>
      </svg>
    `,
    },

    {
        // Amenity
        name: "Free Washer",
        featured: true,
        category: "Comfort & Essentials",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide text-gray-600 lucide-washing-machine">
        <path d="M3 6h3"/>
        <path d="M17 6h.01"/>
        <rect width="18" height="20" x="3" y="2" rx="2"/>
        <circle cx="12" cy="13" r="5"/>
        <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"/>
      </svg>
    `,
    },

    {
        // Amenity
        name: "Free Dryer",
        featured: true,
        category: "Comfort & Essentials",
        icon: `
      <svg fill="#4B5563" viewBox="0 0 50 50"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3C7.355 3 6 4.355 6 6V44C6 45.645 7.355 47 9 47H41C42.645 47 44 45.645 44 44V6C44 4.355 42.645 3 41 3H9Z
             M31 8A2 2 0 1 0 33 10A2 2 0 0 0 31 8ZM37 8A2 2 0 1 0 39 10A2 2 0 0 0 37 8ZM25 15C18.385 15 13 20.385 13 27C13 33.615 18.385 39 25 39C31.614 39 37 33.616 37 27C37 20.51 31.796 15.272 25.355 15.072Z"/>
      </svg>
    `,
    },

    {
        // Amenity
        name: "Bed Linens",
        featured: true,
        category: "Comfort & Essentials",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide text-gray-600 lucide-bed-double">
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/>
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/>
        <path d="M12 4v6"/>
        <path d="M2 18h20"/>
      </svg>
    `,
    },

    {
        // Amenity
        name: "Iron",
        featured: true,
        category: "Comfort & Essentials",
        icon: `
      <svg fill="#4B5563" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512">
        <path d="M503.572,387.533c-4.975-4.975-11.453-7.896-18.409-8.356l-12.72-61.654c-0.924-4.483-5.31-7.366-9.791-6.442..."/>
      </svg>
    `,
    },

    {
        // Amenity
        name: "Closet",
        featured: true,
        category: "Comfort & Essentials",
        icon: ``,
    },

    {
        // Amenity
        name: "Safe",
        category: "Home Safety",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide text-gray-600 lucide-vault">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    `,
    },

    {
        // Amenity
        name: "TV",
        featured: true,
        category: "Location Features",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="lucide text-gray-600 lucide-tv">
        <path d="m17 2-5 5-5-5"/>
        <rect width="20" height="15" x="2" y="7" rx="2"/>
      </svg>
    `,
    },

    {
        // Amenity
        name: "Air Conditioning",
        featured: false,
        category: "Comfort & Essentials",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-air-vent-icon lucide-air-vent"><path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"/><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M6.6 15.572A2 2 0 1 0 10 17v-5"/></svg>`
    },

    {
        // Amenity
        name: "Ceiling Fans",
        featured: false,
        category: "Comfort & Essentials",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-fan-icon lucide-fan"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/></svg>`
    },

    {
        // Amenity
        name: "Smoke Alarm",
        featured: false,
        category: "Home Safety",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-alarm-smoke-icon lucide-alarm-smoke"><path d="M11 21c0-2.5 2-2.5 2-5"/><path d="M16 21c0-2.5 2-2.5 2-5"/><path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"/><path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"/><path d="M6 21c0-2.5 2-2.5 2-5"/></svg>`
    },

    {
        // Amenity
        name: "Carbon Monoxide Alarm",
        featured: false,
        category: "Home Safety",
        icon: `<svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30 14.75C30.552 14.75 31 15.198 31 15.75C31 16.302 30.552 16.75 30 16.75C29.448 16.75 29 16.302 29 15.75C29 15.198 29.448 14.75 30 14.75Z" fill="#4b5563"></path> <path d="M23 8.75C30.732 8.75 37 15.018 37 22.75C37 30.482 30.732 36.75 23 36.75C15.268 36.75 9 30.482 9 22.75C9 15.018 15.268 8.75 23 8.75Z" stroke="#4b5563" stroke-width="2"></path> <path d="M27.889 23.75C27.491 25.703 25.957 27.246 24 27.644V29.672C24.089 29.659 24.178 29.651 24.266 29.635C27.146 29.109 29.411 26.816 29.901 23.929C29.911 23.87 29.908 23.809 29.916 23.75H27.889Z" fill="#4b5563"></path> <path d="M29.904 21.581C29.408 18.635 27.094 16.329 24.147 15.843C24.099 15.835 24.048 15.839 24 15.832V17.861C25.961 18.259 27.492 19.788 27.89 21.75H29.918C29.91 21.694 29.913 21.636 29.904 21.581Z" fill="#4b5563"></path> <path d="M22 27.639C20.041 27.24 18.508 25.712 18.11 23.75H16.086C16.095 23.815 16.092 23.882 16.103 23.947C16.608 26.875 18.916 29.169 21.846 29.655C21.896 29.663 21.949 29.661 22 29.668V27.639Z" fill="#4b5563"></path> <path d="M18.113 21.75C18.511 19.795 20.036 18.255 22 17.856V15.84C21.908 15.853 21.811 15.85 21.72 15.867C18.802 16.407 16.537 18.739 16.082 21.673C16.078 21.698 16.08 21.724 16.076 21.75H18.113Z" fill="#4b5563"></path> <path d="M23 20.75C24.105 20.75 25 21.645 25 22.75C25 23.855 24.105 24.75 23 24.75C21.895 24.75 21 23.855 21 22.75C21 21.645 21.895 20.75 23 20.75Z" stroke="#4b5563" stroke-width="2"></path> </g></svg>`
    },

    {
        // Amenity
        name: "Wifi",
        featured: false,
        category: "Location Features",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n" +
            "                 stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
            "                 class=\"lucide lucide-wifi-icon lucide-wifi text-gray-600\">\"\n" +
            "                >\n" +
            "                <path d=\"M12 20h.01\"/>\n" +
            "                <path d=\"M2 8.82a15 15 0 0 1 20 0\"/>\n" +
            "                <path d=\"M5 12.859a10 10 0 0 1 14 0\"/>\n" +
            "                <path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/>\n" +
            "            </svg>"
    },

    {
        // Amenity
        name: "Kitchen",
        featured: false,
        category: "Kitchen and Dining",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n" +
            "                 stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
            "                 class=\"lucide lucide-utensils-crossed-icon lucide-utensils-crossed text-gray-600\">\"\n" +
            "                >\n" +
            "                <path d=\"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8\"/>\n" +
            "                <path d=\"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7\"/>\n" +
            "                <path d=\"m2.1 21.8 6.4-6.3\"/>\n" +
            "                <path d=\"m19 5-7 7\"/>\n" +
            "            </svg>"
    },

    {
        // Amenity
        name: "Refrigerator",
        featured: false,
        category: "Kitchen and Dining",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-refrigerator-icon lucide-refrigerator"><path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"/><path d="M5 10h14"/><path d="M15 7v6"/></svg>`
    },

    {
        // Amenity
        name: "Microwave",
        featured: false,
        category: "Kitchen and Dining",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-microwave-icon lucide-microwave"><rect width="20" height="15" x="2" y="4" rx="2"/><rect width="8" height="7" x="6" y="8" rx="1"/><path d="M18 8v7"/><path d="M6 19v2"/><path d="M18 19v2"/></svg>`
    },

    {
        // Amenity
        name: "Dishwasher",
        featured: false,
        category: "Kitchen and Dining",
        icon: `<svg fill="#4B5563" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.8125 3C5.335938 3.089844 4.992188 3.511719 5 4L5 46C5 46.550781 5.449219 47 6 47L44 47C44.550781 47 45 46.550781 45 46L45 4C45 3.449219 44.550781 3 44 3L6 3C5.96875 3 5.9375 3 5.90625 3C5.875 3 5.84375 3 5.8125 3 Z M 7 5L43 5L43 13L7 13 Z M 27 7C25.894531 7 25 7.894531 25 9C25 10.105469 25.894531 11 27 11C28.105469 11 29 10.105469 29 9C29 7.894531 28.105469 7 27 7 Z M 33 7C31.894531 7 31 7.894531 31 9C31 10.105469 31.894531 11 33 11C34.105469 11 35 10.105469 35 9C35 7.894531 34.105469 7 33 7 Z M 39 7C37.894531 7 37 7.894531 37 9C37 10.105469 37.894531 11 39 11C40.105469 11 41 10.105469 41 9C41 7.894531 40.105469 7 39 7 Z M 7 15L43 15L43 45L7 45 Z M 27 19L27 41L29 41L29 38.90625C31.269531 38.4375 33 36.402344 33 34L33 26C33 23.597656 31.269531 21.5625 29 21.09375L29 19 Z M 35 19L35 41L37 41L37 38.90625C39.269531 38.4375 41 36.402344 41 34L41 26C41 23.597656 39.269531 21.5625 37 21.09375L37 19 Z M 29 23.40625C30.109375 23.847656 31 24.734375 31 26L31 34C31 35.265625 30.109375 36.152344 29 36.59375 Z M 37 23.40625C38.109375 23.847656 39 24.734375 39 26L39 34C39 35.265625 38.109375 36.152344 37 36.59375 Z M 9 24L9 29C9 32.507813 11.621094 35.417969 15 35.90625L15 39L12 39L12 41L20 41L20 39L17 39L17 35.90625C20.378906 35.417969 23 32.507813 23 29L23 24 Z M 11 26L21 26L21 29C21 31.753906 18.753906 34 16 34C13.246094 34 11 31.753906 11 29Z"></path></g></svg>`
    },

    {
        // Amenity
        name: "Electric Stove",
        featured: false,
        category: "Kitchen and Dining",
        icon: `<svg fill="#4B5563" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 508 508" xml:space="preserve" stroke="#4B5563"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M465.75,0H42.35c-23.3,0-42.3,19-42.3,42.3v423.3c0,23.4,19,42.4,42.3,42.4h423.3c23.3,0,42.3-19,42.3-42.3V42.3 C508.05,19,489.05,0,465.75,0z M28.25,42.3c0-7.8,6.3-14.1,14.1-14.1h423.3c7.8,0,14.1,6.3,14.1,14.1v339.6H28.25V42.3z M479.85,465.7L479.85,465.7c0,7.8-6.3,14.1-14.1,14.1H42.35c-7.8,0-14.1-6.3-14.1-14.1v-55.6h451.6V465.7z"></path> </g> </g> <g> <g> <path d="M148.95,57.8c-37.2,0-67.4,30.2-67.4,67.4c0,37.2,30.2,67.4,67.4,67.4c37.2,0,67.4-30.2,67.4-67.4 S186.15,57.8,148.95,57.8z M148.95,164.4c-21.6,0-39.2-17.6-39.2-39.2c0-21.6,17.6-39.2,39.2-39.2c21.6,0,39.2,17.6,39.2,39.2 C188.15,146.8,170.55,164.4,148.95,164.4z"></path> </g> </g> <g> <g> <path d="M359.15,57.8c-37.2,0-67.4,30.2-67.4,67.4c0,37.2,30.2,67.4,67.4,67.4c37.2,0,67.4-30.2,67.4-67.4 S396.35,57.8,359.15,57.8z M359.15,164.4c-21.6,0-39.2-17.6-39.2-39.2c0-21.6,17.6-39.2,39.2-39.2c21.6,0,39.2,17.6,39.2,39.2 C398.35,146.8,380.75,164.4,359.15,164.4z"></path> </g> </g> <g> <g> <path d="M148.95,219.9c-37.2,0-67.4,30.2-67.4,67.4s30.2,67.4,67.4,67.4c37.2,0,67.4-30.2,67.4-67.4 C216.35,250.1,186.15,219.9,148.95,219.9z M148.95,326.5c-21.6,0-39.2-17.6-39.2-39.2c0-21.6,17.6-39.2,39.2-39.2 c21.6,0,39.2,17.6,39.2,39.2C188.15,308.9,170.55,326.5,148.95,326.5z"></path> </g> </g> <g> <g> <path d="M359.15,219.9c-37.2,0-67.4,30.2-67.4,67.4s30.2,67.4,67.4,67.4c37.2,0,67.4-30.2,67.4-67.4 C426.55,250.1,396.35,219.9,359.15,219.9z M359.15,326.5c-21.6,0-39.2-17.6-39.2-39.2c0-21.6,17.6-39.2,39.2-39.2 c21.6,0,39.2,17.6,39.2,39.2C398.35,308.9,380.75,326.5,359.15,326.5z"></path> </g> </g> <g> <g> <path d="M107.15,432.2h-18c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h18c7.8,0,14.1-6.3,14.1-14.1 C121.25,438.5,114.95,432.2,107.15,432.2z"></path> </g> </g> <g> <g> <path d="M211.05,432.2h-18c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h18c7.8,0,14.1-6.3,14.1-14.1 C225.15,438.5,218.85,432.2,211.05,432.2z"></path> </g> </g> <g> <g> <path d="M315.05,432.2h-18c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h18c7.8,0,14.1-6.3,14.1-14.1 C329.15,438.5,322.85,432.2,315.05,432.2z"></path> </g> </g> <g> <g> <path d="M418.95,432.2h-18c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h18c7.8,0,14.1-6.3,14.1-14.1 C433.05,438.5,426.75,432.2,418.95,432.2z"></path> </g> </g> </g></svg>`
    },

    {
        // Amenity
        name: "Hot Water Kettle",
        featured: false,
        category: "Kitchen and Dining",
        icon: `<svg fill="#4B5563" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 508 508" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M315.255,137c-7.8,0-14.1,6.3-14.1,14.1v249.1c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1V151.1 C329.355,143.3,323.055,137,315.255,137z"></path> </g> </g> <g> <g> <path d="M446.255,86h-72.8c-34.1-56.3-80.3-86-134-86c-55.2,0-100.6,29-135.1,86h-90.5c-14.5,1.1-14.8,15.1-13.1,19.4l51.6,126.2 c-13.3,66.6-17.7,136.7-18.3,196.1h-3.5c-7.8,0-14.1,6.3-14.1,14.1v52.1c0,7.8,6.3,14.1,14.1,14.1h417.8c7.8,0,14.1-6.3,14.1-14.1 v-52.1c0-7.8-6.3-14.1-14.1-14.1h-3.6c-1.3-129.4-21.1-239.1-56.2-313.5h57.7c18.5,0,33.5,14.9,33.5,33.2V360 c0,7.8,6.3,14.1,14.1,14.1s14.1-6.3,14.1-14.1V147.4C508.055,113.5,480.355,86,446.255,86z M239.455,28.2 c39.2,0,72.9,19.4,100.4,57.8h-201.8C165.555,47.6,199.655,28.2,239.455,28.2z M34.855,114.2h54.4c-10.2,21.8-18.7,45.5-25.6,70.3 L34.855,114.2z M434.255,479.8h-389.6v-23.9h389.6V479.8z M416.755,427.5h-354.5c0.2-19.1,0.8-37.7,1.8-55.8h20.1 c7.8,0,14.1-6.3,14.1-14.1c0-7.8-6.3-14.1-14.1-14.1h-18.2c0.8-9.6,1.6-19,2.6-28.2h43.8c7.8,0,14.1-6.3,14.1-14.1 c0-7.8-6.3-14.1-14.1-14.1h-40.4c9.6-70.5,26.1-129.6,48.9-172.8h236.4C394.355,184.5,415.355,294.9,416.755,427.5z"></path> </g> </g> </g></svg>`
    },

    {
        // Amenity
        name: "Stainless Steel Oven",
        featured: false,
        category: "Kitchen and Dining",
        icon: `<svg fill="#4B5563" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C10.906937 2 10 2.9069372 10 4L7 4C5.3550302 4 4 5.3550302 4 7L4 42C4 43.644459 5.3544268 45 7 45L9 45L9 46C9 47.093063 9.9069372 48 11 48L14 48C15.093063 48 16 47.093063 16 46L16 45L34 45L34 46C34 47.093063 34.906937 48 36 48L39 48C40.093063 48 41 47.093063 41 46L41 45L43 45C44.645063 45 46 43.645063 46 42L46 15.167969 A 1.0001 1.0001 0 0 0 46 14.841797L46 7C46 5.3544268 44.644459 4 43 4L40 4C40 2.9069372 39.093063 2 38 2L32 2C30.906937 2 30 2.9069372 30 4L21 4C21 2.9069372 20.093063 2 19 2L12 2 z M 7 6L10.832031 6 A 1.0001 1.0001 0 0 0 11.158203 6L19.832031 6 A 1.0001 1.0001 0 0 0 20.158203 6L30.832031 6 A 1.0001 1.0001 0 0 0 31.158203 6L38.832031 6 A 1.0001 1.0001 0 0 0 39.158203 6L43 6C43.563541 6 44 6.4355732 44 7L44 14L6 14L6 7C6 6.4349698 6.4349698 6 7 6 z M 10 8 A 2 2 0 0 0 8 10 A 2 2 0 0 0 10 12 A 2 2 0 0 0 12 10 A 2 2 0 0 0 10 8 z M 16 8 A 2 2 0 0 0 14 10 A 2 2 0 0 0 16 12 A 2 2 0 0 0 18 10 A 2 2 0 0 0 16 8 z M 22 8 A 2 2 0 0 0 20 10 A 2 2 0 0 0 22 12 A 2 2 0 0 0 24 10 A 2 2 0 0 0 22 8 z M 28 8 A 2 2 0 0 0 26 10 A 2 2 0 0 0 28 12 A 2 2 0 0 0 30 10 A 2 2 0 0 0 28 8 z M 40 8 A 2 2 0 0 0 38 10 A 2 2 0 0 0 40 12 A 2 2 0 0 0 42 10 A 2 2 0 0 0 40 8 z M 6 16L44 16L44 42C44 42.562937 43.562937 43 43 43L40.167969 43 A 1.0001 1.0001 0 0 0 39.841797 43L35.154297 43 A 1.0001 1.0001 0 0 0 34.984375 42.986328 A 1.0001 1.0001 0 0 0 34.839844 43L15.167969 43 A 1.0001 1.0001 0 0 0 14.841797 43L10.154297 43 A 1.0001 1.0001 0 0 0 9.984375 42.986328 A 1.0001 1.0001 0 0 0 9.8398438 43L7 43C6.4355732 43 6 42.563541 6 42L6 16 z M 9 19L9 20L9 40L41 40L41 19L9 19 z M 11 21L39 21L39 38L11 38L11 21 z M 11 45L14 45L14 46L11 46L11 45 z M 36 45L39 45L39 46L36 46L36 45 z"></path></g></svg>`
    },

    {
        // Amenity
        name: "Toaster",
        featured: false,
        category: "Kitchen and Dining",
        icon: `<svg fill="#4b5563" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#4b5563"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="93.091" cy="325.818" r="11.636"></circle> </g> </g> <g> <g> <path d="M395.636,23.273H116.364c-25.6,0-46.545,20.945-46.545,46.545v1.164c1.164,18.618,11.636,34.909,27.927,41.891 c3.491,1.164,6.982,5.818,6.982,11.636V128c0,6.982,4.655,11.636,11.636,11.636S128,134.982,128,128v-3.491 c0-15.127-8.145-27.927-20.945-32.582c-8.145-4.655-13.964-12.8-13.964-22.109v-1.164c0-11.636,10.473-22.109,23.273-22.109 h279.273c12.8,0,23.273,10.473,23.273,23.273v1.164c0,9.309-5.818,17.455-13.964,20.945C392.145,96.582,384,109.382,384,124.509 V128c0,6.982,4.655,11.636,11.636,11.636c6.982,0,11.636-4.655,11.636-11.636v-3.491c0-4.655,2.327-9.309,6.982-11.636 c16.291-6.982,27.927-24.436,27.927-43.055v-1.164C441.018,43.055,421.236,23.273,395.636,23.273z"></path> </g> </g> <g> <g> <path d="M465.455,279.273c-6.982,0-11.636,4.655-11.636,11.636v46.545c0,6.982,4.655,11.636,11.636,11.636 c6.982,0,11.636-4.655,11.636-11.636v-11.636c19.782,0,34.909-15.127,34.909-34.909v-23.273c0-19.782-15.127-34.909-34.909-34.909 v-11.636c0-32.582-25.6-58.182-58.182-58.182H93.091c-32.582,0-58.182,25.6-58.182,58.182v151.273 C15.127,372.364,0,387.491,0,407.273v23.273c0,19.782,15.127,34.909,34.909,34.909h27.927l8.145,16.291 c2.327,4.655,5.818,6.982,10.473,6.982H128c4.655,0,8.145-2.327,10.473-6.982l8.145-16.291h218.764l8.146,16.291 c2.327,3.491,5.818,6.982,10.473,6.982h46.545c4.655,0,8.145-2.327,10.473-6.982l8.146-16.291h27.927 c19.782,0,34.909-15.127,34.909-34.909v-23.273c0-19.782-15.127-34.909-34.909-34.909h-384c-6.982,0-11.636,4.655-11.636,11.636 s4.655,11.636,11.636,11.636h384c6.982,0,11.636,4.655,11.636,11.636v23.273c0,6.982-4.655,11.636-11.636,11.636h-34.909 c-4.655,0-8.145,2.327-10.473,6.982l-8.145,16.291h-32.582l-8.146-16.291c-2.327-4.655-5.818-6.982-10.473-6.982H139.636 c-4.655,0-8.145,2.327-10.473,6.982l-8.145,16.291H88.436l-8.145-16.291c-2.327-4.655-5.818-6.982-10.473-6.982H34.909 c-6.982,0-11.636-4.655-11.636-11.636v-23.273c0-6.982,4.655-11.636,11.636-11.636h11.636c6.982,0,11.636-4.655,11.636-11.636 V221.091c0-19.782,15.127-34.909,34.909-34.909h325.818c19.782,0,34.909,15.127,34.909,34.909v23.273 c0,6.982,4.655,11.636,11.636,11.636h11.636c6.982,0,11.636,4.655,11.636,11.636v23.273c0,6.982-4.655,11.636-11.636,11.636 v-11.636C477.091,283.927,472.436,279.273,465.455,279.273z"></path> </g> </g> <g> <g> <path d="M93.091,232.727c-6.982,0-11.636,4.655-11.636,11.636v46.545c0,6.982,4.655,11.636,11.636,11.636 c6.982,0,11.636-4.655,11.636-11.636v-46.545C104.727,237.382,100.073,232.727,93.091,232.727z"></path> </g> </g> </g></svg>`
    },

    {
        // Amenity
        name: "Dining Table",
        featured: false,
        category: "Kitchen and Dining",
        icon: `<svg fill="#4b5563" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 214.539 214.539" xml:space="preserve" stroke="#4b5563"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M121.164,154.578h-6.625V89.14h38.937c4.014,0,7.269-3.254,7.269-7.269s-3.254-7.269-7.269-7.269h-92.41 c-4.014,0-7.269,3.254-7.269,7.269s3.254,7.269,7.269,7.269h38.936v65.438h-6.625c-4.014,0-7.269,3.254-7.269,7.27 c0,4.015,3.254,7.269,7.269,7.269h27.787c4.015,0,7.27-3.254,7.27-7.269C128.433,157.832,125.179,154.578,121.164,154.578z"></path> <path d="M73.783,120.777c0-4.014-3.254-7.269-7.269-7.269H54.833H34.219c-11.08,0-13.41-16.14-13.509-16.869l-6.239-45.122 c-0.55-3.977-4.217-6.748-8.196-6.205c-3.976,0.55-6.754,4.219-6.205,8.196l6.229,45.053c0.831,6.47,4.167,16.593,11.367,23.133 l-7.485,38.956c-0.758,3.942,1.824,7.752,5.766,8.509c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349 c0.668,3.479,3.714,5.897,7.13,5.897c0.455,0,0.916-0.043,1.379-0.132c3.942-0.757,6.524-4.566,5.766-8.509l-6.265-32.605h2.883 C70.527,128.046,73.783,124.791,73.783,120.777z"></path> <path d="M208.267,45.313c-3.975-0.543-7.646,2.229-8.196,6.205l-6.244,45.165c-0.094,0.687-2.424,16.827-13.504,16.827h-20.614 h-11.681c-4.014,0-7.27,3.254-7.27,7.269s3.255,7.269,7.27,7.269h2.883l-6.265,32.605c-0.758,3.942,1.824,7.752,5.766,8.509 c3.946,0.761,7.752-1.825,8.509-5.766l6.792-35.349h17.579l6.792,35.349c0.668,3.479,3.714,5.897,7.13,5.897 c0.455,0,0.916-0.043,1.38-0.132c3.941-0.757,6.523-4.566,5.766-8.509l-7.485-38.953c7.198-6.534,10.532-16.64,11.357-23.065 l6.238-45.123C215.021,49.533,212.242,45.863,208.267,45.313z"></path> </g> </g> </g></svg>`
    },

    {
        // Amenity
        name: "Balcony",
        featured: false,
        category: "Outdoor",
        icon: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#4b5563" stroke="#4b5563" stroke-width="0.00048000000000000007"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <polygon points="10,26 6,26 6,34 6,38 6,44 10,44 10,38 14,38 14,44 18,44 18,34 10,34 "></polygon> <polygon points="38,34 30,34 30,44 34,44 34,38 38,38 38,44 42,44 42,38 42,34 42,26 38,26 "></polygon> <path d="M32,30v-4h-6v-6h18.241L26,6.971V4h-4v2.971L3.759,20H22v6h-6v4h6v14h4V30H32z M16.241,16L24,10.458L31.759,16H26h-4 H16.241z"></path> </g> </g></svg>`
    },

    {
        // Amenity
        name: "Private BBQ Grill",
        featured: false,
        category: "Outdoor",
        icon: `<svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_2_1364)"> <path d="M19 25.875L14 36.875" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M27 25.875L32 36.875" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M23 36.875V25.875" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M12 15.875C12 21.95 16.925 26.875 23 26.875C29.075 26.875 34 21.95 34 15.875" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M30 31.875H16" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M13 18.875H9" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M37 18.875H33" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M19.705 14.875C16.152 14.875 11 14.875 11 14.875" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M35 14.875C35 14.875 32.307 14.875 29.527 14.875" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> <path d="M30.994 -13.125C30.999 -8.292 27 -7.042 27 -2.125C27 2.792 30.999 4.042 30.994 8.875C30.989 13.708 27 15.042 27 19.875M25.994 -13.125C25.999 -8.292 22 -7.042 22 -2.125C22 2.792 25.999 4.042 25.994 8.875C25.989 13.708 22 15.042 22 19.875M20.994 -13.125C20.999 -8.292 17 -7.042 17 -2.125C17 2.792 20.999 4.042 20.994 8.875C20.989 13.708 17 15.042 17 19.875M30.994 -35.191C30.999 -30.358 27 -29.108 27 -24.191C27 -19.274 30.999 -18.024 30.994 -13.191V-13.125C30.999 -8.292 27 -7.042 27 -2.125C27 2.792 30.999 4.042 30.994 8.875C30.989 13.708 27 15.042 27 19.875M25.994 -35.191C25.999 -30.358 22 -29.108 22 -24.191C22 -19.274 25.999 -18.024 25.994 -13.191V-13.125C25.999 -8.292 22 -7.042 22 -2.125C22 2.792 25.999 4.042 25.994 8.875C25.989 13.708 22 15.042 22 19.875M20.994 -35.191C20.999 -30.358 17 -29.108 17 -24.191C17 -19.274 20.999 -18.024 20.994 -13.191V-13.125C20.999 -8.292 17 -7.042 17 -2.125C17 2.792 20.999 4.042 20.994 8.875C20.989 13.708 17 15.042 17 19.875" stroke="#4b5563" stroke-width="2" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_2_1364"> <rect width="45" height="45" fill="white"></rect> </clipPath> </defs> </g></svg>`
    },

    {
        // Amenity
        name: "Free Parking",
        featured: false,
        category: "Location Features",
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n" +
            "                 stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
            "                 class=\"lucide lucide-square-parking-icon lucide-square-parking text-gray-600\">\"\n" +
            "                >\n" +
            "                <rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/>\n" +
            "                <path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\"/>\n" +
            "            </svg>"
    },

    {
        // Amenity
        name: "Elevator",
        featured: false,
        category: "Location Features",
        icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#4b5563"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 22h15V2H2zm14-1h-6V3h6zM3 3h6v18H3zm15.625 10h3.75L20.5 16zm3.75-2h-3.75L20.5 8z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>`
    },

    {
        // Amenity
        name: "Outdoor Pool",
        featured: false,
        category: "Location Features",
        icon: `<svg viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M90.8601 125.51C85.4101 132.65 65.8601 132.99 59.2501 126.07C53.0601 133.18 31.6601 133.99 24.6801 120.39L28.8401 115.83C35.0501 125.42 51.3701 126.45 58.6601 115.83C59.1215 115.778 59.5856 115.751 60.0501 115.75C64.7901 123.75 78.19 125.34 85.7701 120.1C85.69 109.88 85.4501 79.1001 85.4501 76.7001C85.4501 56.5301 112.86 57.8301 111.28 78.6001L105.18 79.1301C105.18 68.4901 93.8701 69.0401 93.8601 76.7901C93.8601 78.8901 94.0701 109.27 94.1401 118.38C101.88 124.81 114.83 123.91 121.36 116.06L125.36 119.67C118.74 133.64 98.7701 133.21 90.8601 125.51ZM73.4901 103.9C67.3801 103.82 58.0401 103.84 52.7201 103.9C52.7801 109.63 52.8301 113.9 52.8301 113.9L44.5301 116.34C44.5301 116.34 44.1801 79.7801 44.1801 76.7501C44.1801 56.5801 71.8701 57.5401 70.2901 77.3901L63.9201 78.6301C63.9201 67.2501 52.5001 69.5201 52.5001 76.6301C52.5001 80.8601 52.5601 88.7301 52.6401 96.1501L80.9201 95.8301C80.9201 95.8301 82.4701 104 73.4901 103.9ZM58.6601 133C59.1215 132.946 59.5855 132.916 60.0501 132.91C65.8301 142.62 84.4801 142.91 89.7601 132.85H91.4901C98.4901 142.15 114.01 142.09 121.36 133.26L125.36 136.87C118.78 150.87 98.8101 150.41 90.9001 142.71C85.4501 149.85 65.9001 150.18 59.2901 143.27C53.1001 150.38 31.7001 151.18 24.7201 137.59L28.8401 133C35.0501 142.62 51.3701 143.65 58.6601 133Z" fill="#4b5563"></path> </g></svg>`
    },

    {
        // Amenity
        name: "Single Level Home",
        featured: false,
        category: "Location Features",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`
    },

    {
        // Amenity
        name: "Housekeeping",
        featured: false,
        category: "Location Features",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-brush-cleaning-icon lucide-brush-cleaning"><path d="m16 22-1-4"/><path d="M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1"/><path d="M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z"/><path d="m8 22 1-4"/></svg>`
    },

    {
        // Amenity
        name: "24/7 Security",
        featured: false,
        category: "Home Safety",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-shield-ellipsis-icon lucide-shield-ellipsis"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>`
    },
];

// Filtering system
const amenitiesGrid = document.getElementById("amenitiesGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

// Create or reference a title container above the grid
const categoryTitle = document.createElement("h2");
categoryTitle.className = "flex justify-center text-2xl font-semibold text-gray-800 mb-4 md:block md:hidden";
// hidden on mobile, visible on md+
amenitiesGrid.parentNode.insertBefore(categoryTitle, amenitiesGrid);

function renderAmenities(filter = "Featured") {
    amenitiesGrid.innerHTML = "";
    categoryTitle.textContent = ""; // reset title

    let filtered = amenities;

    if (filter === "Featured") {
        filtered = amenities.filter(a => a.featured);
    } else if (filter !== "All") {
        filtered = amenities.filter(a => a.category === filter);
    }

    // Always display the current filter name
    categoryTitle.textContent = filter;
    categoryTitle.classList.remove("hidden"); // ensure it's visible (on md+)

    filtered.forEach(a => {
        const div = document.createElement("div");
        div.className =
            "flex items-center gap-3 p-3 border rounded-full hover:bg-gray-50 transition";
        div.innerHTML = `
      <div class="text-blue-600 w-6 h-6">${a.icon}</div>
      <span class="text-gray-700 font-medium">${a.name}</span>
    `;
        amenitiesGrid.appendChild(div);
    });
}

// Filter button logic
filterButtons.forEach(btn => {
    btn.classList.add("rounded-full", "transition", "hover:bg-gray-200");

    btn.addEventListener("click", () => {
        // Reset all buttons
        filterButtons.forEach(b => {
            b.classList.remove("bg-gray-100");
            b.classList.add("hover:bg-gray-200");
        });

        // Highlight clicked button
        btn.classList.add("bg-gray-100");
        btn.classList.remove("hover:bg-gray-200");

        // Render amenities
        renderAmenities(btn.dataset.filter);
    });
});

// Initial render (Featured)
renderAmenities("Featured");

// Highlight the "Featured" button on load
const featuredBtn = document.querySelector('.filter-btn[data-filter="Featured"]');
if (featuredBtn) {
    featuredBtn.classList.add("bg-gray-100");
    featuredBtn.classList.remove("hover:bg-gray-200");
}
