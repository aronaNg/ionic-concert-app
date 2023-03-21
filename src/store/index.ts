import {createStore, GetterTree, Store, useStore as baseUseStore,ActionTree, MutationTree} from "vuex"
import { InjectionKey } from "vue";
export type Category = {id:number, libelle:string, user_id?:number,createdAt?:string, updatedAt?:string}
//export type ;
export type State = { categories: Category[]/*,categories:Category[]*/ }
import axios from "axios";


const state: State = {
    categories:[
       
    ]
}


const API_URL = "http://localhost:8082/api"

const getters: GetterTree<State,State> = {
    getAllTodos: (state) => {
        return state.categories
    },
    getTodoById : (state) => (id:number) => state.categories.find(todo => todo.id === id)
}

const actions:ActionTree<State,State> ={
    addTodo(context, newTodo) {
        

        return axios.post(API_URL + "/categories", newTodo).then((response) => {
            
            if (response.status == 200) {
                context.commit("addTodo", newTodo);
            }

            return {"statut":response.status, "message":response.statusText}

        }).catch((error) => {
            console.log(error);
            return {"statut":error.status,"message":error}
        })

    },
    editTodo(context, editTodo) {
        return axios.put(API_URL + "/categories/"+editTodo.id, editTodo).then((response) => {
            
            if (response.status == 200) {
                context.commit("editTodo", editTodo);
            }

            return {"statut":response.status, "message":response.statusText}

        }).catch((error) => {
            console.log(error);
            return {"statut":error.status,"message":error}
        })
    },
    deleteTodo(context, todo_id) {
        return axios.delete(API_URL + "/categories/"+todo_id,).then((response) => {
            
            if (response.status == 200) {
                context.commit("deleteTodo", todo_id);
            }

            return {"statut":response.status, "message":response.statusText}

        }).catch((error) => {
            console.log(error);
            return {"statut":error.status,"message":error}
        })
    },
    async getTodos(state) {
        const categories = await axios.get(API_URL+"/categories");

        state.commit("GET_TODO",categories.data)
    }
}

const mutations: MutationTree<State> = {
    GET_TODO(state, categories) {
        state.categories = categories;
    },
    addTodo(state,newTodo){
        const todoFormated = {
            libelle:newTodo.libelle,
            id:state.categories.length
        }

        state.categories.push(todoFormated);
    },

    editTodo(state, editTodo) {
        const index = state.categories.findIndex(todo => todo.id === editTodo.id)

        state.categories[index] = editTodo

    },

    deleteTodo(state, todo_id) {
        const index = state.categories.findIndex(todo => todo.id === todo_id)
        console.log("delete index : ", index)
        state.categories.splice(index,1)

    }
    
}



export const store = createStore<State>({state,getters,actions,mutations})

export const key:InjectionKey<Store<State>>=Symbol();

export function useStore(){
    return baseUseStore(key);
}



// le store pour les concerts

// import {createStore, GetterTree, Store, useStore as baseUseStore,ActionTree, MutationTree} from "vuex"
// import { InjectionKey } from "vue";
// export type Concert = {id:number, nom:string, description:string,image?:string,date?:string,heure?:string,categorie_id?:number, user_id?:number,createdAt?:string, updatedAt?:string}
// //export type ;
// export type State = { concerts: Concert[]}
// import axios from "axios";


// const state: State = {
//     concerts:[
       
//     ]
// }


// const API_URL = "http://localhost:8082/api"

// const getters: GetterTree<State,State> = {
//     getAllTodos: (state) => {
//         return state.concerts
//     },
//     getTodoById : (state) => (id:number) => state.concerts.find(todo => todo.id === id)
// }

// const actions:ActionTree<State,State> ={
//     addTodo(context, newTodo) {
        

//         return axios.post(API_URL + "/concerts", newTodo).then((response) => {
            
//             if (response.status == 200) {
//                 context.commit("addTodo", newTodo);
//             }

//             return {"statut":response.status, "message":response.statusText}

//         }).catch((error) => {
//             console.log(error);
//             return {"statut":error.status,"message":error}
//         })

//     },
//     editTodo(context, editTodo) {
//         return axios.put(API_URL + "/concerts/"+editTodo.id, editTodo).then((response) => {
            
//             if (response.status == 200) {
//                 context.commit("editTodo", editTodo);
//             }

//             return {"statut":response.status, "message":response.statusText}

//         }).catch((error) => {
//             console.log(error);
//             return {"statut":error.status,"message":error}
//         })
//     },
//     deleteTodo(context, todo_id) {
//         return axios.delete(API_URL + "/concerts/"+todo_id,).then((response) => {
            
