import { useState } from 'react';
import { iSize } from '../../interface/flowers';

const UpdateModal = () => {
  const [name,setName] = useState<string>("")
  const [price,setPrice] = useState<number>(0);
  const [quantity,setQuantity] = useState<number>(0);
  const [size,setSize] = useState<iSize>('Small');
  const [bloomDate,setBloomDate] = useState<string>('');
  const [color,setColor] = useState<string>('');
  const [type,setType] = useState<string>('')
  const [fragrance,setFragrance] = useState<string>('');

  console.log(name,price,quantity,size,bloomDate,color,type,fragrance)
  const handleEdit = () => {

  }

  const handleCreate = () => {

  }
  return (
    <div>
      <div className="grid gap-4 max-w-3xl lg:max-w-5xl mx-auto my-16">
        <h1 className="text-2xl font-bold text-center pb-10">Add Flower</h1>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-12">
          {/* Flower Name */}
          <div className="grid gap-2">
            <label
              htmlFor="flower-name"
              className="text-sm font-medium leading-none"
            >
              Flower Name
            </label>
            <input
              id="flower-name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter flower name"
              className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Price */}
          <div className="grid gap-2">
            <label htmlFor="price" className="text-sm font-medium leading-none">
              Price
            </label>
            <input
              type="number"
              id="price"
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Enter price"
              className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Bloom Date */}
          <div className="grid gap-2">
            <label
              htmlFor="bloom-date"
              className="text-sm font-medium leading-none"
            >
              Bloom Date
            </label>
            <input
              type="date"
              id="bloom-date"
              onChange={(e) => setBloomDate(e.target.value)}
              className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Color */}
          <div className="grid gap-2">
            <label htmlFor="color" className="text-sm font-medium leading-none">
              Color
            </label>
            <input
              type="text"
              id="color"
              onChange={(e) => setColor(e.target.value)}
              placeholder="Enter color"
              className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Quantity */}
          <div className="grid gap-2">
            <label htmlFor="type" className="text-sm font-medium leading-none">
              Quantity
            </label>
            <input
              type="number"
              id="type"
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder="Enter Quantity"
              className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Size */}
          <div className="grid gap-2">
            <label htmlFor="size" className="text-sm font-medium leading-none">
              Size
            </label>
            <select
              id="size"
              onChange={(e) => setSize(e.target.value as iSize)}
              className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          {/* Type */}
          <div className="grid gap-2">
            <label htmlFor="type" className="text-sm font-medium leading-none">
              Type
            </label>
            <input
              type="text"
              id="type"
              onChange={(e) => setType(e.target.value)}
              placeholder="Enter Type"
              className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Fragrance */}
          <div className="grid gap-2">
            <label
              htmlFor="fragrance"
              className="text-sm font-medium leading-none"
            >
              Fragrance
            </label>
            <input
              type="text"
              id="fragrance"
              onChange={(e) => setFragrance(e.target.value)}
              placeholder="Enter fragrance"
              className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Add Flower Button */}
          <button
           onClick={() => handleEdit}
            type="submit"
            className="inline-flex col-span-2 mt-5 items-center justify-center border whitespace-nowrap rounded-md text-sm font-medium border-gray-400 hover:border-blue-600 h-10 px-4 py-2"
          >
            Edit
          </button>

          {/* Add Flower Button */}
          <button
          onClick={() => handleCreate()}
            type="submit"
            className="inline-flex col-span-2 mt-5 items-center justify-center border whitespace-nowrap rounded-md text-sm font-medium border-gray-400 hover:border-blue-600 h-10 px-4 py-2"
          >
            Duplicate
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;