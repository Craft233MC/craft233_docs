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
    {
      text: "常用指令",
      //icon: "laptop-code",
      prefix: "common_command/",
      link: "common_command/",
      children: "structure",
    },
    {
      text: "常见问题",
      //icon: "laptop-code",
      prefix: "common_question/",
      link: "common_question/",
      children: "structure",
    },
//    "slides",
  ],
});
