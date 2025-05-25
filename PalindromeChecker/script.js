const formContainer = document.getElementById('form-container');
const textField = document.getElementById("checker-form");
const responseBox = document.getElementById("response-box");

const colorValues = {
    "navyBlue": "#000035",
    "dirtyWhite": "#fff" ,
    "wildPurple": "#a142f5",
    "greyish": "#808080",
    "translucentRed": "rgba(207, 0, 15, 0.5)",
    "translucentGreen": "rgba(63, 195, 128, 0.25)",
};

const button = {
    "submitButton": document.getElementById("submit"),
    "resetButton": document.getElementById("reset"),
};

// palindrome checker function that iterates over the element 
// to check if it's  leftmost element matches rightmost element

const isPalindrome = () => {
    const regex = /[^a-z0-9]/gi;
    const input = textField.value.replace(regex, "").toLowerCase();
    return input === input.split("").reverse().join("");
}

// invokes the isPalindrome function, displays the result in the responseBox and 
// changes the colors of the elements
const resetQuery = (e) => {
    e.preventDefault();
    button.submitButton.style.backgroundColor = colorValues.wildPurple;
    button.submitButton.innerText = "Check!";
    textField.value = "";
    textField.removeAttribute("disabled");
    button.resetButton.setAttribute("disabled", "");
    button.resetButton.style.backgroundColor = colorValues.greyish;
    button.submitButton.removeAttribute("disabled");
    responseBox.style.display = "none";
}

const showResult = (e) => {
    e.preventDefault();
    if (isPalindrome()) {
        if (textField.value.length > 25) {
            responseBox.innerHTML = `<p class="response">The word <strong>${textField.value.substring(0, 10)}...</strong> is a palindrome!</p>`;
        } else {
        responseBox.innerHTML = `<p class="response">The word <strong>${textField.value}</strong> is a palindrome!</p>`;
        }
        responseBox.style.backgroundColor = colorValues.translucentGreen;
        responseBox.style.color = colorValues.navyBlue;
    } else {
        responseBox.innerHTML = `<p class="response">Not a palindrome! What a bummer!</p>`;
        responseBox.style.backgroundColor = colorValues.translucentRed;
    }
    responseBox.style.display = "block";
    textField.setAttribute("disabled","");
    button.submitButton.setAttribute("disabled", "");
    button.submitButton.style.backgroundColor = colorValues.greyish;
    button.resetButton.style.backgroundColor = colorValues.wildPurple;
    button.resetButton.removeAttribute("disabled");
}

button.submitButton.addEventListener('click', showResult);

button.resetButton.addEventListener('click', resetQuery);

// TO-DO - instead of one button, create two buttons, one set for display - none and the other one for normal;
// when one will be triggered, the display attribute of the other one will be none, so that only one is visible

// or what if there was no button at the beginning and the button was injected when the logical state stored in some variable
// changed?