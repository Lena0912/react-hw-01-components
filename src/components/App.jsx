import { Component } from "react";
import { Profile } from "./Profile/Profile";
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


export class App extends Component {
  state = {
    profileItems: user,
  }
  render() {
    const { username, tag, location, avatar, stats } = this.state.profileItems;
    return (
      <>
        <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      /> 
      <FriendList friends={ friends} />
      
        <TransactionHistory items={transactions} />
        </>
    );     
  }
}

