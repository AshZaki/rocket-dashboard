import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PayloadCountProps {
  number?: number;
  description?: string;
  payloadDetails: any;
}
const PayloadCount = ({ payloadDetails }: PayloadCountProps) => {

  const nationaltiesPayload = payloadDetails.reduce((acc: any, payload: any) => {
    if (!(acc[payload.nationality])) {
      acc[payload.nationality] = 1;
    }
    acc[payload.nationality] += 1;

    return acc
  }, {});

  const test = (nationaltiesPayload: any) => {
    const rows = []
    for (const nation in nationaltiesPayload) {
      if (nation !== 'null') {
        rows.push(
          <tr key={nation} className="border-b">
            <td className="px-6 py-2 divide-gray-50 whitespace-nowrap text-sm font-medium text-gray-900">{nation}</td>
            <td className="px-6 py-2 divide-gray-50 whitespace-nowrap text-sm font-medium text-gray-900">{nationaltiesPayload[nation]}</td>
          </tr>
        );
      }
    }
    return rows;
  }

  return (
    <div className="bg-white divide-gray-50 divide-y-4 max-h-50 shadow-md rounded-lg">
      <div className="inline-flex gap-x-3 items-center">
        <h1 className="font-bold text-2xl py-4 pl-5">
          Payload Count By Nationality
        </h1>
        <div>
          <FontAwesomeIcon icon={"circle-question"} color="black" />
        </div>
      </div>
      <div className="px-1 py-1">
        <div className="grid grid-cols-2 h-[17rem]">
          <div>
            Donut chart
          </div>
          <div className="overflow-auto inline-block mb-[2rem]">
            <table className="min-w-full">
              <thead className="">
                <tr>
                  <th scope="col" className="text-sm font-bold text-[rgba(28,31,55,1)] px-6 py-4 text-left uppercase">
                    Nationality
                  </th>
                  <th scope="col" className="text-sm font-bold text-[rgba(28,31,55,1)] px-6 py-4 text-left uppercase">
                    Payload Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {test(nationaltiesPayload)}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

  );
}

export default PayloadCount;