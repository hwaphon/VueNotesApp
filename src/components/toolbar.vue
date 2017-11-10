<template>
	<div class="toolbar">
		<i class="fa fa-plus-circle" aria-hidden="true" @click="addNote"></i>
		<i class="fa fa-star" :class="{ 'favorite': activeNote.favorite }" aria-hidden="true" @click="favNote"></i>
		<i class="fa fa-trash" aria-hidden="true" @click="deleteNote"></i>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		methods: {
			addNote () {
				this.$store.dispatch('addNote')
			},
			deleteNote () {
				this.$store.dispatch('deleteNote')
			},
			favNote () {
				this.$store.dispatch('toggleFavorite')
			}
		},
		computed: {
			...mapState([
					'activeNote'
				])
		}
	}
</script>
<style scoped>
	.toolbar {
		height: 100%;
		width: 80px;
		background-color: #333;
		font-size: 32px;
		color: #767676;
		display: flex;
		flex-flow: column nowrap;
		padding-top: 32px;
	}

	i {
		margin-bottom: 24px;
		cursor: pointer;
	}

	i:hover {
		color: #52524E;
		transition: color .3s;
	}

	i.favorite {
		color: #E75151;
	}
</style>