import Defendant from "./defendant";
import PNCID from "../pncID";

export default class PoliceCaseFile {
  PNCID: PNCID;
  defendants: Set<Defendant>;

  constructor(pnCID: PNCID, defendants: Set<Defendant>) {
    this.PNCID = pnCID;
    this.defendants = defendants;
  }
}
