import "./App.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <div className="App">
        <h1>Prism UI</h1>
        <h2>Dorkodu's UI Design System @ Web</h2>
      </div>
    </MantineProvider>
  );
}

export default App;
