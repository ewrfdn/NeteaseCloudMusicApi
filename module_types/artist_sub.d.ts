import { RequestBaseConfig } from './base'

export interface ArtistSubRequestConfig extends RequestBaseConfig {
  artistId: string
  t: 1 | 0
}
