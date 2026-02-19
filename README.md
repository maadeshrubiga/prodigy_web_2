# 💎 Rubi Stopwatch

> **Track Every Second. Visualize Every Lap.**

A beautiful, feature-rich stopwatch web application with animated graph visualization for lap time comparison. Built with pure HTML, CSS, and JavaScript - no frameworks required!

---

## ✨ Features

### ⏱️ **Core Stopwatch Functions**
- ▶️ **Start/Stop** - Precise timing down to centiseconds
- 🔄 **Reset** - Clear current session while preserving history
- ⏸️ **Pause & Resume** - Pick up right where you left off

### 🏁 **Lap Tracking**
- 📝 Record unlimited lap times
- 🎯 Each lap shows individual duration
- 📊 Real-time visual comparison
- 🔢 Automatic lap numbering

### 📈 **Graph Visualization**
- 🎨 Animated bar chart for lap comparisons
- 🌈 Color-coded bars with gradient design
- 🖱️ Interactive hover effects
- 📏 Auto-scaling based on longest lap

### 💾 **Session History**
- 🗂️ Previous lap times preserved after reset
- 🎭 Visual distinction between current and past sessions
- 🏷️ Session badges ("Current Session" / "Last Run")
- 👻 Muted styling for historical data

### ⌨️ **Keyboard Shortcuts**
- `Space` - Start/Stop the timer
- `L` - Record a lap (while running)
- `R` - Reset everything

### 📱 **Responsive Design**
- 💻 Desktop-optimized layout
- 📱 Mobile-friendly responsive grid
- 🎯 Touch-friendly buttons
- 🌊 Smooth animations throughout

---

## 🚀 Quick Start

### 📥 Installation

1. **Download the files:**
   ```bash
   git clone <your-repo-url>
   cd rubi-stopwatch
   ```

2. **File structure:**
   ```
   rubi-stopwatch/
   ├── index.html
   ├── style.css
   └── script.js
   ```

3. **Open in browser:**
   - Double-click `index.html`, or
   - Use a local server:
     ```bash
     python -m http.server 8000
     # Visit http://localhost:8000
     ```

### 🎮 How to Use

1. **🟢 Start Timer** - Click the green "START" button or press `Space`
2. **🔵 Record Laps** - Click "LAP" button or press `L` while running
3. **🟠 Pause** - Click "STOP" to pause timing
4. **🔴 Reset** - Click "RESET" to start fresh (keeps previous session)
5. **📊 Watch Graph** - See your lap times visualized in real-time!

---

## 🎨 Design Highlights

### 🌟 **Visual Elements**
- 🎭 Purple gradient background (`#667eea` → `#764ba2`)
- 💠 Clean white container with shadow depth
- 🔷 Color-coded buttons with hover animations
- 📐 Monospace font for precise time display

### 🎬 **Animations**
- 📥 Slide-in effect for new lap entries
- 📊 Growing bars in graph visualization
- ⬆️ Lift-on-hover button effects
- 🌊 Smooth transitions throughout

### 🎯 **Color Palette**
| Element | Color | Hex |
|---------|-------|-----|
| 🟢 Start | Green | `#4CAF50` |
| 🟠 Stop | Orange | `#ff9800` |
| 🔵 Lap | Blue | `#2196F3` |
| 🔴 Reset | Red | `#f44336` |
| 🟣 Accent | Purple | `#667eea` |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| 🌐 **HTML5** | Structure & semantics |
| 🎨 **CSS3** | Styling, animations, grid layout |
| ⚡ **JavaScript (ES6)** | Timer logic, DOM manipulation, events |

### 📦 **Zero Dependencies!**
- ❌ No React
- ❌ No jQuery
- ❌ No build tools
- ✅ Pure vanilla JavaScript
- ✅ Works offline
- ✅ Super lightweight (~10KB total)

---

## 📁 File Breakdown

### 📄 `index.html` (Structure)
```html
<!-- Clean semantic HTML -->
- Container layout
- Stopwatch display
- Control buttons
- Lap list
- Graph container
```

### 🎨 `style.css` (Styling)
```css
/* Organized sections */
- Reset & base styles
- Layout grid system
- Button animations
- Bar chart styling
- Responsive breakpoints
- Scrollbar customization
```

### ⚙️ `script.js` (Logic)
```javascript
// Core functionality
- Timer precision (10ms intervals)
- Lap recording system
- Graph generation
- Session history management
- Keyboard event handlers
```

---

## 🎯 Key Functions

| Function | Description |
|----------|-------------|
| `start()` | ▶️ Begins timer interval |
| `stop()` | ⏸️ Pauses timer |
| `reset()` | 🔄 Clears session, preserves history |
| `recordLap()` | 🏁 Captures current lap time |
| `updateGraph()` | 📊 Refreshes bar chart visualization |
| `formatTime()` | ⏰ Converts ms to HH:MM:SS.MS |
| `formatLapTime()` | 🎯 Converts ms to SS.MS format |

---

## 📱 Responsive Breakpoints

| Screen Size | Layout |
|-------------|--------|
| 🖥️ **>1024px** | Two-column grid (stopwatch + graph) |
| 📱 **<1024px** | Single column stack |
| 📱 **<480px** | Compact mobile view |

---

## 🌈 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| 🟢 Chrome | 90+ | ✅ Full |
| 🟠 Firefox | 88+ | ✅ Full |
| 🔵 Safari | 14+ | ✅ Full |
| 🔷 Edge | 90+ | ✅ Full |
| 🟣 Opera | 76+ | ✅ Full |

---

