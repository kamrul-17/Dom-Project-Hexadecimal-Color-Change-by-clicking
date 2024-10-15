//create on load handler
window.onload = () => {
    //Get Referance

    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output ');
    // Add event listener
    btn.addEventListener('click', function () {
        const newBackgroundColor = generateHexColor();
        root.style.backgroundColor = newBackgroundColor;
        output.value = newBackgroundColor;
    });
};

//step - 2 Random color generator
// function generateHexColor() {
    //Generate random hex color
    //#000000 to #ffffff
    // 255, 255, 255 ->#ff ff ff
    // const red = Math.floor(Math.random() * 255);
    // const green = Math.floor(Math.random() * 255);
    // const blue = Math.floor(Math.random) * 255;
    // return `#(${red.toString(16)}, ${green.toString(16)}, ${blue.toString(16)})`;
    // }
    function generateHexColor() {
        // Generate random hex color code
        const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        return `#${red}${green}${blue}`;
      
      }
//Step 3 - Collect all Nesesarry Referace 
//Step 4 - Handle the click event