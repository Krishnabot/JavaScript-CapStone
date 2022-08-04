const Displaylikes = async () => {
  const likeditems = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fqnn9lAjGXIKn1TiiiZP/likes"
  )
    .then((response) => response.json())
    .then((data) => data);

  const LikeCounter = document.getElementsByClassName("likecounter");
  const likeCountArray = Array.from(LikeCounter);

  likeCountArray.forEach((likecounter) => {
    const likeId = likecounter.getAttribute("data");
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
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fqnn9lAjGXIKn1TiiiZP/likes",
    {
      method: "POST",
      body: JSON.stringify({
        item_id: itemid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then(() => {
    Displaylikes();
  });
};
const like = () => {
  const likebtns = document.getElementsByClassName("fa-heart");
  const likeCountArray = Array.from(likebtns);
  likeCountArray.forEach((element) => {
    const likeId = element.getAttribute("data");
    element.addEventListener("click", () => {
      element.classList.add("heart-active");
      PostLike(likeId);
      Displaylikes();
    });
  });
};

setTimeout(() => like(), 3000);

export { Displaylikes, like };
