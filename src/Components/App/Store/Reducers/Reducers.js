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

export function TotalCommentsReducer(state = 0, action) {
     switch(action.type){
          case 'add comment':
               return state + 1;
          case 'get total':
               return state;
          default:
               return state
     }
}
