import { AppRouter } from "@/routes";
import { AppProvider } from "@/providers/AppProvider";

function App() {
	return (
		<AppProvider>
			<AppRouter />
		</AppProvider>
	);
}

export default App;
