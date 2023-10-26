import { User } from "@/types/User";
import { createSelectorFunctions } from "auto-zustand-selectors-hook";
import { create } from "zustand";

type State = {
	user: User | null;
};

type Action = {
	setUser: (user: User) => void;
	deleteUser: () => void;
	getUser: () => void
};

const useUserStore = create<State & Action>((set) => ({
	user: null,
	setUser: (user) =>
		set(() => ({
			user,
		})),
	deleteUser: () =>
		set(() => ({
			user: null,
		})),
	getUser: () => set((state) => {
		return state
	})
}));

export const useStore = createSelectorFunctions(useUserStore);

