export default function sortBy(collection, keyFunction) {
  return collection.sort((a, b) => keyFunction(a) - keyFunction(b))
}