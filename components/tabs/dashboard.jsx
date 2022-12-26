import { useState } from "react";
import styles from "./tabs.module.sass";

export const TabDashboard = ({ tabs, users, setUserId }) => {
  const [activeTab, setActiveTab] = useState("approvals");
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  const activeData = users?.data.filter((user) => user.category === activeTab);
  const handleUserClick = (id) => {
    setUserId(id);
  };

  return (
    <div className={`${styles.dashboard} p-4 col-6`}>
      <h6 className={styles.title}>Dashboard</h6>
      <div className={styles.icons}>
        {tabs?.data.length > 0 &&
          tabs?.data.map((tab) => {
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
            {activeData?.length > 0 &&
              activeData.map((item) => {
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
