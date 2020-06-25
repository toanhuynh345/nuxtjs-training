<template>
  <div>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <div class="d-flex" id="wrapper">
      <sidebar/>
      <div id="page-content-wrapper" class="flex-fill">
        <HeaderLayouts/>
        <Breadcrumbs />
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
  import Sidebar from '~/components/Sidebar.vue'
  import HeaderLayouts from '~/components/Header.vue'
  import Breadcrumbs from '~/components/Breadcrumbs.vue'
  export default {
    components: {
      Sidebar, HeaderLayouts, Breadcrumbs
    }
  }
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
