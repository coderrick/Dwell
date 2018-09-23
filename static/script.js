const characters = [
  {
    id: 'python',
    name: 'Python',
    smallImg: 'small_py.jpeg',
    largeImg: 'big_py.jpeg',
    height: '5"9',
    birth: 'jp',
    fighting: 'Ansatsuken',
    skills: 'Sleeping anywhere',
    alignment: 'Good',
    alignmentType: 'good',
    active: true,
  },
  {
    id: 'c',
    name: 'C',
    smallImg: 'small_c.png',
    largeImg: 'big_c.png',
    height: '5"9',
    birth: 'us',
    fighting: 'Ansatsuken',
    skills: 'Cooking pasta',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
  },
  {
    id: 'java',
    name: 'Java',
    smallImg: 'small_java.png',
    largeImg: 'big_java.jpeg',
    height: '5"6',
    birth: 'cn',
    fighting: 'Chinese martial arts',
    skills: 'Shooting',
    alignment: 'Lawful Good',
    alignmentType: 'good',
    active: false,
  },
  {
    id: 'c++',
    name: 'C++',
    smallImg: 'small_cpp.png',
    largeImg: 'big_cpp.png',
    height: '6"1',
    birth: 'jm',
    fighting: 'Kickboxing',
    skills: 'Bamboo dancing',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
  },
  {
    id: 'c#',
    name: 'C#',
    smallImg: 'small_csharp.png',
    largeImg: 'big_csharp.png',
    height: '5"5',
    birth: 'gb',
    fighting: 'Shadaloo/Special Forces Training',
    skills: 'Knife throwing',
    alignment: 'Good/Lawful Neutral',
    alignmentType: 'good',
    active: false,
  },
  {
    id: 'r',
    name: 'R',
    smallImg: 'small_r.jpeg',
    largeImg: 'big_r.jpeg',
    height: '7"5',
    birth: 'th',
    fighting: 'Muay Thai',
    skills: 'Breathing underwater',
    alignment: 'Neutral',
    alignmentType: 'neutral',
    active: false,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    smallImg: 'small_js.png',
    largeImg: 'big_js.png',
    height: '7"0',
    birth: 'ru',
    fighting: 'Russian/American Pro Wrestling',
    skills: 'Resistance to cold',
    alignment: 'Evil',
    alignmentType: 'evil',
    active: false,
  },
  {
    id: 'php',
    name: 'PHP',
    smallImg: 'small_php.png',
    largeImg: 'big_php.png',
    height: '5"10',
    birth: 'jp',
    fighting: 'Satsui no Hado/Ansatsuken',
    skills: 'Martial Arts',
    alignment: 'Neutral Evil',
    alignmentType: 'evil',
    active: false,
  },
  {
    id: 'go',
    name: 'Go',
    smallImg: 'small_go.png',
    largeImg: 'big_go.png',
    height: '6"0',
    birth: undefined,
    fighting: 'Psycho Power',
    skills: 'Hypnosis',
    alignment: 'Evil',
    alignmentType: 'evil',
    active: false,
  },
  {
    id: 'swift',
    name: 'Swift',
    smallImg: 'small_swift.png',
    largeImg: 'big_swift.jpg',
    height: '6"4',
    birth: 'br',
    fighting: 'Feral movement, electric attacks',
    skills: 'Hunting',
    alignment: 'Good',
    alignmentType: 'good',
    active: false,
  },
]

Vue.component('character-component', {
  template: `
    <div class="character-box"
         :class="[{ 'active': character.active }]" @click="setActive(character.id)">
      <img class="character-img" :src="character.smallImg" />
      <p class="character-name">{{character.name}}</p>
    </div>
  `,
  props: {
    character: Object
  },
  methods: {
    setActive() {
      characters.map((character) => {
        character.active = this.character.id === character.id;
      });
    }
  }
})

new Vue({
  el: '#app',
  data: {
    activeCharacter: {},
    characters
  },
  computed: {
    getActiveCharacter() {
      return this.filterCharacters();
    },
    getCharacterAlignment() {
      const activeCharacter = this.filterCharacters();
      return activeCharacter.alignmentType;
    }
  },
  methods: {
    filterCharacters() {
      return this.characters.find(character => {
        return character.active;
      });
    }
  }
});
