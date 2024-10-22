document.getElementById('start-button').addEventListener('click', function() {
    const hiragana = document.getElementById('hiragana').checked;
    const katakana = document.getElementById('katakana').checked;
    const koreanConsonants = document.getElementById('korean-consonants').checked;
    const koreanVowels = document.getElementById('korean-vowels').checked;
    const koreanBasicSyllables = document.getElementById('korean-basic-syllables').checked;
    const koreanCompleteSyllables = document.getElementById('korean-complete-syllables').checked;
    const duration = parseInt(document.getElementById('duration').value);
    const hintDelay = parseInt(document.getElementById('hint-delay').value);

    const gameConfig = {
        hiragana,
        katakana,
        koreanConsonants,
        koreanVowels,
        koreanBasicSyllables,
        koreanCompleteSyllables,
        duration,
        hintDelay
    };

    localStorage.setItem('languageGameConfig', JSON.stringify(gameConfig));
    window.location.href = 'game.html';
});

