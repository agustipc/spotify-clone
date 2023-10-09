import { colors } from './colors.ts'

export interface Playlist {
  id: string
  albumId: number
  title: string
  color: (typeof colors)[keyof typeof colors]
  cover: string
  artists: string[]
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: 'For All The Dogs',
    color: colors.black,
    cover:
      'https://media.pitchfork.com/photos/6505c8ca90b65beacc778d9d/1:1/w_320,c_limit/Drake-For-all-the-Dogs.jpg',
    artists: ['Drake', 'Teezo Touchdown', '21 Savage']
  },
  {
    id: '2',
    albumId: 2,
    title: 'Autumn Variations',
    color: colors.white,
    cover:
      'https://people.com/thmb/CEzKyneF2g8XkZeSAZNU-nK4JTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/Ed-sheeran-autumn-variations-artwork-082423pg-92f71debab584da28c415787c62e7c3c.jpg',
    artists: ['Ed Sheeran']
  },
  {
    id: '3',
    albumId: 3,
    title: 'Its The End Of The World But Its A Beautiful Day',
    color: colors.blue,
    cover:
      'https://upload.wikimedia.org/wikipedia/en/8/8e/Thirty_Seconds_to_Mars_-_It%27s_the_End_of_the_World_but_It%27s_a_Beautiful_Day.png',
    artists: ['Thirty Seconds to Mars']
  },
  {
    id: '4',
    albumId: 4,
    title: 'Blue Note Study Time',
    color: colors.blue,
    cover: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Raimu', 'Yasumu']
  },
  {
    id: '5',
    albumId: 5,
    title: 'Chau Saura Session',
    color: colors.purple,
    cover: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Chau Saura', 'amies', 'kyu']
  }
]

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + '_more'
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + '_side'
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists
]

