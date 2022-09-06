import React from "react"
import Color from "color"
import './CharacterInfo.css'

const colors = {
  ally: Color("#1926a8"),
  enemy: Color("#d42527"),
}

export function CharacterInfo({ character, onClick, selected }) {
  let background
  if (character.enemy) {
    background = colors.enemy
  } else {
    background = colors.ally
  }
  if (character.acted) {
    background = background.desaturate(0.7).darken(0.1)
  }

  const onDivClicked = (event) => onClick(event, character)

  const className = selected 
    ? "character-info-box character-info-selected"
    : "character-info-box";

  return <div class={className} style={{background}} onClick={onDivClicked}>
    <span class="character-info-name">{character.name}</span>
    <span class="character-info-initiative">{character.initiative}</span>
  </div>
}