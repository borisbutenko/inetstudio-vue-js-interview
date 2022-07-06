<template>
<v-app>
  <layout-page>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </layout-page>
</v-app>
</template>

<script>
import LayoutPage from "@/layouts/Page"

export default {
  name: "App",

  components: {
    LayoutPage,
  },
}
</script>
