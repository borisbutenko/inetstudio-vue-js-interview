<template>
<v-card class="red lighten-1 text-center" width="100%" flat tile>
  <v-divider/>
  <v-card-text class="white--text">
    <slot name="default"/>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: "LayoutFooter",
}
</script>