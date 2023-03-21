import {createStore, GetterTree, Store, useStore as baseUseStore,ActionTree, MutationTree} from "vuex"
import { InjectionKey } from "vue";
export type User = {id:number, login:string, password:string,role:string,createdAt?:string, updatedAt?:string}
//export type ;
export type State = { users: User[]/*,categories:Category[]*/ }
import axios from "axios";



const state: State = {
    users:[
       
    ]
}


const API_URL = "http://localhost:8082/api"

const getters: GetterTree<State,State> = {
    getAllTodos: (state) => {
        return state.users
    },
    getTodoById : (state) => (id:number) => state.users.find(todo => todo.id === id)
}

const actions:ActionTree<State,State> ={
    addTodo(context, newTodo) {
        

        return axios.post(API_URL + "/user", newTodo).then((response) => {
            
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
        return axios.delete(API_URL + "/user/"+todo_id,).then((response) => {
            
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
        const users = await axios.get(API_URL+"/user");

        state.commit("GET_TODO",users.data)
    }
}

const mutations: MutationTree<State> = {
    GET_TODO(state, users) {
        state.users = users;
    },
    addTodo(state,newTodo){
        const todoFormated = {
            login:newTodo.login,
            password:newTodo.password,
            role:newTodo.role,
            id:state.users.length
        }

        state.users.push(todoFormated);
    },

    editTodo(state, editTodo) {
        const index = state.users.findIndex(todo => todo.id === editTodo.id)

        state.users[index] = editTodo

    },

    deleteTodo(state, todo_id) {
        const index = state.users.findIndex(todo => todo.id === todo_id)
        console.log("delete index : ", index)
        state.users.splice(index,1)

    }
    
}

export const store = createStore<State>({state,getters,actions,mutations})

export const key:InjectionKey<Store<State>>=Symbol();

export function useStore(){
    return baseUseStore(key);
}