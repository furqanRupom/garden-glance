import { Button, Modal } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/features/auth/authSlice";
import { useSpecificUserQuery } from "../../redux/features/user/userApi";
import {  useGetFlowerQuery } from "../../redux/features/flower/flowersApi";
import { ISeller } from "../../interface/flowers";
import { toast } from "sonner";
import { useAddSoldProductMutation } from "../../redux/features/sales/salesApi";

const SellModalForm = ({ setOpen, open, id }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const email = useSelector(getCurrentUser).email;
  const { data } = useSpecificUserQuery(email);
  const {data:flowerData} = useGetFlowerQuery(id);
  const [addProduct] = useAddSoldProductMutation();

 const name = data?.data?.name;
console.log(flowerData?.data?.quantity);
  const { handleSubmit, register } = useForm();
  const handleSellSubmit = async (data:ISeller) => {
    const {  saleDate, quantity } = data;
      console.log(flowerData?.data?.quantity);
    if(quantity <= flowerData?.data?.quantity){
      const buyerData = {
        id,
        buyerName: name,
        saleDate,
        quantity: Number(quantity),
      };
      console.log(buyerData)
      const res = await addProduct(buyerData);
      console.log(res);
    }else{
      toast.error("the quantity  exceed to available quantity ");
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      title="Basic Modal"
      open={open}
      onCancel={handleCancel}
      cancelText="Cancel"
      okType="default"
    >
      <form onSubmit={handleSubmit(handleSellSubmit)}>
        <input
          {...register("BuyerName")}
          type="text"
          defaultValue={name}
          readOnly
        />
        <input type="date" {...register("saleDate")} />

        <input type="number" {...register("quantity")} />

        <Button htmlType="submit">submit </Button>
      </form>
    </Modal>
  );
};

export default SellModalForm;
