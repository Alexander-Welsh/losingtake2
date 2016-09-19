import React from 'react';
import deleteGoal from 'api/api'


const style={
	listStyle:"none"
}
export default React.createClass({
  deleteMe:function(e, i){
  	console.log("e", e)
  	console.log(i)
 
  	deleteGoal(e)

  },
  render: function () {
  	console.log(this.props.goals)
    return (
    	<div>
    		{this.props.goals.map(function(item, i){
    			return <li onTouchTap={(e, i) =>this.deleteMe(e, i)} style={style} key={i}>Goal Name:{item.name} Value:{item.value}</li>
    		}.bind(this))}
    	</div>
      
    )
  }
})