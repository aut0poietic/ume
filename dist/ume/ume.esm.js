import { p as patchBrowser, b as bootstrapLazy } from './index-ad88a850.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["ume-col",[[1,"ume-col",{"size":[2],"hideMobile":[4,"hide-mobile"]}]]],["ume-image",[[1,"ume-image",{"src":[1],"alt":[1],"width":[2],"height":[2],"opacity":[2],"cover":[516]}]]],["ume-layout",[[1,"ume-layout",{"fluid":[4]}]]]], options);
});
