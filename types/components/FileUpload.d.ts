export interface FileMeta {
	fileName: string;
	type: string;
	size: number;
}

export interface FileUploadProps {
	fileUploadCallback: (data: File, meta: FileMeta) => Promise<boolean>;
}

export interface FileUploadListItem {
	fileName: string;
	status: number;
}