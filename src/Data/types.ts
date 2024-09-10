export type HealthCategory = {
  category: string;
  message: string;
  color: string;
  actionableRecommendations: string[];
  "Link to reliable resources": string[];
};
export const empytyCategory: HealthCategory = {
  category: "",
  color: "",
  message: "",
  "Link to reliable resources": [],
  actionableRecommendations: [],
};
