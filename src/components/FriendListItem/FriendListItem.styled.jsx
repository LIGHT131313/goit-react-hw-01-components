import styled from 'styled-components';

const getBgColor = p =>
  p.$isOnline ? p.theme.colors.green : p.theme.colors.red;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.spacing(3)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${getBgColor};
`;

export const Avatar = styled.img`
  padding-left: ${p => p.theme.spacing(1.5)};
  padding-right: ${p => p.theme.spacing(3)};
`;
