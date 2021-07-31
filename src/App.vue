<template>
  <side-bar />
  <main>
    <router-view />
  </main>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: { SideBar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
}
</style>
