import axios, { type AxiosResponse } from "axios";
import type { Envelope } from "../models/envelope";

const API_URL: string = "http://localhost:5296/api/";

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export class AccountsService {
  static async loginAsync(
    email: string,
    password: string
  ): Promise<AxiosResponse<Envelope<LoginResponse>>> {
    return await axios.post<Envelope<LoginResponse>>(
      API_URL + "accounts/login",
      {
        email,
        password,
      }
    );
  }

  static async registerAsync(
    //TODO переделать
    email: string,
    password: string
  ): Promise<AxiosResponse<Envelope<LoginResponse>>> {
    return await axios.post<Envelope<LoginResponse>>(
      API_URL + "accounts/login",
      {
        email,
        password,
      }
    );
  }
}
