export type LoginResponseType = {
  error: boolean,
  message: {
    en: string,
    ru: string
  },
  userId: string,
  accessToken: string,
  refreshToken: string
}
