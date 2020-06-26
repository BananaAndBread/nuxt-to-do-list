<template>
  <div class="to-do-form">
    <form v-on:submit.prevent="handleSubmit">
      <div class="title-form">
        <p class="title-label">Title: &nbsp;</p>
        <input :class="{'error-input': invalidTitle && triedSubmit, 'title-form-input': true}" id="title" v-model="newToDoTitle" type="text">
      </div>
      <div class="description-form">
        <p>Description</p>
        <br>
        <textarea :class="{'description-form-textarea':true, 'error-input':invalidDescription && triedSubmit, 'not-error-input': !invalidDescription}"  v-model="newToDoDescription">
    </textarea>
        <p v-if="invalidDescription && triedSubmit"> NO EMPTY SPACES!</p>
      </div>
      <Button class="add-todo-button" v-bind:text="'Add ToDo'" v-on:submit="handleSubmit">Add todo</Button>
    </form>
  </div>
</template>

<script>
  import Button from '@/components/Button';
  export default {
    name: 'to-do-form',
    data () {
      return {
        newToDoTitle: '',
        newToDoDescription: '',
        error: false,
        triedSubmit: false

      }
    },
    methods: {
      handleSubmit () {
        this.triedSubmit = true
        if (this.invalidTitle || this.invalidDescription) {
          return
        }
        const newToDo = { title: this.newToDoTitle, description: this.newToDoDescription }
        console.log('I submit' + newToDo)
        this.$emit('add:new-todo', newToDo)
        this.newToDoTitle = ''
        this.newToDoDescription = ''
        this.clearStatus()
      },
      clearStatus () {
        this.triedSubmit = false
      }
    },
    computed: {
      invalidTitle () {
        return this.newToDoTitle === ''
      },
      invalidDescription () {
        return this.newToDoDescription === ''
      }
    //   titleInputClassName(){}
    //     return
    },
    components: {
      Button
    }
  }
</script>
<style scoped>
  .title-form {
    display: flex;
    background: #F4F4F4;
    font-family: Happy Monkey;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5em;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 5px;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .title-form p {
    margin-left: 5%;
  }

  .title-form-input {
    border-color: #F4F4F4;
    border: 0px;
    height: 2em;
    width: 50%;
    border-radius: 5px;
    /*position: absolute;*/
    /*right: 25%;*/
  }

  .title-form-input:hover{
    border: 1px solid #6074F9;
  }

  .not-error-input{
    border: 1px solid #EAEAEA;
  }
  .error-input{
    border: 1px solid rgba(255, 19, 28, 0.64);
  }

  .to-do-form {
    margin-bottom: 25px;
    text-align: left;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

  }

  .description-form {
    font-family: Abel;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #9E9E9E;
    margin-top: 16px;
    margin-left: 40px;
  }

  .description-form p {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .description-form-textarea {
    margin-top: 0px;
    padding-top: 0px;
    background: #FFFFFF;
    border-radius: 5px;
    height: 100px;
    width: 95%;
  }

  .description-form-textarea:hover {
    border-color: #6074F9;
  }

  .add-todo-button {
    width: 100%;
    text-align: center;
    margin-top: 15px;
  }
</style>
