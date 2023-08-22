---
title: 自杀指令
copyright: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | Copyleft© 2023 Craft233  <a href="https://icp.gov.moe/?keyword=20232336" target="_blank">萌ICP备20232336号</a>
order: 2
---
## 用途
/suicide用于服务器中快速结束自己的生命
## 分支
### 凋零型
服务器内有两个用于自杀的指令：<code>/suicede</code>和<code>/asuicide</code>  
  
<code>/suicide</code>是为了防止基岩版玩家因为立即重生的插件影响而卡在重生界面而改变的命令，与传统自杀命令直接<code>player.setHeath(0)</code>不同。我们改变了策略，先设置玩家血量为2,再赋予凋零效果实现自杀。可以避免卡在重生界面

### 立即型
如果你正在使用java版并不存在这个问题，立即触发也许更好  
使用指令<code>/asuicide</code>即可触发
