export class Page {
    private preText: string = '';

    constructor(
        private pageNumber: number, 
        private pageType: string, 
        private pageMaterial: string) {
    }

    setPreText(text: string) {
        this.preText = text;
    }

    toString() {
        const preText = this.preText ? `${this.preText}, ` : '';
        return `${preText}here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`
    }
}