const search = instantsearch({
  // indexName: 'steam-video-games',
  indexName: 'movies',
  searchClient: instantMeiliSearch(
    // 'https://demos.meilisearch.com',
    'http://acone3:7700',
    'dc3fedaf922de8937fdea01f0a7d59557f1fd31832cb8440ce94231cfdde7f25'
  ),
})

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <div class="hit-name">
            <!--{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}-->
            {{#helpers.highlight}}{ "attribute": "overview" }{{/helpers.highlight}}
            ({{#helpers.highlight}}{ "attribute": "id" }{{/helpers.highlight}})
          </div>
        </div>
      `,
    },
  }),
])

search.start()