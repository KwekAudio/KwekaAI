document.addEventListener("DOMContentLoaded", function() {

    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById('chat-box');

    sendButton.addEventListener('click', function() {
        const userMessage = messageInput.value.trim(); // Do not change case here
        if (userMessage) {
            appendMessage("user", userMessage);
             messageInput.value = ''; // Clear input field

            // Simulate typing delay
            setTimeout(function() {
            // Remove the typing indicator
            const typingIndicator = chatBox.querySelector(".message.KwekaAI");
            if (typingIndicator) {
              chatBox.removechild(typingIndicator);
           } 

           //Add the actual response
            const response = generateResponse(userMessage);
            appendMessage("kwekaAI", response);
           },1000); // 1 second typing delay
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = "message " + sender;
        messageElement.textContent = (sender === 'user' ? "User: " : "KwekaAI: ") + message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }

    function generateResponse(input) {
        const responses = {
            "hello": "Hi there! How can I assist you today?",
            "how are you": "I am just a bot, but I am here to help you!",
            "bye": "Goodbye! Have a great day!",
        };

        const lowerInput = input.toLowerCase(); //Compare input as lowercase
        return responses[lowerInput] || responses['default'];
    }

});