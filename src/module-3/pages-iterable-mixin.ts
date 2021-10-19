import { Page } from './page';
import { Pages } from './pages';

type Constructor = new (...args: any[]) => {};

export const PagesIterableMixin = <TBase extends Constructor>(Base: TBase) =>
  class extends Base {
    private counter = 0;
    private _pages: Pages = new Pages([]);

    protected set pages(value: Pages) {
      this._pages = value;
    }

    protected get pages() {
      return this._pages || new Pages([]);
    }

    toString() {
        return ''
    }

    [Symbol.iterator]() {
      return {
        next: (): IteratorResult<Page> => {
          const pagesLength = this._pages.length() || 0;
          if (this.counter < pagesLength) {
            return {
              done: false,
              value: this._pages.getPage(this.counter++, this.toString()),
            };
          } else {
            return {
              done: true,
              value: undefined,
            };
          }
        },
      };
    }
  };
