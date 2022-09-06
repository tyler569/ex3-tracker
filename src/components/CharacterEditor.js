import './CharacterEditor.css'

export function CharacterEditor({character, onSubmit}) {
  return <form onSubmit={onSubmit} class="editor-form">
    <label>Name: </label>
    <input type="textbox" name="name" defaultValue={character.name} />
    <br />
    <label>Initiative:</label>
    <input type="textbox" name="initiative" defaultValue={character.initiative} />
    <br />
    <label>Faction:</label>
    <select name="faction" value={character.enemy ? 'enemy' : 'ally'}>
      <option value="ally">Ally</option>
      <option value="enemy">Enemy</option>
    </select>
    <br />
    <input type="submit" value="Submit" />
  </form>
}