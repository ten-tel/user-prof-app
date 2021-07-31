<template>
  <nav class="side-bar">
    <h1>ユーザリスト</h1>
    <ul class="users">
      <router-link
        v-for="userId in userIdList"
        :to="`/${userId}`"
        :key="userId"
        custom
        v-slot="{ navigate, isActive, isExactActive }"
      >
        <li
          @click="navigate"
          role="link"
          :id="`id${userId}`"
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
        >
          ユーザID：{{ userId }}
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  setup() {
    const userIdList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return {
      userIdList,
    };
  },
};
</script>

<style scoped>
.side-bar {
  width: 250px;
  min-height: 100vh;
  padding: 16px 0;
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.2);
}

.side-bar h1 {
  padding: 8px 12px;
}

.side-bar .users {
  margin-top: 20px;
}

.side-bar .users > li {
  padding: 8px 12px;
  font-size: 18px;
  transition: 0.3s;
  cursor: pointer;
}

.side-bar .users > li:hover,
.side-bar .users > li.router-link-active {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>