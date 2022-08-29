import React from "react";
import PaginationControlled from "../Paginacion/Pagination";
import { SectionFooterStyled } from "./Footer.styled";

const FooterSection = () => {
	return (
		<SectionFooterStyled id="categoryForm">
			<div className="paginasContainer">
				<PaginationControlled />
			</div>
			<span>Copyright © SuperationBn</span>
		</SectionFooterStyled>
	);
};

export default FooterSection;
