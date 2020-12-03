import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <>
      안녕하세요. 제 이름은 {name}입니다 <br />
      children의 값은 {children}입니다 <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </>
  );
};
MyComponent.defaultProps = {
  name: "기본 이름",
};
MyComponent.propsTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
