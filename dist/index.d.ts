/**************************
 Returns base64 data urls extracted from files.
 Usage Example:

 async set_dataURLs(files){
     let urls = await getDataURLs(files);
     this.dataURLs.push(...urls);
 }
 ************************/

export declare function getDataURLs(files: File[] | FileList): Promise<string[]>;
