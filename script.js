// Universal JavaScript function to play any audio element by its ID
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    
    if (audio) {
        audio.pause();
        audio.currentTime = 0; 
        audio.play();
    }
}

// Function to fetch the JSON data (no change needed)
function loadSentences() {
    fetch('sentences.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok. Please use a local web server (like Live Server).');
            }
            return response.json(); 
        })
        .then(sentencesData => {
            generateHtml(sentencesData); 
        })
        .catch(error => {
            console.error('Error fetching or parsing the JSON:', error);
            document.getElementById('sentences-output').innerHTML = '<p>Error loading sentences. Check your file paths and console.</p>';
        });
}

// 💥 NEW FUNCTION: Toggles Pinyin for a single sentence by its unique index 💥
function toggleSinglePinyin(index) {
    // Get the specific Pinyin element using its unique ID
    const pinyinElement = document.getElementById(`pinyin-${index}`);
    if (pinyinElement) {
        // The classList.toggle() method simplifies adding/removing the class
        pinyinElement.classList.toggle('pinyin-hidden');
    }
}

// Function to generate the HTML (modified for checkbox placement)
function generateHtml(sentencesData) {
    const outputContainer = document.getElementById('sentences-output');
    let allHtml = '';

    // Pinyin is hidden by default
    const initialPinyinClass = ' pinyin-hidden';

    sentencesData.forEach((row, index) => {
        if (!row.chinese || !row.pinyin) return; 

        const audio1Id = `audio-mandarin-${index}`;
        const audio2Id = `audio-cantonese-${index}`;
        const pinyinId = `pinyin-${index}`; // Unique ID for the Pinyin paragraph
        const checkboxId = `checkbox-${index}`; // Unique ID for the checkbox

        const sentenceRowHtml = `
            <div class="sentence-row">
                
                <div class="text-container">
                    <div class="chinese-line-wrapper">
                        <input type="checkbox" id="${checkboxId}" onclick="toggleSinglePinyin(${index})">
                        <p class="chinese-text">${row.chinese}</p>
                    </div>
                    
                    <p id="${pinyinId}" class="pinyin-text${initialPinyinClass}">${row.pinyin}</p>
                </div>
                
                <button class="audio-button" onclick="playAudio('${audio1Id}')">
                    🔊 普通話 
                </button>
                
                <audio id="${audio1Id}" src="${row.mandarinAudio}" preload="auto"></audio>
                
                <p>&ensp;</p>
                
                <button class="audio-button" onclick="playAudio('${audio2Id}')">
                    🔊 廣東話
                </button>
                
                <audio id="${audio2Id}" src="${row.cantoneseAudio}" preload="auto"></audio>
            </div>
        `;
        
        allHtml += sentenceRowHtml;
    });

    outputContainer.innerHTML = allHtml;
}

// Start the process when the window loads
window.onload = loadSentences;