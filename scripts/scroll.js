
const menuItems = document.querySelectorAll('.links a[href^="#"]');
console.log(menuItems);

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const section = document.querySelector(id);
        console.log(section.offsetTop);

        window.scroll({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        })
    })
});