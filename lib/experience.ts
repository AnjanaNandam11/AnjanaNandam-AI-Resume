import fs from "fs";
import path from "path";

const EXPERIENCE_PATH = path.join(process.cwd(), "data", "experience.md");

export function getExperienceContent(): string {
  return fs.readFileSync(EXPERIENCE_PATH, "utf-8");
}

export function getExperienceSummary(): {
  name: string;
  skills: string[];
  currentRole: string;
} {
  const content = getExperienceContent();

  const nameMatch = content.match(/^#\s+(.+?)(?:\s+—|\s+-)/m);
  const name = nameMatch ? nameMatch[1].trim() : "Anjana";

  const skillsSection = content.match(
    /## Core Skills\n([\s\S]*?)(?=\n##|\n---)/
  );
  const skills = skillsSection
    ? skillsSection[1]
        .split("\n")
        .filter((line) => line.startsWith("- "))
        .map((line) => line.replace(/^-\s+/, "").trim())
    : [];

  const roleMatch = content.match(/###\s+([^—\n]+?)\s+—\s+([^\n(|]+)/);
  const currentRole = roleMatch
    ? `${roleMatch[1].trim()} at ${roleMatch[2].trim()}`
    : "Product Manager";

  return { name, skills, currentRole };
}
