type FacebookData = {
  email: string
  name: string
  facebookId: string
}

type AccountData = {
  id: string
  name?: string
}

export class FacebookAccount {
  id?: string
  email: string
  name: string
  facebookId: string

  constructor (fbData: FacebookData, accountData?: AccountData) {
    this.id = accountData?.id
    this.email = fbData.email
    this.name = accountData?.name ?? fbData.name
    this.facebookId = fbData.facebookId
  }
}
