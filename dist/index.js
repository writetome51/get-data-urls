"use strict";
/**************************
 Returns base64 data urls extracted from files.
 Usage Example:

 async set_dataURLs(files){
     let urls = await getDataURLs(files);
     this.dataURLs.push(...urls);
 }
 ************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function getDataURLs(files) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.getDataURLs = getDataURLs;
