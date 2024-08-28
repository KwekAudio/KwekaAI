async function fetchResponses() {
    const response = await fetch('responses.json');
    return await response.json();
}

async function generateResponse(input) {
    const responses = await fetchResponses();
    const lowerInput = input.toLowerCase(); // Convert input to lowercase for case-insensitive matching
    return responses[lowerInput] || "Sorry, I don't understand that. Can you ask something else?";
}

document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById('chat-box');

    sendButton.addEventListener('click', async function() {
        const userMessage = messageInput.value.trim(); // Do not change case here
        if (userMessage) {
            appendMessage("user", userMessage);
            // Simulate typing delay
            setTimeout(async function() {
                const response = await generateResponse(userMessage);
                appendMessage("kwekaAI", response);
                messageInput.value = ''; // Clear input field
            }, 1000); // 1 second typing delay
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = "message " + sender;
        messageElement.textContent = (sender === 'user' ? "User: " : "KwekaAI: ") + message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
});
