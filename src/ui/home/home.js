import React from 'react';
import AddGoal from 'ui/home/addGoal'

//Home Page for individual
const Home = React.createClass({
  render() {
    return (
    <div>
      <h1>Home Page</h1>
      <AddGoal />
    </div>
    )
  }
})

export default Home