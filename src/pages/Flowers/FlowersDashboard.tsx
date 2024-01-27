import React from "react";

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

  return (
    <div className="flex flex-col h-screen">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
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
