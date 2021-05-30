import { CriminalOffence } from "../src/investigation/criminalOffence";
import HudumaNumber from "../src/hudumaNumber";
import PNCID from "../src/pncID";
import PoliceInvestigation from "../src/investigation/policeInvestigation";
import Suspect from "../src/investigation/suspect";

test("should be created successfully", () => {
  const pncID = new PNCID("AN-ID");
  const hudumaNumber = new HudumaNumber(123);
  const suspect = new Suspect(
    CriminalOffence.CORRUPTION_IN_PUBLIC_OFFICE,
    hudumaNumber
  );

  const policeInvestigation = new PoliceInvestigation(pncID, suspect);
  expect(policeInvestigation).toBeTruthy();
});
