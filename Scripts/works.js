const workItems = document.querySelectorAll('.work-item');
const productDescriptions = document.querySelectorAll('.project-description');

workItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        productDescriptions[index].classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        productDescriptions[index].classList.remove('active');
    });
});
