import {createStore, GetterTree, Store, useStore as baseUseStore,ActionTree, MutationTree} from "vuex"
import { InjectionKey } from "vue";
export type Todo = {id:number, title:string, description?:string, img?:string}
//export type ;
export type State = {todos:Todo[]/*,categories:Category[]*/}



const state: State = {
    todos:[
        {
           id: 0,
           title: "Acheter du pain",
           img: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_360,q_auto,w_740/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/880/pain-baguette-3000x2000.jpg",
           description: "à la boulangerie"
        },
        {
           id: 1,
           title: "Acheter de l'eau",
           img: "https://m.media-amazon.com/images/I/51BcVYSpbCL._AC_SX342_.jpg",
           description: "quelque part"
        },
        {
           id: 2,
           title: "Aller chercher des batteries",
           img: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_360,q_auto,w_740/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/880/pain-baguette-3000x2000.jpg",
           description: "magasin"
        },
        {
           id: 3,
           title: "Nettoyer le garage",
           img: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_360,q_auto,w_740/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/880/pain-baguette-3000x2000.jpg",
           description: "demain matin"
        },
    ]
}

const getters: GetterTree<State,State> = {
    getAllTodos : (state) => state.todos,
    getTodoById : (state) => (id:number) => state.todos.find(todo => todo.id === id)
}

const actions:ActionTree<State,State> ={
    addTodo(context,newTodo){
        context.commit("addTodo",newTodo);
    },
    editTodo(context, newTodo) {
        context.commit("editTodo", newTodo);
    },
    deleteTodo(context, todo_id) {
        console.log("action delete" , todo_id)
        context.commit("deleteTodo", todo_id);
    }
}

const mutations: MutationTree<State> ={
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