import processJsonFile from "./processJsonFile";

const getAllData = () => {
  const tabs = processJsonFile("tabs.json");
  const users = processJsonFile("users.json");
  const welcomeTabs = processJsonFile("welcometabs.json");
  return { tabs, users, welcomeTabs };
};
export default getAllData;
