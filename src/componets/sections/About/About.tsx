import styled from 'styled-components';
import mePhoto from '../../../images/me.jpeg';
import SkillLevel from '../../SkillLevel/SkillLevel';

type TypeSkill = {
  id: string;
  name: string;
  level: number;
};

const StyledAboutSection = styled.section`
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: #88c0d0;

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    img {
      position: relative;
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: greyscale(100%), contrast(1);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      z-index: 1;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: #88c0d0;
      mix-blend-mode: screen;
      z-index: 1;
    }

    &:after {
      border: 2px solid #88c0d0;
      top: 20px;
      left: 20px;
    }
  }
`;

const About: React.FC = () => {
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

  return (
    <StyledAboutSection id="about" className="max-w-[900px] flex justify-center flex-col mx-auto">
      <h2 className="section-title text-2xl after:bg-nord-0 dark:after:bg-nord-6">About</h2>
      <div className="inner">
        <div>
          <p>
            With more than four years as a software developer fullstack as a main job using technologies like{' '}
            <b>NodeJS</b>, <b>ReactJS</b>, <b>AWS</b>, <b>Docker</b>, <b>GraphQL</b>, etc. Also, I have two years
            developing applications as a freelancer using tools like <b>NestJS</b>, <b>Angular</b>, <b>Python</b> for
            batch processing, <b>Kubernetes</b>, <b>TravisCI</b>, <b>AWS</b> and <b>GCP</b> at the same time with a main
            job as <b>APIs Architect</b> at BBVA in which I was in charge of analyzing functional issues and providing
            solutions in web services.
          </p>
          <p>
            I've had the privilege of working at <b>Globant</b> as a <b>NodeJs Developer</b>, working in e-commerce
            project like <b>Walmart</b> and <b>TaDa</b>. My main focus these days is improve my backend development
            using new languages like <b>Go</b> and getting some AWS Certificates like{' '}
            <b>Solution Architect Associate</b>. I'va started a project to make some videos in <b>YouTube</b> to learn
            basic concepts in software development.
          </p>
          <p className="mt-4">Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {skills &&
              skills.map((skill) => (
                <li key={skill.id}>
                  <span className="mr-3">{skill.name}</span>
                  <SkillLevel level={skill.level} />
                </li>
              ))}
          </ul>
        </div>
        <StyledPic>
          <div className="wrapper">
            <img src={mePhoto} alt="Me" width={500} />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
