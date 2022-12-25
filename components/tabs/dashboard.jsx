import { useState } from "react";
import styles from "./tabs.module.sass";

export const TabDashboard = ({ data, active, setUserId }) => {
  const [activeTab, setActiveTab] = useState("approvals");
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  const activeData = data?.data.filter((tab) => tab.title === activeTab);
  const handleUserClick = (id) => {
    setUserId(id);
  };
  return (
    <div className={`${styles.dashboard} p-4 col-6`}>
      <h6 className={styles.title}>Dashboard</h6>
      <div className={styles.icons}>
        {data?.data.length > 0 &&
          data?.data.map((tab) => {
            return (
              <button
                className={`${styles.icons_item} ${
                  activeTab === tab.title ? styles.active : ""
                }`}
                key={tab.id}
                onClick={() => handleTabClick(tab.title)}
              >
                {tab.title}
              </button>
            );
          })}
      </div>
      <div className={`${styles.content} my-4`}>
        <table>
          <thead>
            <tr>
              <th>listing id</th>
              <th>name</th>
              <th>status</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {activeData[0]?.dashboard.length > 0 &&
              activeData[0]?.dashboard.map((item) => {
                return (
                  <tr key={item.id} onClick={() => handleUserClick(item.id)}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td className={item.status === "New" ? styles.new : ""}>
                      {item.status}
                    </td>
                    <td>{item.date}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
