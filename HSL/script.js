const toggleButton = document.getElementById('toggleTheme');
const resetButton = document.getElementById('resetSettings');
const previewBox = document.querySelector('.preview-box');
const huePicker = document.getElementById('huePicker');

const DEFAULT_HUE = 200;
let isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
let savedHue = localStorage.getItem('hue') || DEFAULT_HUE;

// Set initial hue
huePicker.value = savedHue;
document.documentElement.style.setProperty('--primary-hue', savedHue);

// Apply stored theme settings
function applyTheme() {
    document.documentElement.style.setProperty('--primary-lightness', isDarkMode ? '30%' : '50%');
    document.documentElement.style.setProperty('--background-color', isDarkMode ? 'hsl(var(--primary-hue), 40%, 20%)' : 'hsl(var(--primary-hue), 40%, 90%)');
    document.documentElement.style.setProperty('--text-color', isDarkMode ? 'hsl(var(--primary-hue), 80%, 90%)' : 'hsl(var(--primary-hue), 80%, 20%)');
    
    // Update background gradient dynamically
    document.body.style.background = `linear-gradient(45deg, hsl(${huePicker.value}, 60%, 80%), hsl(${parseInt(huePicker.value) + 40}, 70%, 70%))`;
    
    // Update preview box color
    previewBox.style.backgroundColor = `hsl(${huePicker.value}, 80%, ${isDarkMode ? '30%' : '50%'})`;
}

// Toggle light/dark mode
toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    applyTheme();
});

// Update hue dynamically and store it
huePicker.addEventListener('input', (e) => {
    const hue = e.target.value;
    localStorage.setItem('hue', hue);
    document.documentElement.style.setProperty('--primary-hue', hue);

    applyTheme();
});

// Reset settings to default
resetButton.addEventListener('click', () => {
    localStorage.removeItem('darkMode');
    localStorage.removeItem('hue');

    isDarkMode = false;
    huePicker.value = DEFAULT_HUE;
    document.documentElement.style.setProperty('--primary-hue', DEFAULT_HUE);

    applyTheme();
});

// Apply stored theme on page load
applyTheme();
