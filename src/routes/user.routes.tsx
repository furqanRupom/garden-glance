import FlowersDashboard from "../pages/Flowers/FlowersDashboard";
import AddFlower from "../pages/Flowers/management/AddFlower";
import UpdateFlower from "../pages/Flowers/management/UpdateFlower";
import ViewFlowers from "../pages/Flowers/management/ViewFlowers";
import SalesFlower from "../pages/Sales/SalesFlower";
import SalesHistory from "../pages/Sales/SalesHistory";

export const UserSidebarPaths = [
  {
    name: "dashboard",

    path: "dashboard",
    element: <FlowersDashboard />,
  },
  {
    name: "Flowers Management",
    children: [
      {
        name: "View Flowers ",
        path: "view-flowers",
        element: <ViewFlowers />,
      },
      {
        name: "Add Flower ",
        path: "add-flower",
        element: <AddFlower />,
      },
      {
        name: "Update Flower ",
        path: "update-flower",
        element: <UpdateFlower />,
      },
    ],
  },
  {
    name: "Sales Management",
    children: [
      {
        name: "Sales Flower",
        path: "sales-flower",
        element: <SalesFlower />,
      },
      {
        name: "Sales History",
        path: "create-faculty",
        element: <SalesHistory />,
      },
    ],
  },
];
