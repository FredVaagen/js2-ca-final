export function displayMessage(messageType, message) {
    const element = document.querySelector(".team-container");

    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
