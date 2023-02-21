import { InjectionKey } from "vue";
import {Action, ActionTree, createStore, GetterTree, MutationTree, Store, useStore as baseUseStore} from "vuex"

export type Todo = {id:number, title:string;description?:string, img?:string}
export type State = {todos: Todo[]}

const state: State = {
    todos:[
        {
            id:0,
            title:"Paris",
            img:"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet?"     
          },
          {
            id:1,
            title:"Dakar",
            img:"https://images.unsplash.com/photo-1674513921651-d0a593756de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet?"
          },
          {
            id:2,
            title:"Lyon",
            img:"https://images.unsplash.com/photo-1602087594298-706ccc894bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet?"
          },
          {
            id:3,
            title:"Moscou",
            img:"https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ipsa nihil vero eveniet?"
          }
    ]
}

const getters: GetterTree<State,State> = {
    getAllTodos: (state) => state.todos,
    getTodoById: (state) => (id:number) => state.todos.find(todo=>todo.id===id)

}

const actions : ActionTree<State,State> = {
  addTodo(context,newTodo){
    context.commit("addTodo",newTodo);
  }
}

const mutations: MutationTree<State> = {
  addTodo(state,newTodo){
    const todoFormatted= {
      title: newTodo.title,
      description:newTodo.description,
      img: newTodo.img,
      id:state.todos.length
    }
    state.todos.push(todoFormatted)
  }
}
export const store = createStore<State>({state, getters});
export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(){
    return baseUseStore(key)
}