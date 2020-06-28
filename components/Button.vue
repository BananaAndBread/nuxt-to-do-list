<template>
  <button class="custom-button">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: ['text']
}
</script>
<style scoped>
  .custom-button {
    background: #F96060;
    border-radius: 5px;
    border: 0;
    font-family: Happy Monkey;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .custom-button:hover{
    background: rgba(249, 96, 96, 0.83);
  }
</style>
