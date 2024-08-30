// src/oauth/oauthService.ts
import axios from 'axios';

interface OAuthTokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
}

export class OAuthService {
  private clientId: string;
  private clientSecret: string;
  private tokenUrl: string;

  constructor(clientId: string, clientSecret: string, tokenUrl: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.tokenUrl = tokenUrl;
  }

  async getAccessToken(code: string, redirectUri: string): Promise<OAuthTokenResponse> {
    const response = await axios.post<OAuthTokenResponse>(this.tokenUrl, {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });

    return response.data;
  }
}
