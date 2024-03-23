---
title: '[자료구조] 5. 부동 소수점 표현 방식'
status: 'published'
author:
  name: 'Jeeho Ahn'
  picture: 'https://avatars.githubusercontent.com/u/31413538?v=4'
slug: 'fpnums'
description: ''
coverImage: ''
tags: [{"value":"test","label":"test"}]
publishedAt: '2024-03-23T14:51:33.753Z'
---

### 부동 소수점 데이터 표현 방식

부동 =&gt; 소수점이 움직인다

실수(Real number)를 표현하기 위해 사용됨

주로 32비트 버전은 FP32로 불림

형식(fp32)

### 구조![](/images/image-E0Nz.png)

부호 비트에는 0(양수)/1(음수)를 적고,

지수부에는 지수 값에 127을 더한 값을 저장한다 (음수 지수를 양수로 바꾸어 저장한다. 여기서 127은 bias값이라 부른다.).

가수부의 최상위 자리는 항상 1이 되도록 조정한다. (정규화 과정)

### 특징

기억 용량을 고정 소수점 데이터 표현 방식보다 많이 차지하고, 구조도 복잡해 연산속도가 느리다.

그러나, 표현할 수 있는 범위가 크고, 지수를 사용해 어마어마하게 큰 수의 표현이 가능하다는 장점이 있다.