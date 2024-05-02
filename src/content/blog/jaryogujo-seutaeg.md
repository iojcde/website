---
title: '[자료구조] 스택'
status: 'draft'
slug: 'jaryogujo-seutaeg'
description: ''
coverImage: ''
tags: []
publishedAt: '2024-04-05T12:57:39.081Z'
---

## 스택 (Stack)

삽입과 삭제가 한쪽 끝에서만 수행되는 제한적 개념의 선형 구조

LIFO(Last In First Out) 구조라고도 부름.

스택은 중간에 자료를 삽입(Push) 하거나 삭제(Pop)할 수 없음

=&gt; top 위치에서만 자료의 삽입과 삭제가 이루어짐

top 위치 초기 = -1 

=&gt; 1개 추가시 index가 0이 되도록

### 스택 오류 발생 조건

1. Overflow

   =&gt; 자료가 가득 차 있는 상태에서 새로운 자료를 추가하려 할때
2. Underflow

   =&gt; 빈 스택에서 자료의 삭제를 요청할 때