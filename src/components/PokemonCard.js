import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    flipped: false,
  };

  flipCard = () => {
    this.setState({flipped: !this.state.flipped})
  }

  render() {
    let { name, hp, sprites } = this.props.p;
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img alt="oh no!" src={this.state.flipped ? sprites.back : sprites.front} />
          </div>
          <div className="content">
            <div className="header">
              {name[0].toUpperCase() + name.slice(1)}
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
