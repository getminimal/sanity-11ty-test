export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '615ae80b9826037e27998fcc',
                  title: 'Sanity Studio',
                  name: 'sanity-11-ty-test-studio',
                  apiId: 'ed4d45cd-629b-4686-8280-8c02ccab8a04'
                },
                {
                  buildHookId: '615ae80bc949c39e8acf6e1f',
                  title: 'Blog Website',
                  name: 'sanity-11-ty-test',
                  apiId: 'a8bda6cd-1a24-4cf6-bf40-bb47c4b00ed0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/getminimal/sanity-11ty-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-11-ty-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
