import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from './shared/SearchBar';

const DataTable = ({ }) => {
    return (
        <div className="divide-y-4 divide-gray-50">
            <div className="bg-white divide-gray-300 px-1 py-1">
                <div className="inline-flex justify-between gap-x-3 items-center py-4 pl-5 pr-5 w-full">
                    <div className="font-bold text-2xl ">
                        SpaceX Launch Data
                    </div>
                </div>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne">
                        <button className="
                                        accordion-button
                                        relative
                                        flex
                                        items-center
                                        w-full
                                        py-4
                                        px-5
                                        text-base text-gray-800 text-left
                                        bg-white
                                        border-0
                                        rounded-none
                                        transition
                                        focus:outline-none
                                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <div className="bg-white divide-gray-300 px-1 py-1">
                                <div className="py-4 pl-5 pr-5">
                                    <SearchBar />
                                </div>
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div className="overflow-hidden">
                                                <table className="min-w-full">
                                                    <thead className="border-b">
                                                        <tr>
                                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Mission Name
                                                            </th>
                                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Date
                                                            </th>
                                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Outcome
                                                            </th>
                                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Rocket
                                                            </th>
                                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Site
                                                            </th>
                                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                                Mission ID
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                Thaicom 6
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                2022-01-11 , 11:35 AM
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                Success
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                Falcon 9
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                CCAFS SLC 40
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                9D1B7E0
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
                </div>
            </div>
        </div>



    );
}

export default DataTable;
