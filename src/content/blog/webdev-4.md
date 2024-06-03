---
title: '[PACKET] Next.js를 활용한 웹개발 겨우 마스터하기 4탄 '
status: 'published'
slug: 'webdev-4'
description: ''
coverImage: ''
tags: []
publishedAt: '2024-06-02T01:55:09.591Z'
---



이제 본격적으로 React에 대해 알아보도록 하자. 

리액트는 기본적으로 JSX라는 문법을 사용해 컴포넌트를 정의한다. JS하고 HTML 이 하나의 파일에 짬뽕되어있다고 생각하면 좋다. 

```jsx
const Counter  = () => {
	return (
		<div>
			<button> 클릭하기 </button>
	
			<span>0번 클릭했어요!</span>
		</div>
	)

}

```

> 리액트 컴포넌트인 함수의 이름은 모두 대문자로 시작해 CamelCase로 작성한다. 
>ex) counter_comp => X
>CounterComp => O
>
>하지만, 리액트 컴포넌트 안의 일반 HTML 요소는 소문자로 시작해 구별한다.


불 수 있다싶이, Counter는 `div`를 반환하는 함수이다. 

여기까지만 보면 HTML과 무엇이 다른지, 왜 React를 쓰면 좋은지 실감이 안된다. 


## 리액트 컴포넌트
위에서 정의한 Counter함수는 React 컴포넌트이다. 

우리는 이러한 컴포넌트들을 만들어 원하는대로 다른 컴포넌트 안에 중첩할 수 있다. 

```jsx
const WholeLotOfCounters  = () => {
	return (
		<>
			<Counter /> 
			<Counter /> 
			<Counter /> 
			<Counter /> 
			<Counter /> 
		</>
	)
}

```

> **Note. `<>`와 `</>` **
> 
> 리액트 컴포넌트는 하나의 Parent를 공유해아한다. 따라서, 여러개의 컴포넌트를 반환하려 할 때는 Fragment를 사용해 묶는다. 이러면, 새로운 `div`를 만들지 않고 여러 컴포넌트를 반환 할 수 있다. `<>`는 `<React.Fragment>`의 약자이다.

멋지죠?


## Counter 컴포넌트 기능 구현하기

위의 Counter 컴포넌트는 아직 아무런 기능도 없다. 그냥 텍스트를 표시하기만 한다. 

이제는 Counter가 제대로 작동하도록 기능을 추가해보자. 

먼저, useState 훅에 대해 알아보자. 

리액트에서 use로 시작하는 함수는 React Hook라는 특수한 함수이다. 이것이 무엇인지가 궁금하다면 알아서 찾아보는 것이 좋고, 이 문서에서는 그냥 사용법에 대해서만 알아보자. 

### useState

useState는 상태를 저장할때 사용하는 함수이다. React로 개발을 하면서 가장 많이 쓰게 되는 함수들 중 하나이다. 

```jsx
const [count, setCount] = useState(0)
```

이러면 count를 조회하면 현재 count수를 확인할 수 있고, setCount를 사용해 count를 바꿀 수 있다.
0은 state의 기본값이다. 


```jsx
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState()

	return (
		<div>
			0번 클릭했어요!
		</div>
	)
}
```

그런데, 2탄에서는 JS에서 일반적인 변수를 사용해 Counter를 구현했다는 것을 기억할 수도 있다.

```js
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
```

React에서는 이렇게 하면 안되는 이유는 무었일까?

리액트는 가상 DOM을 사용해 컴포넌트를 렌더링한다. 

> **렌더링**은  **컴포넌트가 props와 state를 통해 UI를 어떻게 구성할지 컴포넌트에게 요청하는 작업**을 말한다. 일반적으로 말하는 렌더링은, 화면에 바로 나타나는 것처럼 표현되고, React에서는 화면에 나타내기전 어떤 과정을 시작하는 듯한 어조이다. props에 대해서는 다음 탄에서 배워보도록 하자. 
> 
만약 상태가 변하지 않는다면, React는 해당 컴포넌트를 바꾸지 않아 효율적으로 컴포넌트를 렌더링한다. 
우리가 직접 일반 변수를 수정한다면, React는 변수 저장값이 바뀌었는지 알지 못해 보여지는 데이터를 다시 렌더링 하지 않는다. 

