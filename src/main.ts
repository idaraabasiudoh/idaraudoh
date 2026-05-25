import './style.css';
import resumeData from './data/resume.json';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="layout">
    <header class="header">
      <div class="logo"><strong>Idara-Abasi Udoh</strong> <br> Software Engineer</div>
      <div class="header-right">
        <!-- Desktop Contacts -->
        <div class="header-contacts desktop-only">
          <a href="tel:+16138050465" title="+1 (613)-805-0465" class="contact-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
          <a href="mailto:idaraabasiudoh@cmail.carleton.ca" title="idaraabasiudoh@cmail.carleton.ca" class="contact-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
          <a href="https://github.com/idaraabasiudoh" target="_blank" title="GitHub" class="contact-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="http://www.linkedin.com/in/idaraabasiudoh" target="_blank" title="LinkedIn" class="contact-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
        
        <!-- Mobile Contacts Dropdown -->
        <div class="mobile-dropdown mobile-only">
          <div class="mobile-menu-btn contact-icon" id="mobile-menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </div>
          <div class="dropdown-menu" id="header-contacts-menu">
            <a href="tel:+16138050465" title="+1 (613)-805-0465" class="dropdown-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Phone</span>
            </a>
            <a href="mailto:idaraabasiudoh@cmail.carleton.ca" title="idaraabasiudoh@cmail.carleton.ca" class="dropdown-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Email</span>
            </a>
            <a href="https://github.com/idaraabasiudoh" target="_blank" title="GitHub" class="dropdown-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GitHub</span>
            </a>
            <a href="http://www.linkedin.com/in/idaraabasiudoh" target="_blank" title="LinkedIn" class="dropdown-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
    
    <main class="main-content">
      <!-- Window Empty Placeholder -->
      <div class="main-placeholder idara-liquid-placeholder" id="main-placeholder">
        Open a window to get started
      </div>

      <!-- Browser Window Mockup -->
      <div class="browser-window hidden">
        <div class="browser-header">
          <div class="window-controls">
            <span class="control close" id="main-close" style="cursor: pointer;" title="Close Window"></span>
            <span class="control minimize" id="main-min" style="cursor: pointer;"></span>
            <span class="control maximize" id="main-max" style="cursor: pointer;"></span>
          </div>
          <div class="url-bar-container">
            <input type="text" class="browser-url-bar browser-url-input" id="browser-url" value="idara.dev/resume/experience" spellcheck="false" autocomplete="off" />
            <div class="url-icons state-refresh" id="main-url-icons">
              <svg class="icon-refresh" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
              <svg class="icon-send" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#007aff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              <svg class="icon-loading" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
            </div>
          </div>
          <div class="browser-actions"></div>
        </div>
        <div class="browser-content">
          <div class="browser-title-area">
            <div class="browser-logo">Idara Udoh</div>
          </div>
          
          <div class="content-sections">
            <!-- Experience Section -->
            <div class="section active" id="experience">
              <div class="cards-list" id="experience-list"></div>
            </div>

            <!-- Projects Section -->
            <div class="section" id="projects">
              <div class="cards-list" id="projects-list"></div>
            </div>

            <!-- Skills Section -->
            <div class="section" id="skills">
              <div class="skills-container" id="skills-list"></div>
            </div>

            <!-- Education Section -->
            <div class="section" id="education">
              <div class="cards-list" id="education-list"></div>
            </div>

            </div>

            <!-- 404 Error Section -->
            <div class="section" id="error-404">
              <div style="text-align: center; padding: 60px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                <div style="font-size: 72px; font-weight: 900; background: linear-gradient(45deg, #ff6b6b, #c0392b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 20px;">404</div>
                <h2 style="font-size: 24px; color: var(--text-primary); margin-bottom: 10px;">Liquid Link Broken</h2>
                <p style="color: var(--text-secondary); max-width: 300px; line-height: 1.6;">The URL you entered doesn't exist in this dimension. Try an idara.dev/resume link instead!</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- External Browser Overlay -->
  <div class="external-browser-overlay" id="external-overlay">
    <div class="browser-window external-window">
      <div class="browser-header">
        <div class="window-controls">
          <span class="control close" id="external-close" style="cursor: pointer;" title="Close Window"></span>
          <span class="control minimize" id="external-min" style="cursor: pointer;"></span>
          <span class="control maximize" id="external-max" style="cursor: pointer;"></span>
        </div>
        <div class="url-bar-container">
          <input type="text" class="browser-url-bar browser-url-input" id="external-url" spellcheck="false" autocomplete="off" />
          <div class="url-icons state-refresh" id="external-url-icons">
            <svg class="icon-refresh" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
            <svg class="icon-send" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#007aff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            <svg class="icon-loading" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
          </div>
        </div>
        <div class="browser-actions">
          <a href="#" target="_blank" id="external-open-btn" class="header-icon" title="Open in external page">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
      <div class="browser-content" style="padding: 0; position: relative; overflow: hidden; flex: 1;">
        <div class="external-fallback-ui">
          <svg class="fallback-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
          <h2>Loading External Site...</h2>
          <p>If the site refuses to connect due to security policies,<br/>please use the button below to open it directly.</p>
          <a href="#" target="_blank" id="external-open-btn-fallback" class="liquid-button">
            Open External Link
          </a>
        </div>
        <iframe id="external-iframe" src="" frameborder="0" width="100%" height="100%" style="position: relative; z-index: 1; background: transparent; display: block; opacity: 0.99;"></iframe>
      </div>
    </div>
  </div>

  <!-- macOS Dock -->
    <!-- macOS Dock -->
  <div class="macos-dock show" id="macos-dock">
    <div class="dock-item">
      <div class="dock-icon interactive icon-launchpad" id="launchpad-btn" title="Launchpad">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"></rect><rect x="14" y="3" width="7" height="7" rx="2"></rect><rect x="14" y="14" width="7" height="7" rx="2"></rect><rect x="3" y="14" width="7" height="7" rx="2"></rect></svg>
      </div>
      <span class="dock-tooltip">Launchpad</span>
    </div>
    
    <div class="dock-divider"></div>

    <div class="dock-item">
      <div class="dock-icon interactive icon-experience" data-tab="experience" title="Experience">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      </div>
      <span class="dock-tooltip">Experience</span>
    </div>
    <div class="dock-item">
      <div class="dock-icon interactive icon-projects" data-tab="projects" title="Projects">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4H2v16h20V6H12l-2-2z"></path><polyline points="10 13 8 15 10 17"></polyline><polyline points="14 13 16 15 14 17"></polyline></svg>
      </div>
      <span class="dock-tooltip">Projects</span>
    </div>
    <div class="dock-item">
      <div class="dock-icon interactive icon-skills" data-tab="skills" title="Skills">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>
      </div>
      <span class="dock-tooltip">Skills</span>
    </div>
    <div class="dock-item">
      <div class="dock-icon interactive icon-education" data-tab="education" title="Education">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      </div>
      <span class="dock-tooltip">Education</span>
    </div>
    
    <div class="dock-divider"></div>
    
    <div class="dock-item">
      <div class="dock-icon interactive icon-browser" id="browser-app-btn" title="Web Browser">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      </div>
      <span class="dock-tooltip">Web Browser</span>
    </div>
  </div>

  <!-- Launchpad Overlay -->
  <div class="launchpad-overlay" id="launchpad-overlay">
    <div class="launchpad-container">
      <div class="launchpad-group">
        <h3>Resume</h3>
        <div class="launchpad-grid">
          <div class="launchpad-app interactive" data-tab="experience">
            <div class="app-icon icon-experience"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
            <span>Experience</span>
          </div>
          <div class="launchpad-app interactive" data-tab="projects">
            <div class="app-icon icon-projects"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4H2v16h20V6H12l-2-2z"></path><polyline points="10 13 8 15 10 17"></polyline><polyline points="14 13 16 15 14 17"></polyline></svg></div>
            <span>Projects</span>
          </div>
          <div class="launchpad-app interactive" data-tab="skills">
            <div class="app-icon icon-skills"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg></div>
            <span>Skills</span>
          </div>
          <div class="launchpad-app interactive" data-tab="education">
            <div class="app-icon icon-education"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
            <span>Education</span>
          </div>
        </div>
      </div>
      <div class="launchpad-group">
        <h3>Apps</h3>
        <div class="launchpad-grid">
          <div class="launchpad-app interactive browser-app-trigger">
            <div class="app-icon icon-browser"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
            <span>Browser</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`

// Populate content from resumeData
const populateData = () => {
  // Experience
  const expList = document.getElementById('experience-list');
  if (expList) {
    expList.innerHTML = resumeData.experience.map(exp => `
      <div class="content-card interactive">
        <div class="card-info bold-info">
          <div class="card-header">
            <h3>${exp.title}</h3>
            ${exp.date ? `<span class="card-date">${exp.date}</span>` : ''}
          </div>
          <p class="company">${exp.company}</p>
          <ul class="desc-list">
            ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          ${exp.links ? `
          <div class="card-links">
            ${exp.links.map(l => `
            <a href="${l.url}" target="_blank" class="card-link">
              ${l.icon || ''} ${l.name}
            </a>
            `).join('')}
          </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  // Projects
  const projList = document.getElementById('projects-list');
  if (projList) {
    projList.innerHTML = resumeData.projects.map(proj => `
      <div class="content-card interactive">
        <div class="card-info bold-info">
          <div class="card-header">
            <h3>${proj.title}</h3>
            ${proj.date ? `<span class="card-date">${proj.date}</span>` : ''}
          </div>
          <p class="company">${proj.subtitle}</p>
          <ul class="desc-list">
            ${proj.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          ${proj.links ? `
          <div class="card-links">
            ${proj.links.map(l => `
            <a href="${l.url}" target="_blank" class="card-link">
              ${l.icon || ''} ${l.name}
            </a>
            `).join('')}
          </div>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  // Skills
  const skillsList = document.getElementById('skills-list');
  if (skillsList) {
    skillsList.innerHTML = resumeData.skills.map(skill => `
      <div class="skill-category">
        <h3>${skill.category}</h3>
        <div class="tags">
          ${skill.items.map(item => `<span>${item}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Education
  const eduList = document.getElementById('education-list');
  if (eduList) {
    eduList.innerHTML = resumeData.education.map(edu => `
      <div class="content-card interactive">
        <div class="card-info bold-info">
          <div class="card-header">
            <h3>${edu.title}</h3>
            ${edu.date ? `<span class="card-date">${edu.date}</span>` : ''}
          </div>
          <p class="company">${edu.subtitle}</p>
          <ul class="desc-list">
            ${edu.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }
};

populateData();


// Interactive Logic
const mainBrowser = document.querySelector('.browser-window:not(.external-window)');
const extBrowser = document.querySelector('.external-window');
const dock = document.getElementById('macos-dock');

const labels = document.querySelectorAll('.dock-icon[data-tab], .launchpad-app[data-tab]');
const sections = document.querySelectorAll('.section');

// Update visibility of the empty window placeholder
function updatePlaceholder() {
  const placeholder = document.getElementById('main-placeholder');
  const isMainVisible = mainBrowser && !mainBrowser.classList.contains('hidden') && !mainBrowser.classList.contains('minimized');
  const isExtVisible = document.getElementById('external-overlay')?.classList.contains('show') && !document.getElementById('external-overlay')?.classList.contains('minimized-overlay') && !extBrowser?.classList.contains('minimized');
  
  if (placeholder) {
    if (!isMainVisible && !isExtVisible) {
      placeholder.classList.add('show');
    } else {
      placeholder.classList.remove('show');
    }
  }
}

// Close external browser completely (closing other things)
function closeExternalBrowser() {
  const overlayEl = document.getElementById('external-overlay');
  const iframeEl = document.getElementById('external-iframe') as HTMLIFrameElement;
  if (overlayEl) {
    overlayEl.classList.remove('show');
    overlayEl.classList.remove('minimized-overlay');
  }
  if (extBrowser) {
    extBrowser.classList.remove('minimized');
  }
  if (iframeEl) {
    iframeEl.src = '';
  }
  const extMinIcon = document.querySelector(`.dock-icon[title="External Site"]`);
  if (extMinIcon) extMinIcon.remove();
}

// Close/Hide main resume browser
function closeMainBrowser() {
  if (mainBrowser) {
    mainBrowser.classList.add('hidden');
    mainBrowser.classList.remove('minimized');
  }
  document.querySelectorAll('.dock-icon').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.launchpad-app').forEach(item => item.classList.remove('active'));
  
  const mainMinIcon = document.querySelector(`.dock-icon[title="Idara's Resume"]`);
  if (mainMinIcon) mainMinIcon.remove();
}

// Open/Show main resume browser
function openMainBrowser() {
  if (mainBrowser) {
    mainBrowser.classList.remove('hidden');
    mainBrowser.classList.remove('minimized');
  }
  const mainMinIcon = document.querySelector(`.dock-icon[title="Idara's Resume"]`);
  if (mainMinIcon) mainMinIcon.remove();
}

function switchTab(tabId: string) {
  sections.forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.dock-icon').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.launchpad-app').forEach(item => item.classList.remove('active'));
  
  const targetSection = document.getElementById(tabId);
  if (targetSection) targetSection.classList.add('active');
  
  document.querySelectorAll('.dock-icon[data-tab="' + tabId + '"], .launchpad-app[data-tab="' + tabId + '"]').forEach(el => el.classList.add('active'));

  // Update browser URL
  const urlBar = document.getElementById('browser-url') as HTMLInputElement;
  if (urlBar) {
    urlBar.value = 'idara.dev/resume/' + tabId;
  }

  // Close launchpad if it's open when a tab is selected
  const launchpad = document.getElementById('launchpad-overlay');
  if (launchpad && launchpad.classList.contains('show')) {
    launchpad.classList.remove('show');
  }

  // Close all other open windows (external browser)
  closeExternalBrowser();

  // Show/Open main resume browser
  openMainBrowser();

  // Update placeholder visibility
  updatePlaceholder();
}

labels.forEach(label => {
  label.addEventListener('click', () => {
    const tabId = (label as HTMLElement).dataset.tab;
    if (tabId) switchTab(tabId);
  });
});

const launchpadBtn = document.getElementById('launchpad-btn');
const launchpadOverlay = document.getElementById('launchpad-overlay');

if (launchpadBtn && launchpadOverlay) {
  launchpadBtn.addEventListener('click', () => {
    launchpadOverlay.classList.toggle('show');
  });

  launchpadOverlay.addEventListener('click', (e) => {
    if (e.target === launchpadOverlay) {
      launchpadOverlay.classList.remove('show');
    }
  });
}

// Dropdown toggle logic
const dropdownSelected = document.querySelector('.dropdown-selected');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownSelected && dropdownMenu) {
  dropdownSelected.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownSelected.contains(e.target as Node) && !dropdownMenu.contains(e.target as Node)) {
      dropdownMenu.classList.remove('show');
    }
  });
}

