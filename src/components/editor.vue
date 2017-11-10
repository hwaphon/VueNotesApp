<template>
	<textarea 
		class="editor" 
		:disabled="isEmptyObject(activeNote)" 
		:value="activeNote.text"
		@input="editNote"></textarea>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState([
					'activeNote'
				])
		},
		methods: {
			isEmptyObject (obj) {
				for (let key in obj) {
					return false
				}
				return true
			},
			editNote (e) {
				this.$store.dispatch('editNote', e.target.value)
			}
		}
	}
</script>
<style scoped>
	.editor {
		resize: none;
		outline: none;
		flex: 1;
		border: none;
		font-size: 18px;
		padding: 32px 16px;
	}
</style>