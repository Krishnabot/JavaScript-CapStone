const Displaylikes = async () => {
  const likeditems = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fqnn9lAjGXIKn1TiiiZP/likes',
  )
    .then((response) => response.json())
    .then((data) => data);

  const LikeCounter = document.getElementsByClassName('likecount');
  const likeCountArray = Array.from(LikeCounter);

  likeCountArray.forEach((likecounter) => {
    const likeId = likecounter.getAttribute('data');
    const element = likecounter;
    likeditems.forEach((e) => {
      if (likeId === e.item_id) {
        element.innerHTML = e.likes;
      }
    });
  });
};

const PostLike = async (itemid) => {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fqnn9lAjGXIKn1TiiiZP/likes',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemid,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  ).then(() => {
    Displaylikes();
  });
};
const like = () => {
  const likebtns = document.getElementsByClassName('fa-heart');
  const likeCountArray = Array.from(likebtns);
  likeCountArray.forEach((element) => {
    const likeId = element.getAttribute('data');
    const handleClick = () => {
      console.log("Like Clicked");
      element.classList.add('heart-active');
      PostLike(likeId);
      Displaylikes();
      element.removeEventListener('click', handleClick);
    };
    element.addEventListener('click', handleClick);
  });
  
};


// setTimeout(() => like(), 500);

export { Displaylikes, like };
