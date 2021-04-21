import * as React from 'react'
import { getHash } from './getHash'
export interface SpotifyAuthListenerProps {
  noCookie: boolean
  localStorage: boolean
  onAccessToken: (token: string) => void
}

const SpotifyAuthListener: React.FC<SpotifyAuthListenerProps> = (
  props: SpotifyAuthListenerProps
) => {
  React.useEffect(() => {
    const accessToken = getHash().access_token

    if (accessToken) {
      if (!props.noCookie) {
        document.cookie = `spotifyAuthToken=${accessToken}; max-age=${60 * 60};`
      }
      if (props.localStorage) {
        window.localStorage.setItem('spotifyAuthToken', accessToken)
      }
      props.onAccessToken(accessToken)
    }
  }, [])

  return null
}


export default SpotifyAuthListener;
