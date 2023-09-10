<script lang="ts" setup>
import {
  $navigateTo,
  $showModal,
  ref
} from 'nativescript-vue';
import Header from './Header.vue';
import TextSearch from './TextSearch.vue';
import Details from './Details.vue';
import CarItemRestaurant from './CarItemRestaurant.vue';
import { items } from '~/MockData';
import { View, Utils, isIOS, SharedTransition, PageTransition, ModalTransition, Screen, SharedTransitionConfig } from '@nativescript/core';
import CarItemOption from './CarItemOption.vue';
import type { CollectionView } from '@nativescript-community/ui-collectionview';
import { DataItem, Restaurant } from '~/types';
import { onScrollDirection } from '~/ScrollUtil';

const headerViewRef = ref();

const durationHeaderAnimation = 250;
let heightHeader = 0;
let animating = false;
let collapsed = false;

function loadedCollectionView(args: { object: CollectionView }) {
  const header = headerViewRef.value.nativeView as View;
  heightHeader = 0;
  header.eachChildView((child) => {
    const marginBottom = Utils.isNumber(child.marginBottom) ? child.marginBottom : child.marginBottom?.value ? child.marginBottom.value : 0;
    const marginTop = Utils.isNumber(child.marginTop) ? child.marginTop : child.marginTop?.value ? child.marginTop.value : 0;
    heightHeader += child.getActualSize().height + marginBottom + marginTop
    return true
  })
  args.object.translateY = heightHeader + 5
}

const itemTemplate = (args: { item: DataItem }) => {
  return args.item.type;
}

const animateTranslateY = (view: View, y: number, opacity = 1) => view.animate({
  translate: {
    y,
    x: 0
  },
  opacity,
  duration: durationHeaderAnimation
})


const onScroll = (args: { object: CollectionView, scrollOffset: number }) => {
  const collection = args.object;

  onScrollDirection(args, {
    onTop: () => {
      if (!animating && collapsed) {
        const view = (headerViewRef.value.nativeView as View);
        animating = true;
        collapsed = false;
        animating = true;
        animateTranslateY(collection, heightHeader + 5)
        animateTranslateY(view, 0, 1).then(() => {
          animating = false;
        })
      }
    }, onBottom: () => {
      const view = (headerViewRef.value.nativeView as View);
      if (!animating && view.translateY == 0) {
        animating = true;
        collapsed = true;
        animateTranslateY(collection, 0)
        animateTranslateY(view, - heightHeader + 5, 0).then(() => {
          animating = false;
        })

      }
    }
  })
}

function goTo(restaurant: Restaurant, index: number) {


  if (isIOS) {
    $showModal(Details, {
      transition: SharedTransition.custom(new PageTransition()),
      props: {
        restaurant,
        index
      },
      fullscreen: true

    })
  } else {

    $navigateTo(Details, {
      transition: SharedTransition.custom(new PageTransition(), {
        pageStart: {
          x: 0,
          y: 300,
          // Try commenting above values and uncommenting these...
          // x: 0,
          // y: -300,
        },
        pageEnd: {
          // use nice linear duration on Android
          duration: 500,
          // use custom spring on iOS
          spring: { tension: 60, friction: 8, mass: 4 },
          opacity: 1,

        },
        pageReturn: {
          duration: 500,
          x: -Screen.mainScreen.widthDIPs,
          y: 0,
          opacity: 0,
        },
        interactive: {
          dismiss: {
            finishThreshold: 0.5
          }
        }
      }),
      props: {
        restaurant,
        index
      }

    })
  }
}
</script>

<template>
  <Frame>
    <Page actionBarHidden="true" androidStatusBarBackground="white">




      <GridLayout rows="auto">
        <!--  <StackLayout row="0" ref="refHeader" @loaded="loadedHeader" class="px-4 py-1"> -->
        <StackLayout ref="headerViewRef" class="px-4 py-1">
          <Header class="my-2"></Header>
          <TextSearch class="mt-4  pb-2"></TextSearch>
        </StackLayout>

        <CollectionView @layoutChanged="loadedCollectionView" @scroll="onScroll" :items="items" colWidth="100%"
          :itemTemplateSelector="itemTemplate" class="bg-gray" height="100%">
          <template #default="{ item, index }">
            <StackLayout class="android:pb-3 ios:pb-2" @tap="goTo(item, index)">
              <CarItemRestaurant :restaurant="item" :index="index"></CarItemRestaurant>
            </StackLayout>
          </template>
          <template #option="{ item }">
            <StackLayout class="android:pb-3 ios:pb-2">
              <StackLayout class="px-4 android:py-3 ios:py-2 bg-white text-center" orientation="horizontal">
                <CarItemOption v-for="(option, i) in item.options" :key="i" :index="i" height="95" width="28%"
                  :item="option"></CarItemOption>
              </StackLayout>
            </StackLayout>
          </template>

          <template #ad="{ item }">
            <StackLayout class="android:pb-3 ios:pb-2">
              <Pager transformers="stack" class="bg-white py-2" :height="isIOS ? 185 : 'auto'">
                <PagerItem v-for="(ad, i) in item.ads" :key="i" :index="i">
                  <StackLayout class="px-4  text-center">
                    <FlexboxLayout class="rounded-2xl" :backgroundColor="ad.bg">
                      <FlexboxLayout width="65%" class="p-2 flex-col justify-between">
                        <Label :text="ad.title" textWrap="true" style="line-height:1"
                          class="font-bold text-2xl text-center mt-1 text-black"></Label>
                        <Label :text="ad.subtitle"
                          class="font-bold text-base text-center mt-1 text-black bg-white rounded-full"></Label>
                      </FlexboxLayout>
                      <NSImg height="150" width="35%" stretch="fill" borderRadius="20" :src="ad?.img"> </NSImg>
                    </FlexboxLayout>
                  </StackLayout>
                </PagerItem>
              </Pager>
            </StackLayout>
          </template>
        </CollectionView>
      </GridLayout>
    </Page>
  </Frame>
</template>