export default interface Server {
  id: number;
  group_id: string[];
  route_id: null;
  name: string;
  parent_id: number | null;
  host: string;
  port: number;
  server_port: number;
  tls?: number;
  tags: null;
  rate: string;
  network?: Network;
  rules?: null;
  networkSettings?: NetworkSettings | null;
  tlsSettings?: TLSSettings | null;
  ruleSettings?: null;
  dnsSettings?: null;
  show: number;
  sort: number;
  created_at: number;
  updated_at: number;
  type: ServerType;
  last_check_at: null | string;
  is_online: 0 | 1;
  cache_key: string;
  allow_insecure?: number;
  server_name?: string;
}

export enum Network {
  TCP = "tcp",
  Ws = "ws"
}

export interface NetworkSettings {
  path?: string;
  headers?: NetworkSettingsHeaders;
  acceptProxyProtocol?: string;
  header?: Header;
}

export interface Header {
  type: string;
  request: Request;
  response: Response;
}

export interface Request {
  method: string;
  path: string[];
  headers: Record<string, any>;
}

export interface Response {
  version: string;
  status: string;
  reason: string;
}

export interface NetworkSettingsHeaders extends Record<string, any> {
  Host: string;
}

export interface TLSSettings {
  serverName: null | string;
  allowInsecure: string;
}

export enum ServerType {
  Shadowsocks = "shadowsocks",
  V2Ray = "v2ray",
  Trojan = "trojan",
  Vmess = "vmess"
}
