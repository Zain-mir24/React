export const getbaskettotal=(basket)=>
basket?.reduce((amount,item)=>item.price + amount, 0);


export const initialState={
    basket:[],
    user:null
    
}
function reducer(state,action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding items to basket
            return {
                  ...state,
                basket:[...state.basket ,action.item]}
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item  from basket
            let newBasket = [...state.basket];
              // we cloned the basket 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index>=0){
                //items that exist in basket , remove it
              newBasket.splice(index,1)
            }
            else{
                console.warn(
                    'cant remove the product as it is not available on the screen'
                )
            }
            return {...state ,basket:newBasket}
        default:
            return state;
    }
}
export default reducer; //