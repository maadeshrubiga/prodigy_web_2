// =====================
// STOPWATCH VARIABLES
// =====================
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;
let lapCount = 0;
let laps = [];
let previousSessionLaps = [];

// =====================
// DOM ELEMENTS
// =====================
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapList = document.getElementById('lapList');
const graphContainer = document.getElementById('graphContainer');

// =====================
// FORMAT TIME
// =====================
function formatTime(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMs = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}.${formattedMs}`;
}

// =====================
// UPDATE DISPLAY
// =====================
function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

// =====================
// START TIMER
// =====================
function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        isRunning = true;
        updateButtons();
    }
}

// =====================
// STOP TIMER
// =====================
function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        updateButtons();
    }
}

// =====================
// RECORD LAP
// =====================
function recordLap() {
    if (isRunning) {
        lapCount++;
        const lapTime = elapsedTime;
        laps.push({ number: lapCount, time: lapTime });
        addLapToList(lapCount, lapTime);
        updateGraph();
    }
}

// =====================
// RESET TIMER
// =====================
function resetTimer() {
    stopTimer();
    // Save current laps to previous session before resetting
    if (laps.length > 0) {
        previousSessionLaps = [...previousSessionLaps, ...laps];
    }
    elapsedTime = 0;
    lapCount = 0;
    laps = [];
    updateDisplay();
    renderLapList();
    updateGraph();
}

// =====================
// UPDATE BUTTONS
// =====================
function updateButtons() {
    startBtn.disabled = isRunning;
    stopBtn.disabled = !isRunning;
    lapBtn.disabled = !isRunning;
}

// =====================
// ADD LAP TO LIST
// =====================
function addLapToList(lapNumber, lapTime) {
    const li = document.createElement('li');
    li.className = 'lap-item';
    li.innerHTML = `
        <span class="lap-number">Lap ${lapNumber}</span>
        <span class="lap-time">${formatTime(lapTime)}</span>
    `;
    lapList.insertBefore(li, lapList.firstChild);
}

// =====================
// RENDER LAP LIST
// =====================
function renderLapList() {
    lapList.innerHTML = '';
    
    // Show previous session laps if any
    if (previousSessionLaps.length > 0) {
        // Add session divider
        const divider = document.createElement('div');
        divider.className = 'session-divider';
        divider.textContent = 'Previous Session';
        lapList.appendChild(divider);
        
        // Add previous laps
        previousSessionLaps.forEach((lap, index) => {
            const li = document.createElement('li');
            li.className = 'lap-item previous';
            li.innerHTML = `
                <span class="lap-number">Lap ${lap.number}</span>
                <span class="lap-time">${formatTime(lap.time)}</span>
            `;
            lapList.appendChild(li);
        });
    }
}

// =====================
// UPDATE GRAPH
// =====================
function updateGraph() {
    const allLaps = [...previousSessionLaps, ...laps];
    
    if (allLaps.length === 0) {
        graphContainer.innerHTML = `
            <div class="no-data">
                <div class="no-data-icon">📊</div>
                <div>Press Start and record laps to see the graph</div>
            </div>
        `;
        return;
    }

    // Find max time for scaling
    const maxTime = Math.max(...allLaps.map(lap => lap.time));
    const minTime = Math.min(...allLaps.map(lap => lap.time));
    const range = maxTime - minTime || 1;

    // Calculate bar heights (min 30px, max based on container)
    const containerHeight = graphContainer.clientHeight - 80;
    const scaleFactor = (containerHeight - 30) / range;

    graphContainer.innerHTML = '';

    allLaps.forEach((lap, index) => {
        const barHeight = Math.max(30, (lap.time - minTime) * scaleFactor + 30);
        const isCurrentSession = index >= previousSessionLaps.length;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';
        
        const bar = document.createElement('div');
        bar.className = 'bar';
        if (!isCurrentSession) {
            bar.style.background = 'linear-gradient(180deg, #90a4ae 0%, #b0bec5 100%)';
        }
        bar.style.height = `${barHeight}px`;
        
        const barValue = document.createElement('div');
        barValue.className = 'bar-value';
        barValue.textContent = formatTime(lap.time);
        
        const barLabel = document.createElement('div');
        barLabel.className = 'bar-label';
        barLabel.textContent = isCurrentSession ? `Lap ${lap.number}` : `L${lap.number}`;
        
        bar.appendChild(barValue);
        barContainer.appendChild(bar);
        barContainer.appendChild(barLabel);
        graphContainer.appendChild(barContainer);
    });
}

// =====================
// EVENT LISTENERS
// =====================
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
lapBtn.addEventListener('click', recordLap);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
updateButtons();
