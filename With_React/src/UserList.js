import React from "react";

class UserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        users: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8000/users/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              users: result.users
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

  
    render() {
      const { error, isLoaded, users } = this.state;
      // const array
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          // <ul>
          //   {users?.map(user => (
          //     <li key={user.id}>
          //       {user.name} {user.price}
          //     </li>
          //   ))}
          //</ul>
          // <table border='1'>
          //   <thead>
          //     <tr>
          //       <th>Username</th>
          //       <th>Password</th>
          //     </tr>
          //   </thead>
          //   {users?.map(user => {
          //     <tbody key={user.id}>
          //       <tr>
          //         <td>{user.username}</td>
          //         <td>{user.password}</td>
          //       </tr>
          //     </tbody>
          //   })}
          // </table>
          <li>
              {users?.map(user => (
              <li key={user.id}>
                {user.name} {user.price}
              </li>
            ))}
          </li>
        );
      }
    }
  }

  export default UserList