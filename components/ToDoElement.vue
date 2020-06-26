<template>
  <div>
    <div class="to-do-element">
      <span class="round">
        <input :id="todoelement.id" type="checkbox" :checked="todoelement.isCompleted" @change="handleCheck">
        <label :for="todoelement.id"></label>
      </span>
      <p>{{todoelement.title}} &nbsp;</p>
      <button v-on:click="openModal">More</button>

    </div>
    <modal @close:modal="closeModal" v-bind:todoelement="todoelement" v-if="modalOpen"></modal>
  </div>
</template>

<script>
  import Modal from './Modal'

  export default {
    name: 'to-do-element',
    props: {
      todoelement: {}
    },
    data () {
      return {
        modalOpen: false
      }
    },
    methods: {
      openModal () {
        this.modalOpen = true
      },
      closeModal () {
        this.modalOpen = false
      },
      handleCheck (e) {
        let changedToDoElement = Object.assign({}, this.todoelement)
        changedToDoElement.isCompleted = e.target.checked
        this.$store.dispatch('updateToDo', changedToDoElement)
      }
    },
    components: {
      Modal
    }

  }
</script>

<style scoped>
  .to-do-element {
    background: #FFFFFF;
    box-shadow: 5px 5px 9px rgba(224, 224, 224, 0.5);
    display: flex;
    margin: 5%;
    justify-content: space-between;
    align-items: center;
    transition: transform .2s;
  }

  .to-do-element:first-of-type {
    margin-top: -1%;
  }

  .round {
    position: relative;
    margin-left: 1%;
    margin-right: 1%;
  }

  .round label {
    background-color: #fff;
    border: 1px solid #6074F9;
    border-radius: 50%;
    cursor: pointer;
    height: 28px; /*28px*/
    left: 0;
    position: absolute;
    top: 0px;
    width: 28px; /*28px*/
  }

  .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;/*6px*/
    left: 7px; /*7px*/
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }

  .round input[type="checkbox"] {
    visibility: hidden;
  }

  .round input[type="checkbox"]:checked + label {
    background-color: #F96060;;
    border-color: #F96060;;
  }

  .round input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }

  .to-do-element p {
    display:table;
    font-family: Abel,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    width: 50%;
  }

  .to-do-element:hover {
    transform: scale(1.1);
  }

  .to-do-element button {
    background: #F96060;
    border: 0;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    font-family: Happy Monkey,fantasy;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    width: 5em;
    color: #FFFFFF;
    align-self: stretch;
    min-height: 4em;
  }

</style>
