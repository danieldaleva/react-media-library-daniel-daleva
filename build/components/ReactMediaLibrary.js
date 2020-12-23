import * as React from "react";
import Modal from "react-bootstrap/Modal";
import ReactMediaLibraryTabs from "./ReactMediaLibraryTabs";
const ReactMediaLibrary = (props) => {
    return (React.createElement(Modal, { size: "xl", show: props.show, onHide: props.onHide, id: "react-media-library-modal", "aria-labelledby": "react-media-library-modal" },
        React.createElement(Modal.Header, { closeButton: true },
            React.createElement(Modal.Title, null, props.modalTitle)),
        React.createElement(Modal.Body, null,
            React.createElement(ReactMediaLibraryTabs, { deleteButtonLabel: props.deleteButtonLabel, selectButtonLabel: props.selectButtonLabel, isLoading: props.isLoading, uploadTitle: props.uploadTitle, libraryTitle: props.libraryTitle, loadingMessage: props.loadingMessage, emptyMessage: props.emptyMessage, fileLibraryList: props.fileLibraryList, fileUploadCallback: props.fileUploadCallback, fileSelectCallback: props.fileSelectCallback, fileDeleteCallback: props.fileDeleteCallback, libraryCardComponent: props.libraryCardComponent }))));
};
ReactMediaLibrary.defaultProps = {
    modalTitle: "Media Library",
    libraryTitle: "Library",
    uploadTitle: "Upload",
    emptyMessage: "The library is empty",
    loadingMessage: "Loading media...",
    deleteButtonLabel: 'Delete',
    selectButtonLabel: 'Select File',
    isLoading: true,
};
export default ReactMediaLibrary;
//# sourceMappingURL=ReactMediaLibrary.js.map