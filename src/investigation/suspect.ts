import { CriminalOffence } from "./criminalOffence";
import HudumaNumber from "../hudumaNumber";

export default class Suspect {
  offence: CriminalOffence;
  hudumaNumber: HudumaNumber;

  constructor(offence: CriminalOffence, hudumaNumber: HudumaNumber) {
    this.offence = offence;
    this.hudumaNumber = hudumaNumber;
  }
}
