function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Example usage:
delayedMessage("Hello, this message is delayed by 2 seconds!", 2000);
