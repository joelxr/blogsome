import "~/design/_code.scss";

import DefaultLayout from "~/layouts/Default.vue";
import VueDisqus from "vue-disqus";
import VueAnalytics from "vue-analytics";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueDisqus);
  Vue.use(VueAnalytics, {
    id: "UA-77224347-3"
  });
}
