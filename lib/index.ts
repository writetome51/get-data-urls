/**************************
 Returns base64 data urls extracted from files.
 Usage Example:

 async set_dataURLs(files){
     let urls = await getDataURLs(files);
     this.dataURLs.push(...urls);
 }
 ************************/
import { getDataURL } from '@writetome51/get-data-url';


export async function getDataURLs(files: File[] | FileList): Promise<string[]> {
	let dataURLs = [];

	for (let i = 0; i < files.length; ++i) {
		let url = await getDataURL(files[i]);
		dataURLs.push(url);
	}
	return dataURLs;
}
