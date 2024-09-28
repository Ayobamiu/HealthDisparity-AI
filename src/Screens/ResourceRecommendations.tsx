import React, { useEffect, useState } from "react";
import {
  getQueryParam,
  setQueryParam,
} from "../serverless/functions/querySearch";
import { getResourcesRecommendations } from "../serverless/backend/apis";
import { RecommendationsAndTrends, UserInput } from "../Data/types";
import { Spin, Card, Button, Tabs } from "antd";
import { Determinants } from "../Data/types";
import { Line } from "@ant-design/charts";

import { DeterminantsTrends } from "../Data/types";
import {
  FaLeaf,
  FaHome,
  FaBriefcase,
  FaBus,
  FaStethoscope,
  FaBook,
  FaUsers,
  FaShieldAlt,
  FaWifi,
} from "react-icons/fa";
const { TabPane } = Tabs;

export default function ResourceRecommendations() {
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<RecommendationsAndTrends>();

  useEffect(() => {
    setQueryParam("auto_search", "");
    const state = getQueryParam("state");
    const city = getQueryParam("city");
    const employmentStatus = getQueryParam("employmentStatus");
    const incomeLevel = getQueryParam("incomeLevel");
    const foodAccess = getQueryParam("foodAccess");
    const transportation = getQueryParam("transportation");
    const housingAccess = getQueryParam("housingAccess");
    const educationAccess = getQueryParam("educationAccess");
    const healthcareAccess = getQueryParam("healthcareAccess");
    const socialSupport = getQueryParam("socialSupport");
    const safetyInNeighborhood = getQueryParam("safetyInNeighborhood");
    const digitalAccess = getQueryParam("digitalAccess");

    const data: UserInput = {
      state: state || "",
      city: city || "",
      employmentStatus: employmentStatus || "",
      incomeLevel: incomeLevel || "",
      foodAccess: foodAccess === "on",
      transportation: transportation === "on",
      housingAccess: housingAccess === "on",
      educationAccess: educationAccess === "on",
      healthcareAccess: healthcareAccess === "on",
      socialSupport: socialSupport === "on",
      safetyInNeighborhood: safetyInNeighborhood === "on",
      digitalAccess: digitalAccess === "on",
    };

    (async () => {
      setLoading(true);
      const response = await getResourcesRecommendations(data).finally(() => {
        setLoading(false);
      });
      if (response) {
        setAiData(response);
      }
    })();
  }, []);

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Health and Social Support Dashboard
        </h1>
        <Spin spinning={loading} />
        {aiData && (
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <h2 className="text-2xl mb-4">Trends</h2>
              <TrendDisplay trends={aiData.trends} />
            </div>

            <div className="col-span-1">
              <div className="flex justify-between">
                <h2 className="text-2xl mb-4">Recommendations</h2>

                <a
                  href="https://www.findhelp.org/"
                  target="_blank"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Get more help ↗
                </a>
              </div>
              <RecommendationDisplay recommendations={aiData.recommendations} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const RecommendationDisplay: React.FC<{ recommendations: Determinants }> = ({
  recommendations,
}) => {
  const icons = {
    foodAccess: <FaLeaf />,
    housingAccess: <FaHome />,
    employmentSupport: <FaBriefcase />,
    transportation: <FaBus />,
    healthcareAccess: <FaStethoscope />,
    educationAccess: <FaBook />,
    socialSupport: <FaUsers />,
    safetyInNeighborhood: <FaShieldAlt />,
    digitalAccess: <FaWifi />,
  };

  return (
    <div>
      {Object.entries(recommendations).map(([key, rec]) => (
        <Card
          styles={{ title: { textTransform: "capitalize" } }}
          title={key.replace(/([A-Z])/g, " $1")}
          key={key}
          className="mb-4"
        >
          <div className="flex items-center mb-2">
            <div className="text-2xl mr-4">
              {icons[key as keyof typeof icons]}
            </div>
            <div>{rec.suggestion}</div>
          </div>
          <div className="flex flex-wrap">
            {rec.resourceLinks.map((link: any, index: number) => (
              <Button
                key={index}
                href={link.url}
                target="_blank"
                size="small"
                className="mr-2 mb-2"
              >
                {link.title}
              </Button>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

const TrendDisplay: React.FC<{ trends: DeterminantsTrends }> = ({ trends }) => {
  const renderTrendChart = (trend: any) => {
    const data = Object.entries(trend.past6Months).map(([month, value]) => ({
      month,
      value,
    }));

    const config = {
      data,
      xField: "month",
      yField: "value",
      point: { size: 5, shape: "diamond" },
      lineStyle: { stroke: "#5B8FF9", lineWidth: 2 },
    };

    return (
      <>
        <Line {...config} />
        <p>Average Trend: {trend.averageTrend}</p>
      </>
    );
  };

  return (
    <Tabs defaultActiveKey="1">
      {Object.entries(trends).map(([key, trend]) => (
        <TabPane tab={key.replace(/([A-Z])/g, " $1")} key={key}>
          {renderTrendChart(trend)}
        </TabPane>
      ))}
    </Tabs>
  );
};
