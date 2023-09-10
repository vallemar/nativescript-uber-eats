<script lang="ts" setup>
import Icon from './Icon.vue';
</script>

<template>
  <GridLayout columns="*, auto" height="50">
    <StackLayout col="0">
      <Label class="text-gray text-lg " text="Deliver now"></Label>
      <StackLayout orientation="horizontal">
        <Label class="text-lg" text="Deliver now to this address"></Label>
        <Icon icon="expand_more" color="black" class="text-center" fontSize="22"></Icon>
      </StackLayout>
    </StackLayout>
    <StackLayout col="1" class="rounded-full bg-gray" orientation="horizontal" height="40">
      <Icon icon="takeout_dining" color="white" class="bg-black rounded-full text-center" fontSize="22" width="45">
      </Icon>
      <Icon icon="directions_run" color="black" class="rounded-full text-center " fontSize="22" width="45"></Icon>
    </StackLayout>
  </GridLayout>
</template>
