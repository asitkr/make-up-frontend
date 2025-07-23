import type { RefObject } from "react";

export type GalleryProps = {
  aboutRef: RefObject<HTMLDivElement | null>;
  getStartedRef: RefObject<HTMLDivElement | null>;
};