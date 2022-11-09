import React from "react";
import Article from "./Article";
import Video from "./Video";

import { withStyle } from "./withStyle";
import { getWrappingComponent } from "../functions/getWrappingComponent";

export default function List(props) {
  return props.list.map((item, index) => {
    switch (item.type) {
      case 'video':
        const WrappedVideo = withStyle(Video, getWrappingComponent(item));
        return (
          <WrappedVideo key={index} {...item} />
        );
      case 'article':
        const WrappedArticle = withStyle(Article, getWrappingComponent(item));
        return (
          <WrappedArticle key={index} {...item} />
        );
      default: return null;
    }
  });
};