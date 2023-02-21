import {createStore, GetterTree, Store, useStore as baseUseStore,ActionTree, MutationTree} from "vuex"
import { InjectionKey } from "vue";
export type Todo = {id:number, title:string, description?:string, img?:string, createdAt?:string, updatedAt?:string}
//export type ;
export type State = { todos: Todo[]/*,categories:Category[]*/ }
import axios from "axios";



const state: State = {
    todos:[
       
    ]
}


const API_URL = "http://localhost:8082/api"

const getters: GetterTree<State,State> = {
    getAllTodos: (state) => {
        return state.todos
    },
    getTodoById : (state) => (id:number) => state.todos.find(todo => todo.id === id)
}

const actions:ActionTree<State,State> ={
    addTodo(context, newTodo) {
        

        return axios.post(API_URL + "/todos", newTodo).then((response) => {
            
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
        return axios.put(API_URL + "/todos/"+editTodo.id, editTodo).then((response) => {
            
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
        console.log("action delete" , todo_id)
        context.commit("deleteTodo", todo_id);
    },
    async getTodos(state) {
        const todos = await axios.get(API_URL+"/todos");

        state.commit("GET_TODO",todos.data)
    }
}

const mutations: MutationTree<State> = {
    GET_TODO(state, todos) {
        state.todos = todos;
    },
    addTodo(state,newTodo){
        const todoFormated = {
            title:newTodo.title,
            description:newTodo.description,
            img:newTodo.img,
            id:state.todos.length
        }

        state.todos.push(todoFormated);
    },

    editTodo(state, editTodo) {
        const index = state.todos.findIndex(todo => todo.id === editTodo.id)

        state.todos[index] = editTodo

    },

    deleteTodo(state, todo_id) {
        const index = state.todos.findIndex(todo => todo.id === todo_id)
        console.log("delete index : ", index)
        state.todos.splice(index,1)

    }
    
}

export const store = createStore<State>({state,getters,actions,mutations})

export const key:InjectionKey<Store<State>>=Symbol();

export function useStore(){
    return baseUseStore(key);
}