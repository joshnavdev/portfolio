import styled from 'styled-components';
import SkillLevel from '../../SkillLevel/SkillLevel';
import personalInfo from '../../../data/personalInfo';

const mePhoto = new URL('../../../assets/me.jpeg', import.meta.url).href;

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
    background-color: var(--color-text-secondary);

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
      background-color: var(--color-text-secondary);
      mix-blend-mode: screen;
      z-index: 1;
    }

    &:after {
      border: 2px solid var(--color-text-secondary);
      top: 20px;
      left: 20px;
    }
  }
`;

const About: React.FC = () => {
  return (
    <StyledAboutSection id="about" className="max-w-[900px] flex justify-center flex-col mx-auto">
      <h2 className="section-title text-2xl after:bg-nord-6">About</h2>
      <div className="inner">
        <div>
          {personalInfo.aboutHtml.map((paragraph) => {
            const markup = { __html: paragraph };

            return <p dangerouslySetInnerHTML={markup} />;
          })}
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {personalInfo.skills &&
              personalInfo.skills.map((skill) => (
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
