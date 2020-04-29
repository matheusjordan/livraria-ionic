export class BookModel {
    editor: string;
    title: string;
    picture: string;
    pages: number;

    constructor({ editor, title, pages, picture}) {
        this.editor = editor;
        this.title = title;
        this.pages = pages;
        this.picture = picture;
    }
}
