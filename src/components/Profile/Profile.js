import {
  Label,
  Card,
  Socail,
  Image,
  Avatar,
  Media,
  Span,
  Container,
} from './Profile.styled';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <Container>
      <Card>
        <Avatar>
          <Image src={image} alt="User avatar" />
          <Label type="a">{name}</Label>
          <Label type="b">@{tag}</Label>
          <Label type="c">{location}</Label>
        </Avatar>
        <Socail>
          <Media>
            <Span type="q">Followers: </Span>
            <Span type="w">{stats.followers}</Span>
          </Media>
          <Media>
            <Span type="q">Views: </Span>
            <Span type="w">{stats.views}</Span>
          </Media>
          <Media>
            <Span type="q">Likes: </Span>
            <Span type="w">{stats.likes}</Span>
          </Media>
        </Socail>
      </Card>
    </Container>
  );
};
