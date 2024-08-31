const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
    value: 0,
    age: 17
}

// Reducer (fungsi bahwa Store bisa diupdate memodifikasi hanya dari Reducer) / Tasklist
const rootReducer = (state = initalState, action) => {
    return state
}

// Store (wadah besar yang menyimpan value state secata global)
const store = createStore(rootReducer);
console.log(store.getState()) // state global
//Dispatch / Action (Proses pemanggilan/ intruksi spesifik mengubah state)

//Subscription(Proses Pemanggilan Store yang diperlukan)