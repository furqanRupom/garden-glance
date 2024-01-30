/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddFlowerMutation, useGetFlowerQuery } from "../../../redux/features/flower/flowersApi";
import { IFlowers } from "../../../interface/flowers";
import { useSpecificUserQuery } from "../../../redux/features/user/userApi";
import { getCurrentUser } from "../../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const CreateVariant = () => {
  const { register, handleSubmit } = useForm();
  const [addFlower] = useAddFlowerMutation();
  const email = useSelector(getCurrentUser)!.email;
  const { data: userData } = useSpecificUserQuery(email);
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.search.split("=")[1];
  const {data:productData} = useGetFlowerQuery(id)
  const variantData =  productData?.data
  const handleAddFlower = async (data: IFlowers) => {
    const { price, quantity, size, type, fragrance, bloomDate, name, color } =
       data;
    const toastId = toast.loading("create New Variant in processing ...");
    const addData = {
      name: name.length === 0 ? variantData?.name : name,
      user: userData.data._id,
      price: price == 0 ? Number(variantData?.price) : Number(price),
      quantity: quantity == 0 ? Number(variantData?.quantity) : Number(quantity),
      color: color.length == 0 ? variantData?.color : color,
      size: size.length == 0 ? variantData?.size : size,
      type: type.length == 0 ? variantData?.type : type,
      fragrance: fragrance.length == 0 ? variantData?.fragrance : fragrance,
      bloomDate: bloomDate.length == 0 ? variantData?.bloomDate : bloomDate,
    };

    try {
      const res = await addFlower(addData);
      console.log(res);
      if (!(res as any).error) {
        toast.success("Add New Flower Successfully !", { id: toastId });
        navigate("/view-flowers");
        window.location.reload();
        navigate(0);
      }
      if((res as any).error){
        toast.error('Something went wrong', { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong !", { id: toastId });
    }
  };

  return (
    <div className="grid gap-4 max-w-3xl lg:max-w-5xl mx-auto my-16">
      <h1 className="text-2xl font-bold text-center pb-10">
        Create New Variant
      </h1>

      <form
        onSubmit={handleSubmit(handleAddFlower as any)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-12"
      >
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
            placeholder="Enter flower name"
            defaultValue={variantData?.name}
            className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("name")}
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
            placeholder="Enter price"
            defaultValue={variantData?.price}
            className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("price")}
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
            className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            defaultValue={variantData?.bloomDate}
            {...register("bloomDate")}
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
            defaultValue={variantData?.color}
            placeholder="Enter color"
            className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("color")}
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
            defaultValue={variantData?.quantity}
            placeholder="Enter Quantity"
            className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("quantity")}
          />
        </div>

        {/* Size */}
        <div className="grid gap-2">
          <label htmlFor="size" className="text-sm font-medium leading-none">
            Size
          </label>
          <select
            id="size"
            className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("size")}
           defaultValue={variantData?.size}
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
          <select
            className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("type")}
            defaultValue={variantData?.type}
          >

            <option value="Roses">Roses</option>
            <option value="SunFlowers">SunFlowers</option>
            <option value="Lavender">Lavender</option>
            <option value="Jasmine">Jasmine</option>
            <option value="Lilies">Lilies</option>
            <option value="Gardenias">Gardenias</option>
          </select>
        </div>

        {/* Fragrance */}
        <div className="grid gap-2">
          <label
            htmlFor="fragrance"
            className="text-sm font-medium leading-none"
          >
            Fragrance
          </label>
          <select
            className="h-10 px-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
            {...register("fragrance")}
            defaultValue={variantData?.fragrance}
          >
            <option value="ClassicRose">Classic Rose</option>
            <option value="SunnyFlowers">Sunny Flowers</option>
            <option value="LavenderBliss">Lavender Bliss</option>
            <option value="ExoticJasmine">Exotic Jasmine</option>
            <option value="SweetLily">Sweet Lily</option>
            <option value="RomanticPeony">Romantic Peony</option>
          </select>
        </div>

        {/* Add Flower Button */}
        <button
          type="submit"
          className="inline-flex col-span-2 mt-5 items-center justify-center border whitespace-nowrap rounded-md text-sm font-medium border-gray-400 hover:border-blue-600 h-10 px-4 py-2"
        >
          create variant
        </button>
      </form>
    </div>
  );
};

export default CreateVariant;
