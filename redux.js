const redux = require('redux');
const createStore = redux.legacy_createStore;

const initalState = {
    value: 0,
    age: 17
}

// Reducer (fungsi bahwa Store bisa diupdate memodifikasi hanya dari Reducer) / Tasklist
const rootReducer = (state = initalState, action) => {
    
    switch(action.type) {
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1
            }
        case "CHANGE_VALUE":
            return {
                ...state,
                value: state.value + action.newValue
            }
        default: 
            return state
    }

}

// Store (wadah besar yang menyimpan value state secata global)
const store = createStore(rootReducer);
console.log(store.getState()) // state global
//Subscription(Proses Pemanggilan Store ketika terjadi perubahan}
store.subscribe(() => console.log("store change", store.getState()))
//Dispatch / Action (Proses pemanggilan/ intruksi spesifik mengubah state)
store.dispatch({type: 'ADD_AGE'});
console.log(store.getState()) // state global
store.dispatch({type: "CHANGE_VALUE", newValue: 99});
console.log(store.getState()) // state global

