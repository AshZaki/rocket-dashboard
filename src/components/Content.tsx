import { Card, DropdownButton } from "./shared";
import PayloadCount from "./PayloadCount";
import DataTable from "./DataTable";
// import { Fragment } from "react";

function Content() {
  return (
    <>
      <div className="grid grid-cols-2 divide-x gap-4">
        <div>
          <PayloadCount />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="h-22">
            <Card
              title={"310"}
              description={"Total Payloads"}
              icon={"box-archive"}
              iconColor={"green"}
            />
          </div>
          <div>
            <Card
              title={"2120 Kg"}
              description={"Avg. Payload Mass"}
              icon={"scale-balanced"}
              iconColor={"purple"}
            />
          </div>
          <div>
            <Card
              title={"43"}
              description={"Total Payloads Customers"}
              icon={"circle-user"}
              iconColor={"orange"}
            />
          </div>
        </div>
      </div>
      <DataTable />
    </>
  );
}

export default Content;
