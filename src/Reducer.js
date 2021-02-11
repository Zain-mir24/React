export const initialState={
    basket:[],
    user:null
    
}
function reducer(state,action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding items to basket
            return {state}
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item  from basket
            return {state}
        default:
            return state;
    }
}
export default reducer; //