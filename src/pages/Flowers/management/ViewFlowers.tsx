/* eslint-disable @typescript-eslint/no-explicit-any */
// ViewFlowers.tsx
import React from "react";

import {
  useAllFlowersQuery,
  useBulkDeleteMutation,
} from "../../../redux/features/flower/flowersApi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IFlowers } from "../../../interface/flowers";
import { toast } from "sonner";

const ViewFlowers: React.FC = () => {
  const { data } = useAllFlowersQuery(undefined);
  const [bulkDelete] = useBulkDeleteMutation();

  const productIds: any[] = [];
  const handleSelectValue = (value: string) => {
    if (value === "bulkDelete") {
      handleBulkDelete();
    }
  };

  const handleBulkDelete = async () => {
    const res = await bulkDelete(productIds);
    console.log(res);
    if ((res as any)?.data.success ) {
      toast("all the product deleted successfully !", { duration: 2000 });
      window.location.reload();
    }
  };

  // const datas: never[] = [
  //   // Add your data here
  // ];

  return (
    <div className="w-full h-full flex flex-col max-w-6xl mx-auto bg-">
      <main className="flex flex-1 flex-col gap-4  p-4 w-full md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Flowers</h1>
          <div className="ml-auto flex gap-2">
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleSelectValue(e.target.value)
              }
              defaultValue="bulk"
              className="action-button"
            >
              <option value="bulk">Bulk Actions</option>
              <option value="bulkDelete">Bulk Delete</option>
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
                      <th className="px-6 py-2 text-xs text-gray-500"></th>
                      <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Color</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Bloom Date
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data?.data.map((product: IFlowers) => (
                      <tr key={product.name} className="whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <input
                            onClick={() => productIds.push(product._id)}
                            type="checkbox"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {product.name}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {product.color}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {product.bloomDate}
                        </td>
                        <td className="px-6 py-4">
                          <a href="#" className="text-lg text-blue-400 rounded">
                            <FaEdit />
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <a href="#" className="text-lg text-red-400 rounded">
                            <FaTrash />
                          </a>
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

export default ViewFlowers;
