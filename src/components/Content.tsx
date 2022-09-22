import { Card, DropdownButton } from "./shared";
import PayloadCount from "./PayloadCount";
import DataTable from "./DataTable";
import PayloadDisplay from "./PayloadDisplay";
import { PayloadDetails } from "../App";

interface ContentProps {
  launchDetails: any;
  payloadDetails: PayloadDetails[];
}
const getTotalCustomers = (payloadDetails: PayloadDetails[]) => {
  const customerDictionary: any = {};
  payloadDetails.forEach((payload: PayloadDetails) => {
    payload.customers.forEach((customer: string) => {
      if (customerDictionary[customer]) {
        customerDictionary[customer] += 1;
      } else {
        customerDictionary[customer] = 1;
      }
    });
  });
  return Object.keys(customerDictionary).length;
};

const calculateAverageMass = (payloadDetails: PayloadDetails[]) => {
  const totalMass = payloadDetails.reduce(
    (acc: number, payload: PayloadDetails) => {
      return acc + payload.payload_mass_kg;
    },
    0
  );
  return Math.round(totalMass / payloadDetails.length);
};

function Content({ launchDetails, payloadDetails }: ContentProps) {
  console.log(payloadDetails)
  return (
    <div className="">
      <PayloadDisplay 
        totalPayloads={payloadDetails.length}
        averagePayloadMass={calculateAverageMass(payloadDetails)}
        totalPayloadsCustomers={getTotalCustomers(payloadDetails)}
        payloadDetails={payloadDetails}
      />
      <DataTable
        launchDetails={launchDetails}
      />
    </div>
  );
}

export default Content;
