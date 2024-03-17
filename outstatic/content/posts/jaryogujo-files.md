---
author:
  name: 'Jeeho Ahn'
  picture: 'https://avatars.githubusercontent.com/u/31413538?v=4'
coverImage: 'https://images.unsplash.com/photo-1569235186275-626cb53b83ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
title: '[자료구조] 3. 파일의 구성단위'
status: 'published'
slug: 'jaryogujo-files'
description: ''
tags: [{"value":"test","label":"test"}]
publishedAt: '2024-03-17T04:42:35.172Z'
---

구조화된 파일이나 데이터베이스의 구성 단위에 대해 알아보자.

## 필드

데이터의 가장 작은 논리적 단위

### 고정 길이 필드

파일이나 데이터베이스에서 레코드를 구성하는 각 필드의 길이가 고정되어 있는 것

### 가변 길이 필드

파일이나 데이터베이스에서 레코드를 구성하는 각 필드의 길이가 고정되어 있지 않은 것

## 레코드

논리적으로 연관된 필드의 집합

### 고정 길이 레코드

파일이나 데이터베이스에서 레코드의 길이가 고정되어 있는 것

- 간단하고 빠른 처리를 할 수 있음
- 사용하는 장치의 제한으로도 야기되기도 함

### 가변 길이 레코드

파일이나 데이터베이스에서 레코드의 길이가 고정되어 있지 않은 것

- 파일 크기를 작게 할 수 있다
- 구조가 복잡하게 되어 레코드마다 길이를 계산해야 하므로 처리 속도는 느려진다

\[출처\] &lt;a href="[https://terms.tta.or.kr/main.do"&gt;https://terms.tta.or.kr/main.do&lt;/a&gt](https://terms.tta.or.kr/main.do%22%3Ehttps://terms.tta.or.kr/main.do%3C/a&gt);