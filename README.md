# getDataURLs(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;files: File[] | FileList<br>): Promise<string[]>

An async function that gets an array of data URLs generated from `files`.


## Example

```ts
<!--  In the html, get array of Files from a file input and pass it to
    a function:  
-->
<p>Choose files to generate data urls from:</p>
<input type="file" multiple  (change)="addToURLs($event.target.files)"/>
	
// In a javascript component:
async addToURLs(files) {
     let urls = await getDataURLs(files);
     this.dataURLs.push(...urls);
}
```

## Installation

```bash
npm i  @writetome51/get-data-urls
```

## Loading
```ts
// If using TypeScript:
import {getDataURLs} from '@writetome51/get-data-urls';
// If using ES5 JavaScript:
var getDataURLs = require('@writetome51/get-data-urls').getDataURLs;
```