export interface Song {
  id: number
  albumId: number
  title: string
  image: string
  artists: string[]
  album: string
  duration: string
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: 'Virginia Beach',
    image: `https://media.pitchfork.com/photos/6505c8ca90b65beacc778d9d/1:1/w_320,c_limit/Drake-For-all-the-Dogs.jpg`,
    artists: ['Drake'],
    album: 'For All The Dogs',
    duration: '4:11'
  },
  {
    id: 2,
    albumId: 1,
    title: 'Amen',
    image: `https://media.pitchfork.com/photos/6505c8ca90b65beacc778d9d/1:1/w_320,c_limit/Drake-For-all-the-Dogs.jpg`,
    artists: ['Drake', 'Teezo Touchdown'],
    album: 'For All The Dogs',
    duration: '2:21'
  },
  {
    id: 3,
    albumId: 1,
    title: 'Calling For You',
    image: `https://media.pitchfork.com/photos/6505c8ca90b65beacc778d9d/1:1/w_320,c_limit/Drake-For-all-the-Dogs.jpg`,
    artists: ['Drake', '21 Savage'],
    album: 'For All The Dogs',
    duration: '4:46'
  },
  {
    id: 4,
    albumId: 1,
    title: 'Fear Of Heights',
    image: `https://media.pitchfork.com/photos/6505c8ca90b65beacc778d9d/1:1/w_320,c_limit/Drake-For-all-the-Dogs.jpg`,
    artists: ['Drake'],
    album: 'For All The Dogs',
    duration: '2:35'
  },
  {
    id: 5,
    albumId: 1,
    title: 'Daylight',
    image: `https://media.pitchfork.com/photos/6505c8ca90b65beacc778d9d/1:1/w_320,c_limit/Drake-For-all-the-Dogs.jpg`,
    artists: ['Drake'],
    album: 'For All The Dogs',
    duration: '2:44'
  },
  {
    id: 1,
    albumId: 2,
    title: 'Magical',
    image: `https://people.com/thmb/CEzKyneF2g8XkZeSAZNU-nK4JTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/Ed-sheeran-autumn-variations-artwork-082423pg-92f71debab584da28c415787c62e7c3c.jpg`,
    artists: ['Ed Sheeran'],
    album: 'Autumn Variations',
    duration: '3:14'
  },
  {
    id: 2,
    albumId: 2,
    title: 'England',
    image: `https://people.com/thmb/CEzKyneF2g8XkZeSAZNU-nK4JTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/Ed-sheeran-autumn-variations-artwork-082423pg-92f71debab584da28c415787c62e7c3c.jpg`,
    artists: ['Ed Sheeran'],
    album: 'Autumn Variations',
    duration: '3:47'
  },
  {
    id: 3,
    albumId: 2,
    title: 'Amazing',
    image: `https://people.com/thmb/CEzKyneF2g8XkZeSAZNU-nK4JTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/Ed-sheeran-autumn-variations-artwork-082423pg-92f71debab584da28c415787c62e7c3c.jpg`,
    artists: ['Ed Sheeran'],
    album: 'Autumn Variations',
    duration: '4:06'
  },
  {
    id: 4,
    albumId: 2,
    title: 'Plastic Bag',
    image: `https://people.com/thmb/CEzKyneF2g8XkZeSAZNU-nK4JTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/Ed-sheeran-autumn-variations-artwork-082423pg-92f71debab584da28c415787c62e7c3c.jpg`,
    artists: ['Ed Sheeran'],
    album: 'Autumn Variations',
    duration: '3:49'
  },
  {
    id: 5,
    albumId: 2,
    title: 'Blue',
    image: `https://people.com/thmb/CEzKyneF2g8XkZeSAZNU-nK4JTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/Ed-sheeran-autumn-variations-artwork-082423pg-92f71debab584da28c415787c62e7c3c.jpg`,
    artists: ['Ed Sheeran'],
    album: 'Autumn Variations',
    duration: '2:34'
  },
  {
    id: 1,
    albumId: 3,
    title: 'Stuck',
    image: `https://upload.wikimedia.org/wikipedia/en/8/8e/Thirty_Seconds_to_Mars_-_It%27s_the_End_of_the_World_but_It%27s_a_Beautiful_Day.png`,
    artists: ['Thirty Seconds to Mars'],
    album: 'Its The End Of The World But Its A Beautiful Dayn',
    duration: '3:03'
  },
  {
    id: 2,
    albumId: 3,
    title: 'Life Is Beautiful',
    image: `https://upload.wikimedia.org/wikipedia/en/8/8e/Thirty_Seconds_to_Mars_-_It%27s_the_End_of_the_World_but_It%27s_a_Beautiful_Day.png`,
    artists: ['Thirty Seconds to Mars'],
    album: 'Its The End Of The World But Its A Beautiful Dayn',
    duration: '3:19'
  },
  {
    id: 3,
    albumId: 3,
    title: 'Seasons',
    image: `https://upload.wikimedia.org/wikipedia/en/8/8e/Thirty_Seconds_to_Mars_-_It%27s_the_End_of_the_World_but_It%27s_a_Beautiful_Day.png`,
    artists: ['Thirty Seconds to Mars'],
    album: 'Its The End Of The World But Its A Beautiful Dayn',
    duration: '2:46'
  },
  {
    id: 4,
    albumId: 3,
    title: 'Get Up Kid',
    image: `https://upload.wikimedia.org/wikipedia/en/8/8e/Thirty_Seconds_to_Mars_-_It%27s_the_End_of_the_World_but_It%27s_a_Beautiful_Day.png`,
    artists: ['Thirty Seconds to Mars'],
    album: 'Its The End Of The World But Its A Beautiful Dayn',
    duration: '2:58'
  },
  {
    id: 5,
    albumId: 3,
    title: 'Love These Days',
    image: `https://upload.wikimedia.org/wikipedia/en/8/8e/Thirty_Seconds_to_Mars_-_It%27s_the_End_of_the_World_but_It%27s_a_Beautiful_Day.png`,
    artists: ['Thirty Seconds to Mars'],
    album: 'Its The End Of The World But Its A Beautiful Dayn',
    duration: '3:01'
  },
  {
    id: 1,
    albumId: 4,
    title: 'Lunar',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:40'
  },
  {
    id: 2,
    albumId: 4,
    title: 'Go go go!',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:20'
  },
  {
    id: 3,
    albumId: 4,
    title: 'Keep focus!',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '2:40'
  },
  {
    id: 4,
    albumId: 4,
    title: 'JavaScript is the way',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:10'
  },
  {
    id: 5,
    albumId: 4,
    title: 'No more TypeScript for me',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '2:10'
  },
  {
    id: 1,
    albumId: 5,
    title: 'Moonlit Walk',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:12'
  },
  {
    id: 2,
    albumId: 5,
    title: 'Coffee Daze',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '4:07'
  },
  {
    id: 3,
    albumId: 5,
    title: 'Skyline Serenade',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:50'
  },
  {
    id: 4,
    albumId: 5,
    title: 'Urban Echoes',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:30'
  },
  {
    id: 5,
    albumId: 5,
    title: "Night's End",
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '4:20'
  }
]
