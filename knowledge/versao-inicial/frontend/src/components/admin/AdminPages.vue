<template>
  <div class="admin-pages">
    <PageTitle
      icon="fa fa-cogs"
      main="system administration"
      sub="Registrations & Co."
    />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Articles" active>
            <ArticleAdmin />
          </b-tab>
          <b-tab title="Categories">
            <CategoryAdmin />
          </b-tab>
          <b-tab title="Users">
            <UserAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle.vue";
import ArticleAdmin from "./ArticleAdmin";
import CategoryAdmin from "./CategoryAdmin";
import UserAdmin from "./UserAdmin.vue";

export default {
  name: "AdminPages",
  components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin },
};
</script>

<style>
</style>