// loadHeaderFooter.js

function loadHeader() {
    document.getElementById('header').innerHTML = `
        <header class="bg-white shadow-md">
            <nav class="container mx-auto px-4 py-6">
                <div class="flex justify-between items-center">
                    <a href="index.html" class="text-2xl font-bold text-blue-800">Savinon Painting</a>
                    <div class="hidden md:flex space-x-6 relative">
                        <div class="group relative">
                            <a href="services.html" class="flex items-center hover:text-blue-600 transition duration-200 py-2 focus:outline-none">
                                Services
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"/></svg>
                            </a>
                            <div class="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg z-10">
                                <div class="p-2">
                                    <a href="services/interior-painting.html" class="block px-4 py-2 hover:bg-gray-100">Interior Painting</a>
                                    <a href="services/exterior-painting.html" class="block px-4 py-2 hover:bg-gray-100">Exterior Painting</a>
                                    <a href="services/deck-staining.html" class="block px-4 py-2 hover:bg-gray-100">Deck Staining</a>
                                    <a href="services/sheetrock-taping.html" class="block px-4 py-2 hover:bg-gray-100">Sheetrock & Taping</a>
                                    <a href="services/powerwashing.html" class="block px-4 py-2 hover:bg-gray-100">Powerwashing</a>
                                    <a href="services/carpentry.html" class="block px-4 py-2 hover:bg-gray-100">Carpentry</a>
                                </div>
                            </div>
                        </div>
                        <div class="group relative">
                            <a href="service-areas.html" class="flex items-center hover:text-blue-600 transition duration-200 py-2 focus:outline-none">
                                Service Areas
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"/></svg>
                            </a>
                            <div class="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg z-10">
                                <div class="p-2">
                                    <a href="service-areas/bergen-county-nj.html" class="block px-4 py-2 hover:bg-gray-100">Bergen County</a>
                                    <a href="service-areas/rockland-county.html" class="block px-4 py-2 hover:bg-gray-100">Rockland County</a>
                                    <a href="service-areas/westchester-county.html" class="block px-4 py-2 hover:bg-gray-100">Westchester County</a>
                                </div>
                            </div>
                        </div>
                        <a href="contact-us.html" class="hover:text-blue-600 transition duration-200 py-2">Contact Us</a>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

function loadFooter() {
    document.getElementById('footer').innerHTML = `
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto px-4 text-center">
                <p class="mb-2">© 2023 Savinon Painting. All rights reserved.</p>
                <p class="text-sm">Contact us:</p>
                <p class="text-sm">Email: <a href="mailto:SavinonPainting@yahoo.com" class="text-blue-400 hover:underline">SavinonPainting@yahoo.com</a></p>
                <p class="text-sm">Phone: <a href="tel:+18456415560" class="text-blue-400 hover:underline">(845) 641-5560</a></p>
                <p class="text-sm">Address: 127 Hudson Ave, Haverstraw, NY 10927</p>
            </div>
        </footer>
    `;
}

// Call the functions to load header and footer
loadHeader();
loadFooter();