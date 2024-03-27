export interface UserInfoType {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  urlImage: string,
  userStatus: {
    en: string
    ru: string
  },
  isAdmin: boolean,
  userAdmin: {
    en: string
    ru: string
  },
  status: {
    isActivated: boolean,
    isBlocked: boolean
  }
  selected?: boolean
}
