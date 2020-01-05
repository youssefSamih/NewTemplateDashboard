import React from 'react';
import PropTypes from "prop-types";

const Page = ({ children, tag: Tag }) => {
  return (
    <Tag>
      {children}
    </Tag>
  );
}

Page.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  children: PropTypes.node,
  // breadcrumbs: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     name: PropTypes.string
  //     active:
  //   })
  // )
};

Page.defaultProps = {
  tag: 'div',
  title: ''
};

export default Page;
