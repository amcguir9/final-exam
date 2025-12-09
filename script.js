const nameInput = document.querySelector('#name');
const greetButton = document.querySelector('#greet-btn');
const greetingMessage = document.querySelector('#greeting-message');

greetButton.addEventListener('click', function() {
    const userName = nameInput.value;

    if (username) {
        greetingMessage.textContent = "Welcome, " + userName + "!";
    }
    else {
        greetingMessage.textContent = "Please enter your name.";
    }
});

//textContent is safer to use instead of innerHTML because if you were to use innerHTML
//text boxes could be exploited by users by injecting script and other nefarious
//that can be executed by the website