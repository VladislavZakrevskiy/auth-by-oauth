import { AppRouter } from "@/routes";
import { AppProvider } from "@/providers/AppProvider";
import { Navbar } from "./components/Navbar/NavBar";

function App() {
	return (
		<AppProvider>
			<Navbar />
			<AppRouter />
		</AppProvider>
	);
}

export default App;
