import React from "react";

export interface FileLibraryListItem {
	_id: string | number;
	title?: string;
	size?: number;
	createdAt?: Date;
	thumbnailUrl?: string;
	description?: string;
	fileName?: string;

	[key: string]: any;
}

export interface FileLibraryProps {
	defaultActiveKey?: string
	deleteButtonLabel?: string;
	selectButtonLabel?: string;
	isLoading?: boolean;
	loadingMessage?: string;
	emptyMessage?: string;
	uploadTitle?: string;
	libraryTitle?: string;
	fileLibraryList?: FileLibraryListItem[];
	sortProperty?: "title" | "createdAt" | "size" | "fileName";
	sortAscending?: boolean;
	fileSelectCallback?: (item: FileLibraryListItem) => void;
	fileDeleteCallback?: (item: FileLibraryListItem) => void;
	libraryCardComponent?: React.FC<any>;
}