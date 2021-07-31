<template>
  <div class="user-profile">
    <h2>{{ userProf.name }}</h2>

    <section class="mail">
      <h3>メールアドレス</h3>
      <p>{{ userProf.email }}</p>
    </section>

    <section class="phone">
      <h3>電話番号</h3>
      <p>{{ userProf.phone }}</p>
    </section>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";

import { getUserProfile } from "@/utils";

export default {
  name: "UserProfile",
  setup() {
    const route = useRoute();

    const userProf = reactive({});

    const userId = route?.params?.id;
    if (userId) {
      getUserProfile(userId).then((data) => {
        for (const [id, val] of Object.entries(data)) userProf[id] = val;
      });
    }

    watch(
      () => route?.params?.id,
      async (newId) => {
        const data = await getUserProfile(newId);
        for (const [id, val] of Object.entries(data)) userProf[id] = val;
      }
    );

    return {
      userProf,
      userId,
    };
  },
};
</script>

<style scoped>
.user-profile {
  padding: 20px 10px;
}

.user-profile section {
  margin-top: 20px;
}
</style>
