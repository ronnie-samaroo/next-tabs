import processJsonFile from "./processJsonFile";

const getAllData = () => {
  const tabs = processJsonFile("tabs.json");

  return { tabs };
};
export default getAllData;
