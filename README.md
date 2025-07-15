Project Title: Lazy Load Images (Real-World: Faster Webpages)
1. Problem Statement:
Modern websites often contain a large number of images. Loading all images at once, especially those not immediately visible on the screen (i.e., below the fold), leads to:
1. Increased page load time
2. Wasted bandwidth
3. Poor user experience on slower networks or mobile devices
This becomes more critical for users with limited data plans or slow connections, where downloading unused images upfront is inefficient.

2. Solution Overview:
  Lazy Loading is a performance optimization technique where images are only loaded when they are about to enter the viewport (visible area of the screen). This approach ensures:
1. Faster initial page load
2. Reduced memory and data usage
3. Smoother scrolling and better performance
To implement this efficiently and cleanly, we use the Intersection Observer API, a modern browser feature that allows us to observe when elements (e.g., images) become visible in the viewport

3. How It Works :
   1. Initial Setup:
-> All image elements are placed on the page with a placeholder (like a blurred or blank image).
-> The actual image URLs are stored in a custom attribute like data-src.

    2. Using Intersection Observer:
-> We create an IntersectionObserver in JavaScript to monitor when each image comes into the viewport.
-> As soon as an image is about to enter the screen (e.g., 100px before appearing), the observer callback triggers.

    3. Replacing Placeholder with Real Image:
-> The observer callback takes the value from data-src and sets it as the src of the image.
-> The browser then loads the image just in time for the user to see it.

    4. Unobserve After Loading:
-> Once the image is loaded, we stop observing it to save resources.

4. Why This Solves a Real-World Problem:
Lazy loading addresses key real-world issues:
Performance Boost: Faster initial page load keeps users engaged.
Bandwidth Savings: Especially beneficial for mobile users or regions with slower internet.
SEO-Friendly: Modern lazy-loading techniques are supported by search engines like Google.
Scalability: Works well for websites with many images like blogs, e-commerce, or galleries.

