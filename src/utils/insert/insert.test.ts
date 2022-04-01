import insert from './insert';

describe('insert', () => {
  it('should be able to insert an item to list', () => {
    const list = ['Spiderman', 'Ironman', 'Hulk'];

    expect(insert(1, 'Batman', list)).toEqual([
      'Spiderman',
      'Batman',
      'Ironman',
      'Hulk',
    ]);
  });
  it('should insert item at the end of the list if the index is too large', () => {
    const list = ['Spiderman', 'Ironman', 'Hulk'];

    expect(insert(5, 'Batman', list)).toEqual([
      'Spiderman',
      'Ironman',
      'Hulk',
      'Batman',
    ]);
  });
});