function openExternalOverlay(url: string) {
    const overlayEl = document.getElementById('external-overlay');
    const iframeEl = document.getElementById('external-iframe') as HTMLIFrameElement;
    const urlBarEl = document.getElementById('external-url') as HTMLInputElement;
    const openBtnEl = document.getElementById('external-open-btn') as HTMLAnchorElement;
    const fallbackBtnEl = document.getElementById('external-open-btn-fallback') as HTMLAnchorElement;

    if (overlayEl && iframeEl && urlBarEl && openBtnEl) {
      // Close the main resume browser to satisfy "closing all other open things"
      closeMainBrowser();

      iframeEl.style.display = 'block';
      iframeEl.src = url;
      
      let displayUrl = url.replace('https://', '').replace('http://', '');
      if (displayUrl.endsWith('/')) displayUrl = displayUrl.slice(0, -1);
      urlBarEl.value = displayUrl;
      openBtnEl.href = url;
      if (fallbackBtnEl) fallbackBtnEl.href = url;
      overlayEl.classList.add('show');
      overlayEl.classList.remove('minimized-overlay');
      const extWindow = document.querySelector('.external-window');
      extWindow?.classList.remove('minimized');

      // Clean up minimized icon if any
      const extMinIcon = document.querySelector(`.dock-icon[title="External Site"]`);
      if (extMinIcon) extMinIcon.remove();

      updatePlaceholder();
      
      // Timeout to default to fallback UI if the website breaks or doesn't respond
      const fallbackUi = document.querySelector('.external-fallback-ui') as HTMLElement;
      if (fallbackUi) {
        const h2 = fallbackUi.querySelector('h2');
        const p = fallbackUi.querySelector('p');
        const btn = fallbackUi.querySelector('.liquid-button') as HTMLElement;
        if (h2) h2.textContent = 'Loading External Site...';
        if (p) p.innerHTML = 'If the site refuses to connect due to security policies,<br/>please use the button below to open it directly.';
        if (btn) btn.style.display = 'inline-block';
      }

      if ((window as any).fallbackTimeout) clearTimeout((window as any).fallbackTimeout);
      
      try {
        const urlObj = new URL(url);
        const strictDomains = ['linkedin.com', 'github.com', 'twitter.com', 'x.com', 'google.com', 'facebook.com', 'instagram.com', 'apple.com'];
        const isStrict = strictDomains.some(domain => urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain));
        
        if (isStrict) {
          iframeEl.style.display = 'none';
          if (fallbackUi) {
            const h2 = fallbackUi.querySelector('h2');
            if (h2) h2.textContent = `${urlObj.hostname} refused to connect`;
          }
          return;
        }
      } catch (e) {
        // Ignore invalid URLs
      }
      
      (window as any).fallbackTimeout = setTimeout(() => {
         iframeEl.style.display = 'none';
         if (fallbackUi) {
           const h2 = fallbackUi.querySelector('h2');
           if (h2) h2.textContent = 'Website not responding';
         }
      }, 6000);

      iframeEl.onload = () => {
         clearTimeout((window as any).fallbackTimeout);
      };

      iframeEl.onerror = () => {
         clearTimeout((window as any).fallbackTimeout);
         iframeEl.style.display = 'none';
         if (fallbackUi) {
           const h2 = fallbackUi.querySelector('h2');
           if (h2) h2.textContent = 'Website broke or refused to connect';
         }
      };
    }
}

