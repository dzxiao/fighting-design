export type avatarFit =
  | 'fill'
  | 'contain'
  | 'cover'
  | 'none'
  | 'scale-down'
  | ''

export type avatarSize = 'large' | 'middle' | 'small' | 'mini'

export interface callbackInterface {
  (params: boolean): void
}
