import styled from 'styled-components';

export const Row = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 0 30px;
  align-items: start;
`;

export const Subtitle = styled.h4`
  font-size: 12px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
  border: 1px solid #565656;
  padding: 9px 20px;
  border-radius: 30px;
  margin-bottom: 53px;
  display: inline-flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 48px;
  line-height: 60px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 33px;
  span {
    color: var(--primary_color);
  }
`;
