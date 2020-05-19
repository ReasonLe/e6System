<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script>
	import Login from "./components/login/Login.vue"
	import System from "./components/system/System.vue"
	export default {
		name: 'app',
		components: {
			Login,
			System
		},
	}
</script>
	
<style>
	@import url("./assets/css/base.css");
	#app {
		width:100%;
		height: 100%;
	}
</style>