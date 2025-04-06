function renderLog(title, date) {
    const entry = document.createElement('div');
    entry.classList.add('changelog-entry');
    entry.innerHTML = `
      <h1>${title}</h1>
      <span class="changelog-date">${date}</span>
    `;
    document.getElementById('changelogs').appendChild(entry);
  }

document.addEventListener("DOMContentLoaded", function() {
    renderLog("Quests done", "5/4/2025");
    renderLog("Fully working console", "26/3/2025");
    renderLog("Resizable textures and NPC's", "20/3/2025");
    renderLog("Windows for NPC's", "17/3/2025");
    renderLog("Added Linux Support", "13/3/2025");
    renderLog("Working on NPC system", "6/3/2025");
    renderLog("Added third-party legal notices", "25/2/2025");
    renderLog("Light updates relatively to player<br>light ", "23/2/2025");
    renderLog("Created cool buttons", "18/2/2025");
    renderLog("Resources/Textures fixed<br>Added optional collision to resources<br>In-game gui updated", "16/2/2025");
    renderLog("Build & Launch button", "6/2/2025");
    renderLog("I don't remeber what I added", "29/1/2025");
    renderLog("Updated scene manager<br>Fixed triggers", "27/1/2025");
    renderLog("Added scene manager", "26/1/2025");
    renderLog("Added scene building", "24/1/2025");
    renderLog("Added building grid", "22/1/2025");
    renderLog("Added ImGui", "30/12/2024");
  });