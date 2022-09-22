import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LaunchDetails } from "../../App";

interface DataTableProps {
    launchDetails: LaunchDetails[];
    tableBody: any;
}

const DataTable = ({ launchDetails, tableBody }: DataTableProps) => {
    const [missionLaunches] = useState(launchDetails);
    const [searchResults, setSearchResults] = useState<LaunchDetails[]>(launchDetails);
    const [isMissionNameSorted, setIsMissionNameSorted] = useState(false);
    const [isDateSorted, setIsDateSorted] = useState(false);
    const [isOutcomeSorted, setIsOutcomeSorted] = useState(false);
    const [isRocketSorted, setIsRocketSorted] = useState(false);
    const [isSiteSorted, setIsSiteSorted] = useState(false);
    const [isMissionIdSorted, setIsMissionIdSorted] = useState(false);
    const [colSortDirection, setColSortDir] = useState('asc');

    const toggleSortColumn = (setIsSorted: (arg: boolean) => void, columnName: string) => {
        setIsMissionIdSorted(false);
        setIsMissionNameSorted(false);
        setIsDateSorted(false);
        setIsOutcomeSorted(false);
        setIsRocketSorted(false);
        setIsSiteSorted(false);

        setIsSorted(true);
        if (colSortDirection === 'asc') {
            setColSortDir('desc');
            const sortedMissions = [...missionLaunches].sort((a: LaunchDetails, b: LaunchDetails) => {
                switch (columnName) {
                    case 'mission_name':
                    case 'launch_date_utc':
                        return a[columnName].toLocaleLowerCase().localeCompare(b[columnName].toLocaleLowerCase());
                    case 'rocket_name':
                        return a.rocket[columnName].toLocaleLowerCase().localeCompare(b.rocket[columnName].toLocaleLowerCase());
                    case 'site_name':
                        return a.launch_site[columnName].toLocaleLowerCase().localeCompare(b.launch_site[columnName].toLocaleLowerCase());
                    case 'launch_success':
                        return a[columnName] ? 1 : -1;
                    case 'mission_id':
                        return a[columnName].length > b[columnName].length ? 1 : -1;
                    default:
                        return a.mission_name.toLocaleLowerCase().localeCompare(b.mission_name.toLocaleLowerCase());
                }
            })

            setSearchResults(sortedMissions);
            return sortedMissions;
        } else {
            setColSortDir('asc');
            const sortedMissions = [...missionLaunches].sort((a: LaunchDetails, b: LaunchDetails) => {
                switch (columnName) {
                    case 'mission_name':
                    case 'launch_date_utc':
                        return b[columnName].toLocaleLowerCase().localeCompare(a[columnName].toLocaleLowerCase());
                    case 'rocket_name':
                        return b.rocket[columnName].toLocaleLowerCase().localeCompare(a.rocket[columnName].toLocaleLowerCase());
                    case 'site_name':
                        return b.launch_site[columnName].toLocaleLowerCase().localeCompare(a.launch_site[columnName].toLocaleLowerCase());
                    case 'launch_success':
                        return b[columnName] ? 1 : -1;
                    case 'mission_id':
                        return b[columnName].length > a[columnName].length ? 1 : -1;
                    default:
                        return b.mission_name.toLocaleLowerCase().localeCompare(a.mission_name.toLocaleLowerCase());
                }
            })
            setSearchResults(sortedMissions);
            return sortedMissions;
        }
    }

    return (
        <div className="flex flex-col pl-5 pr-5">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead>
                                <tr className="dark:border-[rgb(51,51,51)]">
                                    <th scope="col" className="inline-flex gap-1 text-sm Semi-Bold 14/20 text-gray-900 dark:text-white px-4 py-4 text-left">
                                        <button type="button"
                                            onClick={() => toggleSortColumn(setIsMissionNameSorted, 'mission_name')}
                                            className="inline-flex items-center gap-3">
                                            <span>Mission Name</span>
                                            {
                                                isMissionNameSorted && (
                                                    <div className="flex space-x-2 justify-center">
                                                        <FontAwesomeIcon icon={colSortDirection === 'asc' ? "arrow-up" : "arrow-down"} color="black" />
                                                    </div>
                                                )
                                            }
                                        </button>
                                    </th>
                                    <th scope="col" className="text-sm Semi-Bold 14/20 text-gray-900 dark:text-white px-6 py-4 text-left">
                                        <button type="button"
                                            onClick={() => toggleSortColumn(setIsDateSorted, 'launch_date_utc')}
                                            className="inline-flex items-center gap-3">
                                            <span>Date</span>
                                            {
                                                isDateSorted && (
                                                    <div className="flex space-x-2 justify-center">
                                                        <FontAwesomeIcon icon={colSortDirection === 'asc' ? "arrow-up" : "arrow-down"} color="black" />
                                                    </div>
                                                )
                                            }
                                        </button>
                                    </th>
                                    <th scope="col" className="inline-flex gap-1 text-sm Semi-Bold 14/20 text-gray-900 dark:text-white px-6 py-4 text-left">
                                        <button type="button"
                                            onClick={() => toggleSortColumn(setIsOutcomeSorted, 'launch_success')}
                                            className="inline-flex items-center gap-3">
                                            <span>Outcome</span>
                                            {
                                                isOutcomeSorted && (
                                                    <div className="flex space-x-2 justify-center">
                                                        <FontAwesomeIcon icon={colSortDirection === 'asc' ? "arrow-up" : "arrow-down"} color="black" />
                                                    </div>
                                                )
                                            }
                                        </button>
                                    </th>
                                    <th scope="col" className="text-sm Semi-Bold 14/20 text-gray-900 dark:text-white px-6 py-4 text-left">
                                        <button type="button"
                                            onClick={() => toggleSortColumn(setIsRocketSorted, 'rocket_name')}
                                            className="inline-flex items-center gap-3">
                                            <span>Rocket</span>
                                            {
                                                isRocketSorted && (
                                                    <div className="flex space-x-2 justify-center">
                                                        <FontAwesomeIcon icon={colSortDirection === 'asc' ? "arrow-up" : "arrow-down"} color="black" />
                                                    </div>
                                                )
                                            }
                                        </button>
                                    </th>
                                    <th scope="col" className="text-sm Semi-Bold 14/20 text-gray-900 dark:text-white px-6 py-4 text-left">
                                        <button type="button"
                                            onClick={() => toggleSortColumn(setIsSiteSorted, 'site_name')}
                                            className="inline-flex items-center gap-3">
                                            <span>Site</span>
                                            {
                                                isSiteSorted && (
                                                    <div className="flex space-x-2 justify-center">
                                                        <FontAwesomeIcon icon={colSortDirection === 'asc' ? "arrow-up" : "arrow-down"} color="black" />
                                                    </div>
                                                )
                                            }
                                        </button>
                                    </th>
                                    <th scope="col" className="text-sm Semi-Bold 14/20 text-gray-900 dark:text-white px-6 py-4 text-left">
                                        <button type="button"
                                            onClick={() => toggleSortColumn(setIsMissionIdSorted, 'mission_id')}
                                            className="inline-flex items-center gap-3">
                                            <span>Mission ID</span>
                                            {
                                                isMissionIdSorted && (
                                                    <div className="flex space-x-2 justify-center">
                                                        <FontAwesomeIcon icon={colSortDirection === 'asc' ? "arrow-up" : "arrow-down"} color="black" />
                                                    </div>
                                                )
                                            }
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableBody}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataTable;
