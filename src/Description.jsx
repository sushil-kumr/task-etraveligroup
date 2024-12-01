import React, { memo } from "react";
import { useSelector } from "react-redux";
import { convertToRoman } from "./utils";

const Description = memo(() => {
  console.log("description rendered");
  const selectedEpisode = useSelector((state) => {
    return state?.data?.data.find(
      (item) => item?.episode_id === state?.data?.selectedEpisode
    );
  });

  if (selectedEpisode) {
    const { episode_id, title, opening_crawl, director } = selectedEpisode;

    return (
      <article className="description-container">
        <h1>{`Episode ${convertToRoman(episode_id)} - ${title}`}</h1>
        <p>{opening_crawl}</p>
        <p>{`Directed by : ${director}`}</p>
      </article>
    );
  }

  return null;
});

export default Description;
