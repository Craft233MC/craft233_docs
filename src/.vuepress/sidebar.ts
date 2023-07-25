import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "安装游戏",
      //icon: "laptop-code",
      prefix: "Install_game/",
      link: "Install_game/",
      children: "structure",
    },
    {
      text: "加入服务器",
      //icon: "laptop-code",
      prefix: "Join_game/",
      link: "Join_game/",
      children: "structure",
    },
//    "slides",
  ],
});
