const fs = require('fs');
let mainTs = fs.readFileSync('src/main.ts', 'utf8');

const populationLogic = `
// Populate content from resumeData
const populateData = () => {
  // Experience
  const expList = document.getElementById('experience-list');
  if (expList) {
    expList.innerHTML = resumeData.experience.map(exp => \`
      <div class="content-card interactive">
        <div class="card-info bold-info">
          <h3>\${exp.title}</h3>
          <p class="company">\${exp.company}</p>
          <ul class="desc-list">
            \${exp.bullets.map(b => \`<li>\${b}</li>\`).join('')}
          </ul>
          \${exp.links ? \`
          <div class="card-links">
            \${exp.links.map(l => \`
            <a href="\${l.url}" target="_blank" class="card-link">
              \${l.icon || ''} \${l.name}
            </a>
            \`).join('')}
          </div>
          \` : ''}
        </div>
      </div>
    \`).join('');
  }

  // Projects
  const projList = document.getElementById('projects-list');
  if (projList) {
    projList.innerHTML = resumeData.projects.map(proj => \`
      <div class="content-card interactive">
        <div class="card-info bold-info">
          <h3>\${proj.title}</h3>
          <p class="company">\${proj.subtitle}</p>
          <ul class="desc-list">
            \${proj.bullets.map(b => \`<li>\${b}</li>\`).join('')}
          </ul>
          \${proj.links ? \`
          <div class="card-links">
            \${proj.links.map(l => \`
            <a href="\${l.url}" target="_blank" class="card-link">
              \${l.icon || ''} \${l.name}
            </a>
            \`).join('')}
          </div>
          \` : ''}
        </div>
      </div>
    \`).join('');
  }

  // Skills
  const skillsList = document.getElementById('skills-list');
  if (skillsList) {
    skillsList.innerHTML = resumeData.skills.map(skill => \`
      <div class="skill-category">
        <h3>\${skill.category}</h3>
        <div class="tags">
          \${skill.items.map(item => \`<span>\${item}</span>\`).join('')}
        </div>
      </div>
    \`).join('');
  }

  // Education
  const eduList = document.getElementById('education-list');
  if (eduList) {
    eduList.innerHTML = resumeData.education.map(edu => \`
      <div class="content-card interactive">
        <div class="card-info bold-info">
          <h3>\${edu.title}</h3>
          <p class="company">\${edu.subtitle}</p>
          <ul class="desc-list">
            \${edu.bullets.map(b => \`<li>\${b}</li>\`).join('')}
          </ul>
        </div>
      </div>
    \`).join('');
  }
};

populateData();

`;

mainTs = mainTs.replace('`\n\n// Interactive Logic', '`\n' + populationLogic + '\n// Interactive Logic');
fs.writeFileSync('src/main.ts', mainTs);
console.log('Inserted populateData!');
