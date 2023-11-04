import { useDispatchedActions } from "@/stores/hooks";
import {
	CaseReducerActions,
	CreateSliceOptions,
	SliceCaseReducers,
	createSlice,
} from "@reduxjs/toolkit";

export const buildSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
	options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
	const slice = createSlice(options);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
	const useActions = () => useDispatchedActions<CaseReducerActions<CaseReducers, Name>>(slice.actions);

	return {
		...slice,
		useActions,
	};
};
