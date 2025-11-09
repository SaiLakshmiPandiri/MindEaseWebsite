// Simple Chatbot Demo Simulation
let chatWindow = document.getElementById('chat-window');
let userInput = document.getElementById('user-input');

function sendMessage() {
    let message = userInput.value;
    if (message.trim() === '') return;
    
    // Display user message
    chatWindow.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    
    // Simulate AI response (basic; replace with real API like Hugging Face)
    setTimeout(() => {
        let responses = [
            "I'm here to help. Try deep breathing: Inhale for 4 seconds, hold for 4, exhale for 4.",
            "That's tough. Journaling your thoughts can bring clarity. What's on your mind?",
            "You're not alone. Many feel this way. Let's track your mood – how are you feeling today?"
        ];
        let randomResponse = responses[Math.floor(Math.random() * responses.length)];
        chatWindow.innerHTML += `<p><strong>MindEase AI:</strong> ${randomResponse}</p>`;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);
    
    userInput.value = '';
}

// Sign-up Form Handler
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for signing up! We\'ll contact you soon.');
});

// Smooth Scroll Function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
