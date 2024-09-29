## Inspiration

My inspiration for the HealthDisparity AI project stemmed from a personal health crisis I faced last summer without insurance, which made accessing quality healthcare incredibly challenging. This experience changed dramatically when I discovered [**Helping Hands Wellness Center**](https://www.helpinghandsmedicine.com/wellness-center), a facility that provides free medical resources to break the cycle of generational poverty. Their support opened my eyes to the critical issue of healthcare accessibility.

Upon returning home, my roommate—who is also an international student from Pakistan—fell ill and struggled to find affordable healthcare. Together, we realized that many international students encounter similar obstacles, not just with healthcare but also with access to food and transportation. This reality inspired me to create a project that would raise awareness of available free resources to address various social determinants of health.

## What it does

HealthDisparity AI is a platform designed to assist individuals, particularly from underrepresented communities, in accessing essential healthcare resources and insights. The project provides:

1. **Health Disparity Analytics**: Users can gain valuable insights into their health metrics by comparing them to national and regional averages. Our dashboard aggregates data from trusted sources, offering a clearer picture of individual health landscapes and highlighting areas for improvement.

2. **AI Assistant for Personalized Recommendations**: Chat with our AI assistant to receive tailored health tips and guidance. From dietary suggestions to exercise routines, users can access actionable advice designed to fit their unique needs. The assistant also offers mental health support, promoting overall well-being.

3. **Culturally Competent Healthcare Provider Matching**: Users can find healthcare providers who understand and respect their cultural backgrounds. Our search tool connects individuals with specialists committed to providing culturally competent care, ensuring they receive appropriate support tailored to their needs.

4. **Social Determinants of Health Tracker**: This feature allows users to monitor non-medical factors affecting their health, such as access to nutritious food or safe housing. The platform provides personalized recommendations for community resources, including grants, local urban farms, and other support services that can enhance their well-being.

## How we built it

I designed the project to be simple and intuitive, prioritizing accessibility. Here’s a breakdown of the technology stack utilized:

- **Frontend**: Developed using **React**, with design components from **Ant Design** and **Flowbite** for a streamlined user experience.
- **Backend**: The server-side is powered by **Node.js** and **ExpressJS**, managing API requests and facilitating component interactions.
- **Database and Authentication**: Integrated **Firebase** for real-time database management and secure user authentication.
- **Deployment:** The frontend is hosted on **Vercel**, and the backend hosted is on **Glitch** providing fast and reliable deployment solutions.
- **AI Assistant**: Utilized the **OpenAI API** to power the AI Health Assistant and provide health insights and resource recommendations.
- **Validation**: Used **Zod** for input validation and error handling.
- **Security**: Implemented **Helmet** and **CORS** for enhanced security.
- **OpenAI Model**: Selected the **gpt-4o-2024-08-06** model, which supports Structured Outputs essential for the `getResourcesRecommendations` and `getHealthInsights` functions.

## Challenges we ran into

One of the main challenges was sourcing reliable data for wellness centers and resources offering free assistance. Additionally, ensuring that the AI assistant provides relevant and culturally sensitive information for users from diverse backgrounds proved to be another challenge.

## Accomplishments that we're proud of

I successfully integrated various data sources, allowing the platform to deliver accurate health insights and connect users with culturally competent healthcare providers. The AI Health Assistant has effectively improved user interactions, making it easier for individuals to articulate their health concerns.

## What we learned

Throughout this project, I discovered that many individuals, especially from underrepresented communities, are often unaware of the wealth of resources available to them. Additionally, I learned the importance of making these resources easily accessible and comprehensible. Integrating the AI Health Assistant allowed users to better articulate their health issues, which ultimately helps them receive more relevant support.

## What's next for HealthDisparity AI

Moving forward, I plan to enhance the AI Health Assistant's capabilities by refining its ability to provide more nuanced and culturally sensitive responses. I also aim to expand the dataset sources and partnerships with wellness centers and community organizations to improve resource availability. Ultimately, the goal is to create a robust platform that not only connects users to healthcare services but also empowers them with the knowledge to navigate their health journeys effectively.
