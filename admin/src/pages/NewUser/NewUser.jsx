import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="태욱" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="길 태욱" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="xodnr1566@naver.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="010-8406-1566" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="천안 | 대한민국" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">남성</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">여성</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
