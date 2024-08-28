const responses = {
"hello": "Hi there! How can I assist you today?",
"how are you": "I am just a bot, but I am here to help you!",
"bye": "Goodbye! Have a great day!",
"human anatomy": "Human anatomy is the study of the structure of the human body.",
"photosynthesis": "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.",
"mendelian genetics": "Mendelian genetics refers to the patterns of inheritance that are characteristic of organisms that reproduce sexually.",
"quantum physics": "Quantum physics deals with the behavior of particles at the smallest scales, such as atoms and photons.",
"machine learning": "Machine learning is a field of artificial intelligence that uses algorithms to learn from and make predictions on data.",
"theory of relativity": "The theory of relativity, developed by Albert Einstein, includes the concepts of special relativity and general relativity, addressing the behavior of objects in space and time.",
"historical events": "Historical events are occurrences that have had a significant impact on societies and civilizations over time.",
"economics": "Economics is the study of how people manage resources and make decisions to satisfy their needs and wants."
}

async function generateResponse(input) {
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
