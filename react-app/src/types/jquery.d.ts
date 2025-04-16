// src/types/jquery.d.ts
import 'jquery';

declare module 'jquery' {
  interface JQuery<TElement = HTMLElement> {
    jR3DCarousel(options?: any): JQuery<TElement>;
  }
}
