<template>
	<div class="notelist">
		<header>
			<p class="header-des">NOTES | GHF</p>
			<div class="btn-group">
				<button 
					:class="{ 'selected': show === 'all' }"
					@click="show = 'all'">All Notes</button>
				<button 
					:class="{ 'selected': show === 'favorite' }"
					@click="show = 'favorite'">Favorite</button>
			</div>
		</header>
		<section>
			<ul>
				<li 
					v-for="(note, index) in filterNotes" 
					:key="index" 
					:class="{ 'selected': activeNote === note }"
					@click="updateActive(note)">{{ note.text }}</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		computed: {
			...mapState([
				'notes',
				'activeNote'
			]),
			filterNotes() {
				if (this.show === 'favorite') {
					return this.notes.filter((note) => {
						return note.favorite
					})
				}
				return this.notes
			}
		},
		methods: {
			updateActive (note) {
				this.$store.dispatch('updateActiveNote', note)
			}
		},
		data () {
			return {
				show: 'all'
			}
		}
	}
</script>
<style scoped>
	.notelist {
		width: 300px;
		background-color: #f5f5f5;
		border-right: 1px solid #f5f5f5;
	}
	
	header {
		padding-top: 16px;
	}

	.header-des {
		font-size: 24px;
		color: #333;
	}

	.btn-group {
		margin-top: 12px;
		display: flex;
		justify-content: center;
	}

	button {
		width: 125px;
		height: 32px;
		border: 1px solid #adadad;
		background-color: #FFF;
		cursor: pointer;
		outline: none;
	}

	button:hover {
		background-color: #e6e6e6;
	}

	button:first-child {
		border-right: none;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}

	button:last-child {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	button.selected {
		background-color: #e6e6e6;
	}

	section {
		margin-top: 32px;
	}

	ul {
		list-style: none;
		color: #333;
	}

	li {
		height: 36px;
		line-height: 36px;
		text-align: left;
		padding: 0 16px;
		background-color: #FFF;
		cursor: pointer;
		transition: all .2s;
		border-bottom: 1px solid #f5f5f5;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	li:hover {
		background-color: #eee;
	}

	li.selected {
		background-color: #337ab7;
		color: #FFF;
		transition: all .2s;
	}
</style>