import { User } from "@/types/User";
import { createSelectorFunctions } from "auto-zustand-selectors-hook";
import { create } from "zustand";

export type Provider = "GITHUB" | "GOOGLE" | "VK";

type State = {
	user: User | null;
	authedBy: Provider | "";
};

type Action = {
	setUser: (user: User) => void;
	deleteUser: () => void;
	setAuthedBy: (provider: Provider) => void;
};

const useUserStore = create<State & Action>((set) => ({
	user: null,
	authedBy: "",
	setUser: (user) =>
		set(() => ({
			user,
		})),
	deleteUser: () =>
		set(() => ({
			user: null,
		})),
	setAuthedBy: (provider) => set((state) => ({ ...state, authedBy: provider })),
}));

export const useStore = createSelectorFunctions(useUserStore);
