import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StateSchema } from "./StateSchema";
import { ActionCreator, ActionCreatorsMapObject, AsyncThunk, bindActionCreators } from "@reduxjs/toolkit";

type BoundAsyncThunk<Action extends ActionCreator<any>> = (
	...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
	[key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[key]> : Actions[key];
};

export const useDispatchedActions = <Actions extends ActionCreatorsMapObject = ActionCreatorsMapObject>(
	actions: Actions,
): BoundActions<Actions> => {
	const dispatch = useAppDispatch();

	return bindActionCreators(actions, dispatch);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
