import { useState } from "react";
import styles from "./tabs.module.sass";
import { UserInfo } from "./user-info";

export const TabWelcome = ({ data, userId }) => {
  const [activeTab, setActiveTab] = useState("name");
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  const user = data?.data.filter((user) => user.id === userId);
  return (
    <div className={`${styles.welcome} p-4 col-6`}>
      <h6 className={styles.title}>User Information</h6>
      {userId ? (
        <>
          <div className={styles.icons}>
            <button
              className={`${styles.icons_item} ${
                activeTab === "userName" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("name")}
            >
              User Name
            </button>
            <button
              className={`${styles.icons_item} ${
                activeTab === "userStatus" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("status")}
            >
              User Status
            </button>
            <button
              className={`${styles.icons_item} ${
                activeTab === "userDate" ? styles.active : ""
              }`}
              onClick={() => handleTabClick("date")}
            >
              User Date
            </button>
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
