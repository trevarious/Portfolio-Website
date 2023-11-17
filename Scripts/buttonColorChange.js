

const changeButtonContainerColor = () => {
    const buttonContainer = document.querySelector('.btn-container');
    let r = Math.floor(Math.random() * (255 - 200 + 1) + 200);
    let b = Math.floor(Math.random() * 0);
    let g = Math.floor(Math.random() * 50);

    buttonContainer.style.transition = 'background-color 0.6s ease';
    buttonContainer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

const changeButtonColor = () => {
    const button = document.getElementById('cta');
    let r = Math.floor(Math.random() * (255 - 200 + 1) + 200);
    let b = Math.floor(Math.random() * 50);
    let g = Math.floor(Math.random() * 0);

    button.style.transition = 'background-color 0.6s ease';
    button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

const changeBorderColor = () =>{
    const border = document.querySelector('.left-nav');
    let r = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 100);
    border.style.borderRight = `.5px solid rgb(${r}, ${g}, ${b})`;


}

setInterval(changeButtonContainerColor, 1500); // Adjusted intervals for a smoother effect
setInterval(changeButtonColor, 2000);
setInterval(changeBorderColor, 100);



