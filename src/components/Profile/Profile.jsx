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
    <Wrapper className="profile">
      <WrapperDesc className="description">
        <img src={avatar} alt="User avatar" className="avatar" width="160px" />
        <Name className="name">{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </WrapperDesc>
      <List className="stats">
        <li>
          <ListLabel className="label">Followers</ListLabel>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <ListLabel className="label">Views</ListLabel>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <ListLabel className="label">Likes</ListLabel>
          <span className="quantity">{likes}</span>
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
