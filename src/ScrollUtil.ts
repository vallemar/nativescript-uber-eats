import type { CollectionView } from '@nativescript-community/ui-collectionview';
import { isIOS } from '@nativescript/core';

let scroll = 0;
const scrollTolerance = isIOS ? 30 : 120;

export const onScrollDirection = (args: { object: CollectionView, scrollOffset: number }, callback: {onTop?: () => void, onBottom?: () => void}) => {
    const currentScroll = args.scrollOffset

    if (scroll - scrollTolerance > currentScroll) {
        callback?.onTop ? callback?.onTop(): null;
    } else {
        if (scroll + scrollTolerance < currentScroll) {
            callback?.onBottom ? callback?.onBottom(): null;
        }
    }
    scroll = currentScroll;
}