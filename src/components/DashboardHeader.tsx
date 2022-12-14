import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Component
import { DropdownButton } from "./shared";
export interface DashboardHeaderProps {
  header: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  header,
}: DashboardHeaderProps) => {
  return (
    <header className="flex py-11 justify-between items-center dark:bg-[rgb(43,43,43)]">
      <div className="font-bold text-4xl dark:text-white">
        {header}
      </div>
      <div className="inline-flex gap-x-4">
        <div>
          <DropdownButton
            icon={"gear"}
          />
        </div>
        <div>
          <button type="button" className=" justify-between bg-white dark:bg-[rgb(51,51,51)] hover:bg-gray-400 text-[rgb(10,129,195)] dark:text-white shadow-md w-56 py-2 px-4 rounded inline-flex items-center">
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
    </header>
  );
};

export default DashboardHeader;
