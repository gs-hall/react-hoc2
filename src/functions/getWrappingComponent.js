// Содержит логику выбора оборачивающего компонента в зависимости от количества просмотров

import Popular from "../components/Popular";
import New from "../components/New";

export function getWrappingComponent(item) {
  if (!item?.views) {return null};
  return item.views > 1000 ? Popular :
    item.views < 100 ? New :
    null;
  };