<template>
  <Layout>
    <div :class="$style.content">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allPost(
    filter: { published: { eq: true }},
    sortBy: "date",
    order: DESC,
    perPage: 99999
  ) {
    edges {
      node {
        id
        title
        subtitle
        path
        date (format: "DD/MM/YYYY hh:mm")
        timeToRead
        tags {
          id
        }
        isPortuguese
        ...on Post {
            id
            title
            path
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
  metaInfo: {
    title: "Joel Rocha"
  }
};
</script>

<style lang="scss" module>
.content {
  padding: 1rem;
}
</style>

