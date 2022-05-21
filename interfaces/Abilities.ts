import { Knowledge } from "./Knowledge";
import { Skill } from "./Skill";

export interface Abilities {
  knowledges?: Knowledge[];
  skills?: Skill[];
}
