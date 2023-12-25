const topNavIcon = document.querySelectorAll(".top-nav-link");
const emailIcon = document.getElementById('nav-email-icon');
const emailText = document.getElementById('nav-email-text');

const worksText = document.getElementById('works-text');
const skillsText = document.getElementById('skills-text');
const homeText = document.getElementById('home-text');

topNavIcon.forEach((icon) => {
    icon.addEventListener('mouseenter', (event) => {
        const targetId = event.currentTarget.parentNode.id;
        if (targetId === 'works') {
            worksText.style.color = 'rgb(0, 205, 52)';
            skillsText.style.color = 'grey';
            homeText.style.color = 'grey';
        } else if (targetId === 'resume') {
            skillsText.style.color = 'rgb(0, 205, 52)';
            worksText.style.color = 'grey'; // Reset the color to default on mouse leave
            homeText.style.color = 'grey';
        } else if (targetId === 'home') {
            homeText.style.color = 'rgb(0, 205, 52)';
            worksText.style.color = 'grey'; // Reset the color to default on mouse leave
            skillsText.style.color = 'grey';
        }
    });

    icon.addEventListener('mouseleave', () => {
        worksText.style.color = ''; // Reset the color to default on mouse leave
        skillsText.style.color = '';
        homeText.style.color = '';
    });
});
emailIcon.addEventListener('mouseenter', () => {
    emailText.style.color = 'rgb(0, 205, 52)';
})
emailIcon.addEventListener('mouseleave', () => {
    emailText.style.color = '';
})
