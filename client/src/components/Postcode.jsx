import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const Button = styled.button`
  padding: 0 7px;
  height: 26px;
  border: 1px solid #dcdee0;
  color: #303038;
  cursor: pointer;
  background-color: white;
`;

const Postcode = () => {
  const [openPostcode, setOpenPostcode] = useState(false);

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },
    // 주소 선택 이벤트
    selectAddress: (data) => {
      console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
      setOpenPostcode(false);
    },
  };

  const modalStyle = {
    width: "30%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "100",
    border: "1px solid #000000",
    overflow: "hidden",
  };
  return (
    <div>
      <Button onClick={handle.clickButton}>우편번호</Button>
      {openPostcode && (
        <DaumPostcode
          onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
          autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
          style={modalStyle}
        />
      )}
    </div>
  );
};

export default Postcode;
