import { Grid, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

import GameCard from "../components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const Skeletons = [1, 2, 3, 4, 5, 6];
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text> {error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          Skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)}
        {games.map((game) => (
          // <li key={game.id}>{game.name}</li>
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
