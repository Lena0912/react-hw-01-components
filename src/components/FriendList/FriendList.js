import { Container } from "./FriendListItem.styled";
import { FriendListItem } from "./FriensListItem";



export const FriendList = ({ friends }) => {
    return (
      <Container>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        ))}
      </Container>
    );
};