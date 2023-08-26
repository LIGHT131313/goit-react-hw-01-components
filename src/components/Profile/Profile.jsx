import PropTypes from 'prop-types';
import {
  Wrapper,
  WrapperDesc,
  Name,
  Tag,
  Location,
  List,
  ListLabel,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <WrapperDesc>
        <img src={avatar} alt="User avatar" width="160px" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </WrapperDesc>
      <List>
        <li>
          <ListLabel>Followers</ListLabel>
          <span>{followers}</span>
        </li>
        <li>
          <ListLabel>Views</ListLabel>
          <span>{views}</span>
        </li>
        <li>
          <ListLabel>Likes</ListLabel>
          <span>{likes}</span>
        </li>
      </List>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
