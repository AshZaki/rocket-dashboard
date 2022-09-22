interface DataTableBodyProps {
    launchDateTime: string;
    id: string;
    isLaunchSuccess: any;
    missionId: string;
    missionName: string;
    rocketName: string;
    siteName: string;
}

const DataTableBody = ({ 
    launchDateTime,
    id,
    isLaunchSuccess,
    missionId,
    missionName,
    rocketName,
    siteName,
 }: DataTableBodyProps) => {

    return (
        <tr key={id} className="border-b dark:border-[rgb(43,43,43)]">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[rgb(153,153,153)]">{missionName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[rgb(153,153,153)]">{launchDateTime}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{isLaunchSuccess}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[rgb(153,153,153)]">{rocketName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[rgb(153,153,153)]">{siteName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[rgb(153,153,153)]">{missionId}</td>
        </tr>
    );
}

export default DataTableBody;
