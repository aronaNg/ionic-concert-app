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