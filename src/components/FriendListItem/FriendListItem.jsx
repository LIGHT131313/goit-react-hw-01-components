import PropTypes from 'prop-types';
import { Avatar, ListItem, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <ListItem>
      <Status $isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
