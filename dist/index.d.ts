export declare type BrowserImageResizerConfig = {
    quality: number;
    maxWidth: number;
    maxHeight: number;
    maxSize?: number;
    scaleRatio?: number;
    autoRotate: boolean;
    debug: boolean;
    mimeType: string;
    onScale?: (imageData: string) => void;
};
export declare function readAndCompressImage(file: Blob, userConfig: BrowserImageResizerConfig): Promise<Blob>;
//# sourceMappingURL=index.d.ts.map