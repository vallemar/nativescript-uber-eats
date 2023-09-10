<script lang="ts" setup>
import { PropType } from 'nativescript-vue';
import { FoodOption } from '~/types';

const { item } = defineProps({
  item: {
    type: Object as PropType<FoodOption>,
    required: true
  }
})

</script>

<template>
  <StackLayout class="bg-gray mx-1 py-2 rounded-2xl flex-1">
    <NSImg width="60" stretch="fill" :src="item.img"> </NSImg>
    <Label :text="item.title" class=" text-base text-center text-black"></Label>
  </StackLayout>
</template>
