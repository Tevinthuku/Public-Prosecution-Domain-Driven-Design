import CriminalCase from "./preparation/criminalCase";
import PoliceInvestigation from "./investigation/policeInvestigation";
import PoliceCaseFile from "./preparation/policeCaseFile";
import PrechargeDecisionChange from "./investigation/preChargeDecisionCase";

export default class PublicProsecutionService {
  static receiveRequestForPrechargeDecision(
    policeInvestigation: PoliceInvestigation
  ) {
    return new PrechargeDecisionChange(
      policeInvestigation.pncId,
      policeInvestigation.suspects
    );
  }

  static acceptCaseFile(policeCaseFile: PoliceCaseFile) {
    return new CriminalCase(policeCaseFile.PNCID, policeCaseFile.defendants);
  }
}
