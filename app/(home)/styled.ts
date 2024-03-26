import styled from 'styled-components';

export const MainWrapper = styled.main`
  min-height: 100vh;
`;

export const HeroWrapper = styled.section`
  padding: 68px 0;
  position: relative;
  overflow: hidden;
  h1 {
    font-size: 78px;
    letter-spacing: -0.2px;
    line-height: 90px;
    margin-bottom: 43px;
    font-weight: 300;
    span {
      color: var(--primary_color);
    }
  }
  h2 {
    font-size: 72px;
    color: var(--primary_color);
    line-height: 56px;
    margin-bottom: 38px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
  }
  .facts {
    display: flex;
    gap: 100px;
    margin-top: 55px;
  }
`;

export const AboutWrapper = styled.section`
  padding: 68px 0;
  position: relative;
  overflow: hidden;
`;
