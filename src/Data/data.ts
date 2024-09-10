export const contextualExplanationsAndInsights = {
  "Blood Pressure": {
    contextualExplanations:
      "Blood pressure is measured using systolic and diastolic readings. Systolic measures the pressure in your arteries when your heart beats, and diastolic measures the pressure in your arteries when your heart is resting between beats. A normal reading is below 120/80 mmHg. Elevated blood pressure can increase the risk of heart disease and stroke.",
    healthy: {
      description:
        "Your blood pressure is within the normal range, which is below 120/80 mmHg. This is ideal for maintaining heart health.",
      actionableRecommendations: [
        "Continue maintaining a healthy diet and regular exercise to keep your blood pressure in a healthy range.",
      ],
      "Link to reliable resources": [
        "https://www.cdc.gov/bloodpressure/about.htm",
        "https://www.heart.org/en/health-topics/high-blood-pressure",
      ],
    },
    borderline: {
      description:
        "Your blood pressure is slightly above normal, between 120/80 mmHg and 130/80 mmHg. This is considered elevated and may progress to hypertension if not managed.",
      actionableRecommendations: [
        "Monitor your blood pressure regularly.",
        "Reduce sodium intake and incorporate physical activity into your routine.",
      ],
      "Link to reliable resources": [
        "https://www.cdc.gov/bloodpressure/measure.htm",
        "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410",
      ],
    },
    risky: {
      description:
        "Your blood pressure is higher than 130/80 mmHg. This increases your risk of heart disease, stroke, and other complications. Consult a healthcare provider for guidance.",
      actionableRecommendations: [
        "Consult with your doctor for a personalized plan to manage your blood pressure.",
        "Adopt heart-healthy habits like reducing stress and avoiding smoking.",
      ],
      "Link to reliable resources": [
        "https://www.who.int/news-room/fact-sheets/detail/hypertension",
        "https://www.heart.org/en/health-topics/high-blood-pressure/why-high-blood-pressure-is-a-silent-killer",
      ],
    },
  },
  BMI: {
    contextualExplanations:
      "Body Mass Index (BMI) is a measure of body fat based on height and weight. A healthy BMI falls between 18.5 and 24.9. However, BMI may not account for muscle mass, so it's important to use it alongside other health indicators.",
    healthy: {
      description:
        "Your BMI is in the healthy range, indicating that your weight is likely appropriate for your height.",
      actionableRecommendations: [
        "Maintain a balanced diet and regular physical activity to keep your BMI in a healthy range.",
      ],
      "Link to reliable resources": [
        "https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html",
        "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
      ],
    },
    borderline: {
      description:
        "Your BMI is slightly above the normal range (25-29.9), which is considered overweight. This may increase your risk for conditions like heart disease and diabetes.",
      actionableRecommendations: [
        "Incorporate more physical activity and make dietary adjustments to help manage your weight.",
        "Consult with a healthcare provider to create a weight management plan.",
      ],
      "Link to reliable resources": [
        "https://www.nhs.uk/live-well/healthy-weight/bmi-calculator/",
        "https://www.cdc.gov/obesity/adult/defining.html",
      ],
    },
    risky: {
      description:
        "Your BMI indicates that you are in the obese range (30 or higher), which puts you at risk for conditions such as diabetes, heart disease, and certain cancers.",
      actionableRecommendations: [
        "Consult a healthcare provider to develop a comprehensive plan to manage your weight.",
        "Incorporate physical activity into your routine and consider working with a dietitian for dietary guidance.",
      ],
      "Link to reliable resources": [
        "https://www.nhs.uk/conditions/obesity/",
        "https://www.cdc.gov/obesity/basics.html",
      ],
    },
  },
  "Blood Glucose": {
    contextualExplanations:
      "Blood glucose (blood sugar) levels reflect how much sugar is in your bloodstream. A normal fasting blood glucose level is between 70-99 mg/dL. Elevated blood glucose can indicate a risk for prediabetes or diabetes.",
    healthy: {
      description:
        "Your blood glucose levels are within the normal range, which is less than 100 mg/dL when fasting.",
      actionableRecommendations: [
        "Maintain a balanced diet, rich in whole grains, vegetables, and lean protein to keep your glucose levels stable.",
      ],
      "Link to reliable resources": [
        "https://www.diabetes.org/diabetes-risk/prediabetes",
        "https://www.cdc.gov/diabetes/basics/index.html",
      ],
    },
    borderline: {
      description:
        "Your blood glucose is elevated, falling between 100-125 mg/dL. This indicates a risk of prediabetes, which can progress to type 2 diabetes if not managed.",
      actionableRecommendations: [
        "Incorporate more fiber and reduce sugar intake in your diet.",
        "Engage in regular physical activity to help manage blood sugar levels.",
      ],
      "Link to reliable resources": [
        "https://www.cdc.gov/diabetes/basics/prediabetes.html",
        "https://www.mayoclinic.org/diseases-conditions/prediabetes/symptoms-causes/syc-20355278",
      ],
    },
    risky: {
      description:
        "Your blood glucose levels are higher than 126 mg/dL, which may indicate diabetes. It's important to consult with a healthcare provider for diagnosis and treatment options.",
      actionableRecommendations: [
        "Consult a doctor immediately for further tests and guidance.",
        "Adopt a low-sugar, low-carb diet and engage in regular exercise.",
      ],
      "Link to reliable resources": [
        "https://www.who.int/news-room/fact-sheets/detail/diabetes",
        "https://www.diabetes.org/diabetes/type-2",
      ],
    },
  },
};
