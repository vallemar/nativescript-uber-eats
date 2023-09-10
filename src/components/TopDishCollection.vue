<script lang="ts" setup>
import { PropType } from 'nativescript-vue';
import { Dish, Restaurant } from '~/types';

const { restaurant } = defineProps({
  restaurant: {
    type: Object as PropType<Restaurant>,
    required: true
  }
})

</script>

<template>
  <CollectionView orientation="horizontal" :items="restaurant.dishes.sort(dishe => dishe.score)" colWidth="38%"
    height="170" class="mt-2">
    <template #default="{ item, index } : { item: Dish, index: number } ">
      <StackLayout class="ml-3">
        <GridLayout height="110">
          <NSImg
            placeholderImageUri="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=110&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFtYnVyZ2VyfHx8fHx8MTY5NDM3OTczOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=110"
            borderRadius="8" width="100%" height="110" stretch="fill"
            :src=" `https://source.unsplash.com/random/110x110?sig=${index + 1}&hamburger` ">
          </NSImg>
          <FlexboxLayout v-if=" index < 3 " verticalAlignment="top" horizontallAlignment="left" class="mt-2">
            <Label :text=" `#${index + 1} best seller` " class="bg-green-400 rounded-r-full px-2 py-1 text-xs"></Label>

          </FlexboxLayout>
        </GridLayout>
        <Label class="mt-2" :text=" item.name "></Label>
        <Label class="mt-1 " :text=" `${item.price}€` "></Label>
      </StackLayout>
    </template>
  </CollectionView>
</template>
