import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    let { pokes, filter } = this.props;
    if (filter) {
      return (
        <Card.Group itemsPerRow={6}>
          {pokes.filter((p) => p.name.includes(filter)).map(p => <PokemonCard key={p.id} p={p} />)}
        </Card.Group>
      );
    } else {
      return (
        <Card.Group itemsPerRow={6}>
          {pokes.map((p) => (
            <PokemonCard key={p.id} p={p} />
          ))}
        </Card.Group>
      );
    }
  }
}

export default PokemonCollection;
