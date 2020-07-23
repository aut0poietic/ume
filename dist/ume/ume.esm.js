import { b as bootstrapLazy } from './index-3d8d6d46.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-cdbbb2aa.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["ume-card",[[1,"ume-card",{"headerSize":[2,"header-size"],"horizontal":[516]}]]],["ume-col",[[1,"ume-col",{"size":[2],"hideMobile":[4,"hide-mobile"]}]]],["ume-heading",[[4,"ume-heading",{"level":[2],"display":[2]}]]],["ume-image",[[1,"ume-image",{"src":[1],"alt":[1],"width":[2],"height":[2],"opacity":[2],"cover":[516]}]]],["ume-layout",[[1,"ume-layout",{"fluid":[4]}]]],["ume-spacer",[[1,"ume-spacer",{"height":[2]}]]],["ume-text",[[4,"ume-text"]]]], options);
});
