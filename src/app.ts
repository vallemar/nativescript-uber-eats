import { createApp, registerElement } from 'nativescript-vue';
import Home from './components/Home.vue';
import CollectionViewPlugin from "@nativescript-community/ui-collectionview/vue3"
import { initialize } from '@nativescript-community/ui-image';
import { Pager } from "@nativescript-community/ui-pager";
import StackSlideTransformation from "@/transformers/Transformer";
import ImageModule from '@nativescript-community/ui-image/vue';

initialize();
registerElement("Pager", () => require("@nativescript-community/ui-pager").Pager);
registerElement("PagerItem", () => require("@nativescript-community/ui-pager").PagerItem);

Pager.registerTransformer('stack', StackSlideTransformation);

createApp(Home)
    .use(CollectionViewPlugin)
    .use(ImageModule)
    .start();
