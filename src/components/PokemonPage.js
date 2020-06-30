import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const URL = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokes: [],
    search: "",
  };

  componentDidMount() {
    fetch(URL)
      .then((r) => r.json())
      .then((json) => this.setState({ pokes: json }));
  }

  searchBar = (e) => {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  };

  postPoke(newPoke){
    fetch(URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPoke)
      })
  }

  submitPoke = (e) => {
    let newPoke = {
      name: e.target.name.value,
      hp: e.target.hp.value,
      sprites: {
        front: e.target.frontUrl.value,
        back: e.target.backUrl.value,
      },
    };
    console.log(newPoke)
    this.setState({pokes: [newPoke, ...this.state.pokes]})
    this.postPoke(newPoke)
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.submitPoke} />
        <br />
        <Search searchInput={this.searchBar} />
        <br />
        <PokemonCollection
          pokes={this.state.pokes}
          filter={this.state.search}
        />
      </Container>
    );
  }
}

export default PokemonPage;
