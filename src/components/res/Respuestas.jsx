import React from "react";
import RecipeReviewCard from "../Card/CardNoticias";
import useNoticiasBox from "../Use/useNoticias";
import { SectionRespuestasStyled } from "./Respuesta.styled";

const Respuestas = () => {
	const { respuesta } = useNoticiasBox();
	// console.log(respuesta);

	return (
		<SectionRespuestasStyled>
			<article className="gridNoticias">
				{respuesta.length > 0 &&
					respuesta.map((datos, idx) => {
						return <RecipeReviewCard key={idx} respuestasApi={datos} />;
					})}
			</article>
		</SectionRespuestasStyled>
	);
};

export default Respuestas;
