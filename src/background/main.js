//创建一个通知面板

chrome.notifications.create(
  Math.random() + "", // id
  {
    type: "basic",
    iconUrl: "../assets/images/icon16.png",
    title: "通知主标题",
    message: "通知副标题",
  },

  (id) => {
    console.log(id);
  }
);
