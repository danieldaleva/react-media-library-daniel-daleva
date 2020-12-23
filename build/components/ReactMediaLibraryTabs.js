import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FileUpload from "./FileUpload";
import FileLibrary from "./FileLibrary";
import FileLibraryEmpty from "./FileLibraryEmpty";
import FileLibraryLoading from "./FileLibraryIsLoading";
const ReactMediaLibraryTabs = (props) => {
    return (React.createElement(Tabs, { defaultActiveKey: "upload", id: "react-media-library-tabs" },
        React.createElement(Tab, { eventKey: "upload", title: props.uploadTitle },
            React.createElement("div", { className: "pt-3" },
                React.createElement(FileUpload, { fileUploadCallback: props.fileUploadCallback }))),
        props.isLoading &&
            React.createElement(Tab, { eventKey: "library", title: props.loadingMessage },
                React.createElement(FileLibraryLoading, { loadingMessage: props.loadingMessage })),
        !props.isLoading &&
            React.createElement(Tab, { eventKey: "library", title: props.libraryTitle },
                (Array.isArray(props.fileLibraryList) && props.fileLibraryList.length > 0) &&
                    React.createElement(FileLibrary, { fileLibraryList: props.fileLibraryList, fileSelectCallback: props.fileSelectCallback, fileDeleteCallback: props.fileDeleteCallback, libraryCardComponent: props.libraryCardComponent }),
                (Array.isArray(props.fileLibraryList) && props.fileLibraryList.length === 0) &&
                    React.createElement(FileLibraryEmpty, { emptyMessage: props.emptyMessage }))));
};
export default ReactMediaLibraryTabs;
//# sourceMappingURL=ReactMediaLibraryTabs.js.map