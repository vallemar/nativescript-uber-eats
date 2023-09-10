<script lang="ts" setup>
import { PropType, $navigateBack } from 'nativescript-vue';
import Icon from './Icon.vue';
import { Restaurant } from '~/types';
import { View } from '@nativescript/core';

const { restaurant, index } = defineProps({
  restaurant: {
    type: Object as PropType<Restaurant>,
    required: true
  },
  index: Number
})

const back = (args: any) => {
  (args.object as View).closeModal();
  $navigateBack();
}
</script>

<template>
  <StackLayout class="">
    <GridLayout height="170">
      <NSImg height="170" stretch="aspectFill" width="100%" :src="restaurant.img">
      </NSImg>
      <Icon @tap="back" fontSize="28" horizontalAlignment="left" verticalAlignment="top" icon="close" translateY="10"
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
        <NSImg height="20" width="20" class="ml-1" stretch="aspectFill" src="~/assets/img/uber_one.png"> </NSImg>
      </FlexboxLayout>
      <Label class="text-gray ml-4" :text="restaurant.estimatedTime"></Label>

      <FlexboxLayout class="mt-6">
        <FlexboxLayout class="bg-gray px-3 py-1 rounded-full items-center">
          <Label text="See similar"></Label>
          <Icon icon="expand_more" color="black" class="text-center ml-1 font-bold" translateY="1" fontSize="24">
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
</template>
