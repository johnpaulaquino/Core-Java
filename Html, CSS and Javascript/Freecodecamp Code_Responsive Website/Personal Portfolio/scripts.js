document.addEventListener('DOMContentLoaded', () => {
    // Get all the links with the id 'nav-link'
    const links = document.querySelectorAll('#nav-link');

    links.forEach(link => {
        // Add click event listener to each link
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default action of the link
            
            // Remove 'active' class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
});
document.querySelectorAll('#nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        // Perform actions or logic
        // Navigate to the href after other actions
        window.location.href = this.getAttribute('href');
    });
});


    //  document.addEventListener('DOMContentLoaded', () => {
    //         // Select all sections
    //         const sections = document.querySelectorAll('section');

    //         // Options for the observer (root defaults to the viewport)
    //         const options = {
    //             root: null, // Use the viewport as the root
    //             rootMargin: '0px',
    //             threshold: 0.2 // 50% of the section must be visible
    //         };

    //         // Callback function for IntersectionObserver
    //         const callback = (entries, observer) => {
    //             entries.forEach(entry => {
    //                 // If the section is intersecting with the viewport
    //                 if (entry.isIntersecting) {
    //                     // Add active class to the section in view
    //                     entry.target.classList.add('active-section');
    //                 } else {
    //                     // Remove active class from the section not in view
    //                     entry.target.classList.remove('active-section');
    //                 }
    //             });
    //         };

    //         // Create the observer with the callback and options
    //         const observer = new IntersectionObserver(callback, options);

    //         // Observe each section
    //         sections.forEach(section => {
    //             observer.observe(section);
    //         });
    //     });