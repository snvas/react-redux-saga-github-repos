import { createSlice } from "@reduxjs/toolkit";

export const gitSlice = createSlice({
	name: 'gits',
	initialState: {
		gits: [],
		isLoading: false
	},
	reducers: {
		getGitsFetch: (state) => {
			state.isLoading = true;
		},
		getGitsSucess: (state, action) => {
			state.gits = action.payload;
			state.isLoading = false;
		},
		getGitsFailure: (state) => {
			state.isLoading = false;
		}
	}
});


export const { getGitsFetch, getGitsSucess, getGitsFailure } = gitSlice.actions;

export default gitSlice.reducer;