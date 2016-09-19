const goalInitialState ={
	goals:[]
}

export default function(state=goalInitialState, action){
	switch(action.type){
		case "ADD_GOAL":
			return{...state, goals:[...state.goals, action.goal]}
		case "DELETE_GOAL":
			return{...state, goals:state.goals.filter(function(item){
				if(item.id !== action.id){
					return state.goals
				}
			})}
		default:
			return state
	}
}