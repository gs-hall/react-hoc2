import React from "react";
import Article from "./Article";
import Video from "./Video";
import Popular from "./Popular";
import New from "./New";
import { withStyle } from "./withStyle";

export default function List(props) {
  return props.list.map((item, index) => {
    switch (item.type) {
      case 'video':
        // TBD: get component using a wrapping function, pass it instead of Popular => pass function as third parameter
        const WrappedVideo = withStyle(Video, Popular);
        return (
          <WrappedVideo key={index} {...item} />
        );
      case 'article':
        const WrappedArticle = withStyle(Article, New);
        return (
          <WrappedArticle key={index} {...item} />
        );
      default: return null;
    }
  });
};