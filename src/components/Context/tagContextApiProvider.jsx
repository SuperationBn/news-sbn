import { createContext, useEffect, useState } from "react";

const noticiasContextGlobal = createContext();

import React from "react";

const TagContextApiProvider = ({ children }) => {
	const [categorias, setCategorias] = useState("general");
	const [respuesta, setRespuestas] = useState([]);
	const [paginacion, setPaginacion] = useState(0);
	const [pagina, setPagina] = useState(1);

	const cambiarCategorias = e => {
		return setCategorias(e.target.value);
	};

	const handleChange = (event, value) => {
		setPagina(value);
		// console.log(pagina);
	};

	const apiKey = import.meta.env.VITE_API_KEY;

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": `${apiKey}`,
			"X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
		},
	};

	useEffect(() => {
		async function callCageriaApi() {
			try {
				const url = `https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=${categorias}&lang=en&sort_by=relevancy&page=${pagina}&media=True`;

				const peticion = await fetch(url, options);
				const respuestas = await peticion.json();

				if (respuestas.status === "ok") {
					setRespuestas(respuestas.articles);
					setPaginacion(respuestas.total_pages);
					setPagina(1);
				}
			} catch (error) {
				console.log(error);
			}
		}

		callCageriaApi();
	}, [categorias]);

	useEffect(() => {
		async function callCageriaApi() {
			try {
				const url = `https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=${categorias}&lang=en&sort_by=relevancy&page=${pagina}&media=True`;
				const peticion = await fetch(url, options);
				const respuestas = await peticion.json();

				if (respuestas.status === "ok") {
					setRespuestas(respuestas.articles);
					setPaginacion(respuestas.total_pages);
				}
			} catch (error) {
				console.log(error);
			}
		}

		callCageriaApi();
	}, [pagina]);

	return (
		<noticiasContextGlobal.Provider
			value={{
				categorias,
				cambiarCategorias,
				respuesta,
				paginacion,
				handleChange,
				pagina,
			}}
		>
			{children}
		</noticiasContextGlobal.Provider>
	);
};

export { noticiasContextGlobal, TagContextApiProvider };
