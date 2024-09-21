import { createContext, useReducer } from "react";

export const GameContext = createContext();

export const gameReducer = (state, action) => {
	switch (action.type) {
		case "SET_GAMES":
			return {
				data: action.payload,
			};
		case "CREATE_GAME":
			return {
				data: [action.payload, ...state.data],
			};
		case "DELETE_GAME":
			return {
				data: state.data.filter((d) => d._id != action.payload._id),
			};
		default:
			return state;
	}
};

const initialValue = { data: [] };

// eslint-disable-next-line react/prop-types
export const GameContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(gameReducer, initialValue);

	return (
		<GameContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
};
