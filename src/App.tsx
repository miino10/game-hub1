import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "nav" "main" "aside"`,
      }}
    >
      <GridItem area="nav" bg="yellow">
        nav
      </GridItem>
      <GridItem area="main" bg="red">
        main
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gray">
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
