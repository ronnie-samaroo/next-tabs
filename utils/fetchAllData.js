import processJsonFile from "./processJsonFile";

const getAllData = () => {
  const tabs = processJsonFile("tabs.json");
  const users = processJsonFile("users.json");
  return { tabs, users };
};
export default getAllData;
