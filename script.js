document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        galleryItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();  // Initial check
});
