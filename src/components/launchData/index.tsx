import { useState } from "react";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import SearchBar from '../shared/SearchBar';
import DataTable from "./DataTable";
import DataTableBody from "./DataTableBody";
import { LaunchDetails } from "../../App";

interface LaunchDataProps {
    launchDetails: LaunchDetails[];
}

const LaunchData = ({ launchDetails }: LaunchDataProps) => {
    const [searchVal, setSearchVal] = useState('');
    const [missionLaunches] = useState(launchDetails);
    const [filterLaunch, setfilterLaunch] = useState<LaunchDetails[]>(launchDetails);

    const filterLaunchesData = (val: string) => {
        const results = missionLaunches.filter((launch: LaunchDetails) => {
            if ((launch.mission_name.toLowerCase()).includes(val.toLowerCase())) {
                console.log('launch', launch);
                return launch;
            }
        })
        setfilterLaunch(results);
    };

    const onInputChange = (e: any) => {
        setSearchVal(e);
        filterLaunchesData(e);
    };

    const renderFilter = filterLaunch
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.mission_name === value.mission_name && t.id === value.id)))
        .map((launch: any) => {
            const { id, mission_name, mission_id, launch_date_utc, rocket, launch_site, launch_success } = launch;
            const formatDateTime = DateTime.fromISO(launch_date_utc).toFormat('yyyy-LL-dd , hh:mm a');
            const isLaunchSuccess = launch_success ? <span className="text-teal-500 dark:text-[rgb(94,234,212)] font-semibold">Success</span> : <span className="text-rose-800 dark:text-[rgb(244,63,94)] font-semibold">Failure</span>;
            return (
                <DataTableBody
                    id={id}
                    missionName={mission_name}
                    launchDateTime={formatDateTime}
                    isLaunchSuccess={isLaunchSuccess}
                    rocketName={rocket.rocket_name}
                    siteName={launch_site.site_name}
                    missionId={mission_id}
                />
            );
        });

    return (
        <div className="divide-y-4 divide-gray-50 dark:divide-[rgb(43,43,43)]">
            <div className="bg-white dark:bg-[rgb(51,51,51)] divide-gray-300 px-1 py-1 rounded-lg">
                <div className="inline-flex justify-between gap-x-3 items-center py-4 pl-5 pr-5 w-full">
                    <div className="font-bold text-2xl dark:text-white">
                        SpaceX Launch Data
                    </div>
                    <div>
                        <FontAwesomeIcon icon={"maximize"} color="rgb(10,129,195)" />
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-[rgb(51,51,51)] px-1 py-1">
                <div className="py-4 pl-5 pr-5">
                    <SearchBar
                        searchTerms={searchVal}
                        onSearch={onInputChange}
                        onReset={() => console.log('reset')}
                        maxLength={50}
                        placeholder="Search by mission name"
                    />
                </div>
                <DataTable
                    launchDetails={launchDetails}
                    tableBody={renderFilter}
                />
            </div>
        </div>
    );
}

export default LaunchData;