// Handle Free-type URL Input
const processUrlInput = (url: string) => {
    let cleanUrl = url.trim().toLowerCase();
    if (cleanUrl.startsWith('http://')) cleanUrl = cleanUrl.substring(7);
    if (cleanUrl.startsWith('https://')) cleanUrl = cleanUrl.substring(8);

    if (cleanUrl.startsWith('idara.dev')) {
      const extOverlay = document.getElementById('external-overlay');
      if (extOverlay) extOverlay.classList.remove('show');
      
      const path = cleanUrl.replace('idara.dev/resume/', '').replace('idara.dev/', '');
      const validPaths = ['experience', 'projects', 'skills', 'education'];
      
      if (validPaths.includes(path) || path === '') {
        switchTab(path || 'experience');
      } else {
        switchTab('error-404');
        const groupSpan = document.getElementById('current-group');
        if (groupSpan) groupSpan.textContent = '404 Error';
        const urlBar = document.getElementById('browser-url') as HTMLInputElement;
        if (urlBar) urlBar.value = cleanUrl;
      }
    } else {
      const fullUrl = (url.startsWith('http://') || url.startsWith('https://')) ? url : 'https://' + url;
      openExternalOverlay(fullUrl);
    }
};

  const mainUrlInput = document.getElementById('browser-url') as HTMLInputElement;
  const mainUrlIcons = document.getElementById('main-url-icons');
  
  function setUrlState(iconsEl: HTMLElement | null, state: 'refresh' | 'send' | 'loading') {
    if (!iconsEl) return;
    iconsEl.className = `url-icons state-${state}`;
  }

  function handleUrlSubmit(url: string, inputEl: HTMLInputElement, iconsEl: HTMLElement | null) {
    if (!url.trim()) return;
    setUrlState(iconsEl, 'loading');
    setTimeout(() => {
      processUrlInput(url);
      setUrlState(iconsEl, 'refresh');
      inputEl.blur();
    }, 500); // Dummy loading spin
  }

  if (mainUrlInput) {
    mainUrlInput.addEventListener('focus', () => setUrlState(mainUrlIcons, 'send'));
    mainUrlInput.addEventListener('input', () => setUrlState(mainUrlIcons, 'send'));
    mainUrlInput.addEventListener('blur', () => {
      if (!mainUrlIcons?.classList.contains('state-loading')) {
        setUrlState(mainUrlIcons, 'refresh');
      }
    });
    mainUrlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleUrlSubmit(mainUrlInput.value, mainUrlInput, mainUrlIcons);
    });
  }

  if (mainUrlIcons) {
    mainUrlIcons.addEventListener('mousedown', (e) => {
      // Prevent blur when clicking icon
      e.preventDefault(); 
      if (mainUrlIcons.classList.contains('state-send') || mainUrlIcons.classList.contains('state-refresh')) {
        handleUrlSubmit(mainUrlInput?.value || '', mainUrlInput, mainUrlIcons);
      }
    });
  }

  const extUrlInput = document.getElementById('external-url') as HTMLInputElement;
  const extUrlIcons = document.getElementById('external-url-icons');
  
  if (extUrlInput) {
    extUrlInput.addEventListener('focus', () => setUrlState(extUrlIcons, 'send'));
    extUrlInput.addEventListener('input', () => setUrlState(extUrlIcons, 'send'));
    extUrlInput.addEventListener('blur', () => {
      if (!extUrlIcons?.classList.contains('state-loading')) {
        setUrlState(extUrlIcons, 'refresh');
      }
    });
    extUrlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleUrlSubmit(extUrlInput.value, extUrlInput, extUrlIcons);
    });
  }
  
  if (extUrlIcons) {
    extUrlIcons.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (extUrlIcons.classList.contains('state-send') || extUrlIcons.classList.contains('state-refresh')) {
        handleUrlSubmit(extUrlInput?.value || '', extUrlInput, extUrlIcons);
      }
    });
  }

