<script lang="ts" setup>
import { PropType, ref } from 'nativescript-vue';
import Icon from './Icon.vue';
import { Restaurant } from '~/types';
import { FlexboxLayout, Image, StackLayout } from '@nativescript/core';

const { restaurant, index } = defineProps({
  restaurant: {
    type: Object as PropType<Restaurant>,
    required: true
  },
  index: Number
})

</script>

<template>
  <StackLayout class="px-4 bg-white py-2">
      <GridLayout height="170">
        <NSImg :sharedTransitionTag="`img_${index}`" height="170" stretch="fill" width="100%" borderRadius="20" :src="restaurant.img"> </NSImg>
        <Icon horizontalAlignment="right" verticalAlignment="top" icon="favorite" translateY="10" translateX="-10"></Icon>
      </GridLayout>
      <FlexboxLayout class=" justify-between items-center mt-1">
        <StackLayout>
          <Label class="font-bold text-base" :text="restaurant?.name"></Label>
          <FlexboxLayout class="mt-1">
            <NSImg height="20" width="20" stretch="fill" src="~/assets/img/uber_one.png"> </NSImg>
            <Label class="text-gray ml-1" :text="`Shipping costs €${restaurant.shippingCost}`"></Label>
            <Label class="text-gray ml-4" :text="restaurant.estimatedTime"></Label>
          </FlexboxLayout>
        </StackLayout>
        <Label class="font-bold text-base bg-gray rounded-full text-center" height="32" width="32"
          :text="restaurant?.score"></Label>
      </FlexboxLayout>
  </StackLayout>
</template>
