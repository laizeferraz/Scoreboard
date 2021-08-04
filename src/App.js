import React from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { Player } from "./components/Player";
import { useState } from "react";

import { AddPlayerForm } from "./components/AddPlayerForm";

export const App = () => {
  const [score, setScore] = useState();
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);
  // generate players ID

  let prevPlayerId = 4;

  function handleScoreChange(index, delta) {
    setScore((players[index].score += delta));
    // console.log("index:" + index, "delta: " + delta);
  }

  function handleAddPlayer(name) {
    setPlayers(...players, {
      name,
      score: 0,
      id: prevPlayerId++
    });
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
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
};
