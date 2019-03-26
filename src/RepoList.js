import React from "react";

const RepoList = props => {
  const { data } = props;

  if (!data) return null;
  if (!data.length) return <p>No repos, sorry</p>;

  return (
    <ul>
      {data.map(repo => {
        return (
          <li key={repo.url}>
            {repo.name}
            <span role="img" aria-labelledby="star">
              🌟
            </span>
            {repo.stars}
            <span role="img" aria-labelledby="star">
              🍴
            </span>
            {repo.forks}
          </li>
        );
      })}
    </ul>
  );
};
export default RepoList;
