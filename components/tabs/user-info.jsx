export const UserInfo = ({ activeTab, user }) => {
  return (
    <>
      <span>User {activeTab} : </span>
      <span>{user[0][activeTab]}</span>
      <div>
        <i>I don&apos;t know what information should be here</i>
      </div>
    </>
  );
};
