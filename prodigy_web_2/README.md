# 💎 Rubi Stopwatch

A beautiful, feature-rich stopwatch web application with lap time tracking and visual graph comparison.



## ✨ Features

- **Stopwatch Controls**: Start, Stop, Reset, and Lap buttons
- **Real-time Display**: High-precision timer showing minutes, seconds, and milliseconds (MM:SS.ms)
- **Lap Recording**: Track and save multiple lap times during a session
- **Visual Graph**: Interactive bar chart comparing lap times
- **Session History**: Previous session laps are preserved after reset for reference
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Animations**: Polished transitions and hover effects

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. Clone or download this repository

### Run the Website

**`start index.html`**

Or simply open `index.html` directly in your web browser to start using the stopwatch!

### File Structure

```
prodigy_web_2/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Stopwatch logic and graph rendering
└── README.md       # This file
```

## 🎯 Usage Guide

| Button | Action |
|--------|--------|
| **Start** | Begins the stopwatch timer |
| **Stop** | Pauses the running timer |
| **Lap** | Records the current lap time (only when running) |
| **Reset** | Stops timer, saves current laps to previous session, clears display |

### Tips

- Press **Lap** while the stopwatch is running to record lap times
- After pressing **Reset**, previous session laps are shown in gray for reference
- Hover over graph bars to see detailed lap times
- The graph automatically scales based on lap time differences

## 🛠️ Technical Details

- **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Timer Precision**: 10ms interval updates
- **Graph Rendering**: Dynamic bar heights based on relative lap times
- **Browser Support**: All modern browsers (ES6+)

## 🎨 Design

- **Theme**: Purple/blue gradient background
- **Typography**: Segoe UI with monospace for timer display
- **Animations**: 
  - Slide-in for new lap entries
  - Growing bars in graph
  - Button hover effects

## 📱 Responsive Breakpoints

| Device | Max Width | Layout |
|--------|-----------|--------|
| Desktop | > 1024px | Two-column (stopwatch + graph) |
| Tablet | ≤ 1024px | Single column |
| Mobile | ≤ 480px | Compact controls and text |

## 🤝 Contributing

Feel free to fork this project and add your own enhancements!


