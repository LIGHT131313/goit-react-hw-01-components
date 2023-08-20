import PropTypes from 'prop-types';
import { Avatar, ListItem, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <ListItem className="item">
      <Status $isOnline={isOnline} className="status"></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
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
