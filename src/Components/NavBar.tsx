import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignInForm from "./SignInForm";
import { MenuProps } from "antd";
export default function NavBar() {
  const location = useLocation();
  enum locations {
    "home" = "/",
    "disparity-analytics" = "/health-disparity-analytics",
    "search-healtcare-providers" = "/search-healtcare-providers",
    "social-determinants-of-health" = "/social-determinants-of-health",
    "/chat-with-bot" = "/chat-with-bot",
    "/disparity-result" = "/disparity-result",
  }

  const [cureentLocation, setCureentLocation] = useState<locations>(
    locations.home
  );
  React.useEffect(() => {
    switch (window.location.pathname) {
      case "/health-disparity-analytics":
        setCureentLocation(locations["disparity-analytics"]);
        break;
      case "/search-healtcare-providers":
        setCureentLocation(locations["search-healtcare-providers"]);
        break;
      case "/social-determinants-of-health":
        setCureentLocation(locations["social-determinants-of-health"]);
        break;

      default:
        break;
    }
  }, [location]);

  function linkClassName(name: locations) {
    if (name === cureentLocation)
      return "font-medium text-blue-500 focus:outline-none";
    return "font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500";
  }

  const items: MenuProps["items"] = [
    {
      label: (
        <Link
          to="/health-disparity-analytics"
          className={linkClassName(locations["disparity-analytics"])}
          aria-current="page"
        >
          Health Disparity Analytics
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          to="/social-determinants-of-health"
          className={linkClassName(locations["social-determinants-of-health"])}
        >
          Community Resources
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link
          to="/search-healtcare-providers"
          className={linkClassName(locations["search-healtcare-providers"])}
        >
          Healthcare Providers
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm p-4 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <Link
          to="/"
          className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
          aria-label="Brand"
        >
          HealthDisparity AI
        </Link>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <Link
            to="/chat-with-bot"
            className={linkClassName(locations["disparity-analytics"])}
            aria-current="page"
          >
            Chat with AI Health Assistant
          </Link>
          <Link
            to="/health-disparity-analytics"
            className={linkClassName(locations["disparity-analytics"])}
            aria-current="page"
          >
            Health Disparity Analytics
          </Link>
          <Link
            to="/search-healtcare-providers"
            className={linkClassName(locations["search-healtcare-providers"])}
          >
            Healthcare Providers
          </Link>
          <Link
            to="/social-determinants-of-health"
            className={linkClassName(
              locations["social-determinants-of-health"]
            )}
          >
            Community Resources
          </Link>
          {/* <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className=" text-black  dark:text-gray-400 font-medium">
                  Services
                </div>
                <DownOutlined className=" text-black  dark:text-gray-400 font-medium" />
              </Space>
            </a>
          </Dropdown> */}
          <SignInForm />
        </div>
      </nav>
    </header>
  );
}
