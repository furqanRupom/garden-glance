import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from '@ant-design/icons'
import {
  AiOutlineDollar,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";


interface InvoiceData {
  invoice: string;
  status: string;
  amount: string;
  method: string;
}

const FlowersDashboard: React.FC = () => {
  const totalRevenue = {
    amount: "$45,231.89",
    percentageChange: "+20.1% from last month",
  };

  const subscriptions = {
    count: "+2350",
    percentageChange: "+180.1% from last month",
  };

  const sales = {
    count: "+12,234",
    percentageChange: "+19% from last month",
  };

  const activeNow = {
    count: "+573",
    sinceLastHour: "+201 since last hour",
  };

  const invoices: InvoiceData[] = [
    {
      invoice: "INV001",
      status: "Paid",
      amount: "$250.00",
      method: "Credit Card",
    },
    {
      invoice: "INV002",
      status: "Pending",
      amount: "$150.00",
      method: "PayPal",
    },
    {
      invoice: "INV003",
      status: "Unpaid",
      amount: "$350.00",
      method: "Bank Transfer",
    },
    {
      invoice: "INV004",
      status: "Paid",
      amount: "$450.00",
      method: "Credit Card",
    },
    { invoice: "INV005", status: "Paid", amount: "$550.00", method: "PayPal" },
  ];


  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-screen ">
      <header className="w-full border">
        <div className="flex justify-between py-5 max-w-5xl  mx-auto w-full">
          <h3 className="text-xl lg:text-2xl ">
            Welcome to <span className="text-gray-500">Garden Glance</span>
          </h3>

          <div className="flex items-center space-x-5 text-2xl">
            <Avatar
              style={{ backgroundColor: "gray" }}
              icon={<UserOutlined />}
            />
            <button onClick={() => dispatch(logout())}>
              <FaSignOutAlt className="text-red-400 hover:text-red-500" />
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        {/* Total Revenue */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                Total Revenue
              </h3>
              <AiOutlineDollar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold">{totalRevenue.amount}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {totalRevenue.percentageChange}
              </p>
            </div>
          </div>

          {/* Subscriptions */}
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                Subscriptions
              </h3>
              <AiOutlineUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold">{subscriptions.count}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {subscriptions.percentageChange}
              </p>
            </div>
          </div>

          {/* Sales */}
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                Sales
              </h3>
              <AiOutlineShoppingCart className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold">{sales.count}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {sales.percentageChange}
              </p>
            </div>
          </div>

          {/* Active Now */}
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
              <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                Active Now
              </h3>
              <AiOutlineClockCircle className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold">{activeNow.count}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {activeNow.sinceLastHour}
              </p>
            </div>
          </div>
        </div>

        {/* Invoice Table */}
        <div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&amp;_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                      Invoice
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Status
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Method
                    </th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  {invoices.map((invoiceData) => (
                    <tr
                      key={invoiceData.invoice}
                      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    >
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                        {invoiceData.invoice}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {invoiceData.status}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {invoiceData.amount}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
                        {invoiceData.method}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlowersDashboard;
