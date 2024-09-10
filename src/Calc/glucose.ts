import { HealthCategory } from "../Data/types";

export function getGlucoseCategory(glucose: number, age: number) {
  const category: HealthCategory = {
    category: "",
    message: "",
    color: "",
    actionableRecommendations: [],
    "Link to reliable resources": [],
  };

  if (age < 1) {
    if (glucose >= 45 && glucose <= 96) {
      category.category = "Normal (Cord)";
      category.message =
        "Glucose levels are within the normal range for newborns (cord blood).";
      category.color = "green";
      category.actionableRecommendations = [
        "Ensure proper feeding to maintain stable glucose levels.",
        "Monitor glucose regularly in case of any fluctuations.",
      ];
      category["Link to reliable resources"] = [
        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5462044/",
        "https://www.healthline.com/health/newborn-low-blood-sugar",
      ];
    } else {
      category.category = "Abnormal (Cord)";
      category.message =
        "Glucose levels are outside the normal range for newborns.";
      category.color = "red";
      category.actionableRecommendations = [
        "Consult a pediatrician immediately.",
        "Monitor glucose levels and consider possible underlying conditions.",
      ];
      category["Link to reliable resources"] = [
        "https://www.cdc.gov/ncbddd/birthdefects/diabetes.html",
        "https://www.marchofdimes.org/complications/low-blood-sugar-hypoglycemia-in-newborns.aspx",
      ];
    }
  } else if (age >= 1 && age < 2) {
    if (glucose >= 60 && glucose <= 100) {
      category.category = "Normal (Child)";
      category.message =
        "Glucose levels are within the normal range for children under 2 years.";
      category.color = "green";
      category.actionableRecommendations = [
        "Maintain a balanced diet and regular feeding schedule.",
        "Monitor glucose levels regularly to prevent fluctuations.",
      ];
      category["Link to reliable resources"] = [
        "https://www.healthychildren.org/English/ages-stages/toddler/Pages/Toddler-Food-and-Feeding.aspx",
        "https://www.diabetes.org/diabetes/type-1/children-and-teens",
      ];
    } else {
      category.category = "Abnormal (Child)";
      category.message =
        "Glucose levels are outside the normal range for children under 2 years.";
      category.color = "red";
      category.actionableRecommendations = [
        "Consult a pediatric endocrinologist.",
        "Monitor glucose levels and seek further medical advice.",
      ];
      category["Link to reliable resources"] = [
        "https://www.niddk.nih.gov/health-information/endocrine-diseases/childhood-diabetes",
        "https://www.diabetes.org/diabetes/type-1/children-and-teens",
      ];
    }
  } else if (age >= 2 && age < 60) {
    if (glucose >= 70 && glucose <= 100) {
      category.category = "Normal (Fasting)";
      category.message =
        "Glucose levels are within the normal fasting range for adults.";
      category.color = "green";
      category.actionableRecommendations = [
        "Maintain a healthy diet and exercise regularly.",
        "Monitor fasting glucose levels periodically.",
      ];
      category["Link to reliable resources"] = [
        "https://www.cdc.gov/diabetes/managing/eat-well.html",
        "https://www.health.harvard.edu/diseases-and-conditions/maintaining-a-healthy-blood-sugar-level",
      ];
    } else if (glucose > 100 && glucose <= 125) {
      category.category = "Impaired Fasting Glucose";
      category.message =
        "Glucose levels suggest impaired fasting glucose. Consider monitoring.";
      category.color = "yellow";
      category.actionableRecommendations = [
        "Adopt a diet low in refined carbs and sugars.",
        "Increase physical activity to help regulate blood sugar levels.",
      ];
      category["Link to reliable resources"] = [
        "https://www.cdc.gov/diabetes/prevention/index.html",
        "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-type-2-diabetes",
      ];
    } else if (glucose > 125) {
      category.category = "Diabetes (Fasting)";
      category.message =
        "Glucose levels suggest diabetes. Consult a healthcare provider.";
      category.color = "red";
      category.actionableRecommendations = [
        "Seek medical treatment and manage diabetes through diet, medication, or insulin therapy.",
        "Regularly monitor blood glucose levels and maintain a balanced diet.",
      ];
      category["Link to reliable resources"] = [
        "https://www.diabetes.org/diabetes/type-2",
        "https://www.cdc.gov/diabetes/basics/diabetes.html",
      ];
    } else {
      category.category = "Hypoglycemia";
      category.message =
        "Glucose levels are too low. Immediate attention may be required.";
      category.color = "blue";
      category.actionableRecommendations = [
        "Consume fast-acting carbs like fruit juice or glucose tablets.",
        "Seek medical assistance if symptoms persist.",
      ];
      category["Link to reliable resources"] = [
        "https://www.cdc.gov/diabetes/basics/low-blood-sugar-treatment.html",
        "https://www.diabetes.org/diabetes/medication-management/blood-glucose-testing-and-control/hypoglycemia",
      ];
    }
  } else if (age >= 60 && age <= 90) {
    if (glucose >= 82 && glucose <= 115) {
      category.category = "Normal (Elderly 60-90)";
      category.message =
        "Glucose levels are within the normal range for elderly adults aged 60-90.";
      category.color = "green";
      category.actionableRecommendations = [
        "Maintain regular meals and snacks with balanced nutrients.",
        "Monitor glucose levels routinely, especially in case of medication changes.",
      ];
      category["Link to reliable resources"] = [
        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4205173/",
        "https://www.diabetes.org/diabetes/older-adults",
      ];
    } else if (glucose > 115 && glucose <= 125) {
      category.category = "Impaired Fasting Glucose (Elderly)";
      category.message =
        "Glucose levels suggest impaired fasting glucose. Monitoring is recommended.";
      category.color = "yellow";
      category.actionableRecommendations = [
        "Consider a low-carb diet to manage glucose levels.",
        "Consult a healthcare provider for possible treatment options.",
      ];
      category["Link to reliable resources"] = [
        "https://www.diabetes.org/diabetes/risk-test",
        "https://www.cdc.gov/diabetes/prevention/older-adults.html",
      ];
    } else {
      category.category = "Abnormal (Elderly)";
      category.message =
        "Glucose levels are abnormal for elderly adults. Consult a healthcare provider.";
      category.color = "red";
      category.actionableRecommendations = [
        "Seek medical attention and monitor glucose levels closely.",
        "Adopt a healthy diet and exercise routine suited for elderly individuals.",
      ];
      category["Link to reliable resources"] = [
        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4205173/",
        "https://www.cdc.gov/diabetes/managing/older-adults.html",
      ];
    }
  } else if (age > 90) {
    if (glucose >= 75 && glucose <= 121) {
      category.category = "Normal (Elderly >90)";
      category.message =
        "Glucose levels are within the normal range for elderly adults over 90.";
      category.color = "green";
      category.actionableRecommendations = [
        "Maintain regular meals and monitor glucose levels periodically.",
        "Stay physically active to help regulate blood sugar.",
      ];
      category["Link to reliable resources"] = [
        "https://www.cdc.gov/diabetes/managing/older-adults.html",
        "https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/in-depth/diabetes-management/art-20045803",
      ];
    } else if (glucose > 121 && glucose <= 140) {
      category.category = "Elevated (Elderly >90)";
      category.message =
        "Glucose levels are slightly elevated. Monitoring is recommended.";
      category.color = "yellow";
      category.actionableRecommendations = [
        "Adopt a low-carb, balanced diet and stay hydrated.",
        "Regularly monitor glucose levels to ensure stability.",
      ];
      category["Link to reliable resources"] = [
        "https://www.diabetes.org/diabetes/older-adults",
        "https://www.nhs.uk/conditions/type-2-diabetes/living-with/",
      ];
    } else {
      category.category = "Abnormal (Elderly >90)";
      category.message =
        "Glucose levels are abnormal. Consult a healthcare provider.";
      category.color = "red";
      category.actionableRecommendations = [
        "Seek medical attention immediately and monitor glucose levels closely.",
        "Consider any necessary lifestyle adjustments as advised by your doctor.",
      ];
      category["Link to reliable resources"] = [
        "https://www.diabetes.org/diabetes/older-adults",
        "https://www.cdc.gov/diabetes/managing/older-adults.html",
      ];
    }
  }

  return category;
}
