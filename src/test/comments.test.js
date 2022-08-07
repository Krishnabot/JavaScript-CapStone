import { CommentsMock, TestComments } from './mockup.js';

describe('Add Comments', () => {
  test('Add a new comment', () => {
    expect(CommentsMock(2, 'userName', 'comment').length).toBe(3);
  });

  test('Count comments', () => {
    const newArr = [
      {
        id: '1',
        name: 'ALEX',
        userComment: 'Delicious',
      },
      {
        id: '2',
        name: 'John',
        userComment: 'Finger Licking',
      },
    ];
    expect(TestComments(newArr).length).toBe(2);
  });
});
