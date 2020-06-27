<template>
  <header class="header">
    <nav class="nav">
      <div class="big-screen-nav">
        <span class="nav__link" v-bind:key="linkName.id" v-for="linkName of linkNames">
          <nuxt-link :to="linkName.link">{{linkName.value}} </nuxt-link>
        </span>
      </div>
      <div class="small-screen-nav dropdown">
        <NavBarIcon class="svg-nav-bar dropbtn"/>
        <div class="dropdown-content">
          <span class="nav__link" v-bind:key="linkName.id" v-for="linkName of linkNames">
        <nuxt-link :to="linkName.link">{{linkName.value}}</nuxt-link>
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
  import NavBarIcon from '../assets/nav-bar-icon.svg'
  export default {
    name: 'nav-bar',
    components: {
      NavBarIcon
    },
    data () {
      return {
        linkNames: [{ id: 2, value: 'ToDoList', link: '/todolist' },
          {id: 2, value: 'About', link: '/'}],
      }
    },
    mounted() {
      console.log()
    }
  }
</script>
<style scoped>
  .nav {
    border: 1px solid #F96060;
    background: #F96060;
    border-radius: 5px;
    display: flex;
    padding-top: 5px;
    padding-bottom: 5px;

  }

  .nav__link {
    margin-left: 5px;
    margin-right: 5px;
    border-right: white 1px solid;
    height: 100%;
    font-size: 1.5em;
    padding-right: 5px;

  }

  .svg-nav-bar {
    /*color: white;*/
    /*width: 25%;*/
    /*height: auto;*/
  }

  .nav__link a {
    color: white;
  }

  @media (max-width: 1029px) {
    .big-screen-nav {
      display: none;
    }

    .nav {
      justify-content: flex-end;
    }
    /* Style The Dropdown Button */
    .dropbtn {
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      top:100%;
      right: 25%;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: block;
    }

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {

    }
  }

  @media (min-width: 1030px) {
    .small-screen-nav {
      display: none;
    }
  }
</style>
