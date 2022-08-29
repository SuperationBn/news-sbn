import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNoticiasBox from "../Use/useNoticias";

export default function PaginationControlled() {
	const { paginacion, handleChange, pagina } = useNoticiasBox();

	const totalPaginasReal = paginacion / 50;

	function topFunction() {
		document.body.scrollTop = 180; // For Safari
		document.documentElement.scrollTop = 180; // For Chrome, Firefox, IE and Opera
	}

	return (
		<Stack spacing={2}>
			<Pagination
				count={Math.ceil(totalPaginasReal)}
				page={pagina}
				color="primary"
				onChange={handleChange}
				onClick={() => topFunction()}
			/>
		</Stack>
	);
}
