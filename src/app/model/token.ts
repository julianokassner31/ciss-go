export class Token {
  accessToken: string;
  expiresIn: string;
  refreshToken: string;
  scope: string;
  tokenType: string;

  constructor(data: any) {
    if (data) {
      this.accessToken = data.accessToken;
      this.expiresIn = data.expiresIn;
      this.refreshToken = data.refreshToken;
      this.scope = data.scope;
      this.tokenType = data.tokenType;
    }
  }
}
