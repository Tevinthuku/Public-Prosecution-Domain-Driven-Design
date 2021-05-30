import PNCID from "../pncID";
import Suspect from "./suspect";

export default class PoliceInvestigation {
  pncId: PNCID;
  suspects = new Set<Suspect>();

  constructor(pncId: PNCID, suspect: Suspect) {
    this.pncId = pncId;
    this.suspects.add(suspect);
  }
}
