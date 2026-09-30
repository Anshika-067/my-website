const profileStorageKey = "skilltorCareerReadiness";

const roleNames = {
	software: "Software Developer",
	data: "Data Analyst",
	aiml: "AI/ML Engineer",
	web: "Web Developer",
	cloud: "Cloud Engineer",
	frontend: "Frontend Developer",
	cybersecurity: "Cybersecurity Analyst",
	ux: "UX/UI Designer"
};

function updatePassportSnapshot() {
	let profile = {};
	try {
		profile = JSON.parse(localStorage.getItem(profileStorageKey)) || {};
	} catch {
		profile = {};
	}

	const role = roleNames[profile.targetRole] || roleNames.software;
	const skills = Object.values(profile.skills || {}).filter((rating) => Number(rating) > 0).length;
	const roleElement = document.querySelector("#passport-role");
	const progressElement = document.querySelector("#passport-progress");
	if (!roleElement || !progressElement) return;

	roleElement.textContent = role;
	progressElement.textContent = skills > 0
		? `${skills} assessed ${skills === 1 ? "skill" : "skills"} in your Skill Passport`
		: "No skills assessed yet";
}

updatePassportSnapshot();
window.addEventListener("storage", (event) => {
	if (event.key === profileStorageKey) updatePassportSnapshot();
});