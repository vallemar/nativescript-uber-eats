import { Utils } from "@nativescript/core";

let linearCardTransformation: LinearCardTransformation = null!;

@NativeClass
@Interfaces([androidx.viewpager2.widget.ViewPager2.PageTransformer])
export default class UserTransitionTransformation extends java.lang.Object implements androidx.viewpager2.widget.ViewPager2.PageTransformer {
    transformPage(page: android.view.View, position: any) {
        if (linearCardTransformation == null) {
            linearCardTransformation = new LinearCardTransformation(page);
        }
        linearCardTransformation.animate(page, position)
    }
}

class BasePagerAnimation {

    viewPager: androidx.viewpager2.widget.ViewPager2;

    constructor(page: android.view.View) {
        this.viewPager = page.getParent().getParent() as androidx.viewpager2.widget.ViewPager2;
    }
}

class LinearCardTransformation extends BasePagerAnimation {
    constructor(page: android.view.View) {
        super(page);
    }

    // Note: for this transformer to work well on android the item pages must have a margin
    animate(page: android.view.View, position: number, translate = 25, staleFactor = 0.28) {
        this.viewPager.setClipToPadding(false);
        this.viewPager.setClipChildren(false);

        androidx.core.view.ViewCompat.setElevation(page, -Math.abs(position))

        const pageTranslationX = Utils.layout.toDevicePixels(translate);

      /*   if (position < -1) {
            page.setTranslationY(-(pageTranslationX) * position)
        } else if (position <= 0) {
            page.setTranslationY(-(pageTranslationX) * position)
        } else if (position <= 1) {
           page.setTranslationY(+(pageTranslationX) * position)
        } else {
            page.setTranslationY(+(pageTranslationX) * position)
        } */
        page.setTranslationX(-(pageTranslationX) * position)
    }
}