<template>
  <div class="edit-remove-form">
    <h1>{{dataAfterEdit.title}}</h1>
    <hr>
    <form>
      <p>Name</p>
      <input type="text" v-model="dataAfterEdit.title">
      <p>Description</p>
      <textarea v-model="dataAfterEdit.description"/>
    </form>
    <div class="buttons-container">
    <Button @click.native="acceptChanges" :text="'Save'"></Button>
    <Button @click.native="deleteToDo" class="delete-button" :text="'Delete'"></Button>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button'
  export default {
    data () {
      return {
        dataAfterEdit: {}
      }
    },
    props: {
      toDoElement: {}
    },
    components: {
      Button
    },
    created () {
      this.dataAfterEdit = Object.assign({}, this.toDoElement)
    },
    methods: {
      acceptChanges () {
        this.$store.dispatch('updateToDo', this.dataAfterEdit)
        this.$emit('closeModal')
      },
      deleteToDo () {
        this.$emit('closeModal')
        this.$store.dispatch('removeToDo', this.toDoElement.id)
      }
    }
  }
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Happy+Monkey&display=swap");

  .edit-remove-form {
    padding-top: 25px;
  }

  .edit-remove-form h1 {
    font-family: "Happy Monkey", fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    text-align: left;
    margin-left: 15%;
    margin-bottom: 10px;
  }

  .edit-remove-form p {
    text-align: left;
    margin-left: 15%;
    color: #808080;
    margin-top: 0.5em;
    margin-top: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input, textarea{
    margin-top: 1em;
    margin-left: 15%;
    width: 50%;
    padding: 0.5em;
    border: hidden;
    font-family: Abel,serif;
    font-size: 18px;
    border-bottom: 1px rgba(203, 203, 203, 0.58) solid
  }
  input{
    height: 2em;
  }
  textarea{
    height: auto;
    border: 1px rgba(203, 203, 203, 0.58) solid;
    border-radius: 5px;
  }

  hr{
    border-color: rgba(203, 203, 203, 0.58);
    width: 95%;
  }

  Button{
    min-width: 5em;
    width: 15%;
    width: 15%;
    margin-top: 3em;
  }

  Button:first-of-type{
    margin-left: 15%;
    margin-right: 1em;
  }
  .buttons-container{
  }

</style>
