<script lang="ts" setup>
import { PropType } from 'nativescript-vue';
import { Dish } from '~/types';

const { dish, index } = defineProps({
  dish: {
    type: Object as PropType<Dish>,
    required: true
  },
  index: Number
})

</script>

<template>
  <GridLayout columns="*, 80" class="items-center justify-between mt-4 px-3">
    <StackLayout class="pr-3">
      <Label class="text-lg" :text="dish.name"></Label>
      <Label textWrap class="text-xs mt-1" style="line-height: 1;" :text="dish.description"></Label>
    </StackLayout>
    <StackLayout col="1">
      <NSImg class="" borderRadius="8" width="80" height="80" stretch="fill"
        placeholderImageUri="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=110&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFtYnVyZ2VyfHx8fHx8MTY5NDM3OTczOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=110"
        :src="`https://source.unsplash.com/random/80x80?sig=${index + 1}&hamburger,png`" />

    </StackLayout>
  </GridLayout>
</template>
