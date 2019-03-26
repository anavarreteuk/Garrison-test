import React from "react";
import { render } from "react-dom";
import axios from "axios";
import RepoList from "./RepoList";
import WithLoading from "./WithLoading";
import WithExpand from "./WithExpand";

const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

const getReactRepositories = () =>
  axios
    .get(SEARCH_ENDPOINT) // eslint-disable-line
    .then(result => result.data.items)
    .then(repos =>
      repos.map(({ forks, name, stargazers_count, html_url }) => ({
        forks,
        name,
        stars: stargazers_count,
        url: html_url
      }))
    );

const Repos = WithLoading(getReactRepositories)(WithExpand(10)(RepoList));
const App = () => <Repos />;

render(<App />, document.getElementById("root"));
