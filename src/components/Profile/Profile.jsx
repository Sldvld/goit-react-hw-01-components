import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  StatsBlock,
  Quantity,
} from './Profile.styled.jsx';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsBlock>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsBlock>
        <StatsBlock>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsBlock>
        <StatsBlock>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsBlock>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
