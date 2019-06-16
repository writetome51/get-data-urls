// Returns base64 data urls extracted from files.
// Usage Example:
//
// async set_dataURLs(files){
//     let urls = await getDataURLs(files);
//     this.dataURLs.push(...urls);
// }


export async function getDataURLs(files: File[] | FileList): Promise<string[]> {
	let dataURLs = [];

	return new Promise((returnData) => {
		for (let i = 0; i < files.length; ++i) {

			const reader = new FileReader();

			reader.onload = () => {
				dataURLs.push(reader.result);

				if (dataURLs.length === files.length) { // If finished reading each file...
					returnData(dataURLs);
				}
			};

			reader.readAsDataURL(files[i]);
		}

	});
}


let f = new File(['blah'], 'fileName');
let urls = getDataURLs([]);
