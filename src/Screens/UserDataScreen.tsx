import { useEffect, useState } from "react";
import { Button, Card, Descriptions, Empty, Spin } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { UserData } from "../Data/types";
import { getUserData } from "../serverless/firebase/app";
import SignInForm from "../Components/SignInForm";

export default function UserDataScreen() {
  const { user } = useAuth();
  const [findingExistingDoc, setFindingExistingDoc] = useState(false);
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const userEmail = user?.email;
    if (userEmail) {
      (async () => {
        setFindingExistingDoc(true);
        const existingData = await getUserData(userEmail);
        //yes?
        if (existingData) {
          setUserData(existingData);
        }
        setFindingExistingDoc(false);
      })();
    }
  }, [user]);

  if (!user)
    return (
      <div className="w-full flex items-center justify-center m-8 min-h-[50vh]">
        <SignInForm title="Sign In to get started" />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8 max-w-5xl mx-auto">
        <div className="w-full flex justify-center">
          <Spin className="m-8" spinning={findingExistingDoc} />
        </div>

        {!userData && !findingExistingDoc && <Empty description="No data" />}
        {userData && (
          <Card
            title="User Health Data"
            extra={
              <Link to="/health-disparity-analytics?editmode=on">
                <Button>Update your data</Button>
              </Link>
            }
            bordered={false}
            style={{ width: "100%" }}
          >
            <Descriptions bordered column={1} size="small">
              <Descriptions.Item label="Age">{userData.age}</Descriptions.Item>
              <Descriptions.Item label="Gender">
                {userData.gender}
              </Descriptions.Item>
              <Descriptions.Item label="State">
                {userData.state}
              </Descriptions.Item>
              <Descriptions.Item label="City">
                {userData.city}
              </Descriptions.Item>
              <Descriptions.Item label="Ethnicity">
                {userData.ethnicity}
              </Descriptions.Item>
              <Descriptions.Item label="Blood Pressure">
                {userData.bloodPressure}
              </Descriptions.Item>
              <Descriptions.Item label="Glucose Level">
                {userData.glucose}
              </Descriptions.Item>
              <Descriptions.Item label="BMI">{userData.bmi}</Descriptions.Item>
            </Descriptions>
          </Card>
        )}
      </div>
    </div>
  );
}
