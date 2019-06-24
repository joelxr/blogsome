<template>
  <Layout>
    <div :class="$style.post">
      <div :class="$style.cover">
        <div :class="$style.title">
          {{ $page.post.title }}
        </div>
        <div :class="$style.timeToRead">
          {{ $page.post.timeToRead }} min. to read
        </div>
        <div :class="$style.tags">
          <Tag
            v-for="tag in $page.post.tags"
            :key="tag.id"
            :to="`/tag/${tag.id}`"
            :title="tag.id"
          />
        </div>
      </div>
      <div>
        <div
          :class="$style.content"
          v-html="$page.post.content" />
      </div>
      <div>
        <!-- Add comment widgets here -->
      </div>
    </div>
  </Layout>
</template>

<script>
import Tag from '~/components/Tag'

export default {
  components: { Tag },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    tags {
      id
      title
    }
    date (format: "DD.MM.YYYY")
    timeToRead
    isPortuguese
    content
  }
}
</page-query>

<style lang="scss" module>
@import '~/design/index.scss';

.post {
  .cover {
    height: 11.655rem;
    padding: 2rem 1rem;
    border-radius: 8px;
    color: $black;
    background: $gray-lighter;
    background: -webkit-linear-gradient(to right, $gray-lighter, $gray-light);
    background: linear-gradient(to right, $gray-lighter, $gray-light);

    .title {
      @extend %typography-post-title;

      font-weight: bolder;
    }

    .timeToRead {
      color: $blue-base;
    }

    .tags {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-items: center;
      margin: 0.4rem -0.4rem;
    }
  }

  .content {
    @extend %typography-medium;

    padding: 1rem;
  }
}
</style>