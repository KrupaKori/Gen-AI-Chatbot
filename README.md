# JARVIS Voice Assistant

This project is a simple voice assistant that uses Web Speech API for speech recognition and speech synthesis. It listens for voice commands and responds accordingly.

## Features

- **Speech Synthesis:** Greets the user based on the time of day and announces initialization.
- **Speech Recognition:** Listens for voice commands when a button is clicked.
- **Command Handling:** Sends the voice command to a server and speaks out the server's response.

## Requirements

- A modern web browser with support for the Web Speech API.
- A server running locally on port `3000` that accepts POST requests at the endpoint `/command` and returns a JSON response.

## Installation

1. Clone this repository:
    ```sh
    git clone https://github.com/your-username/jarvis-voice-assistant.git
    cd jarvis-voice-assistant
    ```

2. Ensure you have a server running locally that can handle the POST request. You can use Node.js for setting up a simple server.

## Usage

1. Open `index.html` in a supported web browser.

2. On page load, JARVIS will initialize and greet you based on the time of day.

3. Click the button with the class `talk` to start listening for commands. The recognized speech will be displayed in the element with the class `content`.

4. The recognized command will be sent to the server, and JARVIS will speak out the server's response.

## Code Overview

### HTML
The HTML file contains a button to trigger speech recognition and a content area to display the recognized text.

```html
<button class="talk">Talk</button>
<div class="content"></div>

git clone https://github.com/your-username/jarvis-voice-assistant.git
