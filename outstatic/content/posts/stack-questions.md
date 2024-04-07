---
title: '[자료구조] - 스택 문제 만들기'
status: 'draft'
author:
  name: 'Jeeho Ahn'
  picture: 'https://avatars.githubusercontent.com/u/31413538?v=4'
slug: 'stack-questions'
description: ''
coverImage: ''
tags: ''
publishedAt: '2024-04-07T16:14:59.041Z'
---

1. 스택에서 다음의 자료를 순서대로 처리했을 때 출력되는 결과는?

입력 순서: A - B - C - D

입력 - 출력 - 입력 - 입력 - 출력 - 입력 - 출력 - 출력

---

### 풀이

1. A 입력
2. A 출력
3. B 입력
4. C 입력
5. C 출력됨
6. D 입력
7. D 출력됨
8. B 출력됨

   =&gt; A C D B

1. 공백 상태인 빈 스택에 다음의 연산을 순서대로 처리했을 때, 최종적으로 남아 있는 자료는?
   1. push(가)
   2. push(나)
   3. pop()
   4. push(다)
   5. pop()

      ---

      ### 풀이
      1. 가
      2. 가 나
      3. 가
      4. 가 다
      5. 가

         =&gt; 가