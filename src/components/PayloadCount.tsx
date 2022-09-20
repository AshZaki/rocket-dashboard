import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PayloadCountProps {
  number?: number;
  description?: string;
}
const PayloadCount = ({ }: PayloadCountProps) => {

  return (
    <div className="bg-white divide-gray-50 divide-y-4">
      <div className="inline-flex gap-x-3 items-center">
        <h1 className="font-bold text-2xl py-4 pl-5">
          Payload count by Nationality
        </h1>
        <div>
          <FontAwesomeIcon icon={"circle-question"} color="black" />
        </div>
      </div>
      <div className="px-1 py-1">
        <div className="container mx-auto columns-2">
          <div>
            Donut chart
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Nationality
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Payload Count
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Mark
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default PayloadCount;