import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const FileLibraryEmpty = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Row, { className: "py-3" },
            React.createElement(Col, { xs: 12, sm: 6, md: 4, lg: 3, className: "mb-3" }, props.emptyMessage || 'The library is empty'))));
};
export default FileLibraryEmpty;
//# sourceMappingURL=FileLibraryEmpty.js.map