export const UserInfo = ({ activeTab, user }) => {
  console.log(user, activeTab);
  return (
    <>
      <span>User {activeTab} : </span>
      <span>{user[0][activeTab]}</span>
      <div>
        <i>I don't know what information should be here</i>
      </div>
    </>
  );
};
