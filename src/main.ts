import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="layout">
    <header class="header">
      <div class="logo"><strong>Idara-Abasi Udoh</strong> <br> Software Engineer</div>
      <div class="header-contacts">
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
    </header>
    
    <main class="main-content">
      <!-- Floating Labels -->
      <div class="floating-label tl interactive" data-tab="experience">Experience</div>
      <div class="floating-label tr interactive" data-tab="projects">Projects</div>
      <div class="floating-label bl interactive" data-tab="skills">Skills</div>
      <div class="floating-label br interactive" data-tab="education">Education</div>

      <!-- Browser Window Mockup -->
      <div class="browser-window">
        <div class="browser-header">
          <div class="window-controls">
            <span class="control close disabled" id="main-close"></span>
            <span class="control minimize" id="main-min" style="cursor: pointer;"></span>
            <span class="control maximize" id="main-max" style="cursor: pointer;"></span>
          </div>
          <input type="text" class="browser-url-bar browser-url-input" id="browser-url" value="idara.dev/resume/experience" spellcheck="false" autocomplete="off" />
          <div class="browser-actions">
               <a href="https://github.com/idaraabasiudoh" target="_blank" class="header-icon">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
               </a>
          </div>
        </div>
        <div class="browser-content">
          <div class="browser-title-area">
            <div class="browser-logo">Idara Udoh</div>
            <div class="dropdown-container">
              <div class="dropdown-selected">
                <span id="current-group">Resume</span> 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-group">
                  <div class="dropdown-group-title">Resume</div>
                  <div class="dropdown-item active" data-tab="experience">Experience</div>
                  <div class="dropdown-item" data-tab="projects">Projects</div>
                  <div class="dropdown-item" data-tab="skills">Skills</div>
                  <div class="dropdown-item" data-tab="education">Education</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="content-sections">
            <!-- Experience Section -->
            <div class="section active" id="experience">
              <div class="cards-list">
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>Software Developer</h3>
                    <p class="company">Magnet Forensics</p>
                    <ul class="desc-list">
                      <li>Contributed to the Magnet One SaaS platform, developing and maintaining features that support ingestion, storage, and management of large digital evidence files for law-enforcement and enterprise investigations.</li>
                      <li>Implemented role-based access control for M1 Hub Storage, validating user access via authentication tokens and permissions, and building a fail-safe UI logic using React and TypeScript, to handle network delays and invalid tokens.</li>
                      <li>Extended the Desktop Storage Uploader by adding a user log download feature, implementing C#/.NET logic to collect, compress, and export application logs as JSON for end-users.</li>
                      <li>Wrote tests to mock and verify functionality for M1 Hub Storage using Vitest and MSW, and .NET testing framework for the Desktop Storage Uploader to ensure reliability across edge cases.</li>
                    </ul>
                  </div>
                </div>
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>Software Engineering Intern</h3>
                    <p class="company">Keel Minds</p>
                    <ul class="desc-list">
                      <li>Built Flutter UI components, responsive layouts, and modular widgets, on the company’s mental health SaaS application hosting 111,000+ patients, supporting rollout of new Figma designs on production branches.</li>
                      <li>Contributed to backend routes in Node.js and wrote SQL queries to manage records of care provider/client sessions.</li>
                      <li>Used git workflows for team collaboration and GitHub Actions for automating build, test, and deployment pipelines.</li>
                      <li>Participated in bi-weekly Q&A standups to assess internal and external product reviews and contribute to sprint planning.</li>
                      <li>Received mentorship and practice on modern software architecture, design patterns, system design and HTTP.</li>
                    </ul>
                  </div>
                </div>
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>Software Developer Intern</h3>
                    <p class="company">Wouessi Digital</p>
                    <ul class="desc-list">
                      <li>Contributed to the company portal using TypeScript, React, and Vue.js, integrating Supabase for authentication and PostgreSQL for data storage.</li>
                      <li>Assisted in prototyping a content recommendation system using TensorFlow and Spark, for user personalization strategies.</li>
                      <li>Helped build a Tender Discovery platform using MongoDB and AWS S3/Lambda, simplifying tender application workflows.</li>
                      <li>Collaborated on an internal Employee Management System with git access control and CI/CD setup using Docker.</li>
                    </ul>
                  </div>
                </div>
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>Founder, Lead Dev</h3>
                    <p class="company">Gropad</p>
                    <ul class="desc-list">
                      <li>Built a cross-platform mobile app for matching people in schools and cities based on needs, wants and desires, using natural language with context intelligence; used Flutter and Supabase for frontend, database, authentication and media storage.</li>
                      <li>Featured listing of goods, businesses, events, in-app messaging, and 2 serverless algorithms for background matching.</li>
                      <li>Used Firebase Cloud Messaging (FCM) tokens, deployed TypeScript serverless functions, Stripe APIs, and other modern frameworks, to support deep linking, push notifications, two-step verification, and payment processing.</li>
                      <li>Adopted standard SWE practices for iterative and collaborative builds using git, MVVM design pattern, and database security with sanitized API and webhook invocations.</li>
                    </ul>
                    <div class="card-links">
                      <a href="https://apps.apple.com/app/gropad/id6752580542" target="_blank" class="card-link">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        App Store
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.gropad.app&pcampaignid=web_share" target="_blank" class="card-link">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Google Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Projects Section -->
            <div class="section" id="projects">
              <div class="cards-list">
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>Gemini Groceries & Recipe</h3>
                    <p class="company">React, Node.js, MongoDB, Gemini AI</p>
                    <ul class="desc-list">
                      <li>Developed a full-stack grocery and recipe assistant using React.js, Node.js, Express.js, and MongoDB Atlas, enabling users to create smart shopping lists with AI for meal suggestions and nutrition tracking.</li>
                      <li>Integrated Google’s Gemini AI for image processing, to extract grocery items from shopping list photos and generate meal recommendations with nutritional facts and SerpAPI for product search and price matching between different grocery stores.</li>
                      <li>Implemented secure user authentication with JWT tokens, RESTful API design, and responsive UI using Tailwind CSS with interactive 3D components using Three.js.</li>
                      <li>Deployed on AWS Amplify with CI/CD pipeline using custom amplify.yml configuration.</li>
                    </ul>
                    <div class="card-links">
                      <a href="https://github.com/idaraabasiudoh/nachoaveragecart" target="_blank" class="card-link">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>Patheon AI</h3>
                    <p class="company">Next.js, TS, ElevenLabs, Gemini</p>
                    <ul class="desc-list">
                      <li>Built full-stack AI Physics research platform using Next.js, TypeScript, ElevenLabs and Google Gemini 2.0 Flash API, generating hypothesis-based analysis with citations, theories and experimental suggestions.</li>
                      <li>Implemented voice interaction with ElevenLabs integration, featuring voice cloning, speech-to-text transcription, and synchronized audio visualization for ease of accessibility.</li>
                      <li>Designed 3D space-themed UI with liquid glass effects, custom cursor animations, and responsive architecture using Tailwind CSS and Framer Motion.</li>
                    </ul>
                  </div>
                </div>
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>ASL Translation Software</h3>
                    <p class="company">Python, OpenCV, TensorFlow</p>
                    <ul class="desc-list">
                      <li>Built and trained a Convolutional Neural Network (CNN) for Computer Vision with TensorFlow, Keras API, and OpenCV to translate American Sign Language (ASL) characters, achieving 90.5% accuracy during translation.</li>
                      <li>Deployed model on a Python desktop app for demo during the cuHacking 2024 Hackathon, presenting how our software bridges communication gaps between deaf or non-verbal signers and non-signers.</li>
                    </ul>
                    <div class="card-links">
                      <a href="https://github.com/idaraabasiudoh/American-Sign-Language-ASL-Detection" target="_blank" class="card-link">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>Ride Along</h3>
                    <p class="company">Flutter, Supabase</p>
                    <ul class="desc-list">
                      <li>Led development of a cross-platform ridesharing mobile & web app for university students using Flutter and Supabase, enabling carpooling with peers and cutting 45% commute costs spent on other platforms.</li>
                      <li>Implemented in-app messaging and rendered live maps with driver and passenger location, using Flutter’s native geolocator dependency, ensuring stability across device platforms.</li>
                      <li>Designed Figma pitch deck and placed 2nd at cuHacking 2025 for community impact; deployed on AWS Amplify with CI/CD.</li>
                    </ul>
                    <div class="card-links">
                      <a href="https://github.com/idaraabasiudoh/ride_along" target="_blank" class="card-link">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        GitHub
                      </a>
                      <a href="https://fairseater.com/" target="_blank" class="card-link">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        MVP Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Skills Section -->
            <div class="section" id="skills">
              <div class="skills-container">
                <div class="skill-category">
                  <h3>Languages</h3>
                  <div class="tags">
                    <span>Java</span><span>Python</span><span>JavaScript</span><span>C#</span><span>C/C++</span><span>Dart</span><span>TypeScript</span><span>SQL</span>
                  </div>
                </div>
                <div class="skill-category">
                  <h3>Frameworks</h3>
                  <div class="tags">
                    <span>React.js</span><span>Flutter</span><span>TensorFlow</span><span>PyTorch</span><span>.NET</span><span>Node.js</span><span>Express.js</span>
                  </div>
                </div>
                <div class="skill-category">
                  <h3>Tools & Cloud</h3>
                  <div class="tags">
                    <span>Git</span><span>Docker</span><span>AWS</span><span>Supabase</span><span>MongoDB</span><span>Linux</span><span>CI/CD</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Education Section -->
            <div class="section" id="education">
              <div class="cards-list">
                <div class="content-card interactive">
                  <div class="card-info bold-info">
                    <h3>Carleton University</h3>
                    <p class="company">B.Eng Software Engineering (Co-op)</p>
                    <ul class="desc-list">
                      <li>Bachelor of Engineering, Software Engineering - Co-op, Final Year</li>
                      <li>Scholarship: Award of Excellence for International Students, Entrance Scholarship, Henry Ford Scholarship ($15,000)</li>
                      <li>Coursework: Machine Learning, Operating Systems, Algorithms, Object-Oriented Programming, Design Patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
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
        <input type="text" class="browser-url-bar browser-url-input" id="external-url" spellcheck="false" autocomplete="off" />
        <div class="browser-actions">
          <a href="#" target="_blank" id="external-open-btn" class="header-icon" title="Open in external page">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
      <div class="browser-content" style="padding: 0; position: relative; overflow: hidden; flex: 1;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: var(--text-secondary); z-index: 0; padding: 20px; width: 100%; pointer-events: none;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 10px; opacity: 0.5;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
          <p>Loading external site...</p>
          <p style="font-size: 12px; margin-top: 5px; margin-bottom: 15px; opacity: 0.7;">If the site refuses to connect (due to security policies),<br/>please use the button below or in the menu bar.</p>
          <a href="#" target="_blank" id="external-open-btn-fallback" style="display: inline-block; padding: 8px 16px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: var(--text-primary); text-decoration: none; font-size: 13px; transition: all 0.2s; pointer-events: auto;">
            Open External Link
          </a>
        </div>
        <iframe id="external-iframe" src="" frameborder="0" width="100%" height="100%" style="position: relative; z-index: 1; background: transparent; display: block; pointer-events: auto; opacity: 0.99;"></iframe>
      </div>
    </div>
  </div>

  <!-- macOS Dock -->
  <div class="macos-dock" id="macos-dock"></div>
