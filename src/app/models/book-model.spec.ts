import { BookModel } from './book-model';

describe('BookModel', () => {
  it('should create an instance', () => {
    expect(new BookModel({ title: 'test', pages: 1, editor: 'test'})).toBeTruthy();
  });
});
