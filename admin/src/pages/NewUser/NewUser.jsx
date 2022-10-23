import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">새 유저</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>아이디 </label>
          <input type="text" placeholder="길태욱" />
        </div>
        <div className="newUserItem">
          <label>이름</label>
          <input type="text" placeholder="길 태욱" />
        </div>
        <div className="newUserItem">
          <label>이메일</label>
          <input type="email" placeholder="xodnr1566@naver.com" />
        </div>
        <div className="newUserItem">
          <label>비밀번호</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>핸드폰 번호</label>
          <input type="text" placeholder="010-8406-1566" />
        </div>
        <div className="newUserItem">
          <label>주소</label>
          <input type="text" placeholder="천안 | 대한민국" />
        </div>
        <div className="newUserItem">
          <label>성별</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">남성</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">여성</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>활성화</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">활성화</option>
            <option value="no">비활성화</option>
          </select>
        </div>
        <button className="newUserButton">생성하기</button>
      </form>
    </div>
  );
}
