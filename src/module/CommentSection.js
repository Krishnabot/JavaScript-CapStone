const displayComments = async () => {
  const sendBtn = document.querySelector('#submit-comment');
  const commentList = document.querySelector('#comments-ul');
  const id = sendBtn.getAttribute('data');
  const Count = document.querySelector('#comments-count');

  const get = () => fetch(
    ` https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fqnn9lAjGXIKn1TiiiZP/comments?item_id=${id}`,
  ).then((res) => res.json());

  const foodComments = await get();

  Count.innerHTML = `${
    foodComments.length > 0 ? `${foodComments.length}` : '0'
  }`;

  commentList.innerHTML = '';
  if (foodComments.length > 0) {
    foodComments.forEach((com) => {
      const liComments = document.createElement('li');
      liComments.innerHTML = `
      <p><span class="bold"><i class="fa-solid fa-user-large"></i> ${com.username}</span>: ${com.comment}</p>
      `;
      commentList.appendChild(liComments);
    });
  }
};

const sendComment = () => {
  const userNameInput = document.querySelector('#input-name');
  const alert = document.querySelector('#alert');
  const userComment = document.querySelector('#comment');
  const sendBtn = document.querySelector('#submit-comment');

  const post = (id, name, comment) => fetch(
    ' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fqnn9lAjGXIKn1TiiiZP/comments',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
    },
  ).then((res) => res.text());

  displayComments();
  sendBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const id = sendBtn.getAttribute('data');
    const name = userNameInput.value;
    const comment = userComment.value;
    alert.innerHTML = '';
    if (name !== '' && comment !== '') {
      userNameInput.value = '';
      userComment.value = '';
      await post(id, name, comment).then(() => displayComments());
    } else alert.innerHTML = 'Enter Name and Comment';
  });
};

export { sendComment, displayComments };
