import { useContext } from "react";
import { GameContext } from "../context/game.context";

export const useGameContext = () => {
	const whateverContext = useContext(GameContext);

	if (!whateverContext) {
		// it means wrong root e use kora hoise
		throw Error("useGameContext must be used inside an GameContextProvider");
	}

	return whateverContext;
};
