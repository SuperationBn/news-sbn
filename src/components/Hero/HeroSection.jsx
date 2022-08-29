import React from "react";
import { SectionHeroStyled } from "./Hero.styled";
import scrollDown from "../../img/scrolldown.png";

const HeroSection = () => {
	return (
		<SectionHeroStyled>
			<div className="containerHero">
				<h1>
					News-<span>SBN</span>
				</h1>
				<img src={scrollDown} alt="" />
			</div>
		</SectionHeroStyled>
	);
};

export default HeroSection;
