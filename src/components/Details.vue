<script lang="ts" setup>
import { PropType, ref } from 'nativescript-vue';
import Icon from './Icon.vue';
import { Restaurant, Dish } from '~/types';
import { FlexboxLayout, GridLayout, Image, Label, ScrollView, SharedTransition, StackLayout, View, off } from '@nativescript/core';
import { SharedTransitionEventData } from '@nativescript/core/ui/transition/shared-transition';
import type { CollectionView } from '@nativescript-community/ui-collectionview';
type Item = {
  name: string,
  typeItem: string,
  index: string,
  current: boolean
} | Dish & { typeItem: string } | { typeItem: string }

const imageRestaurantRef = ref()
const headerCategoriesRef = ref()
const imageRestaurantListRef = ref()
const headerTapRef = ref()
const { restaurant, index } = defineProps({
  restaurant: {
    type: Object as PropType<Restaurant>,
    required: true
  },
  index: Number
})

function getAllCategories(dishes: Dish[]): string[] {
  return [...new Set(dishes.map((dish) => dish.type))].sort();
}

const categories = ref(getAllCategories(restaurant.dishes).map(category => ({ name: category, typeItem: "category", current: false, index: 0 })))
const dishes = restaurant.dishes.map<Dish & { typeItem: string }>((dish) => ({ ...dish, ...{ typeItem: "food", description: dish.description.split(" ").slice(0, 15).join(" ") + "..." } }))

const items: Item[] = [{ typeItem: "header" }, { typeItem: "top" }];
let indexCategory = 0;
categories.value.forEach((category, i) => {
  category.index = i + indexCategory;
  items.push(category);
  const dishesOnCategory = dishes.filter(dishe => dishe.type === category.name);
  items.push(...dishesOnCategory);
  indexCategory += dishesOnCategory.length
})
const itemTemplate = (args: { item: Item }) => {
  return args.item.typeItem;
}

/* SharedTransition.events().on(
  SharedTransition.startedEvent,
  (data: SharedTransitionEventData) => {

    setTimeout(() => {

    //  (imageRestaurantRef.value.nativeView as View).opacity = 0;
    }, 200);
  }
)
const loadedImg = (args) => {
  
  args.object.opacity = 0
  setTimeout(() => {
    args.object.opacity = 1
  }, 300)
}; */
let animating = false;
let currentCategory = -1;


const onScroll = (args: { object: CollectionView, scrollOffset: number }) => {

  const headerTap: View = headerTapRef.value.nativeView;
  if (args.scrollOffset > 200 && headerTap.visibility != "visible" && animating == false) {
    animating = true;
    headerTap.visibility = "visible";
    headerTap.animate({
      opacity: 1,
      duration: 300,
      translate:{
        y: 0,
        x:0
      }
    }).then(() => {
      animating = false;
    })
  } else if (args.scrollOffset < 200 && headerTap.opacity == 1 && animating == false) {
    animating = true;
    headerTap.animate({
      opacity: 0,
      duration: 300,
      translate:{
        y: -headerTap.getActualSize().height,
        x:0
      }
    }).then(() => {
      headerTap.visibility = "collapse";
      animating = false;
    })
  }
  const visibleItems = categories.value.map(c => c.current)
  categories.value.forEach((category, i) => {
    visibleItems[i] = (args.object.isItemAtIndexVisible(category.index))
  })


  const firstVisible = visibleItems.findIndex(v => v)
  const actual = firstVisible == 0 ? 0 : firstVisible - 1;
  if (firstVisible != -1 && currentCategory != actual) {
    currentCategory = actual;
    categories.value.forEach(c => c.current = false)
    categories.value[actual].current = true;
    const headerCategoriesView = headerCategoriesRef.value.nativeView as View;

    headerCategoriesView.eachChildView((child) => {


      if ((child as Label).text === categories.value[currentCategory].name) {
        (headerCategoriesView.parent as ScrollView).scrollToHorizontalOffset(child.getLocationRelativeTo(headerCategoriesView).x, true)
      }

      return true;
    })
  }

}
function onToggleLoaded() {

}
</script>

