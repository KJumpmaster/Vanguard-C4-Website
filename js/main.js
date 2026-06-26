const phaseData = {
  1: { label: 'PHASE 01 / SKYPILOT', title: 'Prepare the force.', body: 'Build the hangar, track aircraft, and show command what is available before the mission begins.', bullets: ['Aircraft inventory', 'Readiness picture', 'Mission preparation'] },
  2: { label: 'PHASE 02 / GI SCOUT', title: 'Create the mission.', body: 'The commander creates the operation, sets the objective, and starts building the squadron picture.', bullets: ['Mission board', 'Commander intent', 'Operational assignment'] },
  3: { label: 'PHASE 03 / KEYFORGE', title: 'Receive the mission.', body: 'Mission data moves securely from command to squadron members so everyone works from the same package.', bullets: ['Encrypted package movement', 'Mission receipt', 'Distributed coordination'] },
  4: { label: 'PHASE 04 / GI SCOUT', title: 'Check in.', body: 'Pilots report availability, roles begin filling, and the squadron forms around the mission.', bullets: ['Pilot check-in', 'Roster formation', 'Readiness tracking'] },
  5: { label: 'PHASE 05 / NORDEN II', title: 'Evaluate the sortie strike package.', body: 'Pilots evaluate loadouts, weapons, weather, targets, delivery conditions, and mission fit before returning a package to command.', bullets: ['Loadout Manager', 'Ballistic Computer', 'Strike Planning Console', 'MAC / 3D Sandbox'] },
  6: { label: 'PHASE 06 / GI SCOUT', title: 'Commander approval.', body: 'Command reviews the proposed package, checks readiness, and approves the mission plan before the final brief.', bullets: ['Package review', 'Loadout approval', 'Mission go/no-go'] },
  7: { label: 'PHASE 07 / GI SCOUT', title: 'Final brief.', body: 'Routes, phase lines, timing, roles, threats, and execution details come together on the sand table.', bullets: ['Sand table', 'Phase lines', 'Timing and roles'] },
  8: { label: 'PHASE 08 / EXECUTION', title: 'Execute.', body: 'The squadron launches with a shared plan and a clear understanding of the mission.', bullets: ['Launch', 'Mission execution', 'Operational tracking'] },
  9: { label: 'PHASE 09 / AFTER-ACTION REVIEW', title: 'Evaluate performance.', body: 'The team reviews what happened, what worked, what failed, and how to get better.', bullets: ['Mission results', 'Lessons learned', 'After-action library'] },
  10: { label: 'PHASE 10 / AWARDS', title: 'Recognize the team.', body: 'Mission performance is recorded and the squadron recognizes pilots for their contribution.', bullets: ['Awards', 'Statistics', 'Next sortie preparation'] }
};

const buttons = document.querySelectorAll('.phase-card');
const detail = document.querySelector('#phase-detail');
const label = detail.querySelector('.phase-label');
const title = detail.querySelector('h3');
const body = detail.querySelector('p');
const list = detail.querySelector('ul');

function setPhase(id){
  const data = phaseData[id];
  buttons.forEach(b => b.classList.toggle('active', b.dataset.phase === String(id)));
  label.textContent = data.label;
  title.textContent = data.title;
  body.textContent = data.body;
  list.innerHTML = data.bullets.map(item => `<li>${item}</li>`).join('');
}

buttons.forEach(button => button.addEventListener('click', () => setPhase(button.dataset.phase)));
