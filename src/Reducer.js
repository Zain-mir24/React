export const getbaskettotal=(basket)=>
basket?.reduce((amount,item)=>item.price + amount, 0);


export const initialState={
    basket:[{
        id:"1234",
        title:"These gloves are leather made.They are made for handling tough situations",
        price:"11.96",
        rating:4,
        image:"https://tse1.mm.bing.net/th?id=OIP.ZGiBfsqOcl-QbdSVn3sAAAHaHa&pid=Api&P=0&w=300&h=300"
    },{
        id:"134",
        title:"These gloves are leather made.They are made for handling tough situations",
        price:"11.96",
        rating:4,
        image:"https://tse1.mm.bing.net/th?id=OIP.ZGiBfsqOcl-QbdSVn3sAAAHaHa&pid=Api&P=0&w=300&h=300"
    }],
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