const internships = [
    {
        title: "Data Analyst Intern", company: "Insight Labs", location: "Hybrid · Bengaluru", industry: "Data & Analytics", duration: "6 months", stipend: "Paid", setup: "hybrid", schedule: "part-time", experience: "beginner",
        description: "Explore business datasets and present evidence-led insights to product teams."
    },
    {
        title: "Cybersecurity Intern", company: "SecureNet", location: "On-site · Hyderabad", industry: "Cybersecurity", duration: "4 months", stipend: "Paid", setup: "on-site", schedule: "full-time", experience: "beginner",
        description: "Support security reviews and learn safe, practical monitoring workflows."
    },
    {
        title: "UI/UX Design Intern", company: "PixelWorks", location: "Remote", industry: "Design", duration: "3 months", stipend: "Unpaid", setup: "remote", schedule: "part-time", experience: "beginner",
        description: "Research user needs and turn them into tested interface prototypes."
    },
    {
        title: "Cloud Operations Intern", company: "Northstar Cloud", location: "Hybrid · Pune", industry: "Cloud & Infrastructure", duration: "6 months", stipend: "Paid", setup: "hybrid", schedule: "full-time", experience: "beginner",
        description: "Learn cloud deployment, infrastructure monitoring, and cost-aware operations."
    },
    {
        title: "Machine Learning Intern", company: "ModelWorks", location: "Remote", industry: "Data & Analytics", duration: "6 months", stipend: "Paid", setup: "remote", schedule: "part-time", experience: "experienced",
        description: "Prepare datasets, evaluate baseline models, and share experiment findings."
    },
    {
        title: "Full-Stack Web Intern", company: "Cedar Labs", location: "Hybrid · Chennai", industry: "Technology", duration: "4 months", stipend: "Paid", setup: "hybrid", schedule: "full-time", experience: "beginner",
        description: "Ship a small web feature from API integration through interface testing."
    },
    {
        title: "Data Engineering Intern", company: "BluePeak Analytics", location: "On-site · Mumbai", industry: "Data & Analytics", duration: "6 months", stipend: "Paid", setup: "on-site", schedule: "full-time", experience: "experienced",
        description: "Help build and validate repeatable pipelines for analytics datasets."
    }
];

function normalized(value) {
    return String(value || "").toLocaleLowerCase().trim();
}

function getSelectedValues(name) {
    return [...document.querySelectorAll(`[name="${name}"]:checked`)].map((input) => input.value);
}

function matchesFilters(internship, filters) {
    const searchable = normalized([
        internship.title,
        internship.company,
        internship.industry,
        internship.location
    ].join(" "));
    if (filters.keyword && !searchable.includes(filters.keyword)) return false;
    if (filters.location && !normalized(internship.location).includes(filters.location)) return false;
    if (filters.industry && internship.industry !== filters.industry) return false;
    const months = Number.parseInt(internship.duration, 10);
    if (filters.duration === "1-3 months" && (months < 1 || months > 3)) return false;
    if (filters.duration === "4-6 months" && (months < 4 || months > 6)) return false;
    if (filters.duration === "6+ months" && months < 6) return false;
    if (filters.stipend && internship.stipend !== filters.stipend) return false;
    if (filters.setup.length && !filters.setup.includes(internship.setup)) return false;
    if (filters.schedule && internship.schedule !== filters.schedule) return false;
    if (filters.experience.length && !filters.experience.includes(internship.experience)) return false;
    return true;
}

function createInternshipCard(internship) {
    const article = document.createElement("article");
    article.className = "internship-item recommendation-item";

    const header = document.createElement("div");
    header.className = "recommendation-heading";
    const identity = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = internship.title;
    const company = document.createElement("p");
    company.className = "recommendation-company";
    company.textContent = `${internship.company} · ${internship.location}`;
    identity.append(title, company);

    header.append(identity);

    const description = document.createElement("p");
    description.className = "recommendation-description";
    description.textContent = internship.description;

    const details = document.createElement("div");
    details.className = "internship-meta";
    [internship.industry, internship.stipend, internship.duration, internship.schedule.replace("-", " "), internship.experience === "beginner" ? "Beginner-friendly" : "Experienced"].forEach((value) => {
        const tag = document.createElement("span");
        tag.textContent = value;
        details.append(tag);
    });

    const listingLink = document.createElement("a");
    listingLink.className = "listing-link";
    listingLink.href = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(internship.title)}&location=${encodeURIComponent(internship.location.split(" · ").at(-1))}`;
    listingLink.target = "_blank";
    listingLink.rel = "noopener noreferrer";
    listingLink.textContent = "View matching opportunities on LinkedIn";

    article.append(header, description, details, listingLink);
    return article;
}

const form = document.querySelector("#internship-filters");
const resultsContainer = document.querySelector("#internship-results");
let appliedFilters = null;

function readFilters() {
    return {
        keyword: normalized(form.elements.search.value),
        location: normalized(form.elements.location.value),
        industry: form.elements.industry.value,
        duration: form.elements.duration.value,
        stipend: form.elements.stipend.value,
        setup: getSelectedValues("work_setup"),
        schedule: form.elements.schedule.value,
        experience: getSelectedValues("experience")
    };

}

function renderInternships() {
    const matches = appliedFilters
        ? internships.filter((internship) => matchesFilters(internship, appliedFilters))
        : internships;
    resultsContainer.replaceChildren(...matches.map(createInternshipCard));
    document.querySelector("#results-count").textContent = appliedFilters
        ? `${matches.length} ${matches.length === 1 ? "listing" : "listings"} found`
        : `${matches.length} available listings`;
    document.querySelector("#results-summary").textContent = appliedFilters
        ? `Showing ${matches.length} ${matches.length === 1 ? "internship" : "internships"} matching the selected filters.`
        : "Showing every current sample listing across roles, industries, and locations. Apply filters to narrow the list.";
    document.querySelector("#no-results").hidden = matches.length > 0;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    appliedFilters = readFilters();
    renderInternships();
});

form.addEventListener("reset", () => {
    setTimeout(() => {
        appliedFilters = null;
        renderInternships();
    }, 0);
});

renderInternships();
