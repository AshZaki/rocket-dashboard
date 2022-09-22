import { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from "luxon";
import SearchBar from './shared/SearchBar';
import { LaunchDetails } from "../App";

interface DataTableProps {
    launchDetails: LaunchDetails[];
}

const DataTable = ({ launchDetails }: DataTableProps) => {
    const [searchVal, setSearchVal] = useState('');
    const [missionLaunches, setMissionLaunches] = useState(launchDetails);
    const [searchResults, setSearchResults] = useState<LaunchDetails[]>(launchDetails);
    const [isMissionNameSorted, setIsMissionNameSorted] = useState(false);
    const [isDateSorted, setIsDateSorted] = useState(false);
    const [isOutcomeSorted, setIsOutcomeSorted] = useState(false);
    const [isRocketSorted, setIsRocketSorted] = useState(false);
    const [isSiteSorted, setIsSiteSorted] = useState(false);
    const [isMissionIdSorted, setIsMissionIdSorted] = useState(false);
    const [colSortDirection, setColSortDir] = useState('asc');

    const filterLaunchesData = (val: string) => {
        const results = missionLaunches.filter((launch: LaunchDetails) => {
            if ((launch.mission_name.toLowerCase()).includes(val.toLowerCase())) {
                console.log('launch', launch);
                return launch;
            }
        })
        setSearchResults(results);
    };

    console.log("searchResults", searchResults);
    const onInputChange = (e: any) => {
        console.log('val is ', e);
        setSearchVal(e);
        filterLaunchesData(e);
    };

    const toggleSortColumn = (setIsSorted: (arg: boolean) => void, columnName: string) => {
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

    const details = searchResults
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.mission_name === value.mission_name && t.id === value.id)))
        .map((launch: any) => {
            const { id, mission_name, mission_id, launch_date_utc, rocket, launch_site, launch_success } = launch;
            return (
                <tr key={id} className="border-b dark:border-[rgb(51,51,51)]">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mission_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{DateTime.fromISO(launch_date_utc).toFormat('yyyy-LL-dd , hh:mm a')}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{launch_success ? <span className="text-teal-500 font-semibold">Success</span> : <span className="text-rose-800 font-semibold">Failure</span>}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rocket.rocket_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{launch_site.site_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mission_id}</td>
                </tr>
            );
        });

    return (
        <div className="divide-y-4 divide-gray-50 dark:divide-[rgb(51,51,51)]">
            <div className="bg-white dark:bg-[rgb(43,43,43)] divide-gray-300 px-1 py-1 dark:divide-[rgb(51,51,51)]">
                <div className="inline-flex justify-between gap-x-3 items-center py-4 pl-5 pr-5 w-full">
                    <div className="font-bold text-2xl ">
                        SpaceX Launch Data
                    </div>
                    <div>
                        <FontAwesomeIcon icon={"maximize"} color="rgb(10,129,195)" />
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-[rgb(43,43,43)] divide-gray-300 dark:divide-[rgb(51,51,51)] px-1 py-1">
                <div className="py-4 pl-5 pr-5">
                    <SearchBar
                        searchTerms={searchVal}
                        onSearch={onInputChange}
                        onReset={() => console.log('reset')}
                        maxLength={50}
                        placeholder="Search by mission name"
                    />
                </div>
                <div className="flex flex-col pl-5 pr-5">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="dark:border-[rgb(51,51,51)]">
                                            <th scope="col" className="inline-flex gap-1 text-sm Semi-Bold 14/20 text-gray-900 px-6 py-4 text-left">
                                                <button type="button"
                                                    onClick={() => toggleSortColumn(setIsMissionNameSorted, 'mission_name')}
                                                    className="inline-flex items-center gap-3 px-2 py-0 ">
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
                                            <th scope="col" className="text-sm Semi-Bold 14/20 text-gray-900 px-6 py-4 text-left">
                                                <button type="button"
                                                    onClick={() => toggleSortColumn(setIsDateSorted, 'launch_date_utc')}
                                                    className="inline-flex items-center gap-3 px-2 py-0 ">
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
                                            <th scope="col" className="inline-flex gap-1 text-sm Semi-Bold 14/20 text-gray-900 px-6 py-4 text-left">
                                                <button type="button"
                                                    onClick={() => toggleSortColumn(setIsOutcomeSorted, 'launch_success')}
                                                    className="inline-flex items-center gap-3 px-2 py-0 ">
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
                                            <th scope="col" className="text-sm Semi-Bold 14/20 text-gray-900 px-6 py-4 text-left">
                                                <button type="button"
                                                    onClick={() => toggleSortColumn(setIsRocketSorted, 'rocket_name')}
                                                    className="inline-flex items-center gap-3 px-2 py-0 ">
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
                                            <th scope="col" className="text-sm Semi-Bold 14/20 text-gray-900 px-6 py-4 text-left">
                                                <button type="button"
                                                    onClick={() => toggleSortColumn(setIsSiteSorted, 'site_name')}
                                                    className="inline-flex items-center gap-3 px-2 py-0 ">
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
                                            <th scope="col" className="text-sm Semi-Bold 14/20 text-gray-900 px-6 py-4 text-left">
                                                <button type="button"
                                                    onClick={() => toggleSortColumn(setIsMissionIdSorted, 'mission_id')}
                                                    className="inline-flex items-center gap-3 px-2 py-0 ">
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
                                        {details}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default DataTable;
