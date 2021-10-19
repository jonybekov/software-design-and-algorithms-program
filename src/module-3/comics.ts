import { Item } from './item';
import { Pages } from './pages';
import { PagesIterableMixin } from './pages-iterable-mixin';

export class Comics extends PagesIterableMixin(Object) implements Item {
  constructor(private title: string, private author: string, private artist: string, _pages: Pages) {
    super();
    super.pages = _pages;
  }

  toString() {
    return `Comics: ${this.title} by ${
      this.author
    }, the artist is ${this.artist}, number of pages: ${this.pages.length()}`;
  }
}

