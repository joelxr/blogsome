module.exports = {
  siteName: 'Joel Rocha',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true,
          },
        },
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}
