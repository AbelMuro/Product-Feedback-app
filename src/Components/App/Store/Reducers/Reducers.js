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

export function SortReducer(state = 'Most Upvotes', action){
     switch(action.type){
          case "set sort":
               return action.sort;
          case "get sort":
               return state;
          default:
               return state;
     }
}
