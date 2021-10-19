import { Item } from './item';
import { Pages } from './pages';
import { PagesIterableMixin } from './pages-iterable-mixin';

export class Book extends PagesIterableMixin(Object) implements Item {
  constructor(private title: string, private author: string, _pages: Pages) {
    super();
    super.pages = _pages;
  }

  toString() {
    return `Book: ${this.title} by ${
      this.author
    } with number of pages: ${this.pages.length()}`;
  }
}

