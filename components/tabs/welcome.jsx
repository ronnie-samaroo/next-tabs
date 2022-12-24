import styles from "./tabs.module.sass";

export const TabWelcome = ({ data, active }) => {
  const activeContent = data?.data.filter((tab) => tab.title === active);

  return (
    <div className={`${styles.welcome} p-4 col-6`}>
      <h6 className={styles.title}>Welcome</h6>
      <div className={styles.content}>
        <p>{activeContent[0].content}</p>
        <p>{activeContent[0].content}</p>
        <p>{activeContent[0].content}</p>
      </div>
    </div>
  );
};
