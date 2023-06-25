export type User = {
  id: number,
  name: string,
  email: string,
  phone: string,
  role: string,
}

export type ResponsePost = {
  token: string,
  userData: User,
}
