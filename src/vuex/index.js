import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	notes: [],
	activeNote: {}
}

const mutations = {
	ADD_NOTE (state) {
		const newNote = {
			text: 'New note',
			favorite: false
		}

		state.notes.push(newNote)
		state.activeNote = newNote
	},

	EDIT_NOTE (state, text) {
		state.activeNote.text = text
	},

	DELETE_NOTE (state) {
		let index = state.notes.indexOf(state.activeNote)
		state.notes.splice(index, 1)
		if (state.notes.length > 0) {
			state.activeNote = state.notes[0]
		} else {
			state.activeNote = {}
		}
	},

	TOGGLE_FAVORITE (state) {
		state.activeNote.favorite = !state.activeNote.favorite
	},

	SET_ACTIVE_NOTE (state, note) {
		state.activeNote = note
	}
}

const actions  = {
	addNote (context) {
		context.commit('ADD_NOTE')
	},

	editNote (context, text) {
		context.commit('EDIT_NOTE', text)
	},

	deleteNote (context) {
		context.commit('DELETE_NOTE')
	},

	toggleFavorite (context) {
		context.commit('TOGGLE_FAVORITE')
	},

	updateActiveNote (context, note) {
		context.commit('SET_ACTIVE_NOTE', note)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})