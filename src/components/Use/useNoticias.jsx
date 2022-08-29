import React, { useContext } from "react";
import { noticiasContextGlobal } from "../Context/tagContextApiProvider";

const useNoticiasBox = () => {
	return useContext(noticiasContextGlobal);
};

export default useNoticiasBox;
