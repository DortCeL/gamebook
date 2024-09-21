import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const useAuthContext = () => {
	const whateverContext = useContext(AuthContext);

	if (!whateverContext) {
		// it means wrong root e use kora hoise
		throw Error("useAuthContext must be used inside an AuthContextProvider");
	}

	return whateverContext;
};
