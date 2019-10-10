export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d9f5ee64e3a8e9e140d998a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-delete-me-studio',
                  apiId: 'd194472b-1ff8-4919-a45a-fe4935bcd15c'
                },
                {
                  buildHookId: '5d9f5ee64839f00abc7897a3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-delete-me',
                  apiId: 'b3e5bd75-e08b-4d41-94bf-81c071cdd00d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/sanity-gatsby-portfolio-delete-me',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-delete-me.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
