import { allPlaylists, songs as allSongs } from '../../lib/data'

export async function GET({ params, request }) {
  // call DB or API to get data

  // get ID from url search params
  const { url } = request
  // const searchParams = new URLSearchParams(url.split('?')[1])
  // searchParams.get('id')
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  // get playlist by id
  const playlist = allPlaylists.find((playlist) => playlist.id === id)

  // get songs by album id
  const songs = allSongs.filter((song) => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
