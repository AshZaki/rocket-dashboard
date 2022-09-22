import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArcElement, Chart, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

//Component
import PayloadTableBody from "./PayloadTableBody";

interface PayloadDetails {
  nationality: string;
}

interface PayloadCountProps {
  number?: number;
  description?: string;
  payloadDetails: PayloadDetails[];
}
interface NationalityCount {
  [key: string]: number;
}

Chart.register(ArcElement, Tooltip);

const PayloadCount = ({ payloadDetails }: PayloadCountProps) => {

  const countedNationalities: NationalityCount = payloadDetails.reduce((acc: any, payload: any) => {
    if (!(acc[payload.nationality])) {
      acc[payload.nationality] = 1;
    }
    acc[payload.nationality] += 1;

    return acc
  }, {});

  const countries = Object.keys(countedNationalities);
  const counts = Object.values(countedNationalities);
  const colors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FF6384',
    '#36A2EB',
  ];

  const donutChartData = {
    labels: countries,
    datasets: [
      {
        radius: "60%",  
        data: counts,
        backgroundColor: colors,
      },
    ]
  };

  const test = () => {
    const rows = [];

    for (const nation in countedNationalities) {
      if (nation !== "null") {
        rows.push(
          <PayloadTableBody
            key={nation}
            nation={nation} 
            countedNationalities={countedNationalities[nation]}
          />
        );
      }
    }
    return rows;
  };

  return (
    <div className="bg-white dark:bg-[rgb(51,51,51)] divide-gray-50 dark:divide-[rgb(43,43,43)] divide-y-4 max-h-50 shadow-md rounded-lg">
      <div className="inline-flex gap-x-3 items-center">
        <h1 className="font-bold text-2xl py-4 pl-5 dark:text-white">
          Payload Count By Nationality
        </h1>
        <div>
          <FontAwesomeIcon icon={"circle-question"} color="black" />
        </div>
      </div>
      <div className="px-1 py-1">
        <div className="grid grid-cols-2 h-[17rem]">
          <div>
            <Doughnut 
              data={donutChartData} 
              updateMode="resize" 
              options={{
                responsive: true,
                cutout: "90%",
                maintainAspectRatio: false,
                elements: {
                  arc: {
                    borderJoinStyle: "round",
                    borderRadius(ctx, options) {
                      return 15;
                    },
                  },
                }, 
              }}
            />
          </div>
          <div className="overflow-auto inline-block mb-[2rem]">
            <table className="min-w-full">
              <thead className="">
                <tr>
                  <th scope="col" className="text-sm font-bold text-[rgba(28,31,55,1)] dark:text-white px-6 py-4 text-left uppercase">
                    Nationality
                  </th>
                  <th scope="col" className="text-sm font-bold text-[rgba(28,31,55,1)] dark:text-white px-6 py-4 text-left uppercase">
                    Payload Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {test()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayloadCount;