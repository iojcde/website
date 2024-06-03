---
title: '[PACKET] 안지호의 React & Next.js 겨우 마스터하기 - 2탄'
status: 'published'
slug: 'webdev-2'
description: ''
coverImage: ''
tags: []
publishedAt: '2024-05-27T01:55:09.591Z'
---
다음으로 자바스크립트에 대해 알아보자..

자바스크립트는 웹페이지가 어떻게 작동하는지를 기술하는 언어이다. 

기존에 파이썬이나 C언어 같은 다른 프로그래밍 언어를 알고 있다면 기본적인 문법은 별로 어색하지 않을 것 같다. 

한 예로 버튼을 누르면 누른 횟수를 보여주는 웹페이지를 직접 제작해보자.

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>딸깍</title>
</head>
<body>
    <button id="alertButton">태일이 때리기</button>

	<span>태일이를 0번 때렀어요! </span>

    <script> 
		...
    </script>
</body>
</html>
```

자바스크립트 파일은 CSS 파일과 같이 외부 파일을 로딩하게 할 수 있지만, 간단하게 하기 위해 다음과 같이 HTML파일 내부에서 `script` 태그를 사용해 정의할 수 도 있다.

~~딸깍~~

이제 `script` 태그 안에 자바스크립트 코드를 추가해 보자.

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>딸깍</title>
</head>
<body>
    <button id="alertButton">태일이 때리기</button>
    <span id="clickCount">태일이를 0번 때렸어요! </span>

    <script>
        // 클릭 횟수를 저장하는 변수
        let count = 0;

        // 버튼과 span 요소를 가져오기
        const button = document.getElementById('alertButton');
        const clickCountText = document.getElementById('clickCount');

        // 버튼 클릭 시 실행될 함수
        button.addEventListener('click', () => {
            // 클릭 횟수 증가
            count++;
            // 새로운 텍스트 설정
            clickCountText.textContent = `태일이를 ${count}번 때렸어요!`;
        });

		alert('♡')
	</script>
</body>
</html>
```

위 코드를 설명해보면 다음과 같다.

1. **클릭 횟수를 저장할 변수를 초기화**:
   ```javascript
   let count = 0;
   ```

2. **HTML 요소를 JavaScript에서 select하기**
   - 버튼 요소를 `getElementById`를 통해 선택한다.
   - 클릭 횟수를 표시할 `span` 요소를 `getElementById`를 통해 선택한다.
   ```javascript
   const button = document.getElementById('alertButton');
   const clickCountText = document.getElementById('clickCount');
   ```

3. **버튼에 클릭 이벤트 리스너를 추가하기**
   - 버튼이 클릭될 때마다 호출될 함수를 `addEventListener`로 설정한다.
   - 이 함수는 클릭 횟수를 증가시키고, `span` 요소의 텍스트를 업데이트한다.
   ```javascript
   button.addEventListener('click', () => {
       count++;
       clickCountText.textContent = `태일이를 ${count}번 때렸어요!`;
   });
   ```

이렇게 하면 버튼을 누를 때마다 텍스트가 업데이트되어 클릭 횟수가 반영된다.


여기서, 

```js
(a,b) => { 
	...
}

```

는 arrow function이라 부르는데, 자바스크립트에서 함수를 정의하는 방법 중 하나이다. 

```js 
function asdf(a,b){
	....
}
```

물론 이런 식으로 해도 일반적인 상황에서는 큰 차이는 없다. 하지만, 이름이 없는 함수를 정의할 때 유용하게 사용되곤 한다. 

[[안지호의 React & Next.js 겨우 마스터하기 - 3탄]]

