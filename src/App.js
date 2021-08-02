import "./styles.css";
import { Header } from "./Header";
import { Player } from "./Player";

// import AddPlayerForm from "./AddPlayerForm";

export const App = (props) => {
  return (
    <div>
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {props.initialPlayers.map((player, index) => (
        <Player
          name={player.name}
          score={player.score}
          // id={player.id}
          key={player.id.toString()}
          index={index}
          // changeScore={this.handleScoreChange}
          // removePlayer={this.handleRemovePlayer}
        />
      ))}
      {/* <AddPlayerForm addPlayer={this.handleAddPlayer} /> */}
    </div>
  );
};
