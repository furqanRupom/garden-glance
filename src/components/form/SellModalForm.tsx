/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/features/auth/authSlice";
import { useSpecificUserQuery } from "../../redux/features/user/userApi";
import { useGetFlowerQuery } from "../../redux/features/flower/flowersApi";
import { ISeller } from "../../interface/flowers";
import { toast } from "sonner";
import { useAddSoldProductMutation } from "../../redux/features/sales/salesApi";

interface SellModalFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  id: string;
}

const SellModalForm = ({ setOpen, open, id }: SellModalFormProps) => {
  const email = useSelector(getCurrentUser)!.email;
  const { data } = useSpecificUserQuery(email);
  const { data: flowerData } = useGetFlowerQuery(id);
  const [addProduct] = useAddSoldProductMutation();

  const name = data?.data?.name;

  const { handleSubmit, register } = useForm();
  console.log(flowerData);
  const handleSellSubmit = async (data: ISeller) => {
    const toastId = toast.loading("product sell on processing ...");
    const { saleDate, quantity } = data;
    console.log(quantity <= Number(flowerData?.data?.quantity));
    console.log(quantity, flowerData?.data?.quantity);
    if (quantity <= Number(flowerData?.data?.quantity)) {
      const buyerData = {
        id,
        buyerName: name,
        saleDate:new Date(saleDate).toISOString(),
        quantity: Number(quantity),
      };

      console.log(buyerData);
      const res = await addProduct(buyerData);
      console.log(res);
      // Assuming success, you can close the modal
      toast.success("product successfully sold !", {
        id: toastId,
        duration: 2000,
      });
      setOpen(false);
    } else {
      toast.error("The quantity exceeds the available quantity");
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title="Sell Card Form"
      open={open}
      onCancel={handleCancel}
      footer={null} // Removing the footer (buttons)
    >
      <form onSubmit={handleSubmit(handleSellSubmit as any)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Buyer Name:
          </label>
          <input
            {...register("BuyerName")}
            type="text"
            defaultValue={name}
            readOnly
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Sale Date:
          </label>
          <input
            type="date"
            {...register("saleDate")}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Quantity:
          </label>
          <input
            type="number"
            {...register("quantity")}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          className="bg-gray-500 flex items-center max-w-xs  mx-auto text-lg text-white  w-full text-center py-1 justify-center mt-3 hover:bg-gray-600 rounded-md"
          type="submit"
        >
          Sell
        </button>
      </form>
    </Modal>
  );
};

export default SellModalForm;
