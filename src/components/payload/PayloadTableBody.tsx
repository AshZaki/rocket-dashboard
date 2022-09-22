interface PayloadTableBodyProps {
    nation: string;
    countedNationalities: number;
}

const PayloadTableBody = ({
    nation,
    countedNationalities
}: PayloadTableBodyProps) => {

    return (
        <tr key={nation} className="border-b dark:border-[rgb(43,43,43)]">
            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[rgb(153,153,153)]">{nation}</td>
            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[rgb(153,153,153)]">{countedNationalities}</td>
        </tr>
    );
}

export default PayloadTableBody;
