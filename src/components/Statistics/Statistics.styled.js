import styled from 'styled-components';

export const Section = styled.section`
  box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
  border-radius: ${p => p.theme.borRad};
  padding: ${p => p.theme.spacing(3)};
  text-align: center;
  background-color: ${p => p.theme.colors.beige};
  margin-right: ${p => p.theme.spacing(5)};
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 12px;
  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const List = styled.ul`
  display: flex;
  font-size: 12px;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const ListLabel = styled.span`
  display: block;
  font-weight: 600;
`;
