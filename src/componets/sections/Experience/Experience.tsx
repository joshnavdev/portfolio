import { Timeline } from 'flowbite-react';
import TimelineItem, { ITimelineItemProps } from '../../TimelineItem/TimelineItem';

const jobs: ITimelineItemProps[] = [
  {
    id: 'globant',
    business: 'Globant',
    period: 'Jun 2022 - Present',
    projects: [
      {
        id: 'tada',
        name: '@TaDa',
        role: 'NodeJS Backend Developer',
        period: 'Aug 2022 - Feb 2023',
        responsibilities: [
          'Joshua develops applications as backend and/or frontend with good practices using clean architecture and clean code practices.',
          'Develops backend applications with Apollo GraphQL to handle data from Ecommerce platforms like Shopify and VTEX and expose in a simple way to the mobile client.',
          'Makes requests of the Ecommerce platforms API like Shopify and VTEX and knowledge to use the platforms.',
          'Makes unit, integration and e2e tests (TDD) in order to code scalable systems with high code coverage using JestJS.',
          'Solves business problems according to their needs and proposes the best solution.',
          'Develops real time application using Socket.IO.',
          'Has great knowledge in frontend development with JavaScript or Typescript using React. ',
        ],
      },
    ],
  },
  {
    id: 'bbva',
    business: 'BBVA',
    period: 'Sep 2019 - Jun 2022',
    projects: [
      {
        id: 'bbva',
        name: '@BBVA',
        role: 'API Architect',
        period: 'Sep 2019 - Jun 2022',
        responsibilities: [
          'Joshua analyzes functional requirements of different areas of the banking sector (insurance, loans, cards, risks, etc.).',
          'Designs APIs according to the global guidelines of the company in order to create reusable and atomics web services.',
          'Develops solutions with the project leader and solution architect to develop a suitable solution model in the API approach.',
          'Teaches and accompany new collaborators in their projects in order to facilitate entry and resolve any questions they may have.',
        ],
      },
    ],
  },
  {
    id: 'lexia',
    business: 'Lexia',
    period: 'Jul 2021 - Mar 2022',
    projects: [
      {
        id: 'lexia',
        name: '@Lexia',
        role: 'Solution Architecture, Backend Developer and DevOps',
        period: 'Jul 2021 - Mar 2022',
        responsibilities: [
          'Joshua designs the model solution architecture of the main application Lexia, using a microservices architecture.',
          'Develops each microservice with his team using NodeJS, Angular and Python, using synchronous communication.',
          'Develops batch data processing working in Python to fill data information from outside repositories.',
          'Designs a CI+CD pipeline in order to automate the developing of the microservices using TravisCI and GKE.',
          'Designs the Kubernetes architecture (Deployments, Services, Ingress, etc) and deploys in GKE.',
        ],
      },
    ],
  },
  {
    id: 'kuska',
    business: 'Kuska',
    period: 'Aug 2018 - Feb 2021',
    projects: [
      {
        id: 'kuska-backend',
        name: '@Kuska',
        role: 'Backend Developer',
        period: 'Oct 2020 - Feb 2021',
        responsibilities: [
          'Designs and model the database to satisfy the business needs.',
          'Develops of services RESTful using NodeJS.',
          'Develops web applications using ReactJS.',
          'Payment gateway integration with Culqi and PayU.',
        ],
      },
      {
        id: 'kuska-fullstack',
        name: '@DoApps',
        role: 'FullStack Developer',
        period: 'Aug 2018 - Feb 2019',
        responsibilities: [
          'Develops backend and frontend applications using NodeJS.',
          'Deploys application on the cloud using AWS and Digital Ocean.',
          'Uses third party APIs like Google API, Stripe, Twilio.',
        ],
      },
    ],
  },
  {
    id: 'doapps',
    business: 'DoApps',
    period: 'Apr 2017 - Apr 2019',
    projects: [
      {
        id: 'doapps-backend-leader',
        name: '@DoApps',
        role: 'Backend Leader',
        period: 'Feb 2019 - Apr 2019',
        responsibilities: [
          'I had to ensure the proper development and deployment of backend services, creating good practices and guides in order to integrate and familiarize new employees.',
          'All responsibilities from my previous role FullStack Developer.',
        ],
      },
      {
        id: 'doapps-fullstack-developer',
        name: '@DoApps',
        role: 'FullStack Developer',
        period: 'Aug 2018 - Feb 2019',
        responsibilities: [
          'Designing and developing RESTful APIs and creating good business practices to homologate the design of services.',
          'Designing and developing web applications using React JS and VanillaJS.',
          'Modeling and managing databases SQL and NoSQL with high scalability.',
          'Deployment apps to AWS and DigitalOcean using docker.',
          'Use of different types of third parties APIs like Google API, Stripe, Twilio, AWS like RDS or EC2.',
        ],
      },
      {
        id: 'kuska-backend-junior',
        name: '@DoApps',
        role: 'Backend Junior',
        period: 'Apr 2017 - Jul 2017',
        responsibilities: [
          'Designing and developing of RESTful APIs.',
          'Designing and developing web applications with modern frameworks like React JS.',
          'Modeling and managing databases SQL and NoSQL.',
        ],
      },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-[900px] flex justify-center flex-col mx-auto">
      <h2 className="section-title text-2xl after:bg-nord-0 dark:after:bg-nord-6">Where I've Worked</h2>
      <div>
        <Timeline>
          {jobs.map((job) => (
            <TimelineItem key={job.id} {...job} />
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
