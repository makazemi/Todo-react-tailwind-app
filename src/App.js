import { ThemeProvider } from './context/ThemeContext.js';
import Container from './component/Container';
function App() {
  return (
    <ThemeProvider >
      <Container/>

    </ThemeProvider>
  );
}

export default App;
