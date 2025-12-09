// Show section helper
function showSection(id) {
  document.getElementById('npcSection').style.display = 'none';
  document.getElementById('mapSection').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

// Renderer bootstrap
window.addEventListener('DOMContentLoaded', () => {
  renderNPCs();
  showSection('npcSection');
});

// NPC renderer with dropdowns
function renderNPCs() {
  const section = document.getElementById('npcSection');
  section.innerHTML = `
    <input type="text" id="npcSearch" placeholder="🔍 Search NPCs by name, role, or location..." style="width:100%; margin-bottom:12px; padding:8px;" oninput="filterNPCs()"/>
    <h2>📜 NPC Directory</h2>
    <p>Click a family to expand.</p>
  `;

  for (const family in npcs.families) {
    const famBox = document.createElement('div');
    famBox.className = 'family';

    const title = document.createElement('div');
    title.textContent = family;

    const toggle = document.createElement('div');
    toggle.className = 'fam-toggle';
    toggle.textContent = 'Show';

    famBox.appendChild(title);
    famBox.appendChild(toggle);

    const famMembers = document.createElement('div');
    famMembers.className = 'family-members';

    npcs.families[family].forEach(npc => {
      const div = document.createElement('div');
      div.className = 'npc-entry';
      div.innerHTML = `<strong>${npc.name}</strong> — ${npc.role} <br><em>${npc.voice}${npc.age ? ' • ' + npc.age + ' y/o' : ''}</em><br><small>Location: ${npc.location}</small>`;
      famMembers.appendChild(div);
    });

    // Toggle family members on click
    famBox.addEventListener('click', () => {
      const visible = famMembers.style.display === 'block';
      famMembers.style.display = visible ? 'none' : 'block';
      toggle.textContent = visible ? 'Show' : 'Hide';
    });

    section.appendChild(famBox);
    section.appendChild(famMembers);
  }
}

// Search/filter function
function filterNPCs() {
  const query = document.getElementById('npcSearch').value.toLowerCase();

  document.querySelectorAll('.family').forEach(famBox => {
    const famMembers = famBox.nextElementSibling; // the .family-members div
    let matchInFamily = false;

    famMembers.querySelectorAll('.npc-entry').forEach(npcDiv => {
      const text = npcDiv.textContent.toLowerCase();
      if (text.includes(query)) {
        npcDiv.style.display = 'block';
        matchInFamily = true;
      } else {
        npcDiv.style.display = 'none';
      }
    });

    // Keep families visible only if they have matches
    famBox.style.display = matchInFamily ? 'flex' : 'none';
    famMembers.style.display = matchInFamily ? 'block' : 'none';
    famBox.querySelector('.fam-toggle').textContent = matchInFamily ? 'Hide' : 'Show';
  });
}
