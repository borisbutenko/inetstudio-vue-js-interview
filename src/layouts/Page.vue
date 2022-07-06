<template>
<section class="layout-page">
  <v-main>
    <slot name="default"/>
  </v-main>

  <v-footer :fixed="false" app absolute>
    <common-footer/>
  </v-footer>
</section>
</template>

<script>
import CommonFooter from "@/components/CommonFooter"

export default {
  name: "LayoutPage",

  components: {
    CommonFooter,
  },
}
</script>

