# ChineseLearning1.0
Interactive Chinese learning app with pinyin, translations, and audio in both Mandarin and Cantonese. Track lesson progress and practice pronunciation easily.

Chinese Learning Tool

This project is a simple, web-based application designed for practicing Chinese (Mandarin and Cantonese) sentences. It dynamically loads sentences from a JSON file and presents them in an interactive format, allowing users to show or hide Pinyin and listen to audio recordings for each sentence.

Preview

(This is a conceptual preview of what the app looks like based on the provided code.)

✨ Features

    Dynamic Content: Sentences are loaded dynamically from a sentences.json file.

    Pinyin Toggle: Each sentence has a checkbox to individually show or hide its Pinyin transcription.

    Dual Audio Playback: Listen to high-quality audio recordings for each sentence in both Mandarin (Putonghua) and Cantonese (Guangdonghua).

    Simple Navigation: The project is set up with two HTML pages (index.html and index6.html) to navigate between different sets of lessons (e.g., "P1 - 6" and "P6 - 9").

    Clean UI: Styled with CSS for a clean, readable, and easy-to-use study interface.

🚀 How to Use (Setup)

Important: This project uses the fetch() API to load the sentences.json file. For security reasons, browsers will block this action if you open the index.html file directly from your local filesystem (e.g., file:///...).

You must run this project from a local web server.

Option 1: Using the VS Code Live Server Extension (Easiest)

    Install the Live Server extension in Visual Studio Code.

    Open the project folder in VS Code.

    Right-click on index.html and select "Open with Live Server".

Option 2: Using Python's Built-in Server

    Open a terminal or command prompt.

    Navigate (cd) to the project's root directory (the one containing index.html).

    Run one of the following commands, depending on your Python version:

        Python 3: python -m http.server

        Python 2: python -m SimpleHTTPServer

    Open your web browser and go to http://localhost:8000.

📁 File Structure

.
├── Audio/              # (Assumed) Folder for all .mp3 files
│   ├── Cant/
│   └── Man/
├── index.html          # Main page (Lessons P1 - 6)
├── index6.html         # Second page (Lessons P6 - 9)
├── sentences.json      # Data file with Chinese, Pinyin, and audio paths
├── script.js           # Core JavaScript for fetching data and interactivity
└── styles.css          # All CSS for styling the application

💡 Note on Data for Multiple Pages

As currently structured, both index.html and index6.html load the same script.js file, which is hardcoded to fetch the same sentences.json file.

If you want index6.html to display different sentences, you will need to:

    Create a separate JSON file (e.g., sentences6.json).

    Create a copy of script.js (e.g., script6.js).

    In script6.js, change the fetch URL from 'sentences.json' to 'sentences6.json'.

    In index6.html, change the script tag to load script6.js instead of script.js.

💻 Technologies Used

    HTML5

    CSS3 (Flexbox)

    Vanilla JavaScript (ES6+)

    JSON (for data storage)
