import React from "react";
import VideoItem from "../VideoItem/VideoItem.js"
import Videos from "../../../mock/recommendVideo"

function RecommendList() {
  return (
    <ul className="video_list">
      {Videos.contentList.map((prop, idx) =>
        <VideoItem key={ idx } data={ prop } />
      )}
    </ul>
  )
}

export default RecommendList;