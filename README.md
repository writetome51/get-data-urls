# getDataURLs(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;files: File[] | FileList<br>): Promise<string[]>

An async function that gets an array of data URLs generated from `files`.


## Example

```html
<!--  In the html, get array of Files from a file input and pass it to
    a function:  
-->
<p>Choose files to generate data urls from:</p>
<input type="file" multiple  (change)="addToURLs($event.target.files)"/>
```

```ts
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
```js
import {getDataURLs} from '@writetome51/get-data-urls';
```
