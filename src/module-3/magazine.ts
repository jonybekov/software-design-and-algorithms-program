import { Item } from './item';
import { Pages } from './pages';
import { PagesIterableMixin } from './pages-iterable-mixin';

export class Magazine extends PagesIterableMixin(Object) implements Item {
  constructor(private title: string, _pages: Pages) {
    super();
    super.pages = _pages;
  }

  toString() {
    return `Magazine: ${this.title} with number of pages: ${this.pages.length()}`;
  }
}

