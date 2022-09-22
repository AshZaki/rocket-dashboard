//Components
import { Card } from "../shared";
import PayloadCount from "./PayloadCount";
import { PayloadDetails } from "../../App";

interface PayloadDisplayProps {
    payloadDetails: PayloadDetails[];
    totalPayloads: number;
    averagePayloadMass: number;
    totalPayloadsCustomers: number;
}

function PayloadDisplay({ payloadDetails, totalPayloads, averagePayloadMass, totalPayloadsCustomers }: PayloadDisplayProps) {

    return (
        <div className="mb-4">
            <div className="grid grid-cols-2 gap-4 box-border">
                <div>
                    <PayloadCount
                        payloadDetails={payloadDetails}
                    />
                </div>
                <div className="grid gap-4 box-border h-28 w-88">
                    <div className="h-22">
                        <Card
                            title={String(totalPayloads)}
                            description={"Total Payloads"}
                            icon={"box-archive"}
                            iconColor={"green"}
                        />
                    </div>
                    <div>
                        <Card
                            title={`${averagePayloadMass} Kg`}
                            description={"Avg. Payload Mass"}
                            icon={"scale-balanced"}
                            iconColor={"purple"}
                        />
                    </div>
                    <div>
                        <Card
                            title={`${totalPayloadsCustomers}`}
                            description={"Total Payloads Customers"}
                            icon={"circle-user"}
                            iconColor={"orange"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayloadDisplay;
