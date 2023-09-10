import {Pager} from "@nativescript-community/ui-pager";

export default function (i: number, uiCollectionViewLayoutAttributes: UICollectionViewLayoutAttributes, owner: Pager, collectionView: UICollectionView) {
    const animation = new LinearCardAttributesAnimator(i, uiCollectionViewLayoutAttributes, owner, collectionView)
    animation.animate()
}


class BasePagerAnimation {
    i = 0;
    attributes: UICollectionViewLayoutAttributes;
    owner: Pager;
    collectionView: UICollectionView;
    contentView: UIView = null!
    scrollDirection = UICollectionViewScrollDirection.Horizontal

    /// The ratio of the distance between the start of the cell and the start of the collectionView and the height/width of the cell depending on the scrollDirection. It's 0 when the start of the cell aligns the start of the collectionView. It gets positive when the cell moves towards the scrolling direction (right/down) while getting negative when moves opposite.
    startOffset = 2

    /// The ratio of the distance between the center of the cell and the center of the collectionView and the height/width of the cell depending on the scrollDirection. It's 0 when the center of the cell aligns the center of the collectionView. It gets positive when the cell moves towards the scrolling direction (right/down) while getting negative when moves opposite.
    middleOffset = 0

    /// The ratio of the distance between the **start** of the cell and the end of the collectionView and the height/width of the cell depending on the scrollDirection. It's 0 when the **start** of the cell aligns the end of the collectionView. It gets positive when the cell moves towards the scrolling direction (right/down) while getting negative when moves opposite.
    endOffset = 0

    constructor(i: number, uiCollectionViewLayoutAttributes: UICollectionViewLayoutAttributes, owner: Pager, collectionView: UICollectionView) {
        this.i = i;
        this.attributes = uiCollectionViewLayoutAttributes;
        this.owner = owner;
        this.collectionView = collectionView;
        this.scrollDirection = owner.orientation === "horizontal" ? UICollectionViewScrollDirection.Horizontal : UICollectionViewScrollDirection.Vertical
        this.update();
    }

    update(){
        let distance: any
        let itemOffset: any

        if (this.scrollDirection == UICollectionViewScrollDirection.Horizontal) {
            distance = this.collectionView.frame.size.width;
            itemOffset = this.attributes.center.x - this.collectionView.contentOffset.x
            this.startOffset = (this.attributes.frame.origin.x - this.collectionView.contentOffset.x) / this.attributes.frame.size.width
            this.endOffset = (this.attributes.frame.origin.x - this.collectionView.contentOffset.x - this.collectionView.frame.size.width) / this.attributes.frame.size.width
        } else {
            distance = this.collectionView.frame.size.height
            itemOffset = this.attributes.center.y - this.collectionView.contentOffset.y
            this.startOffset = (this.attributes.frame.origin.y - this.collectionView.contentOffset.y) / this.attributes.frame.size.height
            this.endOffset = (this.attributes.frame.origin.y - this.collectionView.contentOffset.y - this.collectionView.frame.size.height) / this.attributes.frame.size.height
        }

        this.middleOffset = itemOffset / distance - 0.5
        // Cache the contentView since we're going to use it a lot.
        if (this.contentView == null) {
            let c = this.collectionView.cellForItemAtIndexPath(this.attributes.indexPath)?.contentView;
            this.contentView = c
        }
    }

}


class LinearCardAttributesAnimator extends BasePagerAnimation {

    constructor(i: number, uiCollectionViewLayoutAttributes: UICollectionViewLayoutAttributes, owner: Pager, collectionView: UICollectionView) {
        super(i, uiCollectionViewLayoutAttributes, owner, collectionView)
    }

    // minAlpha: The alpha to apply on the cells that are away from the center. Should be in range [0, 1]. 0.5 by default.
    // itemSpacing: The spacing ratio between two cells. 0.3 by default.
    // scaleRate: The scale rate that will applied to the cells to make it into a card.
    animate(minAlpha = 0.5, itemSpacing = 0.2, scaleRate = 0.9) {
        let position = this.middleOffset
        let scaleFactor = 1
        if (scaleRate !== 1) {
            scaleFactor = scaleRate - 0.1 * Math.abs(position)
        } else {
            scaleFactor = scaleRate - 0.2
        }

        let scaleTransform = CGAffineTransformMakeScale(scaleFactor, scaleFactor)
        let translationTransform: CGAffineTransform

        if (this.scrollDirection == UICollectionViewScrollDirection.Horizontal) {
            let width = this.collectionView.frame.size.width
            let translationX = -(width * itemSpacing * position)
            translationTransform = CGAffineTransformMakeTranslation(translationX, - (1.0 - Math.abs(position) * 25))
        } else {
            let height = this.collectionView.frame.size.height
            let translationY = -(height * itemSpacing * position)
            translationTransform = CGAffineTransformMakeTranslation(0, translationY)
        }

        this.attributes.alpha = 1.0 - Math.abs(position) + minAlpha
        this.attributes.transform = CGAffineTransformConcat(scaleTransform, translationTransform);
    }
}