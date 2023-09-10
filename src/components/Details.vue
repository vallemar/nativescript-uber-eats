<script lang="ts" setup>
import { PropType, ref } from 'nativescript-vue';
import HeaderRestaurant from './HeaderRestaurant.vue';
import DishItem from './DishItem.vue';
import TopDishCollection from './TopDishCollection.vue';
import { Restaurant, Dish, ItemViewRestaurant } from '~/types';
import type { CollectionView } from '@nativescript-community/ui-collectionview';
import { Label, ScrollView, View } from '@nativescript/core';

const getAllCategories = (dishes: Dish[]) => [...new Set(dishes.map((dish) => dish.type))].sort();
const itemTemplate = (args: { item: ItemViewRestaurant }) => args.item.typeItem;

const { restaurant, index } = defineProps({
  restaurant: {
    type: Object as PropType<Restaurant>,
    required: true
  },
  index: Number
})

const headerCategoriesRef = ref();
const headerRef = ref();
const categories = ref(getAllCategories(restaurant.dishes).map(category => ({ name: category, typeItem: "category", hasFocus: false, index: 0 })))

const dishes = restaurant.dishes.map<Dish & { typeItem: string }>((dish) => ({ ...dish, ...{ typeItem: "food", description: dish.description.split(" ").slice(0, 15).join(" ") + "..." } }))
const items: ItemViewRestaurant[] = [{ typeItem: "header" }, { typeItem: "top" }];
let animatingHeaderCategory = false;
let currentCategory = -1;

buidItemsList();

function buidItemsList() {
  let indexCategorySum = 0;
  categories.value.forEach((category, i) => {
    category.index = i + indexCategorySum;
    items.push(category);

    const dishesOnCategory = dishes.filter(dishe => dishe.type === category.name);
    items.push(...dishesOnCategory);

    indexCategorySum += dishesOnCategory.length
  })
}

const onScroll = (args: { object: CollectionView, scrollOffset: number }) => {
  const headerView: View = headerRef.value.nativeView;
  if (args.scrollOffset > 200 && headerView.visibility != "visible" && animatingHeaderCategory == false) {
    animatingHeaderCategory = true;
    headerView.visibility = "visible";
    headerView.animate({
      opacity: 1,
      duration: 300,
      translate: {
        y: 0,
        x: 0
      }
    }).then(() => {
      animatingHeaderCategory = false;
    })
  } else if (args.scrollOffset < 200 && headerView.opacity == 1 && animatingHeaderCategory == false) {
    animatingHeaderCategory = true;
    headerView.animate({
      opacity: 0,
      duration: 300,
      translate: {
        y: -headerView.getActualSize().height,
        x: 0
      }
    }).then(() => {
      headerView.visibility = "collapse";
      animatingHeaderCategory = false;
    })
  }

  const actualVisibleCategories = categories.value.map(category => (args.object.isItemAtIndexVisible(category.index)))

  let firstVisible = actualVisibleCategories.findIndex(visibleCategory => visibleCategory)
  firstVisible = firstVisible == 0 ? 0 : firstVisible - 1;
  if (firstVisible != -1 && currentCategory != firstVisible) {
    currentCategory = firstVisible;
    categories.value.forEach(c => c.hasFocus = false);
    categories.value[firstVisible].hasFocus = true;

    // Move ScrollView
    const headerCategoriesView = headerCategoriesRef.value.nativeView as View;
    headerCategoriesView.eachChildView((child) => {
      if ((child as Label).text === categories.value[currentCategory].name) {
        (headerCategoriesView.parent as ScrollView).scrollToHorizontalOffset(child.getLocationRelativeTo(headerCategoriesView).x, true);
      }
      return true;
    })
  }

}

</script>

<template>
  <Page actionBarHidden="true" androidStatusBarBackground="white">
    <GridLayout class="bg-white">
      <CollectionView iosOverflowSafeArea="true" verticalAlignment="top" separatorColor="transparent" :itemTemplateSelector="itemTemplate"
        :items="items" colWidth="100%" height="100%" @scroll="onScroll">
        <template #header="{ item, index }">
          <StackLayout class="">
            <HeaderRestaurant :restaurant="restaurant" :index="index"></HeaderRestaurant>
          </StackLayout>
        </template>
        <template #category="{ item, index }">
          <StackLayout class="">
            <Label class="text-2xl mt-4 px-3" :text="item.name"></Label>
          </StackLayout>
        </template>
        <template #food="{ item, index } : { item: Dish, index: number } ">
          <StackLayout class="">
            <DishItem :dish=" item " :index=" index "></DishItem>
          </StackLayout>
        </template>
        <template #top=" { item, index } : { item: Dish, index: number } ">
          <StackLayout class="">
            <Label class="mt-3 text-2xl pl-3" text="Featured articles"></Label>
            <TopDishCollection :restaurant=" restaurant "></TopDishCollection>
          </StackLayout>
        </template>
      </CollectionView>

      <!-- HEADER CATEGORIES -->
      <StackLayout ref="headerRef" translateY="-300" verticalAlignment="top" class="bg-white" opacity="0"
        visibility="collapse">
        <Label textWrap="true" class="font-bold text-xl px-3 mt-2" :text=" restaurant.name "></Label>
        <GridLayout height="60" width="100%" class="">
          <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
            <StackLayout orientation="horizontal" ref="headerCategoriesRef">
              <Label v-for="(  category, index  ) in   categories  " :key=" index " :text=" category.name " class="px-3 py-1"
                style="border-bottom-width: 6"
                :class=" [category.hasFocus === true ? 'border-b-black' : 'border-b-gray-300'] ">
              </Label>
            </StackLayout>
          </ScrollView>
        </GridLayout>
      </StackLayout>
    </GridLayout>
  </Page>
</template>