<template>
  <Page actionBarHidden="true" androidStatusBarBackground="white">

    <GridLayout class=" bg-white">



      <CollectionView verticalAlignment="top" separatorColor="transparent" :itemTemplateSelector="itemTemplate"
        :items="items" colWidth="100%" height="100%" @scroll="onScroll">

        <template #header="{ item, index }">
          <StackLayout class="">
            <StackLayout class="">
              <GridLayout height="170">
                <NSImg height="170" stretch="fill" width="100%" :src="restaurant.img">
                </NSImg>
                <Icon fontSize="28" horizontalAlignment="left" verticalAlignment="top" icon="close" translateY="10"
                  translateX="10" class="w-[45] h-[45] text-center rounded-full bg-white text-black"></Icon>
                <Icon fontSize="28" horizontalAlignment="right" verticalAlignment="top" icon="search" translateY="10"
                  translateX="-10" class="w-[45] h-[45] text-center rounded-full bg-white text-black"></Icon>
                <Icon fontSize="28" horizontalAlignment="right" verticalAlignment="top" icon="more_horiz" translateY="10"
                  translateX="-65" class="w-[45] h-[45] text-center rounded-full bg-white text-black"></Icon>
              </GridLayout>
              <StackLayout class=" justify-between items-center mt-3 px-3 ">
                <Label textWrap="true" class="font-bold text-3xl" :text="restaurant.name"></Label>
                <FlexboxLayout class="mt-1 items-center w-full text-base">
                  <Icon fontSize="20" icon="star" class="text-center text-black"></Icon>
                  <Label class="font-bold rounded-full " :text="restaurant.score"></Label>
                  <Label class="font-bold rounded-full ml-1" :text="`(${restaurant.numberRatings}+ ratings) • `"></Label>
                  <Label class="font-bold rounded-full ml-1" :text="`${restaurant.typeFood} • `"></Label>
                  <Label class="font-bold rounded-full ml-1" text="€ • "></Label>
                  <NSImg height="20" width="20" class="ml-1" stretch="fill" src="~/assets/img/uber_one.png"> </NSImg>
                </FlexboxLayout>
                <Label class="text-gray ml-4" :text="restaurant.estimatedTime"></Label>

                <FlexboxLayout class="mt-6">
                  <FlexboxLayout class="bg-gray px-3 py-1 rounded-full items-center">
                    <Label text="See similar"></Label>
                    <Icon icon="expand_more" color="black" class="text-center ml-1 font-bold" translateY="1"
                      fontSize="24">
                    </Icon>
                  </FlexboxLayout>
                  <FlexboxLayout class="bg-gray px-3 py-1 rounded-full items-center ml-4">
                    <Icon icon="group_add" color="black" class="text-center mr-2 font-bold" translateY="1" fontSize="22">
                    </Icon>
                    <Label text="Group order"></Label>
                  </FlexboxLayout>
                </FlexboxLayout>
              </StackLayout>
            </StackLayout>
          </StackLayout>
        </template>
        <template #category="{ item, index }">
          <StackLayout class="">
            <Label class="text-2xl mt-4 px-3" :text="item.name"></Label>
          </StackLayout>
        </template>
        <template #food="{ item, index } : { item: Dish, index: number } ">
          <StackLayout class="">
            <GridLayout columns="*, 80" class="items-center justify-between mt-4 px-3">
              <StackLayout class="pr-3">
                <Label class="text-lg" :text=" item.name "></Label>
                <Label textWrap class="text-xs mt-1" style="line-height: 1;" :text=" item.description "></Label>
              </StackLayout>


              <StackLayout col="1">
                <NSImg class="" borderRadius="8" width="80" height="80" stretch="fill"
                placeholderImageUri="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=110&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFtYnVyZ2VyfHx8fHx8MTY5NDM3OTczOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=110"  
                :src=" `https://source.unsplash.com/random/80x80?sig=${index + 1}&hamburger,png` " />

              </StackLayout>




            </GridLayout>

          </StackLayout>
        </template>
        <template #top=" { item, index } : { item: Dish, index: number } ">
          <StackLayout class="">
            <Label class="mt-3 text-2xl pl-3" text="Featured articles"></Label>
            <CollectionView orientation="horizontal" :items=" restaurant.dishes.sort(dishe => dishe.score) "
              colWidth="38%" height="170" class="mt-2">
              <template #default=" { item, index } : { item: Dish, index: number } ">
                <StackLayout class="ml-3">
                  <GridLayout height="110">
                    <NSImg placeholderImageUri="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=110&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFtYnVyZ2VyfHx8fHx8MTY5NDM3OTczOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=110" 
                  borderRadius="8" width="100%" height="110" stretch="fill"
                    :src=" `https://source.unsplash.com/random/110x110?sig=${index + 1}&hamburger` ">
                  </NSImg>
                  <FlexboxLayout  v-if="index < 3" verticalAlignment="top" horizontallAlignment="left" class="mt-2">
                    <Label  :text="`#${index + 1} best seller`" class="bg-green-400 rounded-r-full px-2 py-1 text-xs"></Label>

                  </FlexboxLayout>
                  </GridLayout>
                  <Label class="mt-2" :text=" item.name "></Label>
                  <Label class="mt-2 " :text=" `${item.price}€` "></Label>
                </StackLayout>
              </template>

            </CollectionView>
          </StackLayout>
        </template>
      </CollectionView>

      <StackLayout ref="headerTapRef" translateY="-300" verticalAlignment="top" class="bg-white" opacity="0" visibility="collapse">
        <Label textWrap="true" class="font-bold text-xl px-3 mt-2" :text=" restaurant.name "></Label>

        <GridLayout height="60" width="100%" class="">
          <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
            <StackLayout orientation="horizontal" @loaded=" onToggleLoaded " ref="headerCategoriesRef">
              <Label v-for="(     category, index     ) in            categories           " :key=" index "
                :text=" category.name " class="px-3 py-1" style="border-bottom-width: 6"
                :class=" [category.current === true ? 'border-b-black' : 'border-b-gray-300'] ">
              </Label>

            </StackLayout>
          </ScrollView>

        </GridLayout>
      </StackLayout>
    </GridLayout>

  </Page>
</template>
