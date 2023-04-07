import PropTypes from 'prop-types';
import {
  ListItem,
  ListStatus,
  ListAvatar,
  ListName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <ListStatus status={isOnline}></ListStatus>
      <ListAvatar src={avatar} alt={name} width="48" />
      <ListName>{name}</ListName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
