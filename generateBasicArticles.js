const fighters = [
  {
    id: 1,
    name: 'Mario',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/8/83/Mario_SSBB.jpg/570px-Mario_SSBB.jpg'
  },
  {
    id: 2,
    name: 'Luigi',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/6/67/Luigi_SSBB.jpg/613px-Luigi_SSBB.jpg'
  },
  {
    id: 3,
    name: 'Peach',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/d/d4/Peach_SSBB.jpg/516px-Peach_SSBB.jpg'
  },
  {
    id: 4,
    name: 'Bowser',
    imgUrl: 'https://ssb.wiki.gallery/images/a/ac/Bowser_SSBB.jpg'
  },
  {
    id: 5,
    name: 'Yoshi',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/a/a5/Yoshi_SSBB.jpg/600px-Yoshi_SSBB.jpg'
  },
  {
    id: 6,
    name: 'Donkey Kong',
    imgUrl: 'https://ssb.wiki.gallery/images/2/2c/Donkey_Kong_SSBB.jpg'
  },
  {
    id: 7,
    name: 'Kirby',
    imgUrl: 'https://ssb.wiki.gallery/images/a/ae/Kirby_SSBB.jpg'
  },
  {
    id: 8,
    name: 'Link',
    imgUrl: 'https://ssb.wiki.gallery/images/b/b8/Link_SSBB.jpg'
  },
  {
    id: 9,
    name: 'Zelda',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/8/8f/Zelda_SSBB.jpg/480px-Zelda_SSBB.jpg'
  },
  {
    id: 10,
    name: 'Sheik',
    imgUrl: 'https://ssb.wiki.gallery/images/b/bb/Sheik_SSBB.jpg'
  },
  {
    id: 11,
    name: 'Ganondorf',
    imgUrl: 'https://ssb.wiki.gallery/images/4/4b/Ganondorf_SSBB.jpg'
  },
  {
    id: 12,
    name: 'Samus',
    imgUrl: 'https://ssb.wiki.gallery/images/e/eb/Samus_SSBB.jpg'
  },
  {
    id: 13,
    name: 'Fox',
    imgUrl: 'https://ssb.wiki.gallery/images/e/ee/Fox_SSBB.jpg'
  },
  {
    id: 14,
    name: 'Falco',
    imgUrl: 'https://ssb.wiki.gallery/images/c/c3/Falco_SSBB.jpg'
  },
  {
    id: 15,
    name: 'Pikachu',
    imgUrl: 'https://ssb.wiki.gallery/images/f/f5/Pikachu_SSBB.jpg'
  },
  {
    id: 16,
    name: 'Jigglypuff',
    imgUrl: 'https://ssb.wiki.gallery/images/d/d8/Jigglypuff_SSBB.jpg'
  },
  {
    id: 17,
    name: 'Captain Falcon',
    imgUrl: 'https://ssb.wiki.gallery/images/c/c3/Captain_Falcon_SSBB.jpg'
  },
  {
    id: 18,
    name: 'Ness',
    imgUrl: 'https://ssb.wiki.gallery/images/6/63/Ness_SSBB.jpg'
  },
  {
    id: 19,
    name: 'Ice Climbers',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/1/1f/Ice_Climbers_SSBB.jpg/613px-Ice_Climbers_SSBB.jpg'
  },
  {
    id: 20,
    name: 'Marth',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/d/d4/Marth_SSBB.jpg/613px-Marth_SSBB.jpg'
  },
  {
    id: 21,
    name: 'Mr. Game & Watch',
    imgUrl: 'https://ssb.wiki.gallery/images/9/9c/Mr._Game_%26_Watch_SSBB.jpg'
  },
  {
    id: 22,
    name: 'Diddy Kong',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/5/5a/Diddy_Kong_SSBB.jpg/613px-Diddy_Kong_SSBB.jpg'
  },
  {
    id: 23,
    name: 'Toon Link',
    imgUrl: 'https://ssb.wiki.gallery/images/2/2a/Toon_Link_SSBB.jpg'
  },
  {
    id: 24,
    name: 'Zero Suit Samus',
    imgUrl: 'https://ssb.wiki.gallery/images/1/10/Zero_Suit_Samus_SSBB.jpg'
  },
  {
    id: 25,
    name: 'Meta Knight',
    imgUrl: 'https://ssb.wiki.gallery/images/4/45/Meta_Knight_SSBB.jpg'
  },
  {
    id: 26,
    name: 'King Dedede',
    imgUrl: 'https://ssb.wiki.gallery/images/1/17/King_Dedede_SSBB.jpg'
  },
  {
    id: 27,
    name: 'Wolf',
    imgUrl: 'https://ssb.wiki.gallery/images/2/2d/Wolf_SSBB.jpg'
  },
  {
    id: 28,
    name: 'Pokemon Trainer',
    imgUrl:
      'https://ssb.wiki.gallery/images/9/96/Pokemon_Trainer_%28solo%29_SSBB.jpg'
  },
  {
    id: 29,
    name: 'Lucario',
    imgUrl: 'https://ssb.wiki.gallery/images/d/d6/Lucario_SSBB.jpg'
  },
  {
    id: 30,
    name: 'Lucas',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/9/91/Lucas_SSBB.jpg/613px-Lucas_SSBB.jpg'
  },
  {
    id: 31,
    name: 'Ike',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/6/66/Ike_SSBB.jpg/605px-Ike_SSBB.jpg'
  },
  {
    id: 32,
    name: 'Pit',
    imgUrl:
      'https://ssb.wiki.gallery/images/thumb/d/d0/Pit_SSBB.jpg/600px-Pit_SSBB.jpg'
  },
  {
    id: 33,
    name: 'Wario',
    imgUrl: 'https://ssb.wiki.gallery/images/1/14/Wario_SSBB.jpg'
  },
  {
    id: 34,
    name: 'Olimar',
    imgUrl: 'https://ssb.wiki.gallery/images/3/34/Olimar_SSBB.jpg'
  },
  {
    id: 35,
    name: 'R.O.B.',
    imgUrl: 'https://ssb.wiki.gallery/images/8/83/R.O.B._SSBB.jpg'
  },
  {
    id: 36,
    name: 'Snake',
    imgUrl: 'https://ssb.wiki.gallery/images/d/db/Snake_SSBB.jpg'
  },
  {
    id: 37,
    name: 'Sonic',
    imgUrl: 'https://ssb.wiki.gallery/images/4/4a/Sonic_SSBB.jpg'
  }
]

const path = require('path')
const fs = require('fs')

const contentDir = path.join(__dirname, 'content/brawl/fighters/')

fighters.forEach((fighter) => {
  const fileName = `${fighter.name
    .trim()
    .replace(' ', '-')
    .toLocaleLowerCase()}.md`
  fs.writeFileSync(
    path.join(contentDir, fileName),
    `---
title: ${fighter.name}
imageUrl: ${fighter.imgUrl}
id: ${fighter.id}
---

# ${fighter.name}
  `
  )
})
