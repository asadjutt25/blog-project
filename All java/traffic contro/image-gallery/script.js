// Initialize lightGallery
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  thumbnail: true
});

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    galleryItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});