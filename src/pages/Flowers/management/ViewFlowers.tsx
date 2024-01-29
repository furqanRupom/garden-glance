/* eslint-disable @typescript-eslint/no-explicit-any */
// ViewFlowers.tsx
import React, { useState } from "react";

import {
  useAllFlowersQuery,
  useBulkDeleteMutation,
  useDeleteMutation,
} from "../../../redux/features/flower/flowersApi";
import {FaEdit, FaTrash } from "react-icons/fa";
import { IFlowers } from "../../../interface/flowers";
import { toast } from "sonner";
import SellModalForm from "../../../components/form/SellModalForm";

const ViewFlowers: React.FC = () => {
  // const { data } = useAllFlowersQuery(undefined);
  const [bulkDelete] = useBulkDeleteMutation();
  const [productDelete] = useDeleteMutation();
  const [open, setOpen] = useState<boolean>(false);
  const [productId,setProductId] = useState<string>('');

  const [size,setSize] = useState<string>("");
  const [price,setPrice] = useState<string>("");
  const [fragrance,setFragrance] = useState<string>("");
  const [color,setColor] = useState<string>("");
  const [type,setType] = useState<string>("");

  const {data} = useAllFlowersQuery({
    size:size,
    color:color,
    fragrance:fragrance,
    price:price,
    type:type
  })

  console.log(data);

  /* sell product */

  const showModalAndSell = (id:string) => {
    setProductId(id);
    setOpen(true);

  }

  const productIds: any[] = [];
  const handleSelectValue = (value: string) => {
    if (value === "bulkDelete") {
      handleBulkDelete();
    }
  };

  /* handle bulk delete */

  const handleBulkDelete = async () => {
    const toastId = toast.loading("flowers deleting on processing ...");

    try {
      const res = await bulkDelete(productIds);
      console.log(res);
      if ((res as any)?.data.success) {
        toast("all the flowers deleted successfully !", { duration: 2000 });
        window.location.reload();
      }
    } catch (error) {
      toast.error("Something went wrong !", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  /* handle single product delete */

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("flower deleting on processing ...");
    try {
      await productDelete(id);
      toast.success("flowers successfully deleted !", {
        id: toastId,
        duration: 2000,
      });
      window.location.reload();
    } catch (error) {
      toast.error("Something went wrong !", {
        id: toastId,
        duration: 2000,
      });
    }
  };



  return (
    <div className="w-full h-full flex flex-col max-w-6xl mx-auto bg-">
      <main className="flex flex-1 flex-col gap-4  p-4 w-full md:gap-8 md:p-6">
        <div className="flex items-center">
          <div>
            <h1 className="font-semibold text-lg md:text-2xl">
              Welcome to Flowers{" "}
              <span className="text-gray-500">Inventory</span>{" "}
            </h1>
            <input
              type="text"
              id="fragrance"
              placeholder="Search by Color"
              onChange={(e) => setColor(e.target.value)}
              className="h-10 px-4 border rounded-3xl focus:outline-none focus:ring focus:border-gray-300 w-full mt-3"
            />
          </div>

          <div className="ml-auto flex gap-2">
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleSelectValue(e.target.value)
              }
              defaultValue="bulk"
              className="px-4 py-2 border rounded-md bg-white shadow-md text-gray-700 focus:outline-none focus:ring focus:border-gray-300"
            >
              <option value="bulk">Bulk Actions</option>
              <option value="bulkDelete">Bulk Delete</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <select
            onChange={(e) => setPrice(e.target.value)}
            className="px-3 py-2 border rounded-md bg-white shadow text-gray-700 focus:outline-none focus:ring focus:border-gray-300"
          >
            <option defaultValue="default" value="default">
              Price Range
            </option>
            <option value="one">$0 - $100</option>
            <option value="two">$100 - $500</option>
            <option value="three">$500 - $1000</option>
          </select>

          <select
            onChange={(e) => setSize(e.target.value)}
            className="px-3 py-2 border rounded-md bg-white shadow text-gray-700 focus:outline-none focus:ring focus:border-gray-300"
          >
            <option defaultValue="default" value="default">
              Filter By Size
            </option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>

          <select
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-2 border rounded-md bg-white shadow text-gray-700 focus:outline-none focus:ring focus:border-gray-300"
          >
            <option defaultValue="default" value="default">
              Filter By Type
            </option>
            <option value="Roses">Roses</option>
            <option value="SunFlowers">SunFlowers</option>
            <option value="Lavender">Lavender</option>
            <option value="Jasmine">Jasmine</option>
            <option value="Lilies">Lilies</option>
            <option value="Gardenias">Gardenias</option>
            <option value="Peonies">Lilies</option>
          </select>

          <select
            onChange={(e) => setFragrance(e.target.value)}
            className="px-3 py-2 border rounded-md bg-white shadow text-gray-700 focus:outline-none focus:ring focus:border-gray-300"
          >
            <option defaultValue="default" value="default">
              Filter By Fragrance
            </option>
            <option value="ClassicRose">Classic Rose</option>
            <option value="SunnyFlowers">Sunny Flowers</option>
            <option value="LavenderBliss">Lavender Bliss</option>
            <option value="ExoticJasmine">Exotic Jasmine</option>
            <option value="SweetLily">Sweet Lily</option>
            <option value="IntoxicatingGardenia">Lilies</option>
            <option value="RomanticPeony">Romantic Peony</option>
          </select>
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
                      <th className="px-6 py-2 text-xs text-gray-500">Size</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Type</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Quantity
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Bloom Date
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">Price</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data?.data?.map((product: IFlowers) => (
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
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {product.size}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {product.type}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {product.quantity}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {product.bloomDate}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          ${product.price}
                        </td>
                        <td className="px-6 py-4">
                          <ul className="flex items-center space-x-5">
                            <li>
                              <a
                                href="#"
                                className="text-lg text-blue-400 rounded"
                              >
                                <FaEdit />
                              </a>
                            </li>

                            <li
                              onClick={() =>
                                handleDelete(product._id as string)
                              }
                            >
                              <a
                                href="#"
                                className="text-lg text-red-400 rounded"
                              >
                                <FaTrash />
                              </a>
                            </li>

                            <li>
                              <input
                                onClick={() =>
                                  showModalAndSell(product._id as string)
                                }
                                className="bg-green-400 cursor-pointer p-1 px-3 font-semibold text-white rounded-xl hover:bg-green-500"
                                type="submit"
                                value="sell"
                              />
                            </li>

                            <li>
                              <button className="bg-gray-400 cursor-pointer p-1 px-3 font-semibold text-white rounded-xl hover:bg-gray-500">
                                Edit and Duplicate
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <SellModalForm setOpen={setOpen} open={open} id={productId} />
      </main>
    </div>
  );
};

export default ViewFlowers;
