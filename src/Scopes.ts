/**
 * List of all Spotify Scopes
 */
let basicScopes = {
  // images
  ugcImageUpload: 'ugc-image-upload',

  // follow
  userFollowRead: 'user-follow-read',
  userFollowModify: 'user-follow-modify',

  // listening history
  userReadRecentlyPlayed: 'user-read-recently-played',
  userTopRead: 'user-top-read',
  userReadPlaybackPosition: 'user-read-playback-position',

  // library
  userLibraryRead: 'user-library-read',
  userLibraryModify: 'user-library-modify',

  // spotify connect
  userReadPlaybackState: 'user-read-playback-state',
  userReadCurrentlyPlaying: 'user-read-currently-playing',
  userModifyPlaybackState: 'user-modify-playback-state',

  // playlists
  playlistReadCollaborative: 'playlist-read-collaborative',
  playlistModifyPrivate: 'playlist-modify-private',
  playlistModifyPublic: 'playlist-modify-public',
  playlistReadPrivate: 'playlist-read-private',

  // playback
  streaming: 'streaming',
  appRemoteControl: 'app-remote-control',

  // users
  userReadEmail: 'user-read-email',
  userReadPrivate: 'user-read-private',

  // Custom created
  all: '',
}

const allScopes = (() => {
  return Object.keys(basicScopes)
    .reduce((sum, scope) => {
      return sum.concat(basicScopes[scope], '%20')
    }, '')
    .slice(0, -3)
})()

basicScopes.all = allScopes

const scopes = { ...basicScopes }

export default scopes
