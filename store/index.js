export const state = () => ({
  todos: []
})

export const getters = {
}

export const mutations ={
  removeToDo (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  addToDo (state, newToDo) {
    state.todos = [newToDo, ...state.todos]
  },
  getToDos (state, data) {
    state.todos = data
  },
  updateToDo(state, changedToDo) {
    console.log("Here")
    state.todos = state.todos.map((todo)=>{
      if (todo.id===changedToDo.id){
        console.log(" I changed this shit")
        return changedToDo
      }
      return todo
    })
  }
}

export const actions = {
  async removeToDo (context, id) {
    await this.$axios({
      method: 'delete',
      url: `https://todo-list.ionagamed.ru/todos/${id}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    context.commit('removeToDo', id)
  },
  async addToDo (context, newToDo) {
    let response = await this.$axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      url: 'https://todo-list.ionagamed.ru/todos/',
      data: {
        projectId: '9Yp_ExY7WgmmPUL3XeOwn',
        title: newToDo.title,
        dueDate: '2011-10-10',
        description: newToDo.description
      }
    })
    context.commit('addToDo', response.data)
  },
  async getToDos (context) {
    let response = await this.$axios.get('https://todo-list.ionagamed.ru/todos/?projectId=9Yp_ExY7WgmmPUL3XeOwn')
    context.commit('getToDos', response.data.reverse())

  },
  async updateToDo (context, changedToDo) {
    let response = await this.$axios({
      method: 'patch',
      url: `https://todo-list.ionagamed.ru/todos/${changedToDo.id}`,
      data: changedToDo
    })
    context.commit('updateToDo', changedToDo)
  }
}

