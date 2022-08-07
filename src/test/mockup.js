/* eslint-disable no-use-before-define */
const CommentsMock = (id, name, userComment) => {
  const newArr = [
    {
      id: "1",
      name: "ALEX",
      userComment: "Delicious",
    },
    {
      id: "2",
      name: "John",
      userComment: "Finger Licking",
    },
  ];
  const comment = {
    id,
    name,
    userComment,
  };
  newArr.push(comment);
  TestComments(newArr);
  return newArr;
};

const TestComments = (newArr) => {
  document.body.innerHTML = '<ul id ="comments"> </ul>';
  const Comments = document.getElementById("comments");

  const commentList = document.createElement("div");
  const commentArr = Array.from(document.querySelectorAll("#comments div"));
  newArr.forEach((element) => {
    commentList.innerHTML = `${element.name}: ${element.comment}`;
    Comments.appendChild(commentList);
    commentArr.push(commentList);
  });
  return commentArr;
};

export { CommentsMock, TestComments };
