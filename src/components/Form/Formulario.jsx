import React from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import { typography } from "@mui/system";
import { ContainerSelector } from "./Form.styled";
import useNoticiasBox from "../Use/useNoticias";

const CATEGORIAS = [
	{ value: "general", label: "General" },
	{ value: "business", label: "Business" },
	{ value: "entertainment", label: "Entertainment" },
	{ value: "health", label: "Health" },
	{ value: "science", label: "Science" },
	{ value: "sports", label: "Sports" },
	{ value: "technology", label: "Technology" },
];

const Formulario = () => {
	const { categorias, cambiarCategorias } = useNoticiasBox();

	return (
		<ContainerSelector>
			<FormControl fullWidth>
				<InputLabel
					sx={{ bgcolor: "rgb(243, 238, 238)", px: "0.5rem" }}
					id="demo-simple-select-label"
				>
					categories
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					label="Age"
					value={categorias}
					onChange={cambiarCategorias}
				>
					{CATEGORIAS.map(elements => {
						return (
							<MenuItem key={elements.value} value={elements.value}>
								{elements.label}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</ContainerSelector>
	);
};

export default Formulario;
