import React from "react";

import { AttackForm } from "./AttackForm";
import sortBy from "../utils/sortBy";

export class InitiativeTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: props.characters
    }
  }

  onChildSubmit(event) {
    event.preventDefault()
    const target = Number.parseInt(event.target.elements.attack_target.value)
    const source = Number.parseInt(event.target.elements.attack_source.value)
    const value = Number.parseInt(event.target.elements.attack_value.value)
    const type = event.target.elements.attack_type.value

    fetch('/attack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source,
        target,
        value,
        type,
      })
    })
  }

  render() {
    const chars = this.state.characters
    const initiative = sortBy(
      chars.filter(c => !c.acted),
      c => c.initiative
    )

    return <div>
      <h1>Round: {this.props.round}</h1>
      <h1>Initiative: {initiative[0].initiative}</h1>
      {
        chars.map(({ name, initiative, acted }) =>
          <p key={name}>{name}: initiative: {initiative} {acted ? "(done)" : ""}</p>)
      }
      {
        chars.map((char) =>
          <AttackForm character={char} characters={chars} key={char.id} onSubmit={this.onChildSubmit.bind(this)} />)
      }
    </div>
  }
}