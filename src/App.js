import "./styles.css";
import { Header } from "./Header";
import { Player } from "./Player";
import { useState } from "react";

// import AddPlayerForm from "./AddPlayerForm";

export const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      id: 1
    },
    {
      name: "Treasure",
      id: 2
    },
    {
      name: "Ashley",
      id: 3
    },
    {
      name: "James",
      id: 4
    }
  ]);

  function handleRemovePlayer(id) {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
  }
  return (
    <div>
      <Header title="Scoreboard" totalPlayers={players.length} />
      {players.map((player, index) => (
        <Player
          name={player.name}
          // score={player.score}
          id={player.id}
          key={player.id.toString()}
          index={index}
          // changeScore={this.handleScoreChange}
          removePlayer={handleRemovePlayer}
        />
      ))}
      {/* <AddPlayerForm addPlayer={this.handleAddPlayer} /> */}
    </div>
  );
};