// External Browser Logic
const externalLinks = document.querySelectorAll('.card-link, .contact-link, .contact-icon');
const overlay = document.getElementById('external-overlay');
const closeBtn = document.getElementById('external-close');
const iframe = document.getElementById('external-iframe') as HTMLIFrameElement;
const openBtn = document.getElementById('external-open-btn') as HTMLAnchorElement;

externalLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const url = (link as HTMLAnchorElement).href;
    
    if (url.startsWith('mailto:') || url.startsWith('tel:')) {
      window.location.href = url;
      return;
    }

    if (iframe && openBtn && overlay) {
      openExternalOverlay(url);
    }
  });
});

if (closeBtn && overlay && iframe) {
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.classList.remove('minimized-overlay');
    if (extBrowser) extBrowser.classList.remove('minimized');
    const extMinIcon = document.querySelector(`.dock-icon[title="External Site"]`);
    if (extMinIcon) extMinIcon.remove();
    setTimeout(() => {
      iframe.src = '';
      updatePlaceholder();
    }, 300); // clear after transition
  });
}

// Close when clicking outside the window
if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay && !extBrowser?.classList.contains('minimized')) {
      overlay.classList.remove('show');
      overlay.classList.remove('minimized-overlay');
      const extMinIcon = document.querySelector(`.dock-icon[title="External Site"]`);
      if (extMinIcon) extMinIcon.remove();
      setTimeout(() => {
        if (iframe) iframe.src = '';
        updatePlaceholder();
      }, 300);
    }
  });
}

