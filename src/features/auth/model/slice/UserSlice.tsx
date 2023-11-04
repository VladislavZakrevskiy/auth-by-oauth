import { User } from "@/types/User";
import { buildSlice } from "@/utils/buildSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
	user: User | null;
}

const initialState: UserState = {
	user: null,
};

const userSlice = buildSlice({
	initialState,
	name: "user",
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
	},
});

export const { reducer: UserReducer, useActions: useUserActions, actions: UserActions } = userSlice;
