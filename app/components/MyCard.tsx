import type { CustomFlowbiteTheme } from "flowbite-react";
import { Card } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["card"] = {
  color: {
    primary: "bg-red-500 hover:bg-red-600",
  },
};

export function MyCard() {
  return (
    <Card href="#" className="max-w-2xl m-auto mb-4" theme={customTheme} color="primary">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
