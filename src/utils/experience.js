/**
 * Dynamic calculation of engineering years of experience.
 * Career start: 2020 (6+ years as of 2026, automatically increments yearly).
 */
export const CAREER_START_YEAR = 2020;

export const getYearsOfExperience = () => {
  const currentYear = new Date().getFullYear();
  return Math.max(currentYear - CAREER_START_YEAR, 6);
};

export const getFormattedYearsOfExperience = () => {
  const years = getYearsOfExperience();
  return String(years).padStart(2, "0");
};
