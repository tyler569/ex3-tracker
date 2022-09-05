const attackTypes = [
  "withering",
  "decisive",
]

export function AttackForm({character, characters, onSubmit}) {
  return <form onSubmit={onSubmit}>
    <input type="hidden" name="attack_source" value={character.id} />
    <label>{character.name} makes a </label>
    <select name="attack_type">
      <option></option>
      {
        attackTypes.map((type) => <option value={type} key={type}>{type}</option>)
      }
    </select>
    <label> attack against </label>
    <select name="attack_target">
      <option></option>
      {
        characters.map(({name, id}) => <option value={id} key={id}>{name}</option>)
      }
    </select>
    <label> rolling </label>
    <input type="number" name="attack_value" />
    <input type="submit" value="Attack!" />
  </form>
}