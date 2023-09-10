<script lang="ts" setup>
import Icon from './Icon.vue';
</script>

<template>
  <GridLayout height="55">
    <TextField hint="Search in Uber Eats" height="55" class="bg-gray rounded-full px-14 font-bold" />
    <Icon horizontalAlignment="left" icon="search" color="black" class="ml-4 rounded-full text-center " fontSize="32">
    </Icon>
    <Icon horizontalAlignment="right" class="mr-4" icon="page_info" color="black" fontSize="32"></Icon>
  </GridLayout>
</template>
