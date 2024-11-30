// loadHeaderFooter.js

function getBasePath() {
    // Get the current path and split it into segments
    const pathSegments = window.location.pathname.split('/').filter(segment => segment.length > 0);
    
    // Calculate how many ../ we need based on the number of segments
    const basePath = '../'.repeat(pathSegments.length - 1); // -1 to not count the current page

    return basePath;
}

function loadHeader() {
    const basePath = getBasePath(); // Get the correct base path

    // Load the header content
    document.getElementById('header').innerHTML = `
        <header class="bg-white shadow-md">
            <nav class="container mx-auto px-4 py-6">
                <div class="flex justify-between items-center">
                    <a href="${basePath}index.html" class="text-2xl font-bold text-blue-800">Savinon Painting</a>
                    <div class="hidden md:flex space-x-6 relative">
                        <div class="group relative">
                            <a href="${basePath}services.html" class="flex items-center hover:text-blue-600 transition duration-200 py-2 focus:outline-none">
                                Services
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"/></svg>
                            </a>
                            <div class="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg z-10">
                                <div class="p-2">
                                    <a href="${basePath}services/interior-painting.html" class="block px-4 py-2 hover:bg-gray-100">Interior Painting</a>
                                    <a href="${basePath}services/exterior-painting.html" class="block px-4 py-2 hover:bg-gray-100">Exterior Painting</a>
                                    <a href="${basePath}services/deck-staining.html" class="block px-4 py-2 hover:bg-gray-100">Deck Staining</a>
                                    <a href="${basePath}services/sheetrock-taping.html" class="block px-4 py-2 hover:bg-gray-100">Sheetrock & Taping</a>
                                    <a href="${basePath}services/powerwashing.html" class="block px-4 py-2 hover:bg-gray-100">Powerwashing</a>
                                    <a href="${basePath}services/carpentry.html" class="block px-4 py-2 hover:bg-gray-100">Carpentry</a>
                                </div>
                            </div>
                        </div>
                        <div class="group relative">
                            <a href="${basePath}service-areas.html" class="flex items-center hover:text-blue-600 transition duration-200 py-2 focus:outline-none">
                                Service Areas
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"/></svg>
                            </a>
                            <div class="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg z-10">
                                <div class="p-2">
                                    <a href="${basePath}service-areas/bergen-county-nj.html" class="block px-4 py-2 hover:bg-gray-100">Bergen County</a>
                                    <a href="${basePath}service-areas/rockland-county-ny.html" class="block px-4 py-2 hover:bg-gray-100">Rockland County</a>
                                    <a href="${basePath}service-areas/westchester-county-ny.html" class="block px-4 py-2 hover:bg-gray-100">Westchester County</a>
                                </div>
                            </div>
                        </div>
                        <a href="${basePath}contact-us.html" class="hover:text-blue-600 transition duration-200 py-2">Contact Us</a>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

function loadFooter() {
    const basePath = getBasePath(); // Get the correct base path

    // Load the footer content
    document.getElementById('footer').innerHTML = `
        <footer class="bg-gray-800 text-white py-8">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-4 md:mb-0">
                        <h3 class="text-lg font-semibold">Contact Us</h3>
                        <p class="text-sm">Email: <a href="mailto:SavinonPainting@yahoo.com" class="text-blue-400 hover:underline">SavinonPainting@yahoo.com</a></p>
                        <p class="text-sm">Phone: <a href="tel:+18456415560" class="text-blue-400 hover:underline">(845) 641-5560</a></p>
                        <p class="text-sm">Address: 127 Hudson Ave, Haverstraw, NY 10927</p>
                    </div>
                    <div class="mb-4 md:mb-0">
                        <h3 class="text-lg font-semibold">Quick Links</h3>
                        <ul class="list-none">
                            <li><a href="${basePath}index.html" class="text-blue-400 hover:underline">Home</a></li>
                            <li><a href="${basePath}services.html" class="text-blue-400 hover:underline">Services</a></li>
                            <li><a href="${basePath}service-areas.html" class="text-blue-400 hover:underline">Service Areas</a></li>
                            <li><a href="${basePath}contact-us.html" class="text-blue-400 hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="mb-4 md:mb-0">
                        <h3 class="text-lg font-semibold">Follow Us</h3>
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" class="text-blue-400 hover:underline">Facebook</a>
                            <a href="https://www.instagram.com" target="_blank" class="text-blue-400 hover:underline">Instagram</a>
                            <a href="https://www.linkedin.com" target="_blank" class="text-blue-400 hover:underline">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-center">
                    <p class="text-sm">© 2023 Savinon Painting. All rights reserved.</p>
                    <p class="text-sm">Serving Rockland County, Westchester County, and Bergen County with professional painting services.</p>
                </div>
            </div>
        </footer>
    `;
}

// Call the functions to load header and footer
loadHeader();
loadFooter();