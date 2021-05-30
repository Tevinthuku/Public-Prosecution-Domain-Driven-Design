import PNCID from "../pncID";
import Defendant from "./defendant";

export default class CriminalCase {
  pncID: PNCID;
  defendants: Set<Defendant>;
  constructor(pncID: PNCID, defendants: Set<Defendant>) {
    this.pncID = pncID;
    this.defendants = defendants;
  }
}
