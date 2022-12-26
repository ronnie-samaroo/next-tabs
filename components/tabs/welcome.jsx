import { useState } from "react";
import styles from "./tabs.module.sass";
import { UserInfo } from "./user-info";

export const TabWelcome = ({ welcomeTabs, users, userId }) => {
  const [activeTab, setActiveTab] = useState("name");
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  const user = users?.data.filter((user) => user.id === userId);
  return (
    <div className={`${styles.welcome} p-4 col-6`}>
      <h6 className={styles.title}>User Information</h6>
      {userId ? (
        <>
          <div className={styles.icons}>
            {welcomeTabs?.data.length > 0 &&
              welcomeTabs?.data.map((tab) => {
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
            <UserInfo activeTab={activeTab} user={user} />
          </div>
        </>
      ) : (
        <div>Select User from the left panel to see the user information</div>
      )}
    </div>
  );
};
