import { Card, DropdownButton } from "./shared";
import PayloadCount from "./PayloadCount";
import DataTable from "./DataTable";
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface DashboardHeaderProps {
  header: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  header,
}: DashboardHeaderProps) => {
  return (
    <Fragment>
      <header className="flex py-11">
        <nav className="navbar navbar-expand-lg py-2 relative flex items-center w-full">
          <div className="px-6 w-full flex flex-wrap items-center">
            <div className="navbar-collapse collapse grow items-center justify-between" id="navbarSupportedContentY">
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                <li className="nav-item">
                  <h1 className="font-bold text-2xl">{header}</h1>
                </li>
                <div className="flex flex-row gap-x-4">
                  <li className="nav-items">
                    <DropdownButton
                      icon={"gear"}
                    />
                  </li>
                  <li className="nav-item">
                    <div className="flex space-x-2">
                      <div>
                        <button type="button" className=" justify-between bg-white hover:bg-gray-400 text-[rgb(10,129,195)] shadow-md w-56 py-2 px-4 rounded inline-flex items-center">
                          <div className="inline-flex gap-x-4 items-center">
                            <FontAwesomeIcon icon={"building"} color="rgb(10,129,195)" />
                            <div>Launch Site</div>
                          </div>
                          <div>
                            <FontAwesomeIcon icon={"chevron-down"} color="rgb(10,129,195)" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default DashboardHeader;
