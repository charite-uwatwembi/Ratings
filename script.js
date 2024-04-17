let button = document.getElementById('btnRate');
let output = document.getElementById('output');
let body = document.querySelector('body');
let main = document.createElement('main');

// Move child nodes from body to main
while (body.firstChild) {
    main.appendChild(body.firstChild);
}

// Clear the original body content
document.body.innerHTML = '';

// Append the 'main' element to the body
document.body.appendChild(main);

// Apply styles to the main element
main.style.cssText = "width: 100%; background-color: #eee; height: 50vh; display: block; margin: 10px; text-align: center; padding: 20px;";
button.style.cssText = " background-color: #019; color: #fff; padding: 10px; border: none; border-radius: 5px; cursor: pointer;";
// Add event listener to the button
button.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');

    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerHTML = `You selected: ${rate.value}`;
        }
    });
});
