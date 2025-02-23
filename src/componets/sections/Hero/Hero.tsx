import styled from 'styled-components';
import personalInfo from '../../../data/personalInfo';

const StyledHeroSection = styled.section`
  h3 {
    font-size: clamp(30px, 4vw, 60px);
    margin-bottom: 1rem;
  }
`;

const Hero: React.FC = () => {
  return (
    <StyledHeroSection>
      <div className="flex justify-center flex-col min-h-screen h-screen p-0 max-w-[1000px] mx-auto">
        <h1 className="text-nord-8 mb-6 text-2xl">Hello!, my name is</h1>
        <h2 className="big-heading leading-[1.1]">{personalInfo.name}</h2>
        <h4 className="text-nord-4 text-4xl mb-4 leading-[0.9]">{personalInfo.role}</h4>
        <p className="max-w-lg leading-tight">{personalInfo.resume}</p>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
