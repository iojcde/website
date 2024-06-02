---
title: '[자료구조] - 덱(deque)'
status: 'draft'
slug: 'deque'
description: ''
coverImage: ''
tags: []
publishedAt: '2024-05-31T16:14:59.041Z'
--- 

## 덱(deque)
double ended queue의 약자
스택과 큐의 성격을 모두 포함함

배열보다는 연결 리스트로 구현하면 용이함. 

## 삽입
왼쪽: front를 새로 들어온 값으로 바꾸기
후에 새로운 요소를 전의 front와 연결하기

오른쪽 rear를 새로 들어온 값으로 바꾸기
후에 전 rear와 연결하기


## 삭제
왼쪽: front를 지금 front와 연결되어 있는 것과 바꾸기
오른쪽: rear를 지금 rear와 연결되어 있는 것과 바꾸기


## 문제 풀이
TULOWB => FLOWER

왼쪽 삭제 x 2

왼쪽 'F' 삽입

오른쪽 삭제

오른쪽 'E' 삽입

오른쪽 'R' 삽입
 
