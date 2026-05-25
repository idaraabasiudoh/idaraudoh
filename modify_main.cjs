const fs = require('fs');

let mainTs = fs.readFileSync('src/main.ts', 'utf8');

// 1. Remove floating labels
const floatingLabelsRegex = /<!-- Floating Labels -->\s*<div class="floating-label tl interactive" data-tab="experience">Experience<\/div>\s*<div class="floating-label tr interactive" data-tab="projects">Projects<\/div>\s*<div class="floating-label bl interactive" data-tab="skills">Skills<\/div>\s*<div class="floating-label br interactive" data-tab="education">Education<\/div>/;
mainTs = mainTs.replace(floatingLabelsRegex, '');

// 2. Replace macos-dock with fully populated dock + launchpad overlay
const dockHtml = `  <!-- macOS Dock -->
  <div class="macos-dock show" id="macos-dock">
    <div class="dock-item">
      <div class="dock-icon interactive" id="launchpad-btn" title="Launchpad">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"></rect><rect x="14" y="3" width="7" height="7" rx="2"></rect><rect x="14" y="14" width="7" height="7" rx="2"></rect><rect x="3" y="14" width="7" height="7" rx="2"></rect></svg>
      </div>
      <span class="dock-tooltip">Launchpad</span>
    </div>
    
    <div class="dock-divider"></div>

    <div class="dock-item">
      <div class="dock-icon interactive" data-tab="experience" title="Experience">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      </div>
      <span class="dock-tooltip">Experience</span>
    </div>
    <div class="dock-item">
      <div class="dock-icon interactive" data-tab="projects" title="Projects">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      </div>
      <span class="dock-tooltip">Projects</span>
    </div>
    <div class="dock-item">
      <div class="dock-icon interactive" data-tab="skills" title="Skills">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
      </div>
      <span class="dock-tooltip">Skills</span>
    </div>
    <div class="dock-item">
      <div class="dock-icon interactive" data-tab="education" title="Education">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      </div>
      <span class="dock-tooltip">Education</span>
    </div>
  </div>

  <!-- Launchpad Overlay -->
  <div class="launchpad-overlay" id="launchpad-overlay">
    <div class="launchpad-search">
      <input type="text" placeholder="Search" spellcheck="false" autocomplete="off" />
    </div>
    <div class="launchpad-container">
      <div class="launchpad-group">
        <h3>Resume</h3>
        <div class="launchpad-grid">
          <div class="launchpad-app interactive" data-tab="experience">
            <div class="app-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div>
            <span>Experience</span>
          </div>
          <div class="launchpad-app interactive" data-tab="projects">
            <div class="app-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
            <span>Projects</span>
          </div>
          <div class="launchpad-app interactive" data-tab="skills">
            <div class="app-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
            <span>Skills</span>
          </div>
          <div class="launchpad-app interactive" data-tab="education">
            <div class="app-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
            <span>Education</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
mainTs = mainTs.replace(/<div class="macos-dock" id="macos-dock"><\/div>/, dockHtml);

// 3. Update interactive logic selector
mainTs = mainTs.replace(/const labels = document\.querySelectorAll\('\.floating-label, \.dropdown-item'\);/, `const labels = document.querySelectorAll('.dock-icon[data-tab], .launchpad-app[data-tab]');`);

// 4. Update switchTab function logic
const switchTabReplacement = `function switchTab(tabId: string) {
  sections.forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.dock-icon').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.launchpad-app').forEach(item => item.classList.remove('active'));
  
  const targetSection = document.getElementById(tabId);
  if (targetSection) targetSection.classList.add('active');
  
  document.querySelectorAll('.dock-icon[data-tab="' + tabId + '"], .launchpad-app[data-tab="' + tabId + '"]').forEach(el => el.classList.add('active'));

  // Close launchpad if it's open when a tab is selected
  const launchpad = document.getElementById('launchpad-overlay');
  if (launchpad && launchpad.classList.contains('show')) {
    launchpad.classList.remove('show');
  }
}`;
mainTs = mainTs.replace(/function switchTab\(tabId: string\) \{[\s\S]*?\}\n\}/, switchTabReplacement);

// 5. Add Launchpad toggle logic
mainTs = mainTs.replace(/\/\/ Initial hash check/, `// Launchpad Toggle
const launchpadBtn = document.getElementById('launchpad-btn');
const launchpadOverlay = document.getElementById('launchpad-overlay');

launchpadBtn?.addEventListener('click', () => {
  launchpadOverlay?.classList.toggle('show');
});

launchpadOverlay?.addEventListener('click', (e) => {
  if (e.target === launchpadOverlay) {
    launchpadOverlay.classList.remove('show');
  }
});

// Initial hash check`);

fs.writeFileSync('src/main.ts', mainTs);
console.log('main.ts updated successfully.');
