var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

import { getDataURL } from '@writetome51/get-data-url';


/**************************
 Returns base64 data urls extracted from files.
 Usage Example:

 async set_dataURLs(files){
     let urls = await getDataURLs(files);
     this.dataURLs.push(...urls);
 }
 ************************/

export function getDataURLs(files) {
    return __awaiter(this, void 0, void 0, function* () {
        let dataURLs = [];

        for (let i = 0; i < files.length; ++i) {
            let url = yield getDataURL(files[i]);
            dataURLs.push(url);
        }
        return dataURLs;
    });
}
