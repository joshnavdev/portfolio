type TypeSkill = {
  id: string;
  name: string;
  level: number;
};

const skills: TypeSkill[] = [
  { id: 'nodejs', name: 'NodeJS', level: 5 },
  { id: 'expressjs', name: 'ExpressJS', level: 5 },
  { id: 'reactjs', name: 'ReactJS', level: 4 },
  { id: 'graphql', name: 'GraphQL', level: 3 },
  { id: 'nestjs', name: 'NestJS', level: 3 },
  { id: 'docker', name: 'Docker', level: 3 },
  { id: 'k8s', name: 'Kubernetes', level: 3 },
  { id: 'aws', name: 'AWS', level: 3 },
  { id: 'gcp', name: 'GCP', level: 2 },
  { id: 'python', name: 'Python', level: 3 },
  { id: 'golang', name: 'Golang', level: 2 },
  { id: 'devops', name: 'DevOps', level: 3 },
  { id: 'scrum', name: 'Scrum', level: 4 },
  { id: 'git', name: 'Git', level: 5 },
  { id: 'sqlnnsql', name: 'SQL & NoSQL', level: 4 },
  { id: 'angular', name: 'Angular', level: 2 },
  { id: 'microservices', name: 'Microservices', level: 3 },
  { id: 'luaneovim', name: 'Lua - NeoVim', level: 3 },
];

export default skills;
