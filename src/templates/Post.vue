<template>
  <Layout>
    <div :class="$style.post">
      <div :class="$style.cover">
        <div :class="$style.title">
          {{ $page.post.title }}
        </div>
        <div :class="$style.dateTime">
          {{ $page.post.date }}
        </div>
        <div :class="$style.timeToRead">
          <span :class="$style.time">{{ $page.post.timeToRead }} min.</span> to read
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
      <div :class="$style.contentWrapper">
        <div
          :class="$style.content"
          v-html="$page.post.content" />
      </div>
      <div :class="$style.commentsButtonWrapper">
        <button
          type="button"
          :class="[$style.commentsButton, toggleComments ? $style.hidden : $style.shown]"
          @click="toggleComments = !toggleComments">
          <Icon :name="['fas', 'comments']" />
          {{ toggleComments ? 'Hide comments' : 'Show comments' }}
        </button>
      </div>
      <div :class="[$style.comments, toggleComments ? $style.shown : $style.hidden ]">
        <vue-disqus
          v-if="toggleComments"
          shortname="blog-jm3yp1aj3w" :identifier="$page.post.title">
        </vue-disqus>
      </div>
    </div>
  </Layout>
</template>

<script>
import Icon from '~/components/Icon'
import Tag from '~/components/Tag'

export default {
  components: { Icon, Tag },
  data () {
    return {
      toggleComments: false
    }
  },
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
    date (format: "DD/MM/YYYY HH:mm")
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
    padding: 1.38rem 2rem;
    border-radius: 8px;
    color: $black;
    background: $gray-lighter;
    background: -webkit-linear-gradient(to right, $gray-lighter, $gray-light);
    background: linear-gradient(to right, $gray-lighter, $gray-light);

    .title {
      @extend %typography-6;

      font-weight: bolder;
    }

    .dateTime {
      @extend %typography-3;
    }

    .timeToRead {
      color: $blue-base;

      .time {
        font-weight: 600;
      }
    }

    .tags {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-items: center;
      margin: 0.4rem -0.4rem;
    }
  }

  .contentWrapper {
    width: 100%;
    padding: 1rem;

    .content {
      @extend %typography-4;

      width: 60vw;
      margin: 0 auto;
      text-align: justify;

      p:first-child:first-letter {
        @extend %typography-7;

        background-color: $gray-darker;
        color: $white;
        padding: 1.2rem;
        float: left;
        margin: .6rem .2em 0 0;
        border-radius: 6px;
      }
    }
  }

  .commentsButtonWrapper {
    display: flex;
    justify-content: flex-end;
    width: 60vw;
    margin: 0 auto;
    padding: 1rem;

    .commentsButton {
      @extend %typography-3;

      color: $white;
      outline: none;
      border: none;
      margin-top: 4rem;
      padding: .4rem .8rem;
      border-radius: 8px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      user-select: none;
      transition: all 0.1s cubic-bezier(.25,.8,.25,1);

      &.shown {
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

      &.hidden {
        background-color: $orange-base;
        box-shadow: 0px 3px 0px $orange-dark;

        &:active {
          margin-bottom: 1px;
          box-shadow: 0px 1px 0px $orange-dark;
        }

        &:hover {
          color: $orange-lighter;
        }
      }
    }
  }

  .comments {
    padding: 4rem;
  }
}
</style>