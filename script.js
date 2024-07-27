document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const messageContainer = document.getElementById('messageContainer');
    const messages = document.querySelectorAll('.message');
    
    let messageIndex = 0;
    let messageCount = messages.length;

    function showMessagesOneByOne() {
        if (messageIndex < 4) { // Show only first 4 messages one by one
            const message = messages[messageIndex];
            message.style.opacity = 1;
            message.style.transform = 'translateY(0)';
            messageIndex++;
            setTimeout(showMessagesOneByOne, 1000); // Show each message every 1 second
        } else {
            placeRemainingMessages();
        }
    }

    function placeRemainingMessages() {
        for (let i = 4; i < messageCount; i++) {
            const message = messages[i];
            message.classList.remove('hidden');
            const side = Math.random() > 0.5 ? 'left' : 'right';
            const top = Math.random() * 80 + 10 + 'px'; // Random vertical position
            const left = side === 'left' ? '10px' : 'unset';
            const right = side === 'right' ? '10px' : 'unset';

            message.style.top = top;
            message.style.left = left;
            message.style.right = right;
        }
    }

    showMessagesOneByOne();

    toggleButton.addEventListener('click', () => {
        messageContainer.classList.toggle('show-all');
        if (messageContainer.classList.contains('show-all')) {
            // Show all messages
            messages.forEach(message => {
                message.classList.remove('hidden');
                message.style.opacity = 1;
                message.style.transform = 'translateY(0)';
            });
            toggleButton.textContent = 'Show Less';
        } else {
            // Hide messages beyond the first 4
            messages.forEach((message, index) => {
                if (index >= 4) {
                    message.classList.add('hidden');
                }
            });
            toggleButton.textContent = 'Show All Messages';
        }
    });
});
