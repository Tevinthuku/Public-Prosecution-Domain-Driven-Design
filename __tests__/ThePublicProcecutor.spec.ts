import { CriminalOffence } from "../src/investigation/criminalOffence";
import HudumaNumber from "../src/hudumaNumber";
import PNCID from "../src/pncID";
import PoliceInvestigation from "../src/investigation/policeInvestigation";
import PublicProsecutionService from "../src/publicProsecutionService";
import Suspect from "../src/investigation/suspect";
import Defendant from "../src/preparation/defendant";
import PoliceCaseFile from "../src/preparation/policeCaseFile";
test("should create a case when receiving a PcdRequest", () => {
  const pncID = new PNCID("AN-ID");
  const hudumaNumber = new HudumaNumber(123);
  const suspect = new Suspect(
    CriminalOffence.CORRUPTION_IN_PUBLIC_OFFICE,
    hudumaNumber
  );

  const policeInvestigation = new PoliceInvestigation(pncID, suspect);
  const policeCase =
    PublicProsecutionService.receiveRequestForPrechargeDecision(
      policeInvestigation
    );

  expect(policeInvestigation.suspects).toEqual(policeCase.getSuspects());
});

it("should create a test criminal case when a policecase file is accepted", () => {
  const pncID = new PNCID("AN-ID");
  const hudumaNumber = new HudumaNumber(123);
  const defendant = new Defendant(hudumaNumber, pncID);
  const policeCaseFile = new PoliceCaseFile(pncID, new Set([defendant]));
  const criminalCase = PublicProsecutionService.acceptCaseFile(policeCaseFile);
  expect(pncID).toEqual(criminalCase.pncID);
  expect(policeCaseFile.defendants).toEqual(criminalCase.defendants);
});
