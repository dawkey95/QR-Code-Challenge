import { ThemeProvider } from '@mui/material/styles';
import Card from './components/Card';
import theme from './components/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Card />
		</ThemeProvider>
	);
}

export default App;