//             if (response.status == 200) {
//                 context.commit("deleteTodo", todo_id);
//             }

//             return {"statut":response.status, "message":response.statusText}

//         }).catch((error) => {
//             console.log(error);
//             return {"statut":error.status,"message":error}
//         })
//     },
//     async getTodos(state) {
//         const concerts = await axios.get(API_URL+"/concerts");

//         state.commit("GET_TODO",concerts.data)
//     }
// }

// const mutations: MutationTree<State> = {
//     GET_TODO(state, concerts) {
//         state.concerts = concerts;
//     },
//     addTodo(state,newTodo){
//         const todoFormated = {
//             id:state.concerts.length,
//             nom:newTodo.nom,
//             description:newTodo.description,
//             image:newTodo.image,
//             date:newTodo.date,
//             heure:newTodo.heure,
//             categorie_id:newTodo.categorie_id,
//             user_id:newTodo.user_id,
//         }

//         state.concerts.push(todoFormated);
//     },

//     editTodo(state, editTodo) {
//         const index = state.concerts.findIndex(todo => todo.id === editTodo.id)

//         state.concerts[index] = editTodo

//     },

//     deleteTodo(state, todo_id) {
//         const index = state.concerts.findIndex(todo => todo.id === todo_id)
//         console.log("delete index : ", index)
//         state.concerts.splice(index,1)

//     }
    
// }



// export const store = createStore<State>({state,getters,actions,mutations})

// export const key:InjectionKey<Store<State>>=Symbol();

// export function useStore(){
//     return baseUseStore(key);
// }


// store pour user

// import {createStore, GetterTree, Store, useStore as baseUseStore,ActionTree, MutationTree} from "vuex"
// import { InjectionKey } from "vue";
// export type User = {id:number, login:string, password:string, role:string,createdAt?:string, updatedAt?:string}
// export type State = { users: User[] }
// import axios from "axios";



// const state: State = {
//     users:[ 
       
//     ]
// }


// const API_URL = "http://localhost:8082/api"

// const getters: GetterTree<State,State> = {
//     getAllTodos: (state) => {
//         return state.users
//     },
//     getTodoById : (state) => (id:number) => state.users.find(todo => todo.id === id)
// }

// const actions:ActionTree<State,State> ={
//     addTodo(context, newTodo) {
        

//         return axios.post(API_URL + "/user", newTodo).then((response) => {
            
//             if (response.status == 200) {
//                 context.commit("addTodo", newTodo);
//             }

//             return {"statut":response.status, "message":response.statusText}

//         }).catch((error) => {
//             console.log(error);
//             return {"statut":error.status,"message":error}
//         })

//     },
//     editTodo(context, editTodo) {
//         return axios.put(API_URL + "/user/"+editTodo.id, editTodo).then((response) => {
            
//             if (response.status == 200) {
//                 context.commit("editTodo", editTodo);
//             }

//             return {"statut":response.status, "message":response.statusText}

//         }).catch((error) => {
//             console.log(error);
//             return {"statut":error.status,"message":error}
//         })
//     },
//     deleteTodo(context, todo_id) {
//         return axios.delete(API_URL + "/user/"+todo_id,).then((response) => {
            
//             if (response.status == 200) {
//                 context.commit("deleteTodo", todo_id);
//             }

//             return {"statut":response.status, "message":response.statusText}

//         }).catch((error) => {
//             console.log(error);
//             return {"statut":error.status,"message":error}
//         })
//     },
//     async getTodos(state) {
//         const users = await axios.get(API_URL+"/user");

//         state.commit("GET_TODO",users.data)
//     }
// }

// const mutations: MutationTree<State> = {
//     GET_TODO(state, users) {
//         state.users = users;
//     },
//     addTodo(state,newTodo){
//         const todoFormated = {
//             login:newTodo.login,
//             password:newTodo.password,
//             role:newTodo.role,
//             id:state.users.length
//         }

//         state.users.push(todoFormated);
//     },

//     editTodo(state, editTodo) {
//         const index = state.users.findIndex(todo => todo.id === editTodo.id)

//         state.users[index] = editTodo

//     },

//     deleteTodo(state, todo_id) {
//         const index = state.users.findIndex(todo => todo.id === todo_id)
//         console.log("delete index : ", index)
//         state.users.splice(index,1)

//     }
    
// }

// export const store = createStore<State>({state,getters,actions,mutations})

// export const key:InjectionKey<Store<State>>=Symbol();

// export function useStore(){
//     return baseUseStore(key);
// }