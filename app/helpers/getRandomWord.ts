import json from '../words.json'

export default function getRandomWord() {
  return json.words[Math.floor(Math.random() * json.words.length)]
}
