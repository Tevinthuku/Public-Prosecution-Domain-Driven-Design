import HudumaNumber from "../hudumaNumber";
import PNCID from "../pncID";

export default class Defendant {
  hudumaNumber: HudumaNumber;
  pncID: PNCID;
  constructor(hudumaNumber: HudumaNumber, pncID: PNCID) {
    this.hudumaNumber = hudumaNumber;
    this.pncID = pncID;
  }
}
