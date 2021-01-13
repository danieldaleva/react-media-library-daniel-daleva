export interface FileMeta {
	fileName: string;
	type: string;
	size: number;
}

export interface FileUploadProps {
	fileUploadCallback: (data: any, meta: FileMeta) => Promise<boolean>;
}

export interface FileUploadListItem {
	fileName: string;
	status: number;
}