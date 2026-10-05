const storageKey = "skilltorCareerReadiness";

const skillCatalog = [
    { id: "python", name: "Python", resource: "Python for Everybody", url: "https://www.py4e.com/" },
    { id: "javascript", name: "JavaScript", resource: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { id: "sql", name: "SQL", resource: "SQLBolt interactive lessons", url: "https://sqlbolt.com/" },
    { id: "machineLearning", name: "Machine Learning", resource: "Kaggle Intro to Machine Learning", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
    { id: "communication", name: "Communication", resource: "University of Minnesota: Communication in the Real World", url: "https://open.lib.umn.edu/communication/" },
    { id: "dsa", name: "Data Structures & Algorithms", resource: "VisuAlgo", url: "https://visualgo.net/en" },
    { id: "git", name: "Git & GitHub", resource: "GitHub Skills", url: "https://skills.github.com/" },
    { id: "apis", name: "APIs / REST", resource: "MDN: HTTP overview", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" },
    { id: "statistics", name: "Statistics", resource: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" },
    { id: "dataProcessing", name: "Data Processing", resource: "Kaggle Pandas", url: "https://www.kaggle.com/learn/pandas" },
    { id: "deepLearning", name: "Deep Learning", resource: "fast.ai Practical Deep Learning", url: "https://course.fast.ai/" },
    { id: "htmlCss", name: "HTML & CSS", resource: "MDN Learn Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" },
    { id: "react", name: "React", resource: "React Learn", url: "https://react.dev/learn" },
    { id: "accessibility", name: "Accessibility", resource: "W3C WAI Tutorials", url: "https://www.w3.org/WAI/tutorials/" },
    { id: "spreadsheets", name: "Spreadsheet Analysis", resource: "Excel training", url: "https://support.microsoft.com/en-us/excel" },
    { id: "visualization", name: "Data Visualization", resource: "Tableau free training videos", url: "https://www.tableau.com/learn/training" },
    { id: "cloud", name: "Cloud Fundamentals", resource: "AWS Skill Builder", url: "https://skillbuilder.aws/" },
    { id: "linux", name: "Linux", resource: "Linux Journey", url: "https://linuxjourney.com/" },
    { id: "networking", name: "Networking", resource: "Cisco Networking Basics", url: "https://skillsforall.com/course/networking-basics" },
    { id: "security", name: "Security Fundamentals", resource: "Cisco Introduction to Cybersecurity", url: "https://skillsforall.com/course/introduction-to-cybersecurity" },
    { id: "scripting", name: "Scripting", resource: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/" },
    { id: "logAnalysis", name: "Log Analysis", resource: "Splunk Search Tutorial", url: "https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/WelcometotheSearchTutorial" },
    { id: "research", name: "User Research", resource: "Nielsen Norman Group articles", url: "https://www.nngroup.com/articles/" },
    { id: "interaction", name: "Interaction Design", resource: "Laws of UX", url: "https://lawsofux.com/" },
    { id: "wireframing", name: "Wireframing", resource: "Figma Learn", url: "https://help.figma.com/hc/en-us/categories/360002051613-Learn-design" },
    { id: "prototyping", name: "Prototyping", resource: "Figma Learn: Prototyping", url: "https://help.figma.com/hc/en-us/sections/360006534454-Prototyping" }
];

const competency = (id, required, action, why, difficulty, hours, weight = 1) => ({
    ...skillCatalog.find((skill) => skill.id === id), required, action, why, difficulty, hours, weight
});

const roles = {
    software: {
        title: "Software Developer",
        competencies: [
            competency("python", 75, "Solve a small problem set, then build a command-line utility.", "Core language for scripting, services, and problem solving.", "Intermediate", "8-12 hours"),
            competency("javascript", 70, "Build an interactive feature and handle input, errors, and state.", "Useful across modern applications and full-stack teams.", "Intermediate", "8-12 hours"),
            competency("sql", 65, "Design a small schema and practice joins, filters, and aggregation.", "Most software products persist and query structured data.", "Beginner", "5-8 hours"),
            competency("dsa", 70, "Practice arrays, maps, stacks, and complexity using timed exercises.", "Strengthens implementation and technical interview fundamentals.", "Intermediate", "10-15 hours"),
            competency("git", 65, "Use branches, commits, and a pull request in a small project.", "Version control supports collaboration and maintainable delivery.", "Beginner", "3-5 hours"),
            competency("apis", 65, "Consume a public API and document one endpoint you build.", "Applications commonly integrate services through APIs.", "Intermediate", "5-8 hours")
        ]
    },
    data: {
        title: "Data Analyst",
        competencies: [
            competency("python", 65, "Load a CSV, clean columns, and summarize findings in a notebook.", "Automates repeatable analysis and supports larger datasets.", "Beginner", "6-10 hours"),
            competency("sql", 80, "Practice joins, grouping, and window functions on a sample database.", "A core tool for retrieving and shaping business data.", "Intermediate", "8-12 hours", 1.2),
            competency("statistics", 70, "Explain distributions, sampling, and uncertainty using a real dataset.", "Helps distinguish meaningful patterns from noise.", "Intermediate", "8-12 hours"),
            competency("dataProcessing", 75, "Clean missing values and prepare a reproducible analysis workflow.", "Reliable analysis depends on well-prepared input data.", "Intermediate", "6-10 hours"),
            competency("visualization", 70, "Build a chart that answers one question and state its takeaway.", "Makes findings easier for decision-makers to use.", "Beginner", "5-8 hours"),
            competency("communication", 60, "Present an analysis as a concise recommendation for a nontechnical audience.", "Analysis creates value when its implications are clear.", "Intermediate", "3-5 hours")
        ]
    },
    aiml: {
        title: "AI/ML Engineer",
        competencies: [
            competency("python", 85, "Implement a data workflow and model experiment in Python.", "Primary language across machine-learning tooling.", "Intermediate", "12-18 hours", 1.2),
            competency("statistics", 75, "Review probability, distributions, and evaluation metrics with examples.", "Supports sound experiments and evaluation.", "Intermediate", "10-14 hours"),
            competency("machineLearning", 75, "Train and evaluate a baseline model on a structured dataset.", "Develops the core model-building workflow.", "Intermediate", "12-18 hours", 1.2),
            competency("sql", 60, "Query and aggregate a dataset before preparing model features.", "Model work often begins with querying data sources.", "Beginner", "5-8 hours"),
            competency("dataProcessing", 75, "Build a repeatable feature-cleaning and validation pipeline.", "Prepared and consistent inputs are essential for model quality.", "Intermediate", "8-12 hours"),
            competency("deepLearning", 60, "Train a small neural network and compare it with a simple baseline.", "Introduces neural methods after core ML foundations.", "Advanced", "12-20 hours")
        ]
    },
    web: {
        title: "Web Developer",
        competencies: [
            competency("htmlCss", 80, "Build a responsive, semantic multi-page interface.", "Foundation for accessible, structured web pages.", "Beginner", "6-10 hours"),
            competency("javascript", 75, "Add form validation and a dynamic interaction to a page.", "Adds behavior and client-side application logic.", "Intermediate", "8-12 hours", 1.2),
            competency("apis", 65, "Fetch remote data and handle loading, success, and error states.", "Connects interfaces to useful services and data.", "Intermediate", "5-8 hours"),
            competency("sql", 60, "Create tables and write queries for a small application.", "Many web products need persistent, queryable data.", "Beginner", "5-8 hours"),
            competency("git", 60, "Track a project with meaningful commits and publish its repository.", "Makes development history reviewable and collaborative.", "Beginner", "3-5 hours"),
            competency("accessibility", 65, "Test keyboard navigation and fix labels, headings, and contrast.", "Accessible interfaces work for more people and input methods.", "Intermediate", "4-7 hours")
        ]
    },
    cloud: {
        title: "Cloud Engineer",
        competencies: [
            competency("cloud", 80, "Deploy a small service and document its configuration and cost controls.", "Core knowledge for provisioning and operating cloud services.", "Intermediate", "10-15 hours", 1.2),
            competency("linux", 70, "Manage users, permissions, processes, and services in a Linux lab.", "Many cloud workloads use Linux-based environments.", "Intermediate", "6-10 hours"),
            competency("networking", 70, "Diagram subnets, DNS, routing, and secure service access.", "Cloud systems rely on sound network boundaries and routing.", "Intermediate", "8-12 hours"),
            competency("scripting", 65, "Automate a repeatable setup or health-check task with a script.", "Automation makes infrastructure operations repeatable.", "Intermediate", "6-10 hours"),
            competency("security", 70, "Apply least-privilege access and document a basic threat review.", "Identity and configuration choices strongly affect cloud security.", "Intermediate", "6-10 hours"),
            competency("git", 60, "Store a deployment configuration change in a reviewed Git branch.", "Infrastructure changes benefit from versioned review.", "Beginner", "3-5 hours")
        ]
    },
    frontend: {
        title: "Frontend developer",
        competencies: [
            competency("htmlCss", 80, "Build a responsive page with semantic HTML and a mobile layout.", "Foundation for accessible, structured web pages.", "Beginner", "6-10 hours"),
            competency("javascript", 80, "Create an interactive feature and practice handling user input.", "Drives interaction and application behavior in the browser.", "Intermediate", "8-12 hours"),
            competency("react", 60, "Build reusable components and connect them to changing state.", "Common framework skills help build maintainable interfaces.", "Intermediate", "8-12 hours"),
            competency("accessibility", 60, "Audit keyboard navigation, labels, and contrast in a page.", "Accessibility is part of building reliable user interfaces.", "Intermediate", "4-7 hours"),
            competency("git", 60, "Use branches and commits to document a small project.", "Version control supports review and collaboration.", "Beginner", "3-5 hours")
        ]
    },
    cybersecurity: {
        title: "Cybersecurity analyst",
        competencies: [
            competency("networking", 80, "Trace a network request and identify common ports and protocols.", "Network knowledge helps interpret security events.", "Intermediate", "8-12 hours"),
            competency("linux", 60, "Practice file, permission, and process commands in a safe lab.", "Security analysis commonly involves command-line systems.", "Beginner", "5-8 hours"),
            competency("security", 80, "Work through a threat-model exercise and document mitigations.", "Builds a foundation for identifying and reducing risk.", "Intermediate", "8-12 hours"),
            competency("logAnalysis", 60, "Review sample system logs and flag unusual events with evidence.", "Logs provide evidence for monitoring and incident response.", "Intermediate", "5-8 hours"),
            competency("scripting", 40, "Parse structured text with a short script and report selected events.", "Automation helps analyze repetitive security data.", "Beginner", "4-6 hours")
        ]
    },
    ux: {
        title: "UX/UI designer",
        competencies: [
            competency("research", 80, "Conduct a short interview and summarize observed user needs.", "Grounds design decisions in user evidence.", "Intermediate", "5-8 hours"),
            competency("interaction", 80, "Map a user flow and design clear states for key steps.", "Clear interactions help users complete important tasks.", "Intermediate", "6-10 hours"),
            competency("wireframing", 80, "Create low-fidelity screens for a task and test them with a peer.", "Wireframes make structure quick to explore and revise.", "Beginner", "4-6 hours"),
            competency("accessibility", 60, "Review keyboard access, contrast, and labels in a design.", "Inclusive design reduces barriers to use.", "Intermediate", "4-7 hours"),
            competency("prototyping", 60, "Connect screens into a prototype and test it against a task.", "Prototypes let teams evaluate an interaction before build.", "Beginner", "4-7 hours")
        ]
    }
};

const emptyProfile = {
    name: "Sweezy",
    college: "",
    degree: "",
    year: "",
    cgpa: "",
    interests: "",
    learningMode: "",
    targetRole: "software",
    skills: {}
};

const form = document.querySelector("#profile-form");
const roleInput = document.querySelector("#target-role");
const studentSkills = document.querySelector("#student-skills");
const skillToAdd = document.querySelector("#skill-to-add");
const skillProficiency = document.querySelector("#skill-proficiency");
const assessmentSkill = document.querySelector("#assessment-skill");
const competencyMap = document.querySelector("#competency-map");
const learningPath = document.querySelector("#learning-path");
const saveStatus = document.querySelector("#save-status");
const resetButton = document.querySelector("#reset-assessment");
const coachForm = document.querySelector("#coach-form");
const coachInput = document.querySelector("#coach-input");
const coachResponse = document.querySelector("#coach-response");
const coachSubmit = coachForm.querySelector("button[type='submit']");
const profileFields = [...form.querySelectorAll("[name]")];

let profile = loadProfile();

function normalizeRating(value) {
    const rating = Number(value);
    if (!Number.isFinite(rating)) return 0;
    if (Number.isInteger(rating) && rating >= 0 && rating <= 5) return rating * 20;
    return Math.max(0, Math.min(100, Math.round(rating)));
}

function loadProfile() {
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey));
        if (!saved || typeof saved !== "object") return { ...emptyProfile, skills: {} };

        return {
            ...emptyProfile,
            ...Object.fromEntries(Object.keys(emptyProfile).filter((key) => key !== "skills").map((key) => [
                key,
                typeof saved[key] === "string" ? saved[key].slice(0, key === "interests" ? 180 : 100) : emptyProfile[key]
            ])),
            targetRole: roles[saved.targetRole] ? saved.targetRole : emptyProfile.targetRole,
            skills: saved.skills && typeof saved.skills === "object"
                ? Object.fromEntries(Object.entries(saved.skills).filter(([id]) => skillCatalog.some((skill) => skill.id === id)).map(([id, value]) => [id, normalizeRating(value)]))
                : {}
        };
    } catch {
        return { ...emptyProfile, skills: {} };
    }
}

function getRating(skillId) {
    return normalizeRating(profile.skills[skillId]);
}

function proficiencyLabel(value) {
    if (value >= 100) return "Expert";
    if (value >= 80) return "Advanced";
    if (value >= 55) return "Intermediate";
    if (value >= 25) return "Beginner";
    return "Not assessed";
}

function createProficiencyOptions(selectedValue) {
    const options = [
        [0, "Not assessed"],
        [25, "Beginner"],
        [55, "Intermediate"],
        [80, "Advanced"],
        [100, "Expert"]
    ];
    return options.map(([value, label]) => {
        const option = document.createElement("option");
        option.value = String(value);
        option.textContent = label;
        option.selected = Number(selectedValue) === value;
        return option;
    });
}

function renderSkillOptions() {
    const optionsMarkup = skillCatalog.map(({ id, name }) => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = name;
        return option;
    });
    skillToAdd.replaceChildren(...optionsMarkup.map((option) => option.cloneNode(true)));
    assessmentSkill.replaceChildren(...optionsMarkup.map((option) => option.cloneNode(true)));
}

function renderStudentSkills() {
    studentSkills.replaceChildren();
    const skills = Object.entries(profile.skills).filter(([, value]) => normalizeRating(value) > 0);
    if (skills.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-skills";
        empty.textContent = "No current skills added yet. Add one above or use the quick proficiency check.";
        studentSkills.append(empty);
        return;
    }

    for (const [id, rating] of skills.sort((first, second) => skillCatalog.findIndex((skill) => skill.id === first[0]) - skillCatalog.findIndex((skill) => skill.id === second[0]))) {
        const skill = skillCatalog.find((item) => item.id === id);
        if (!skill) continue;
        const row = document.createElement("div");
        row.className = "student-skill-row";

        const name = document.createElement("span");
        name.className = "student-skill-name";
        name.textContent = skill.name;

        const select = document.createElement("select");
        select.className = "student-skill-level";
        select.dataset.skillId = id;
        select.setAttribute("aria-label", `${skill.name} proficiency`);
        select.append(...createProficiencyOptions(rating));

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "remove-skill";
        remove.dataset.removeSkill = id;
        remove.setAttribute("aria-label", `Remove ${skill.name}`);
        remove.textContent = "Remove";

        row.append(name, select, remove);
        studentSkills.append(row);
    }
}

function profileCompletion() {
    const requiredFields = [profile.name, profile.college, profile.degree, profile.year, profile.cgpa, profile.targetRole, profile.interests, profile.learningMode];
    const completed = requiredFields.filter((value) => String(value).trim() !== "").length;
    return Math.round((completed / requiredFields.length) * 100);
}

function analyzeCompetencies(competencies) {
    const requiredPoints = competencies.reduce((total, item) => total + item.required * item.weight, 0);
    const missingPoints = competencies.reduce((total, item) => total + Math.max(item.required - getRating(item.id), 0) * item.weight, 0);
    const gapIndex = requiredPoints ? Math.round((missingPoints / requiredPoints) * 100) : 0;
    const match = 100 - gapIndex;
    const analysis = competencies.map((item) => {
        const current = getRating(item.id);
        const gap = Math.max(item.required - current, 0);
        const ratio = item.required ? current / item.required : 1;
        const status = gap === 0 ? "Strong" : ratio >= 0.5 ? "Moderate" : "Missing";
        return { ...item, current, gap, status, critical: gap > 0 && ratio < 0.5, priorityScore: gap * item.weight };
    });
    const prioritizedGaps = analysis.filter((item) => item.gap > 0).sort((first, second) => {
        return Number(second.critical) - Number(first.critical) || second.priorityScore - first.priorityScore || first.name.localeCompare(second.name);
    });
    return { analysis, prioritizedGaps, match, gapIndex, requiredPoints };
}

function renderCoachStatus(message, state = "") {
    const response = document.createElement("div");
    response.className = `coach-message${state ? ` coach-message-${state}` : ""}`;
    const text = document.createElement("p");
    text.textContent = message;
    response.append(text);
    coachResponse.replaceChildren();
    const avatar = document.createElement("span");
    avatar.className = "coach-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = "✦";
    coachResponse.append(avatar, response);
}

function renderCoachResponse(result) {
    const role = roles[profile.targetRole];
    const response = document.createElement("div");
    response.className = "coach-message";
    const summary = document.createElement("p");
    summary.textContent = result.summary;
    response.append(summary);

    const recognizedSkills = result.recognizedSkills.filter((item) => {
        return skillCatalog.some((skill) => skill.id === item.id)
            && Number.isInteger(item.proficiency)
            && item.proficiency >= 25
            && item.proficiency <= 100;
    });
    if (recognizedSkills.length > 0) {
        const identified = document.createElement("p");
        identified.className = "coach-identified";
        identified.textContent = `Added to your assessment: ${recognizedSkills
            .map((item) => `${skillCatalog.find((skill) => skill.id === item.id).name} (${proficiencyLabel(item.proficiency)})`)
            .join(", ")}.`;
        response.append(identified);
    } else {
        const notIdentified = document.createElement("p");
        notIdentified.className = "coach-identified";
        notIdentified.textContent = "I couldn't confidently identify an assessed skill in that message, so your saved skill levels are unchanged.";
        response.append(notIdentified);
    }

    const allowedCompetencies = new Map(role.competencies.map((item) => [item.id, item]));
    const recommendations = result.recommendations
        .filter((item) => allowedCompetencies.has(item.id))
        .slice(0, 3);
    if (recommendations.length > 0) {
        const heading = document.createElement("h3");
        heading.textContent = "Recommended next skills";
        const list = document.createElement("ol");
        list.className = "coach-recommendations";
        for (const recommendation of recommendations) {
            const item = allowedCompetencies.get(recommendation.id);
            const entry = document.createElement("li");
            const skill = document.createElement("strong");
            const current = getRating(item.id);
            skill.textContent = `${item.name} · ${current}% current / ${item.required}% goal`;
            const reason = document.createElement("span");
            reason.textContent = recommendation.reason;
            const resource = document.createElement("a");
            resource.href = item.url;
            resource.target = "_blank";
            resource.rel = "noopener noreferrer";
            resource.textContent = `Start learning: ${item.resource}`;
            entry.append(skill, reason, resource);
            list.append(entry);
        }
        response.append(heading, list);
    } else {
        const complete = document.createElement("p");
        complete.textContent = `There are no additional skill recommendations for the mapped ${role.title} competencies. Build a project to show how you use your skills together.`;
        response.append(complete);
    }

    coachResponse.replaceChildren();
    const avatar = document.createElement("span");
    avatar.className = "coach-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = "✦";
    coachResponse.append(avatar, response);
}

function isCoachResponse(value) {
    return value !== null
        && typeof value === "object"
        && typeof value.summary === "string"
        && Array.isArray(value.recognizedSkills)
        && Array.isArray(value.recommendations)
        && value.recognizedSkills.every((item) => item && typeof item.id === "string" && Number.isInteger(item.proficiency))
        && value.recommendations.every((item) => item && typeof item.id === "string" && typeof item.reason === "string");
}

function appendCell(row, text, className) {
    const cell = document.createElement("span");
    cell.textContent = text;
    if (className) cell.className = className;
    row.append(cell);
}

function renderCompetencyMap(analysis) {
    competencyMap.replaceChildren();
    const header = document.createElement("div");
    header.className = "map-row map-labels";
    ["Competency", "Current", "Required", "Gap", "Status"].forEach((label) => appendCell(header, label));
    competencyMap.append(header);

    for (const item of analysis) {
        const article = document.createElement("article");
        article.className = "map-item";
        const row = document.createElement("div");
        row.className = "map-row";
        appendCell(row, item.name, "map-skill");
        appendCell(row, `${item.current}%`, "map-rating");
        appendCell(row, `${item.required}%`, "map-rating");
        appendCell(row, `${item.gap} pts`, item.gap > 0 ? "map-rating is-gap" : "map-rating");
        appendCell(row, item.critical ? "Critical" : item.status, `gap-status ${item.critical ? "is-critical" : item.gap > 0 ? "is-gap" : ""}`);

        const action = document.createElement("p");
        action.className = "map-action";
        action.append(document.createTextNode(`Recommended action: ${item.action} `));
        const resourceLink = document.createElement("a");
        resourceLink.href = item.url;
        resourceLink.target = "_blank";
        resourceLink.rel = "noopener noreferrer";
        resourceLink.textContent = item.resource;
        action.append(resourceLink);
        article.append(row, action);
        competencyMap.append(article);
    }
}

function renderSkillGroups(analysis) {
    const groups = [
        ["Strong", "Strong", analysis.filter((item) => item.status === "Strong")],
        ["Moderate", "Needs Improvement", analysis.filter((item) => item.status === "Moderate")],
        ["Missing", "Missing / Critical", analysis.filter((item) => item.status === "Missing")]
    ];
    const container = document.querySelector("#skill-groups");
    container.replaceChildren();

    for (const [kind, heading, items] of groups) {
        const group = document.createElement("section");
        group.className = `skill-group skill-group-${kind.toLowerCase()}`;
        const title = document.createElement("h3");
        title.textContent = heading;
        const list = document.createElement("ul");
        for (const item of items) {
            const entry = document.createElement("li");
            const name = document.createElement("strong");
            name.textContent = item.name;
            const score = document.createElement("span");
            score.textContent = `${item.current}% / ${item.required}% required`;
            entry.append(name, score);
            list.append(entry);
        }
        if (items.length === 0) {
            const entry = document.createElement("li");
            entry.className = "group-empty";
            entry.textContent = "None yet";
            list.append(entry);
        }
        group.append(title, list);
        container.append(group);
    }
}

function createLearningStep(item, index, isProject = false) {
    const step = document.createElement("li");
    step.className = `learning-step${isProject ? " project-step" : ""}`;
    const number = document.createElement("span");
    number.className = "step-number";
    number.textContent = isProject ? "Build" : String(index + 1).padStart(2, "0");

    const content = document.createElement("div");
    content.className = "step-content";
    const heading = document.createElement("h3");
    heading.textContent = isProject ? `${roles[profile.targetRole].title} portfolio project` : item.name;
    const why = document.createElement("p");
    const interest = profile.interests.trim();
    const learningPreference = profile.learningMode ? ` Try a ${profile.learningMode.replaceAll("-", " ")} format.` : "";
    why.textContent = isProject
        ? `Apply the skills you have improved to one complete project and publish your work. Use GitHub Skills to practice versioning.${learningPreference}`
        : `${item.why}${interest ? ` Connect the practice to your interest in ${interest}.` : ""}${learningPreference}`;
    const details = document.createElement("p");
    details.className = "step-details";
    const priority = index === 0 ? "Highest priority" : index < 3 ? "High priority" : "Next priority";
    details.textContent = isProject ? "Portfolio milestone · after skill practice" : `${priority} · ${item.difficulty} · ${item.hours} · ${item.gap} point gap`;
    const resource = document.createElement("a");
    resource.className = "resource-link";
    resource.href = isProject ? "https://skills.github.com/" : item.url;
    resource.target = "_blank";
    resource.rel = "noopener noreferrer";
    resource.textContent = isProject ? "GitHub Skills · publish a project" : `Resource: ${item.resource}`;
    content.append(heading, why, details, resource);
    step.append(number, content);
    return step;
}

function renderPriorityPreview(gaps) {
    const preview = document.querySelector("#priority-preview");
    preview.replaceChildren();
    if (gaps.length === 0) {
        const complete = document.createElement("li");
        complete.className = "priority-preview-complete";
        complete.textContent = "All mapped role skills are on target. Next: build a project that demonstrates them together.";
        preview.append(complete);
        return;
    }

    gaps.slice(0, 4).forEach((item, index) => {
        const step = document.createElement("li");
        const number = document.createElement("span");
        number.className = "priority-step-number";
        number.textContent = String(index + 1);
        const skill = document.createElement("strong");
        skill.textContent = item.name;
        const gap = document.createElement("small");
        gap.textContent = `${item.gap} point gap`;
        step.append(number, skill, gap);
        preview.append(step);
    });
}

function updateAnalysis() {
    const role = roles[profile.targetRole];
    const { analysis, prioritizedGaps, match, gapIndex } = analyzeCompetencies(role.competencies);
    const completeness = profileCompletion();
    const readiness = Math.round(match * 0.8 + completeness * 0.2);
    const profileDisplayName = profile.name.trim() || "Student";

    document.querySelector("#match-score").textContent = `${match}%`;
    document.querySelector("#gap-index").textContent = `${gapIndex}%`;
    document.querySelector("#readiness-title").textContent = `${readiness}%`;
    document.querySelector("#target-role-summary").textContent = role.title;
    document.querySelector("#profile-completeness").textContent = `Profile completeness: ${completeness}%`;
    document.querySelector("#competency-count").textContent = `${analysis.length} mapped competencies`;
    document.querySelector("#gap-count").textContent = `${prioritizedGaps.length} priority gaps`;

    let readinessLabel = "Building skills";
    if (readiness >= 90) readinessLabel = "Strong readiness";
    else if (readiness >= 70) readinessLabel = "Near target";
    else if (readiness < 30) readinessLabel = "Early pathway";
    document.querySelector("#readiness-level").textContent = readinessLabel;

    const critical = prioritizedGaps.find((item) => item.critical) || prioritizedGaps[0];
    document.querySelector("#critical-skill").textContent = critical ? critical.name : "None";
    document.querySelector("#critical-skill-gap").textContent = critical
        ? `${critical.current}% current · ${critical.gap} points to target`
        : "All role competency targets met";
    document.querySelector("#formula-readiness-value").textContent = `${match}% skill match + ${completeness}% profile completion`;

    renderPriorityPreview(prioritizedGaps);
    renderSkillGroups(analysis);
    renderCompetencyMap(analysis);
    learningPath.replaceChildren();
    if (prioritizedGaps.length === 0) {
        const message = document.createElement("li");
        message.className = "empty-result";
        message.textContent = "All mapped role competencies meet their targets. Build a portfolio project to demonstrate how you apply them together.";
        learningPath.append(message, createLearningStep(null, 0, true));
    } else {
        prioritizedGaps.slice(0, 4).forEach((item, index) => learningPath.append(createLearningStep(item, index)));
        learningPath.append(createLearningStep(null, prioritizedGaps.length, true));
    }

    const updatedAt = new Date();
    document.querySelector("#updated-at").textContent = `Analysis updated ${new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(updatedAt)}`;
}

function saveProfile() {
    try {
        localStorage.setItem(storageKey, JSON.stringify(profile));
        saveStatus.textContent = "Progress saved on this device";
    } catch {
        saveStatus.textContent = "Progress is active for this session";
    }
}

function refreshAnalysis() {
    for (const field of profileFields) {
        if (field.name === "targetRole") continue;
        const value = field.value.trim();
        profile[field.name] = field.name === "cgpa" && value !== ""
            ? String(Math.max(0, Math.min(10, Number(value))))
            : value.slice(0, field.name === "interests" ? 180 : 100);
    }
    profile.name = profile.name || "";
    profile.targetRole = roles[roleInput.value] ? roleInput.value : emptyProfile.targetRole;
    saveProfile();
    updateAnalysis();
}

for (const field of profileFields) {
    if (field.name !== "skills" && typeof profile[field.name] === "string") field.value = profile[field.name];
}
roleInput.value = profile.targetRole;
renderSkillOptions();
renderStudentSkills();
updateAnalysis();

form.addEventListener("input", (event) => {
    refreshAnalysis();
});

form.addEventListener("change", (event) => {
    if (event.target.matches("[data-skill-id]")) {
        profile.skills[event.target.dataset.skillId] = Number(event.target.value);
        renderStudentSkills();
    }
    refreshAnalysis();
});

form.addEventListener("submit", (event) => event.preventDefault());

document.querySelector("#add-skill").addEventListener("click", () => {
    profile.skills[skillToAdd.value] = Number(skillProficiency.value);
    renderStudentSkills();
    refreshAnalysis();
});

studentSkills.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-skill]");
    if (!removeButton) return;
    delete profile.skills[removeButton.dataset.removeSkill];
    renderStudentSkills();
    refreshAnalysis();
});

