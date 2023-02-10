import { AxiosInstance, AxiosResponse, RawAxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { JwtToken } from "../../auth/types/JwtToken";
import { TokenRequestRequest } from "./requests/TokenRequestRequest";
import { TokenDto } from "./responses/TokenDto";

const defaultHeaders: RawAxiosRequestHeaders = {
  tenant: "root",
};

const defaultConfig: RawAxiosRequestConfig = {
  headers: defaultHeaders,
};

export async function tokenRequest(client: AxiosInstance, data: TokenRequestRequest): Promise<AxiosResponse<TokenDto>> {
  return await client.post<TokenDto>("/api/tokens", data, defaultConfig);
}

export async function tokenRefresh(client: AxiosInstance): Promise<AxiosResponse<TokenDto>> {
  return await client.get<TokenDto>("/api/tokens/refresh", defaultConfig);
}

export async function createPostRequest(
  client: AxiosInstance,
  url: string,
  token: JwtToken,
  data: unknown
): Promise<AxiosResponse> {
  const config: RawAxiosRequestConfig = {
    ...defaultConfig,
    headers: { ...defaultHeaders, Authorization: `Bearer ${token}` },
  };

  return await client.post(url, data, config);
}

export async function createGetRequest(client: AxiosInstance, url: string, token: JwtToken): Promise<AxiosResponse> {
  const config: RawAxiosRequestConfig = {
    ...defaultConfig,
    headers: { ...defaultHeaders, Authorization: `Bearer ${token}` },
  };

  return await client.get(url, config);
}
