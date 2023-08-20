import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
  border-radius: ${p => p.theme.borRad};
  max-width: ${p => p.theme.spacing(50)};
  height: 100%;
  margin-right: ${p => p.theme.spacing(5)};
  text-align: center;
  padding: ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.beige};
`;

export const WrapperDesc = styled.div`
  padding-bottom: ${p => p.theme.spacing(3)};

  img {
    border-radius: 50%;
    padding-bottom: ${p => p.theme.spacing(1)};
  }
`;

export const Name = styled.p`
  font-weight: 600;
  padding-bottom: ${p => p.theme.spacing(1)};
`;

export const Tag = styled.p`
  padding-bottom: ${p => p.theme.spacing(1)};
  font-size: 12px;
`;

export const Location = styled.p`
  font-size: 12px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  font-size: 12px;
`;

export const ListLabel = styled.span`
  display: block;
  font-weight: 600;
`;
