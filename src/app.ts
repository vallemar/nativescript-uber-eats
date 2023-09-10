import { createApp, registerElement } from 'nativescript-vue';
import Home from './components/Home.vue';
import CollectionViewPlugin from "@nativescript-community/ui-collectionview/vue3"
import { Pager } from "@nativescript-community/ui-pager";
import StackSlideTransformation from "@/transformers/Transformer";
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';

ImageCacheIt.enableAutoMM();
registerElement("Pager", () => require("@nativescript-community/ui-pager").Pager);
registerElement("PagerItem", () => require("@nativescript-community/ui-pager").PagerItem);
registerElement("NSImg", () => require("@triniwiz/nativescript-image-cache-it").ImageCacheIt);

Pager.registerTransformer('stack', StackSlideTransformation);

createApp(Home)
    .use(CollectionViewPlugin)
    .start();
