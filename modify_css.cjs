const fs = require('fs');
let css = fs.readFileSync('src/style.css', 'utf8');

// 1. Remove floating labels CSS
css = css.replace(/\/\* Floating Labels \*\/[\s\S]*?(?=\/\*)/, '');

// 2. Add styles for Launchpad overlay and updated dock items
const newStyles = `
/* Launchpad Overlay */
.launchpad-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  z-index: 3000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: scale(1.05);
}

.launchpad-overlay.show {
  opacity: 1;
  pointer-events: all;
  transform: scale(1);
}

.launchpad-search {
  margin-bottom: 40px;
}

.launchpad-search input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 20px;
  border-radius: 20px;
  width: 300px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  outline: none;
}

.launchpad-search input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.launchpad-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
}

.launchpad-group {
  width: 100%;
  margin-bottom: 40px;
}

.launchpad-group h3 {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.launchpad-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.launchpad-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.launchpad-app:hover {
  transform: scale(1.1);
}

.launchpad-app.active .app-icon {
  background: rgba(255, 255, 255, 0.8);
  color: var(--text-primary);
  box-shadow: 0 0 20px rgba(255,255,255,0.5);
}

.launchpad-app .app-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

.launchpad-app span {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

/* Updated Dock items */
.dock-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dock-tooltip {
  position: absolute;
  top: -35px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.dock-item:hover .dock-tooltip {
  opacity: 1;
  transform: translateY(0);
}

.dock-item:hover .dock-icon {
  transform: scale(1.2) translateY(-10px);
  margin: 0 10px;
}

.dock-icon.active {
  background: var(--text-primary);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

/* `;
css = css + newStyles;

fs.writeFileSync('src/style.css', css);
