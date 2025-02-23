type TypeSkill = {
  id: string;
  name: string;
  level: number;
};

const skills: TypeSkill[] = [
  { id: 'nodejs', name: 'NodeJS', level: 5 },
  { id: 'expressjs', name: 'ExpressJS', level: 5 },
  { id: 'reactjs', name: 'ReactJS', level: 5 },
  { id: 'git', name: 'Git', level: 5 },
  { id: 'nestjs', name: 'NestJS', level: 4 },
  { id: 'nextjs', name: 'NextJS', level: 4 },
  { id: 'aws', name: 'AWS', level: 4 },
  { id: 'scrum', name: 'Scrum', level: 4 },
  { id: 'sqlnnsql', name: 'SQL & NoSQL', level: 4 },
  { id: 'k8s', name: 'Kubernetes', level: 3 },
  { id: 'graphql', name: 'GraphQL', level: 3 },
  { id: 'java', name: 'Java', level: 3 },
  { id: 'docker', name: 'Docker', level: 3 },
  { id: 'python', name: 'Python', level: 3 },
  { id: 'golang', name: 'Golang', level: 2 },
  { id: 'devops', name: 'DevOps', level: 3 },
  { id: 'microservices', name: 'Microservices', level: 3 },
  { id: 'luaneovim', name: 'Lua - NeoVim', level: 3 },
  { id: 'angular', name: 'Angular', level: 2 },
  { id: 'gcp', name: 'GCP', level: 2 },
];

const personalInfo = {
  name: 'Joshua Navarro Ruiz',
  role: 'Backend Developer | NodeJS FullStack Developer',
  resume:
    "I'm a software engineer specializing in building scalable apps with high performance. Currently, I'm focused on backend applications using Go, but as a FullStack I can develop frontend apps too.",
  aboutHtml: [
    `With more than eight years as NodeJS FullStack developer using technologies like <b>NodeJS</b>, <b>ReactJS</b>, <b>AWS</b>, <b>Docker</b>, <b>GraphQL</b>, etc. Also, I have two years developing applications as a freelancer using tools like <b>NestJS</b>, <b>Angular</b>, <b>Python</b> for batch processing, <b>Kubernetes</b>, <b>TravisCI</b>, <b>AWS</b> and <b>GCP</b>. At the same time working as <b>APIs Architect</b> at BBVA in which I was in charge of analyzing functional issues and providing solutions in web services.`,
    `I've had the privilege of working at <b>Globant</b> as a <b>NodeJs Developer</b>, working in e-commerce project like <b>Walmart</b>, <b>TaDa</b> and <b>Disney</b>. My main focus these days is improve my backend development using new languages like <b>Go</b> and getting some AWS Certificates like <b>Solution Architect Associate</b>. I'va started a project to make some videos in <b>YouTube</b> to learn basic concepts in software development.`,
    `Here are a few technologies I've been working with recently:`,
  ],
  skills,
};

export default personalInfo;
