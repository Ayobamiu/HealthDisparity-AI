import { HealthCategory } from "../Data/types";

export function calculateBloodPressureCategory(
  systolic: number,
  diastolic: number
) {
  let category: HealthCategory = {
    category: "",
    color: "",
    message: "",
    actionableRecommendations: [],
    "Link to reliable resources": [],
  };

  // Normal
  if (systolic < 120 && diastolic < 80) {
    category = {
      category: "NORMAL",
      message: "Your blood pressure is within the normal range.",
      color: "#28a745",
      actionableRecommendations: [
        "Maintain a healthy lifestyle with balanced meals and regular exercise.",
        "Monitor your blood pressure regularly to ensure it remains within the normal range.",
      ],
      "Link to reliable resources": [
        "https://www.heart.org/en/healthy-living/healthy-lifestyle/lifes-essential-8",
        "https://www.cdc.gov/bloodpressure/about.htm",
      ],
    };
  }
  // Elevated
  else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
    category = {
      category: "ELEVATED",
      message:
        "Your blood pressure is elevated. Consider lifestyle changes to avoid progression to hypertension.",
      color: "#ffc107",
      actionableRecommendations: [
        "Reduce sodium intake and eat a heart-healthy diet.",
        "Increase physical activity and maintain a healthy weight.",
        "Reduce stress through relaxation techniques such as yoga or meditation.",
      ],
      "Link to reliable resources": [
        "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/in-depth/high-blood-pressure/art-20046974",
        "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure",
      ],
    };
  }
  // Hypertension Stage 1
  else if (
    (systolic >= 130 && systolic <= 139) ||
    (diastolic >= 80 && diastolic <= 89)
  ) {
    category = {
      category: "HIGH BLOOD PRESSURE (HYPERTENSION) STAGE 1",
      message:
        "You are in Hypertension Stage 1. It's advisable to consult a healthcare provider.",
      color: "#fd7e14",
      actionableRecommendations: [
        "Consult your doctor for possible medication or lifestyle interventions.",
        "Adopt a low-sodium diet rich in fruits and vegetables.",
        "Engage in regular aerobic exercise, such as walking or cycling.",
      ],
      "Link to reliable resources": [
        "https://www.who.int/news-room/fact-sheets/detail/hypertension",
        "https://www.nhlbi.nih.gov/health-topics/high-blood-pressure",
      ],
    };
  }
  // Hypertension Stage 2
  else if (systolic >= 140 || diastolic >= 90) {
    category = {
      category: "HIGH BLOOD PRESSURE (HYPERTENSION) STAGE 2",
      message:
        "You are in Hypertension Stage 2. Consult your doctor for a treatment plan.",
      color: "#dc3545",
      actionableRecommendations: [
        "Consult a healthcare provider immediately to discuss medication.",
        "Follow a heart-healthy diet and reduce alcohol consumption.",
        "Engage in regular physical activity under your doctor's guidance.",
      ],
      "Link to reliable resources": [
        "https://www.cdc.gov/bloodpressure/about.htm",
        "https://www.heart.org/en/health-topics/high-blood-pressure",
      ],
    };
  }
  // Hypertensive Crisis
  else if (systolic > 180 || diastolic > 120) {
    category = {
      category: "HYPERTENSIVE CRISIS",
      message: "Hypertensive Crisis. Seek immediate medical attention.",
      color: "#721c24",
      actionableRecommendations: [
        "Seek emergency medical care immediately.",
        "Follow your doctor's prescribed treatment for managing blood pressure.",
        "Monitor blood pressure regularly to avoid future crises.",
      ],
      "Link to reliable resources": [
        "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings",
        "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/expert-answers/hypertensive-crisis/faq-20058591",
      ],
    };
  }

  return category;
}
