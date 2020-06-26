<template>
  <div class="page-to-do">
    <to-do-list></to-do-list>
  </div>
</template>

<script>
  import ToDoList from '../components/ToDoList'
  export default {
    components: { ToDoList }
  }
</script>

<style>
  .page-to-do{
    margin-top: 70px;
  }
</style>
