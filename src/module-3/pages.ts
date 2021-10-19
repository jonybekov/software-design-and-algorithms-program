import { Page } from './page';
export class Pages {
  constructor(private pages: Page[]) {

  }

  getPage(index: number, preText?: string) {
    const page = this.pages[index];
    page.setPreText(preText)
    return page;
  }

  length() {
    return this.pages.length;
  }
}
