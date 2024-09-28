import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {/* Empowering Health Equity Through Data and Technology */}
            Empowering Communities Through Personalized Health Insights:
            Compare, Learn, and Act for Better Health Outcomes.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            At HealthDisparity AI, we believe that everyone deserves access to
            equitable healthcare. Our app provides essential tools to help you
            understand and navigate health disparities in your community.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#learn-more"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Learn more
              <svg
                className="w-3.5 h-3.5 ms-2 rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="learn-more" className="bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-8 py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <svg
              className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-3"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 41C6 41.5523 6.44772 42 7 42H41V40H8V35.3588L14.3519 27.6458C14.8545 27.8733 15.4124 28 16 28C17.3878 28 18.6106 27.2932 19.3279 26.22L24.0035 28.1681C24.0916 30.2993 25.8472 32 28 32C30.2091 32 32 30.2091 32 28C32 27.2166 31.7748 26.4858 31.3856 25.8688L36.3608 19.6498C36.861 19.8748 37.4159 20 38 20C40.2091 20 42 18.2091 42 16C42 13.7909 40.2091 12 38 12C35.7909 12 34 13.7909 34 16C34 16.9004 34.2975 17.7313 34.7995 18.3998L29.9251 24.4929C29.354 24.1787 28.6979 24 28 24C26.4456 24 25.0983 24.8866 24.4362 26.1817L19.9868 24.3278C19.9955 24.2197 20 24.1104 20 24C20 21.7909 18.2091 20 16 20C13.7909 20 12 21.7909 12 24C12 24.8968 12.2951 25.7247 12.7936 26.3919L8 32.2127V7H6V41ZM18 24C18 25.1046 17.1046 26 16 26C14.8954 26 14 25.1046 14 24C14 22.8954 14.8954 22 16 22C17.1046 22 18 22.8954 18 24ZM28 30C29.1046 30 30 29.1046 30 28C30 26.8954 29.1046 26 28 26C26.8954 26 26 26.8954 26 28C26 29.1046 26.8954 30 28 30ZM40 16C40 17.1046 39.1046 18 38 18C36.8954 18 36 17.1046 36 16C36 14.8954 36.8954 14 38 14C39.1046 14 40 14.8954 40 16Z"
                fill="currentColor"
              />
            </svg>

            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Health Disparity Analytics
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Gain insights into your health metrics and see how they compare to
              national and regional averages. Our dashboard pulls data from
              trusted sources to give you a clearer picture of your health
              landscape.
            </p>
            <Link
              to="/health-disparity-analytics"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Explore Now
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <svg
              className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-3"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26 33H29.5C36.4036 33 42 27.4036 42 20.5C42 13.5964 36.4036 8 29.5 8H18.5C11.5964 8 6 13.5964 6 20.5C6 28.4145 11.2167 33.2537 16.9239 36.2262C19.7585 37.7025 22.6136 38.6566 24.7728 39.2414C25.2149 39.3611 25.626 39.4649 26 39.5542V33ZM28 42C28 42 27.2439 41.8897 26 41.6077C20.2362 40.3007 4 35.305 4 20.5C4 12.4919 10.4919 6 18.5 6H29.5C37.5081 6 44 12.4919 44 20.5C44 28.5081 37.5081 35 29.5 35H28V42Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 22C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20C23.4477 20 23 20.4477 23 21C23 21.5523 23.4477 22 24 22ZM24 24C25.6569 24 27 22.6569 27 21C27 19.3431 25.6569 18 24 18C22.3431 18 21 19.3431 21 21C21 22.6569 22.3431 24 24 24Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32 22C32.5523 22 33 21.5523 33 21C33 20.4477 32.5523 20 32 20C31.4477 20 31 20.4477 31 21C31 21.5523 31.4477 22 32 22ZM32 24C33.6569 24 35 22.6569 35 21C35 19.3431 33.6569 18 32 18C30.3431 18 29 19.3431 29 21C29 22.6569 30.3431 24 32 24Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 22C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20C15.4477 20 15 20.4477 15 21C15 21.5523 15.4477 22 16 22ZM16 24C17.6569 24 19 22.6569 19 21C19 19.3431 17.6569 18 16 18C14.3431 18 13 19.3431 13 21C13 22.6569 14.3431 24 16 24Z"
                fill="currentColor"
              />
            </svg>

            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              AI Assistant for Personalized Recommendations
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Chat with our AI assistant for tailored health tips and guidance.
              From diet to exercise, get actionable advice designed to fit your
              unique needs, along with mental health support to enhance your
              overall well-being.
            </p>
            <Link
              to="/chat-with-bot"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Start Chatting
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <svg
              className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-3"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 30C19 30 17.5028 27.8981 17 28.0126C11.5958 29.2434 6 32.7946 6 36.5699V42H42V36.5699C42 32.7946 36.4042 29.2434 31 28.0126C30.4972 27.8981 29 30 29 30H25.6851C24.5662 30.0002 24.1388 30.0002 23.5481 30.0001C23.183 30 22.7556 30 22.0639 30H19ZM25.6851 32C25.685 32 25.6852 32 25.6851 32C24.5663 32.0002 24.1384 32.0002 23.5476 32.0001C23.1825 32 22.7551 32 22.0639 32H17.9691L17.371 31.1604L17.3612 31.1468L17.3211 31.0915C17.2849 31.0421 17.2314 30.9698 17.1652 30.8826C17.0309 30.7057 16.8534 30.4794 16.6686 30.2633C16.643 30.2333 16.618 30.2045 16.5938 30.1769C14.4092 30.7797 12.2703 31.7722 10.6523 32.9527C8.72972 34.3554 8 35.6669 8 36.5699V40H40V36.5699C40 35.6669 39.2703 34.3554 37.3477 32.9527C35.7297 31.7722 33.5908 30.7797 31.4062 30.1769C31.382 30.2045 31.357 30.2333 31.3314 30.2633C31.1466 30.4794 30.9691 30.7057 30.8348 30.8826C30.7686 30.9698 30.7151 31.0421 30.6789 31.0915L30.6388 31.1468L30.6298 31.1592L30.629 31.1604L30.0309 32H25.6851Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32 38V32H34V38H32Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36 36H30V34H36V36Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24ZM24 26C29.5228 26 34 21.5228 34 16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16C14 21.5228 18.4772 26 24 26Z"
                fill="currentColor"
              />
            </svg>

            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Culturally Competent Healthcare Provider Matching
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Find healthcare providers who understand your cultural background.
              Our prototype search tool connects you with specialists dedicated
              to providing culturally competent care, ensuring you receive the
              support you need.
            </p>
            <Link
              to="/search-healtcare-providers"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Search Providers
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <svg
              className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-3"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 24H20V18L24 18V14H30V18H34V24H30V28H24V24ZM22 22V20L26 20V16H28V20H32V22H28V26H26V22H22Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.9999 36C35.2842 36 41.9999 29.2843 41.9999 21C41.9999 12.7157 35.2842 6 26.9999 6C18.7156 6 11.9999 12.7157 11.9999 21C11.9999 24.7823 13.3998 28.2375 15.7096 30.876L13.8168 32.7689L11.1095 32.6479L4.58569 39.1716L8.82833 43.4143L15.3 36.9426L15.2956 34.1185L17.1239 32.2903C19.7624 34.6001 23.2177 36 26.9999 36ZM26.9999 34C34.1796 34 39.9999 28.1797 39.9999 21C39.9999 13.8203 34.1796 8 26.9999 8C19.8202 8 13.9999 13.8203 13.9999 21C13.9999 28.1797 19.8202 34 26.9999 34ZM8.82833 40.5858L7.41412 39.1716L11.9005 34.6852L13.2966 34.7477L13.2987 36.1155L8.82833 40.5858Z"
                fill="currentColor"
              />
            </svg>
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Social Determinants of Health Tracker
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              Track non-medical factors that affect your health, such as access
              to healthy foods or safe housing. Receive personalized
              recommendations on community resources like grants, local urban
              farms, and more.
            </p>
            <Link
              to="/social-determinants-of-health"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Start Tracking{" "}
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
