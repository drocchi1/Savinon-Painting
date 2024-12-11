// loadHeaderFooter.js

// loadHeaderFooter.js
function loadHeader() {
    document.getElementById('header').innerHTML = `
        <header class="bg-white shadow-md">
            <nav class="container mx-auto px-4 py-6">
                <div class="flex justify-between items-center">
                    <a href="/" class="text-2xl font-bold text-green-600">
                        <img src="/images/logo.jpg" alt="Savinon Painting Logo" class="h-14">
                    </a>
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-bg-gray-600 focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="mobile-menu-small" class="hidden md:hidden"> <!-- Mobile menu hidden on medium screens and up -->
                         <a href="/services" class="block px-4 py-2 text-bg-gray-600 hover:bg-gray-100">Services</a>
                         <a href="/service-areas" class="block px-4 py-2 text-bg-gray-600 hover:bg-gray-100">Service Areas</a>
                         <a href="/#contact" class="block px-4 py-2 text-bg-gray-600 hover:bg-gray-100">Contact Us</a>
                    </div>
                    <div id="desktop-menu" class="hidden md:flex space-x-6 relative">
                        <div class="group relative">
                            <a href="/services" class="flex items-center hover:text-blue-600 transition duration-200 py-2 focus:outline-none">
                                Services
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"/></svg>
                            </a>
                            <div class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg z-10 pt-2 -mt-2">
                                <div class="p-2">
                                    <a href="/services/interior-painting" class="block px-4 py-2 hover:bg-gray-100">Interior Painting</a>
                                    <a href="/services/exterior-painting" class="block px-4 py-2 hover:bg-gray-100">Exterior Painting</a>
                                    <a href="/services/deck-staining" class="block px-4 py-2 hover:bg-gray-100">Deck Staining</a>
                                    <a href="/services/sheetrock-taping" class="block px-4 py-2 hover:bg-gray-100">Sheetrock & Taping</a>
                                    <a href="/services/powerwashing" class="block px-4 py-2 hover:bg-gray-100">Powerwashing</a>
                                    <a href="/services/carpentry" class="block px-4 py-2 hover:bg-gray-100">Carpentry</a>
                                </div>
                            </div>
                        </div>
                        <div class="group relative">
                            <a href="/service-areas" class="flex items-center hover:text-blue-600 transition duration-200 py-2 focus:outline-none">
                                Service Areas
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"/></svg>
                            </a>
                            <div class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg z-10 pt-2 -mt-2">
                                <div class="p-2">
                                    <a href="/service-areas/bergen-county-nj" class="block px-4 py-2 hover:bg-gray-100">Bergen County</a>
                                    <a href="/service-areas/rockland-county-ny" class="block px-4 py-2 hover:bg-gray-100">Rockland County</a>
                                    <a href="/service-areas/westchester-county-ny" class="block px-4 py-2 hover:bg-gray-100">Westchester County</a>
                                </div>
                            </div>
                        </div>
                        <a href="/index#contact" class="hover:text-blue-600 transition duration-200 py-2">Contact Us</a>
                    </div>
                </div>
            </nav>
        </header>
    `;

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuSmall = document.getElementById('mobile-menu-small');

if (mobileMenuButton && mobileMenuSmall) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuSmall.classList.toggle('hidden');
    });
}
}

function loadFooter() {
    document.getElementById('footer').innerHTML = `
        <footer class="bg-white text-green-600 py-8">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-start">
                    <div class="mb-4 md:mb-0 w-full md:w-1/3">
                        <h3 class="text-lg font-semibold text-green-600">Contact Us</h3>
                        <p class="text-sm text-black">Email: <a href="mailto:SavinonPainting@yahoo.com" class="text-black hover:underline">SavinonPainting@yahoo.com</a></p>
                        <p class="text-sm text-black">Phone: <a href="tel:+18456415560" class="text-black hover:underline">(845) 641-5560</a></p>
                        <p class="text-sm text-black">Address: 127 Hudson Ave, Haverstraw, NY 10927</p>
                    </div>
                    <div class="mb-4 md:mb-0 w-full md:w-1/3">
                        <h3 class="text-lg font-semibold text-green-600">Quick Links</h3>
                        <ul class="list-none">
                            <li><a href="/index" class="text-black hover:underline">Home</a></li>
                            <li><a href="/services" class="text-black hover:underline">Services</a></li>
                            <li><a href="/service-areas" class="text-black hover:underline">Service Areas</a></li>
                            <li><a href="/#contact" class="text-black hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="mb-4 md:mb-0 w-full md:w-1/3">
                        <h3 class="text-lg font-semibold text-green-600">Follow Us</h3>
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com/people/Savinon-Painting-LLC/100090055245142/?mibextid=LQQJ4d&rdid=bEznVZdDjiRLyC86&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14yG5XSthp%2F%3Fmibextid%3DLQQJ4d" target="_blank" class="text-black hover:underline">Facebook</a>
                        </div>
                    </div>
                </div>
                <div class="mt-6 text-center">
                    <p class="text-sm text-black">© 2023 Savinon Painting. All rights reserved.</p>
                    <p class="text-sm text-black">Serving Rockland County, Westchester County, and Bergen County with professional painting services.</p>
                </div>
            </div>
        </footer>
    `;
}

// Call the functions to load header and footer
loadHeader();
loadFooter();