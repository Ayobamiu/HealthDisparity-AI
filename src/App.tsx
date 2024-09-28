import "./App.css";
import HealthcareSearch from "./Screens/HealthCareSearch";

import HealthDisparityForm from "./Screens/HealthDisparityForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocialDeterminantsForm from "./Screens/SocialDeterminantsForm";
import NavBar from "./Components/NavBar";
import Homepage from "./Screens/Homepage";
import { AuthProvider } from "./Context/AuthContext";
import { ThreadProvider } from "./Context/ThreadContext";
import DisparityResult from "./Screens/DisparityResult";
import ChatWithBotScreen from "./Screens/ChatWithBotScreen";
import ResourceRecommendations from "./Screens/ResourceRecommendations";
import Footer from "./Components/Footer";
import UserDataScreen from "./Screens/UserDataScreen";

function App() {
  return (
    <AuthProvider>
      <ThreadProvider>
        <BrowserRouter basename="/">
          <NavBar />
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/chat-with-bot" Component={ChatWithBotScreen} />
            <Route path="/health-data" Component={UserDataScreen} />
            <Route
              path="/health-disparity-analytics"
              Component={HealthDisparityForm}
            />
            <Route
              path="/resource-recommendations"
              Component={ResourceRecommendations}
            />
            <Route path="/disparity-result" Component={DisparityResult} />
            <Route
              path="/search-healtcare-providers"
              Component={HealthcareSearch}
            />
            <Route
              path="/social-determinants-of-health"
              Component={SocialDeterminantsForm}
            />
            {/* <Route path="/health-tracking" Component={HealthTracking} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThreadProvider>
    </AuthProvider>
  );
}

export default App;
