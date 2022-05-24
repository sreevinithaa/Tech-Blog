const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete blog");
    }
  }
};
const delcommentHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete comment");
    }
  }
};
if(document
  .querySelector("#btndelete")!=undefined)
  {
    document
    .querySelector("#btndelete")
    .addEventListener("click", delButtonHandler);
  }

  if(document
    .querySelector("#deletecomment")!=undefined)
    {
document
  .querySelector("#deletecomment")
  .addEventListener("click", delcommentHandler);
    }
