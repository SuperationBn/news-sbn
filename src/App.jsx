import { TagContextApiProvider } from "./components/Context/tagContextApiProvider";
import FooterSection from "./components/Footer/FooterSection";
import Formulario from "./components/Form/Formulario";
import HeroSection from "./components/Hero/HeroSection";
import Respuestas from "./components/res/Respuestas";

function App() {
	return (
		<TagContextApiProvider>
			<header className="container">
				<HeroSection />
			</header>
			<main>
				<Formulario />
				<Respuestas />
			</main>
			<FooterSection />
		</TagContextApiProvider>
	);
}

export default App;
