---
title: '[자료구조] 큐 '
status: 'draft'
slug: 'jaryogujo-kyu'
description: ''
coverImage: ''
tags: []
publishedAt: '2024-04-21T12:43:57.941Z'
---

큐(Queue)

- 선입 선출 구조 (First In First Out)
- front와 rear를 가리키는 포인터를 사용하여 요소를 추가하거나 제거합니다.

큐 자료 삽입 방법

- front와 rear는 기본값이 -1
- 자료가 추가시 rear 가 1식 증가

삭제 방법

- front와 rear 값이 같으면 더 이상 삭제할 수 없어 Underflow 에러가 남                               