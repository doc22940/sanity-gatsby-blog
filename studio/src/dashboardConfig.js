export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdfdf4d2386051ce479075e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-e86enmd9',
                  apiId: '09a77dc9-2348-4c7f-aed6-8faa341a4607'
                },
                {
                  buildHookId: '5fdfdf4d714daf24ca2c5893',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4m5g74om',
                  apiId: '4009ea8c-5a64-4f91-bec8-1d832684ec24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/doc22940/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4m5g74om.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
