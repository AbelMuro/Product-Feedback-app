export function FilterReducer(state = 'All', action){
    switch(action.type){
       case "set filter":
            return action.filter;
       case "get filter":
            return state;
       default: 
            return state;
}
}