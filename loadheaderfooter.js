// loadHeaderFooter.js

function loadHeader() {
    document.getElementById('header').innerHTML = `
        <header class="bg-white shadow-md">
            <nav class="container mx-auto px-4 py-6">
                <div class="flex justify-between items-center">
                    <a href="/index.html" class="text-2xl font-bold text-green-600">
                        <img src="/images/logo.jpg" alt="Savinon Painting Logo" class="h-14">
                    </a>
                    <div class="hidden md:flex space-x-6 relative">
                        <div class="group relative">
                            <a href="/services.html" class="flex items-center hover:text-blue-600 transition duration-200 py-2 focus:outline-none">
                                Services
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"/></svg>
                            </a>
                            <div class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg z-10 pt-2 -mt-2">
                                <div class="p-2">
                                    <a href="/services/interior-painting.html" class="block px-4 py-2 hover:bg-gray-100">Interior Painting</a>
                                    <a href="/services/exterior-painting.html" class="block px-4 py-2 hover:bg-gray-100">Exterior Painting</a>
                                    <a href="/services/deck-staining.html" class="block px-4 py-2 hover:bg-gray-100">Deck Staining</a>
                                    <a href="/services/sheetrock-taping.html" class="block px-4 py-2 hover:bg-gray-100">Sheetrock & Taping</a>
                                    <a href="/services/powerwashing.html" class="block px-4 py-2 hover:bg-gray-100">Powerwashing</a>
                                    <a href="/services/carpentry.html" class="block px-4 py-2 hover:bg-gray-100">Carpentry</a>
                                </div>
                            </div>
                        </div>
                        <div class="group relative">
                            <a href="service-areas.html" class="flex items-center hover:text-blue-600 transition duration-200 py-2 focus:outline-none">
                                Service Areas
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"/></svg>
                            </a>
                            <div class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg z-10 pt-2 -mt-2">
                                <div class="p-2">
                                    <a href="/service-areas/bergen-county-nj.html" class="block px-4 py-2 hover:bg-gray-100">Bergen County</a>
                                    <a href="/service-areas/rockland-county-ny.html" class="block px-4 py-2 hover:bg-gray-100">Rockland County</a>
                                    <a href="/service-areas/westchester-county-ny.html" class="block px-4 py-2 hover:bg-gray-100">Westchester County</a>
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
    // Load the footer content
    document.getElementById('footer').innerHTML = `
        <footer class="bg-white text-green-600 py-8"> <!-- Background color -->
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-4 md:mb-0">
                        <h3 class="text-lg font-semibold text-black">Contact Us</h3> <!-- Updated to black -->
                        <p class="text-sm">Email: <a href="mailto:SavinonPainting@yahoo.com" class="text-green-500 hover:underline">SavinonPainting@yahoo.com</a></p>
                        <p class="text-sm">Phone: <a href="tel:+18456415560" class="text-green-500 hover:underline">(845) 641-5560</a></p>
                        <p class="text-sm">Address: 127 Hudson Ave, Haverstraw, NY 10927</p>
                    </div>
                    <div class="mb-4 md:mb-0">
                        <h3 class="text-lg font-semibold text-black">Quick Links</h3> <!-- Updated to black -->
                        <ul class="list-none">
                            <li><a href="/index.html" class="text-green-500 hover:underline">Home</a></li>
                            <li><a href="/services.html" class="text-green-500 hover:underline">Services</a></li>
                            <li><a href="/service-areas.html" class="text-green-500 hover:underline">Service Areas</a></li>
                            <li><a href="/contact-us.html" class="text-green-500 hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="mb-4 md:mb-0">
                        <h3 class="text-lg font-semibold text-black">Follow Us</h3> <!-- Updated to black -->
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" class="text-green-500 hover:underline">Facebook</a>
                            <a href="https://www.instagram.com" target="_blank" class="text-green-500 hover:underline">Instagram</a>
                            <a href="https://www.linkedin.com" target="_blank" class="text-green-500 hover:underline">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-center">
                    <p class="text-sm text-black">© 2023 Savinon Painting. All rights reserved.</p> <!-- Updated to black -->
                    <p class="text-sm text-black">Serving Rockland County, Westchester County, and Bergen County with professional painting services.</p> <!-- Updated to black -->
                </div>
            </div>
        </footer>
    `;
}

// Call the functions to load header and footer
loadHeader();
loadFooter();