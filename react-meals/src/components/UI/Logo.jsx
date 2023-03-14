import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: 2.4rem;
`;

const Logo = () => (
  <LogoContainer>
    <span className="logo-text">ReactMeals</span>
  </LogoContainer>
);

export default Logo;
