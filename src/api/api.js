import store from 'store'



export function addGoal(name,value){
	store.dispatch({
		type:"ADD_GOAL",
		goal:{
			name:name,
			value:value
		}
		
	})
}

export function deleteGoal(id){
	store.dispatch({
		type:"DELETE_GOAL",
		id
	}).catch(function(err){
		console.dir(err)
	})
}