`

// Interactive Logic
const labels = document.querySelectorAll('.floating-label, .dropdown-item');
const sections = document.querySelectorAll('.section');

function switchTab(tabId: string) {
  sections.forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.floating-label').forEach(fl => fl.classList.remove('active'));
  
  const targetSection = document.getElementById(tabId);
  if (targetSection) targetSection.classList.add('active');
  
  const targetDropdown = document.querySelector(`.dropdown-item[data-tab="${tabId}"]`);
  if (targetDropdown) {
    targetDropdown.classList.add('active');
    const groupTitle = targetDropdown.closest('.dropdown-group')?.querySelector('.dropdown-group-title')?.textContent;
    const groupSpan = document.getElementById('current-group');
    if (groupSpan && groupTitle) {
      groupSpan.textContent = groupTitle;
    }
  }

  // Sync floating labels if they exist
  document.querySelectorAll(`.floating-label[data-tab="${tabId}"]`).forEach(el => el.classList.add('active'));
  
  // update URL
  const urlBar = document.getElementById('browser-url') as HTMLInputElement;
  if (urlBar && tabId !== 'error-404') {
    urlBar.value = `idara.dev/resume/${tabId}`;
  }
}

labels.forEach(label => {
  label.addEventListener('click', () => {
    const tabId = (label as HTMLElement).dataset.tab;
    if (tabId) switchTab(tabId);
  });
});

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
      iframeEl.src = url;
      let displayUrl = url.replace('https://', '').replace('http://', '');
      if (displayUrl.endsWith('/')) displayUrl = displayUrl.slice(0, -1);
      urlBarEl.value = displayUrl;
      openBtnEl.href = url;
      if (fallbackBtnEl) fallbackBtnEl.href = url;
      overlayEl.classList.add('show');
    }
}

// Handle Free-type URL Input
const processUrlInput = (url: string, isExternal: boolean) => {
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
      if (isExternal) {
        const iframe = document.getElementById('external-iframe') as HTMLIFrameElement;
        const extUrlBar = document.getElementById('external-url') as HTMLInputElement;
        const openBtn = document.getElementById('external-open-btn') as HTMLAnchorElement;
        const fallbackBtn = document.getElementById('external-open-btn-fallback') as HTMLAnchorElement;
        if (iframe) iframe.src = fullUrl;
        if (extUrlBar) extUrlBar.value = cleanUrl;
        if (openBtn) openBtn.href = fullUrl;
        if (fallbackBtn) fallbackBtn.href = fullUrl;
      } else {
        openExternalOverlay(fullUrl);
      }
    }
};

  const mainUrlInput = document.getElementById('browser-url') as HTMLInputElement;
  if (mainUrlInput) {
    mainUrlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') processUrlInput(mainUrlInput.value, false);
    });
  }

  const extUrlInput = document.getElementById('external-url') as HTMLInputElement;
  if (extUrlInput) {
    extUrlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') processUrlInput(extUrlInput.value, true);
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
    setTimeout(() => {
      iframe.src = '';
    }, 300); // clear after transition
  });
}

// Close when clicking outside the window
if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay && !extBrowser?.classList.contains('minimized')) {
      overlay.classList.remove('show');
      setTimeout(() => {
        if (iframe) iframe.src = '';
      }, 300);
    }
  });
}

// Window Controls Logic
const mainBrowser = document.querySelector('.browser-window:not(.external-window)');
const extBrowser = document.querySelector('.external-window');
const mainMin = document.getElementById('main-min');
const mainMax = document.getElementById('main-max');
const extMin = document.getElementById('external-min');
const extMax = document.getElementById('external-max');
const dock = document.getElementById('macos-dock');

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
  }
  
  windowEl.classList.add('minimized');
  
  const dockIcon = document.createElement('div');
  dockIcon.className = 'dock-icon';
  dockIcon.title = title;
  dockIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`;
  
  dockIcon.addEventListener('click', () => {
    windowEl.classList.remove('minimized');
    if (windowEl === extBrowser) {
      const overlayEl = document.getElementById('external-overlay');
      overlayEl?.classList.remove('minimized-overlay');
    }
    dockIcon.remove();
    if (dock.children.length === 0) dock.classList.remove('show');
  });
  
  dock.appendChild(dockIcon);
  dock.classList.add('show');
}

mainMin?.addEventListener('click', () => minimizeWindow(mainBrowser, "Idara's Resume"));
extMin?.addEventListener('click', () => minimizeWindow(extBrowser, "External Site"));
