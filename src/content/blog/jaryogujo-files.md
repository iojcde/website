---
coverImage: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
title: '[자료구조] 3. 자료의 표현'
status: 'published'
slug: 'jaryogujo-files'
description: ''
tags: ["test"]
publishedAt: '2024-03-17T04:42:35.172Z'
---

## 자료의 표현 단위

- 비트 - 2진수 0/1
- 니블 - 1/2 바이트 =&gt; 4비트
- 바이트 - 8비트, 2니블
- 워드 - CPU가 한번에 처리하는 명령어의 기본 단위
- 필드 - 파일의 최소 단위
- 레코드 - 하나 이상의 필드들의 모임
- 파일 - 여려 레코드가 모여 구성
- 데이터베이스 - 파일 형태의 집합

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