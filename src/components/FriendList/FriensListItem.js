import { Card, Name, Status,  } from './FriendListItem.styled';


export const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    
      <Card>
        <img src={avatar} alt={`${name}avatar`} width="48" />
        <Name>{name}</Name>
        <Status isOnline={isOnline}>{isOnline ? 'Online' : 'Offline'}</Status>
      </Card>
    
  );
};