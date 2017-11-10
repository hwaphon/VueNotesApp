<template>
  <div class="note-app">
  	<Toolbar></Toolbar>
  	<NodeList></NodeList>
  	<Editor></Editor>
  </div>
</template>

<script>
	import Toolbar from './toolbar.vue'
	import NodeList from './nodelist.vue'
	import Editor from './editor.vue'
	export default {
		components: {
			Toolbar,
			NodeList,
			Editor
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.note-app {
		display: flex;
		flex-flow: row nowrap;
		height: 100%;
	}
</style>
