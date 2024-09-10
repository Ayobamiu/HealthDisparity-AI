import { HealthCategory } from "../Data/types";

export function getBMICategory(bmi: number) {
  const category: HealthCategory = {
    category: "",
    message: "",
    color: "",
    actionableRecommendations: [],
    "Link to reliable resources": [],
  };

  if (bmi < 18.5) {
    category.category = "Underweight";
    category.message =
      "Your BMI is below 18.5, which is considered underweight. You may need to focus on gaining weight in a healthy way.";
    category.color = "blue";
    category.actionableRecommendations = [
      "Increase calorie intake with nutritious foods.",
      "Consult a healthcare provider or dietitian for a tailored meal plan.",
      "Include more protein and healthy fats in your diet.",
    ];
    category["Link to reliable resources"] = [
      "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      "https://www.nhs.uk/live-well/healthy-weight/advice-for-underweight-adults/",
    ];
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category.category = "Healthy";
    category.message =
      "Your BMI is within the healthy range. Maintain a balanced diet and regular physical activity.";
    category.color = "green";
    category.actionableRecommendations = [
      "Continue with a balanced diet rich in fruits, vegetables, and whole grains.",
      "Exercise regularly to maintain your current health status.",
      "Stay hydrated and get regular check-ups.",
    ];
    category["Link to reliable resources"] = [
      "https://www.cdc.gov/healthyweight/healthy_eating/index.html",
      "https://www.who.int/health-topics/healthy-diet",
    ];
  } else if (bmi >= 25 && bmi <= 29.9) {
    category.category = "Overweight";
    category.message =
      "Your BMI is between 25 and 29.9, which is considered overweight. It’s important to focus on weight management.";
    category.color = "yellow";
    category.actionableRecommendations = [
      "Adopt a calorie-controlled diet with more plant-based foods.",
      "Incorporate physical activities like walking or cycling into your daily routine.",
      "Track your progress and consult a healthcare provider for personalized advice.",
    ];
    category["Link to reliable resources"] = [
      "https://www.cdc.gov/healthyweight/losing_weight/index.html",
      "https://www.nhs.uk/live-well/healthy-weight/start-the-nhs-weight-loss-plan/",
    ];
  } else if (bmi >= 30 && bmi <= 39.9) {
    category.category = "Obesity";
    category.message =
      "Your BMI is between 30 and 39.9, indicating obesity. You should seek advice on how to reduce weight for better health.";
    category.color = "orange";
    category.actionableRecommendations = [
      "Follow a structured weight loss plan with reduced calories and increased physical activity.",
      "Consider joining a weight loss support group or program.",
      "Consult a doctor or dietitian for medical guidance.",
    ];
    category["Link to reliable resources"] = [
      "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
      "https://www.cdc.gov/obesity/index.html",
    ];
  } else if (bmi >= 40) {
    category.category = "Severe Obesity";
    category.message =
      "Your BMI is 40 or above, classified as severe obesity. You should seek medical advice immediately.";
    category.color = "red";
    category.actionableRecommendations = [
      "Consult a healthcare provider for a tailored weight management plan.",
      "Consider lifestyle changes such as structured exercise and a monitored diet.",
      "Explore medical interventions if recommended by a doctor.",
    ];
    category["Link to reliable resources"] = [
      "https://www.mayoclinic.org/diseases-conditions/obesity/symptoms-causes/syc-20375742",
      "https://www.nhs.uk/conditions/obesity/",
    ];
  }

  return category;
}
