///?///?/??????????????????? navbar ////??????????????????????????????????????????
function toggleNav() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('responsive');
}



///?///?/??????????????????? form ////??????????????????????????????????????????
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;

    // Reset error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('genderError').innerText = '';

    var isValid = true;

    if (username === '') {
        document.getElementById('usernameError').innerText = 'Please enter your username.';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Please enter your password.';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters.';
        isValid = false;
    }
var regex=/^[a-zA-Z]{3,}@[a-zA-Z]{3,}\./;
    if (!regex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter your email.';
        isValid = false;
    }

    if (gender === '') {
        document.getElementById('genderError').innerText = 'Please select your gender.';
        isValid = false;
    }

    if (isValid) {
        // You can add additional validations and actions here

        // Redirect to the home page
        window.location.href = 'home.html';
    }
}


///?///?/??????????????????? footer ////??????????????????????????????????????????
var socialMediaLinks = [
    { name: "Facebook", icon: "./image/facebook.png", link: "https://www.facebook.com" },
    { name: "Twitter", icon: "./image/twitter.png", link: "https://twitter.com" },
    { name: "whataapp", icon: "./image/whatsapp.png", link: "https://www.whatsapp.com" },
    // Add more social media links as needed
];

// Function to dynamically create social media icons
function createSocialIcons() {
    var socialIconsContainer = document.getElementById("socialIconsContainer");

    socialMediaLinks.forEach((socialMedia) => {
        var iconElement = document.createElement("a");
        iconElement.href = socialMedia.link;
        iconElement.target = "_blank";
        iconElement.innerHTML =`<img src="${socialMedia.icon}" alt="${socialMedia.name}" title="${socialMedia.name}">`;

        socialIconsContainer.appendChild(iconElement);
    });
}

// Call the function to create social media icons
createSocialIcons();