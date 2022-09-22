//Components
import LaunchData from "./launchData";
import PayloadDisplay from "./payload";

//Interface
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

const Content = ({ launchDetails, payloadDetails }: ContentProps) => {

  return (
    <>
      <PayloadDisplay 
        totalPayloads={payloadDetails.length}
        averagePayloadMass={calculateAverageMass(payloadDetails)}
        totalPayloadsCustomers={getTotalCustomers(payloadDetails)}
        payloadDetails={payloadDetails}
      />
      <LaunchData
        launchDetails={launchDetails}
      />
    </>
  );
}

export default Content;
