import FlowersDashboard from "../pages/Flowers/FlowersDashboard";
import AddFlower from "../pages/Flowers/management/AddFlower";
import ViewFlowers from "../pages/Flowers/management/ViewFlowers";
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
    ],
  },
  {
    name: "Sales Management",
    children: [
      {
        name: "Sales History",
        path: "create-faculty",
        element: <SalesHistory />,
      },
    ],
  },
];
