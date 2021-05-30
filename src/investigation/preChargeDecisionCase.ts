import HudumaNumber from "../hudumaNumber";
import PNCID from "../pncID";
import { CriminalOffence } from "./criminalOffence";
import Suspect from "./suspect";

interface OffenceAdvice {
  [id: string]: CriminalOffence;
}
export default class PreChargeDecisionCase {
  offenceAdvice: OffenceAdvice;
  pnCID: PNCID;
  constructor(pnCID: PNCID, suspects: Set<Suspect>) {
    this.pnCID = pnCID;
    this.offenceAdvice = {};
    suspects.forEach((suspect) => {
      this.offenceAdvice[suspect.hudumaNumber.number] = suspect.offence;
    });
  }

  recordAlternativeOffenceAdvice(
    suspect: Suspect,
    offenceAdvice: CriminalOffence
  ) {
    const suspectHudumaNumber = suspect.hudumaNumber.number;
    this.offenceAdvice[suspectHudumaNumber] = offenceAdvice;
  }

  getSuspects(): Set<Suspect> {
    const result = new Set<Suspect>();
    for (const [suspectId, offence] of Object.entries<CriminalOffence>(
      this.offenceAdvice
    )) {
      const hudumaNumber = new HudumaNumber(Number(suspectId));
      result.add(new Suspect(offence, hudumaNumber));
    }

    return result;
  }
}
