import {createStore, GetterTree, Store, useStore as baseUseStore,ActionTree, MutationTree} from "vuex"
import { InjectionKey } from "vue";
export type Concert = {id:number, libelle:string, description:string,categorie_id?:number, user_id?:number,image?:string,date?:Date,heure?:string,createdAt?:string, updatedAt?:string}
//export type ;
export type State = { concerts: Concert[]/*,categories:Category[]*/ }
import axios from "axios";


const state: State = {
    concerts:[
       
    ]
}


const API_URL = "http://localhost:8082/api"

const getters: GetterTree<State,State> = {
    getAllTodos: (state) => {
        return state.concerts
    },
    getTodoById : (state) => (id:number) => state.concerts.find(todo => todo.id === id)
}

const actions:ActionTree<State,State> ={
    addTodo(context, newTodo) {
        

        return axios.post(API_URL + "/concerts", newTodo).then((response) => {
            
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
        return axios.put(API_URL + "/categconcertsories/"+editTodo.id, editTodo).then((response) => {
            
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
    GET_TODO(state, concerts) {
        state.concerts = concerts;
    },
    addTodo(state,newTodo){
        const todoFormated = {
            libelle:newTodo.libelle,
            description:newTodo.description,
            categorie_id:newTodo.categorie_id,
            user_id:newTodo.user_id,
            image:newTodo.image,
            date:newTodo.date,
            heure:newTodo.heure,
            id:state.concerts.length
        }

        state.concerts.push(todoFormated);
    },

    editTodo(state, editTodo) {
        const index = state.concerts.findIndex(todo => todo.id === editTodo.id)

        state.concerts[index] = editTodo

    },

    deleteTodo(state, todo_id) {
        const index = state.concerts.findIndex(todo => todo.id === todo_id)
        console.log("delete index : ", index)
        state.concerts.splice(index,1)

    }
    
}



export const store = createStore<State>({state,getters,actions,mutations})

export const key:InjectionKey<Store<State>>=Symbol();

export function useStore(){
    return baseUseStore(key);
}