window.onload = () => {
    main();
};

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click', function () {
        const newBackgroundColor = generateHexColor();
        root.style.backgroundColor = newBackgroundColor;
        output.value = newBackgroundColor;
    });
}    

function generateHexColor() {   
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); 
    const blue = Math.floor(Math.random()* 255);
    return `#${red}${green}${blue}`;  
    }


    