---
author:
  name: 'Jeeho Ahn'
  picture: 'https://avatars.githubusercontent.com/u/31413538?v=4'
coverImage: ''
title: '[자료구조] ( 과제)문제 제작하고 해설하기'
status: 'draft'
slug: 'jaryogujo-gwaje-munje-jejaghago-haeseolhagi'
description: ''
tags: ''
publishedAt: '2024-03-23T15:50:58.045Z'
---

십진수 -7.375를 부동 소수점 표현 방식으로 나타내보자.

음수이므로 부호 비트는 1이고,

표현할 수는 이진수 0111.011로 정수부분은 0111, 소수 부분은 0.011 이다.

정규화 과정을 거치면, 1.11011 \* 2^2로 나타낼 수 있고,

지수부에는 127 + 지수가 저장되므로, 지수부에는 129가 저장된다.

따라서, 이를 IEEE-754(부동 소수점) 형식으로 표현하면

11000000111011000000000000000000

으로 나타낼 수 있을것이다. 