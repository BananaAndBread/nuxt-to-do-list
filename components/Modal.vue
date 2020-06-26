<template>
  <div>
    <div id="modal-wrapper" class="modal">
      <form class="modal-content animate">
        <div class="imgcontainer">
          <span @click="closeModal" class="close" title="Close">&times;</span>
        </div>
        <edit-remove-form-custom @closeModal='closeModal' ref="editRemoveForm" v-bind:toDoElement="todoelement">
        </edit-remove-form-custom>
      </form>
    </div>
  </div>
</template>

<script>
  import EditRemoveFormCustom from './EditRemoveForm'

  export default {
    name: 'Modal',
    props: {
      todoelement: {}
    },
    methods: {
      closeModal () {
        this.$emit('close:modal')
      },
      saveState () {
        console.log('Save state in modal')
      },
    },
    components: {
      EditRemoveFormCustom
    }

  }
</script>

<style scoped>
  * {
    font-family: Helvetica, Arial, sans-serif;
  }

  button:hover {
    opacity: 0.8;
  }

  .imgcontainer {
    text-align: center;
    margin: 1em 0 0 0;
    position: relative;
  }

  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 4% auto 15% auto;
    border: 1px solid #888;
    width: 80%;
    padding-bottom: 2em;
  }

  .close {
    position: absolute;
    right: 8%;
    top: 0;
    color: #000;
    font-size: 2.5em;
    font-weight: bold;
  }

  .close:hover, .close:focus {
    color: red;
    cursor: pointer;
  }

  .animate {
    animation: zoom 0.6s
  }

  @keyframes zoom {
    from {
      transform: scale(0)
    }
    to {
      transform: scale(1)
    }
  }

</style>
