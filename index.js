const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


// action in redux
function buyCake(){
  return {
    type: BUY_CAKE,
    info: 'first redux action'
}
}

// action in redux
function buyIceCream (){
    return {
      type: BUY_ICECREAM,
  }
  }

// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams : 20
// }

const initialCakeState = {
    numOfCakes : 10,
}

const initialIceCreamState = {
    numOfIceCreams : 20
}

// const reducer = (state = initialState, action) => {
//    switch(action.type){
//     case BUY_CAKE: return {
//         ...state,
//         numOfCakes : state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//         ...state,
//         numOfIceCreams : state.numOfIceCreams - 1
//     }
//     default : return state
//    }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
     case BUY_CAKE: return {
         ...state,
         numOfCakes : state.numOfCakes - 1
     }
     default : return state
    }
 }

 const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
     case BUY_ICECREAM: return {
         ...state,
         numOfIceCreams : state.numOfIceCreams - 1
     }
     default : return state
    }
 }

 const rootReducer = combineReducers({
    cake : cakeReducer, 
    iceCream : iceCreamReducer
 })

const store = createStore(rootReducer)
console.log('Initial state',store.getState(),store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State',store.getState(),store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()