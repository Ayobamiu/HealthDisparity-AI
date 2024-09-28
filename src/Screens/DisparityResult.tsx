import { useEffect, useState } from "react";
import {
  getQueryParam,
  setQueryParam,
} from "../serverless/functions/querySearch";
import { getHealthInsights } from "../serverless/backend/apis";
import { Spin } from "antd";
import { createUserData } from "../serverless/firebase/app";
import { getUserData } from "../serverless/firebase/app";
import { useAuth } from "../Context/AuthContext";
import { createHealthData } from "../serverless/firebase/app";
import { getHealthData } from "../serverless/firebase/app";
import { Card, Tag, Progress, List, Button } from "antd";
import { HealthData, MetricData, ThreadEnum, UserData } from "../Data/types";
import { LinkOutlined } from "@ant-design/icons";
import { MedicineBoxOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ChatDrawer from "../Components/ChatDrawer";

export default function DisparityResult() {
  const needsToBeSaved = getQueryParam("needsToBeSaved") === "on";

  const { user } = useAuth();
  const [aiData, setAiData] = useState<HealthData>();
  const [loadingHealthData, setLoadingHealthData] = useState(false);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const userEmail = user?.email;

  useEffect(() => {
    setQueryParam("auto_search", "");
    const age = getQueryParam("age");
    const gender = getQueryParam("gender");
    const state = getQueryParam("state");
    const city = getQueryParam("city");
    const ethnicity = getQueryParam("ethnicity");
    const bloodPressure = getQueryParam("bloodPressure");
    const glucose = getQueryParam("glucose");
    const bmi = getQueryParam("bmi");
    const userData: UserData = {
      age: age || "",
      gender: gender || "",
      state: state || "",
      city: city || "",
      ethnicity: ethnicity || "",
      bloodPressure: bloodPressure || "",
      glucose: glucose || "",
      bmi: bmi || "",
    };

    (async () => {
      setLoadingHealthData(true);
      setLoadingUserData(true);

      const existingHealthData = userEmail
        ? await getHealthData(userEmail)
        : null;
      const existingUserData = userEmail ? await getUserData(userEmail) : null;

      if ((!existingUserData || needsToBeSaved) && userEmail) {
        // update user data in database
        setLoadingUserData(true);
        await createUserData(userEmail, userData)
          .then(() => {
            setQueryParam("needsToBeSaved", "off"); // this indicate that if user reloads the page, data should not be updated
          })
          .finally(() => {
            setLoadingUserData(false);
          });
      } else {
        setLoadingUserData(false);
      }
      if (existingHealthData) {
        setAiData(existingHealthData);
        setLoadingHealthData(false);
      } else {
        await getHealthInsights(userData)
          .then(async (response) => {
            if (response) {
              setAiData(response);
              if (userEmail) {
                await createHealthData(userEmail, response);
              }
            }
          })
          .finally(() => {
            setLoadingHealthData(false);
          });
      }
    })();
  }, [user]);

  return (
    <div>
      <div id="disparitiesResult" className="min-h-screen bg-gray-100">
        <Spin spinning={loadingHealthData || loadingUserData} />
        <div className="p-8 max-w-5xl mx-auto">
          {aiData && <HealthDashboard data={aiData} />}
        </div>
      </div>
    </div>
  );
}

const HealthDashboard: React.FC<{ data: HealthData }> = ({ data }) => {
  const { bloodPressure, glucose, bmi, additionalResources } = data;

  const renderMetricCard = (metric: MetricData, title: string) => (
    <Card title={title} bordered={false} style={{ marginBottom: 20 }}>
      <p>{metric.explanation}</p>
      <p>{metric.comparison}</p>
      <p>
        <Tag color={metric.primaryColor}>{metric.category}</Tag>{" "}
        {metric.visualIndicators}
      </p>
      <Progress
        percent={(metric.userValue / metric.nationalAverage) * 100}
        format={() =>
          `${metric.userValue} (National: ${metric.nationalAverage})`
        }
        status={metric.userValue > metric.nationalAverage ? "active" : "normal"}
        strokeColor={metric.primaryColor}
      />
      <p>
        <strong>Recommendation:</strong> {metric.recommendation}
      </p>
    </Card>
  );

  return (
    <div style={{ padding: "20px" }}>
      {renderMetricCard(bloodPressure, "Blood Pressure")}
      {renderMetricCard(glucose, "Blood Glucose")}
      {renderMetricCard(bmi, "BMI")}

      <Card title="Additional Resources" bordered={false}>
        <List
          dataSource={additionalResources}
          renderItem={(resource) => (
            <List.Item>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                <LinkOutlined /> {resource.title}
              </a>
            </List.Item>
          )}
        />
      </Card>
      <div className="flex justify-between">
        <ChatDrawer type={ThreadEnum.DISPARITY} />
        <Link to="/health-data">
          <Button
            color="default"
            icon={<MedicineBoxOutlined />}
            onClick={() => {}}
            style={{ marginTop: 20 }}
          >
            View your health data
          </Button>
        </Link>
      </div>
    </div>
  );
};
