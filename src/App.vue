<template>
 <div class="container">
      <!-- <ais-instant-search :search-client="searchClient" index-name="prizes"> -->
      <ais-instant-search :search-client="searchClient" :index-name="indexName">
        <div class="search-panel__results">
          <ais-search-box placeholder="Search here…" autofocus/>
          <!-- <ais-hits  :transform-items="transformItems"> -->
          <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <div>
                <div class="hit-info">🏅
                      <ais-highlight :hit="item" attribute="id" />
                </div>
                <div class="hit-info">
                      <!-- {{ item.overview }} -->
                      <ais-highlight :hit="item" attribute="overview" />
                </div>
                <div class="hit-info">🏅 {{ item.year }}</div>
                <div class="hit-info">
                  <ais-highlight :hit="item" attribute="firstname" />
                  &nbsp;
                  <ais-highlight :hit="item" attribute="surname" />
                </div>
                <!-- <div class="hit-info"> -->
                  <!-- <ais-highlight :hit="item" attribute="motivation" /> -->
                <!-- </div> -->
              </div>
            </template>
          </ais-hits>
          <ais-pagination />
        </div>
      </ais-instant-search>
    </div>
</template>

<script>
import "instantsearch.css/themes/algolia-min.css";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const {MEILISEARCH_HOST, MEILISEARCH_API_KEY} = {
  // MEILISEARCH_HOST: "http://acone3:7700",
  MEILISEARCH_HOST: "https://demos.meilisearch.com",
  MEILISEARCH_API_KEY: "dc3fedaf922de8937fdea01f0a7d59557f1fd31832cb8440ce94231cfdde7f25"};

let INDEX_NAME;
INDEX_NAME = "movies";
INDEX_NAME = "prizes";

export default {
  data() {
    return {
      searchClient: instantMeiliSearch(
        MEILISEARCH_HOST,
        MEILISEARCH_API_KEY
      ),
      indexName: INDEX_NAME,
    };
  },
};
</script>

<style>
body,
h1 {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/*
** Over write highlighted results style
*/
.ais-Highlight-highlighted {
    background: #e4135973;
    padding: 1px;
}

/*
** Over write numbers of results on a line
*/
.ais-Hits-item {
  margin-bottom: 1em;
  //width: calc(50% - 1rem);
  width: calc(100% - 1rem);
}


.disclaimer {
  margin-left: 1em;
}

.hit-name {
  margin-bottom: 0.5em;
}

.hit-info {
  font-size: 90%;
}

.header {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.5rem 1rem;
  background-image: linear-gradient(to right, #5b0723, #e41359);
  color: #fff;
  margin-bottom: 1rem;
}

.header-title {
  font-size: 1.2rem;
  font-weight: normal;
}

.header-subtitle {
  font-size: 1.2rem;
}

.container {
  padding: 1rem;
}

.ais-InstantSearch {
  max-width: 960px;
  overflow: hidden;
  margin: 0;
}

.search-panel__filters {
  float: left;
  width: 200px;
}

.search-panel__results {
  margin-left: 210px;
}

.ais-SearchBox {
  margin-bottom: 2rem;
}

.ais-Pagination {
  margin: 2rem auto;
  text-align: center;
}
/*
** Styling for motivation section
*/
.motivation {
    text-transform: capitalize;
    color: #989eb5;
    text-transform: capitalize;
    margin: 10px 0;
    font-style: italic;
}

</style>
