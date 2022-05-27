import { Social } from "./Social";
import { Document } from "./Document";
import { Facts } from "./Facts";
import { PersonalPath } from "./PersonalPath";
import { Abilities } from "./Abilities";
import { News } from "./News";
import { Portfolio } from "./Portfolio";

export interface User {
  fullname: string;
  position?: string;
  eMail: string;
  phone?: string;
  age?: number;
  img?: string;
  googleIframe?: string;
  form?: boolean;
  residence?: string;
  address?: string;
  description?: string;
  social?: Social;
  facts?: Facts[];
  personalPath?: PersonalPath[];
  documents?: Document;
  abilities?: Abilities;
  blog?: News[];
  portfolio?: Portfolio[];
}