// Window Controls Logic
const mainMin = document.getElementById('main-min');
const mainMax = document.getElementById('main-max');
const extMin = document.getElementById('external-min');
const extMax = document.getElementById('external-max');

// Maximize
mainMax?.addEventListener('click', () => {
  mainBrowser?.classList.toggle('fullscreen');
});
extMax?.addEventListener('click', () => {
  extBrowser?.classList.toggle('fullscreen');
});

// Minimize Logic
function minimizeWindow(windowEl: Element | null, title: string) {
  if (!windowEl || !dock) return;
  
  if (windowEl === extBrowser) {
     const overlayEl = document.getElementById('external-overlay');
     overlayEl?.classList.add('minimized-overlay');
     windowEl.classList.add('minimized');
     updatePlaceholder();
     return;
  }
  
  windowEl.classList.add('minimized');
  
  const dockIcon = document.createElement('div');
  dockIcon.className = 'dock-icon';
  dockIcon.title = title;
  if (windowEl === extBrowser) {
    dockIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
  } else {
    dockIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`;
  }
  
  dockIcon.addEventListener('click', () => {
    windowEl.classList.remove('minimized');
    if (windowEl === extBrowser) {
      const overlayEl = document.getElementById('external-overlay');
      overlayEl?.classList.remove('minimized-overlay');
    } else {
      windowEl.classList.remove('hidden');
    }
    dockIcon.remove();
    updatePlaceholder();
  });
  
  dock.appendChild(dockIcon);
  updatePlaceholder();
}

mainMin?.addEventListener('click', () => minimizeWindow(mainBrowser, "Idara's Resume"));
extMin?.addEventListener('click', () => minimizeWindow(extBrowser, "External Site"));

// Main Browser Close Button
const mainClose = document.getElementById('main-close');
if (mainClose) {
  mainClose.addEventListener('click', () => {
    closeMainBrowser();
    updatePlaceholder();
  });
}

const browserAppBtns = document.querySelectorAll('#browser-app-btn, .browser-app-trigger');
browserAppBtns.forEach(browserAppBtn => {
  browserAppBtn.addEventListener('click', () => {
    const overlayEl = document.getElementById('external-overlay');
    const iframeEl = document.getElementById('external-iframe') as HTMLIFrameElement;
    const launchpad = document.getElementById('launchpad-overlay');
    if (overlayEl) {
      // Close all other open windows (main resume browser)
      closeMainBrowser();
      launchpad?.classList.remove('show');

      overlayEl.classList.remove('minimized-overlay');
      overlayEl.classList.add('show');
      
      if (extBrowser) extBrowser.classList.remove('minimized');
      
      const extMinIcon = document.querySelector(`.dock-icon[title="External Site"]`);
      if (extMinIcon) extMinIcon.remove();
      
      if (!iframeEl || !iframeEl.src || iframeEl.src === window.location.href || iframeEl.src === 'about:blank') {
        const fallbackUi = document.querySelector('.external-fallback-ui') as HTMLElement;
        if (fallbackUi) {
          iframeEl.style.display = 'none';
          const h2 = fallbackUi.querySelector('h2');
          const p = fallbackUi.querySelector('p');
          const btn = fallbackUi.querySelector('.liquid-button') as HTMLElement;
          if (h2) h2.textContent = 'Ready to Browse';
          if (p) p.innerHTML = 'Enter a URL in the address bar above to load a website.';
          if (btn) btn.style.display = 'none';
        }
      }

      updatePlaceholder();
    }
  });
});

// Header Mobile Dropdown Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const headerContactsMenu = document.getElementById('header-contacts-menu');

if (mobileMenuBtn && headerContactsMenu) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    headerContactsMenu.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!headerContactsMenu.contains(e.target as Node) && !mobileMenuBtn.contains(e.target as Node)) {
      headerContactsMenu.classList.remove('show');
    }
  });
}

// On load, update the placeholder so it shows up since no browser window is open by default
updatePlaceholder();
