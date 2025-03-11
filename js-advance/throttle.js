function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();

        if (now - lastCall < delay) {
            return;
        }

        lastCall = now;
        return func(...args);
    };
}

function sendChatMessage(message) {
    console.log("Sending Message", message);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000); // Add 2 mins delay

// next call will send after 2mins

sendChatMessageWithSlowMode("Hi");
sendChatMessageWithSlowMode("Hello");
sendChatMessageWithSlowMode("Hi, Sir ji");
sendChatMessageWithSlowMode("Hi, sir ji when we connect");