document.querySelector("#apply-assessment").addEventListener("click", () => {
    const answers = ["#question-practice", "#question-problem", "#question-explain"].map((selector) => document.querySelector(selector).value);
    const result = document.querySelector("#assessment-result");
    if (answers.some((answer) => answer === "")) {
        result.textContent = "Answer all three questions to calculate an estimate.";
        return;
    }

    const points = answers.reduce((total, answer) => total + Number(answer), 0);
    const estimate = points <= 1 ? 25 : points <= 3 ? 55 : points <= 5 ? 80 : 100;
    profile.skills[assessmentSkill.value] = estimate;
    result.textContent = `${skillCatalog.find((skill) => skill.id === assessmentSkill.value).name} assessed as ${proficiencyLabel(estimate)} (${estimate}%).`;
    renderStudentSkills();
    refreshAnalysis();
});

resetButton.addEventListener("click", () => {
    profile.skills = {};
    renderStudentSkills();
    refreshAnalysis();
});

coachForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    coachSubmit.disabled = true;
    coachForm.setAttribute("aria-busy", "true");
    renderCoachStatus("Claude is reviewing your skills and preparing recommendations…", "loading");

    try {
        const apiBase = window.SKILLTOR_AI_API_URL || window.location.origin;
        const endpoint = new URL("/api/skills-coach", apiBase);
        const role = roles[profile.targetRole];
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: coachInput.value.trim(),
                role: role.title,
                competencies: role.competencies.map(({ id, required }) => ({ id, required })),
                currentSkills: Object.entries(profile.skills)
                    .filter(([, proficiency]) => normalizeRating(proficiency) > 0)
                    .map(([id, proficiency]) => ({ id, proficiency: normalizeRating(proficiency) })),
                interests: profile.interests,
                learningMode: profile.learningMode
            })
        });

        let result;
        try {
            result = await response.json();
        } catch {
            throw new Error("The AI service returned an unreadable response. Please try again.");
        }
        if (!response.ok) {
            throw new Error(typeof result.error === "string" ? result.error : "The AI service could not complete this request.");
        }
        if (!isCoachResponse(result)) {
            throw new Error("The AI service returned an invalid response. Please try again.");
        }

        for (const skill of result.recognizedSkills) {
            if (skillCatalog.some((item) => item.id === skill.id)
                && Number.isInteger(skill.proficiency)
                && skill.proficiency >= 25
                && skill.proficiency <= 100) {
                profile.skills[skill.id] = skill.proficiency;
            }
        }
        renderStudentSkills();
        refreshAnalysis();
        renderCoachResponse(result);
    } catch (error) {
        const message = error instanceof TypeError
            ? "I couldn't connect to the AI service. Check the backend URL and make sure the server is running."
            : error instanceof Error
                ? error.message
                : "The AI service could not complete this request. Please try again.";
        renderCoachStatus(message, "error");
    } finally {
        coachSubmit.disabled = false;
        coachForm.removeAttribute("aria-busy");
    }
});

window.addEventListener("storage", (event) => {
    if (event.key !== storageKey || !event.newValue) return;
    profile = loadProfile();
    for (const field of profileFields) {
        if (field.name !== "skills" && typeof profile[field.name] === "string") field.value = profile[field.name];
    }
    roleInput.value = profile.targetRole;
    renderStudentSkills();
    updateAnalysis();
});
