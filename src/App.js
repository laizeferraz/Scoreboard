import React, { useState } from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { Player } from "./components/Player";

import { AddPlayerForm } from "./components/AddPlayerForm";

export const App = () => {
  const [score, setScore] = useState(0);
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: score,
      id: 1
    },
    {
      name: "Treasure",
      score: score,
      id: 2
    },
    {
      name: "Ashley",
      score: score,
      id: 3
    },
    {
      name: "James",
      score: score,
      id: 4
    }
  ]);

  function handleScoreChange(index, delta) {
    setScore((players[index].score += delta));
    // console.log("index:" + index, "delta: " + delta);
  }

  function handleAddPlayer(name) {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        name,
        score,
        id: players.length + 1
      }
    ]);
  }

  function handleRemovePlayer(id) {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
  }
  return (
    <div>
      <Header title="Scoreboard" players={players} />
      {players.map((player, index) => (
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          index={index}
          changeScore={handleScoreChange}
          removePlayer={handleRemovePlayer}
        />
      ))}
      <AddPlayerForm score={score} addPlayer={handleAddPlayer} />
    </div>
  );
};