즉, useState를 사용하면 약간 귀찮지만, 훨씬 효율적인 서비스를 만들 수 있다. 

위의 코드는 아직 useState를 사용한 기능이 구현되지 않았다. 이제 이를 추가해보자.


```jsx
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0)

	return (
	<div>
			<button 
				onClick={() => {
					setCount(count + 1)
				}
			}> 
				클릭하기 
			</button>
	
			<span>{count}번 클릭했어요!</span>
	</div>
	)
}
```

> useState의 초기값을 제대로 정의하지 않으면 제대로 작동하지 않는다. 
> 초기값을 제공하지 않으면 undefined에 1을 더하는 셈이 되기 때문이다. 


## 현재 상태를 기반으로 다음 상태를 바꿀 때

그러면 만약 이렇게 하면 어떻게 될까?

```jsx
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0)

	return (
	<div>
			<button 
				onClick={() => {
					setCount(count + 1)
					setCount(count + 1)
					setCount(count + 1)
					setCount(count + 1)
				}
			}> 
				클릭하기 
			</button>
	
			<span>{count}번 클릭했어요!</span>
	</div>
	)
}
```

한번 실행해보면 무언가 조금 이상한 것을 알 수 있을 것이다. 분명히 setCount를 4번 실행했는데, 1번 누를 때마다 count가 1개씩만 늘어난다는 것을 볼 수 있을 것이다.

이런 이유는 useState의 set 함수(여기서는 setCount)는 이미 실행하고 있는 함수 내에서는 상태를 바꾸지 않기 때문이다. `set` 함수를 실행하면 **그 다음** 렌더 부터 count의 값만 바꾸는 것이다. 그래서, 현재 `count`가 5일 때,

```jsx

onClick={() => {  
	// 현재 count는 5
	setCount(count + 1);
	  
	console.log(count); // setCount를 실행했는데도 count는 5이다!!!  
}} 
```
setCount를 실행해도 이 함수 실행 내에서는 count가 바뀌지 않는 것을 알 수 있다. 

그러면 이러한 경우에는 어떻게 코드를 구현해야할까? 
이런 경우에는 `updater`함수를 `set` 함수에 제공함으로써 해결할 수 있다. 

예를 들어, 
```jsx
	
onClick={() => {  
	// 현재 count는 5

	 // c => c + 1도 하나의 함수이다(이게 바로 updater함수)!!
	setCount(c => c + 1);
}} 

```

이러한 것들이 복잡하고 불필요하다고 생각할 수도 있지만, 이게 익숙해진다면 react를 쓰지 않을 때의 다양한 문제들이 해결된다.

> updater 함수는 대기 중인 state를 가져와서 다음 state를 계산합니다.
> React는 업데이터 함수를 [큐](https://ko.react.dev/learn/queueing-a-series-of-state-updates)에 넣습니다. 그러면 다음 렌더링 중에 동일한 순서로 호출합니다.  현재 state가 42일 때,
> 1. `a => a + 1`은 대기 중인 state로 `42`를 받고 다음 state로 `43`을 반환합니다
> 2. `a => a + 1`은 대기 중인 state로 `43`을 받고 다음 state로 `44`를 반환합니다
> 3. `a => a + 1`은 대기 중인 state로 `44`를 받고 다음 state로 `45`를 반환합니다.
> 
> 대기 중인 다른 업데이트가 없으므로, React는 결국 `45`를 현재 state로 저장합니다.
> 
> 출처: https://ko.react.dev/reference/react/useState

> Note. 항상 updater 함수를 쓰는 것이 필요한 것은 아니다. 다만, 같은 상태를 한 함수 내에서 여러번 업데이트 하는 경우에는 이가 필요한 것이다.




