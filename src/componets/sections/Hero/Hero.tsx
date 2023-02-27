import styled from 'styled-components';

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
        <h2 className="big-heading leading-[1.1]">Joshua Navarro Ruiz</h2>
        <h3 className="text-nord-3 dark:text-nord-4 big-heading leading-[0.9]">FullStack Developer</h3>
        <p className="max-w-lg leading-tight">
          I'm a software engineer specializing in building scalable apps with high performance. Currently, I'm focused
          on backend applications using Go, but as a FullStack I can develop frontend apps too.
        </p>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
