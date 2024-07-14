const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route for testing
app.get('/', (req, res) => {
    res.send('Hello! This is the backend server for JARVIS Voice Assistant.');
});

// Example route for processing commands
app.post('/command', (req, res) => {
    const { command } = req.body;

    if (!command) {
        return res.status(400).send('Command is required');
    }

    let responseText = '';

    if (command.includes('hey') || command.includes('hello')) {
        responseText = 'Hello Sir, How May I Help You?';
    } else if (command.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' });
        responseText = `The current time is ${time}`;
    } else if (command.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: 'short', day: 'numeric' });
        responseText = `Today's date is ${date}`;
    } else {
        responseText = `I received your command: ${command}`;
    }

    res.send({ responseText });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
