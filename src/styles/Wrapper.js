import styled from 'styled-components';

export default styled.div`
background: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.primaryColor};
transition: all 0.3s linear;
`;
