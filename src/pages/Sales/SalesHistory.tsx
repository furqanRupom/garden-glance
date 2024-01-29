/* eslint-disable @typescript-eslint/no-explicit-any */
// ViewFlowers.tsx

import { ISalesHistoryValue, ISeller } from "../../interface/flowers";
import { useSoldProductHistoryQuery } from "../../redux/features/sales/salesApi";
import { useState } from "react";

const SalesHistory: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const { data: historyData } = useSoldProductHistoryQuery(category);
  const handleSelectValue = (
    value: ISalesHistoryValue
  ) => {
 
    setCategory(value);

  };



  return (
    <div className="w-full h-full flex flex-col max-w-6xl mx-auto min-h-screen">
      <main className="flex flex-1 flex-col gap-4  p-4 w-full md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">
            Welcome to Flowers <span className="text-gray-500">Inventory</span>{" "}
          </h1>
          <div className="ml-auto flex gap-2">
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleSelectValue(e.target.value as ISalesHistoryValue)
              }
              defaultValue=""
              className="px-4 py-2 border rounded-md bg-white shadow-md text-gray-700 focus:outline-none focus:ring focus:border-gray-300"
            >
              <option value="" className="text-gray-500" disabled>
                History by
              </option>
              <option value="" className="text-gray-500" >
                All
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className=" flex justify-center mx-auto w-full">
          <div className="flex flex-col w-full">
            <div className="w-full ">
              <div className="border-b border-gray-200 shadow w-full">
                <table className="w-full">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Buyer Name
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Sell Date
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {historyData?.data.map((sell: ISeller) => (
                      <tr key={sell.id} className="whitespace-nowrap">
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {sell.buyerName}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {sell.saleDate.toString()}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {sell.quantity}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesHistory;
