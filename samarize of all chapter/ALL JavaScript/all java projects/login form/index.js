const container = decument.getElementByid('container');
const registerBtn = decument.getElementByid('register');

const loginBtn = decument.getElementByid('login');

    registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    });
    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });