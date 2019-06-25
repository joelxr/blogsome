<template>
  <Layout>
    <div :class="$style.content">
      <PostCard
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node" />
      <div
        v-if="$page.allPost.pageInfo.totalPages > 1"
        :class="$style.paginate">
        <div :class="$style.pageInfo">
          {{ $page.allPost.pageInfo.currentPage }}
          of {{ $page.allPost.pageInfo.totalPages }}
        </div>
        <Pager
          :info="$page.allPost.pageInfo"
          :linkClass="$style.pageLink" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post($page: Int){
  allPost(
    filter: { published: { eq: true }},
    sortBy: "date",
    order: DESC,
    perPage: 5,
    page: $page
  ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
          title
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
import { Pager } from 'gridsome'
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Pager,
    PostCard
  },
  metaInfo: {
    title: "Joel Rocha"
  }
};
</script>

<style lang="scss" module>
@import '~/design/index.scss';

.content {
  position: relative;
  height: 100%;
  padding: 1rem;

  .paginate {
    position: absolute;
    bottom: .5rem;
    right: 1rem;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;

    .pageInfo {
      @extend %typography-xlarge;

      color: $green-dark;
      padding: .6rem .6rem;
      font-weight: bold;
      text-transform: uppercase;
      user-select: none;
    }

    .pageLink {
      @extend %typography-large;

      text-decoration: none;
      color: $white;
      outline: none;
      border: none;
      margin: .2rem .1rem;
      padding: .4rem 1.2rem;
      border-radius: 8px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      user-select: none;
      transition: all 0.1s cubic-bezier(.25,.8,.25,1);
      background-color: $green-base;
      box-shadow: 0px 3px 0px $green-dark;

      &:active {
        margin-bottom: 1px;
        box-shadow: 0px 1px 0px $green-dark;
      }

      &:hover {
        color: $green-lighter;
      }
    }
  }
}
</style>

