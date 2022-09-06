import React from "react";

import { AttackForm } from "./AttackForm";
import { CharacterInfo } from "./CharacterInfo";
import { CharacterEditor } from './CharacterEditor';
import sortBy from "../utils/sortBy";
import { useParams } from "react-router";

export function InitiativeTracker({ state: { characters, round } }) {
  const { combat } = useParams()

  const [selected, setSelected] = React.useState(false)

  const onChildSubmit = event => {
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
      }),
    })
  }

  const onEditSubmit = (event, character) => {
    event.preventDefault()
    fetch(`/edit/${combat}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: character.id,
      }),
    })
  }

  const onInfoClick = (event, character) => {
    event.preventDefault()
    setSelected(character)
  }

  sortBy(characters, c => -c.initiative)

  const nextUp = characters.find(c => !c.acted)

  return <div>
    <div class="sidebar">
      <h1>Round: {round}</h1>
      {
        characters.map((char) =>
          <CharacterInfo 
            character={char}
            key={char.name}
            onClick={onInfoClick}
            selected={selected && selected.id === char.id} />)
      }
    </div>
    <div class="main-body">
      <h2>Next up: {nextUp.name}</h2>
      <AttackForm character={nextUp} characters={characters} onSubmit={onChildSubmit} />
      <br />
      { selected &&
        <CharacterEditor character={selected} onSubmit={(e) => onEditSubmit(e, selected)} /> }
    </div>
  </div>
}