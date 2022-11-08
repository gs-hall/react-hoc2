import React from "react";
import Article from "./Article";
import Video from "./Video";


export default function List(props) {
  return props.list.map((item, index) => {
      switch (item.type) {
          case 'video':
              return (
                  <Video key={index} {...item} />
              );
          case 'article':
              return (
                  <Article key={index} {...item} />
              );
          default: return null;
      }
  });
};