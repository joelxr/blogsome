<template>
  <Layout>
    <div :class="$style.title">#{{ $page.tag.title }}</div>
    <div :class="$style.content">
      <PostCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            subtitle
            path
            date (format: "DD/MM/YYYY ")
            timeToRead
            content
            tags {
              id
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  },
};
</script>

<style lang="scss" module>
@import '~/design/index.scss';

.title {
  @extend %typography-5;

  padding: 1rem;
  font-family: 'Hack', 'Courier New', Courier, monospace
}

.content {
  padding: 1rem;
}
</style>
