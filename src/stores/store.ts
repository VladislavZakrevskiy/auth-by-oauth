import { CombinedState, Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { rtkApi } from "./rtkInstance";
import { createReducerManager } from "./ReducerManager";
import { UserReducer } from "@/features/auth/model/slice/UserSlice";

export const createReduxStore = (
	initaialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	// nav?: (to: To, options?: NavigateOptions) => void
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
        user: UserReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
		...asyncReducers,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		preloadedState: initaialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
