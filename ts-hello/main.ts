import { ReducerExample } from './../react-typescript-tutorial/src/ReducerExample';
import { React } from 'react';
let a;
a = 'a';
a= true;
a=


what is React
왜 우리는 이걸 사용하느냐
visit reactjs.org
모바일과 반응성을 준다

fetching html을 하는것 없이 사용자가 보는 것을 변경한다.

1. js가 브라우저에서 로드된 페이지에서 동작하고 있고, 
2. 나는 html구조(dom)을 manipulate할수 있다.

what is React
1. client side javascript library, 
2. 웹을 위한 현대적이고 반응적인 ui
3. 더 복잡하고, 풍부하고 현대적인 ui를 쉽게 만들수 있게 한다.

ex 컴포넌트 추가도 너무 쉽다.
이게 우리가 리액트 같은 최신 기술을 이용하는 이유이다.

vanlia js 상당히 복잡하다.
모든 단계를 하나하나 묘사되어야 한다.

리액트로 블록단위로 쪼갤경우 관리하기 쉬운 코드가 만들어 진다.
react library는 좀더 상위 레벨의 코드를 작성하면
vanila형태의 코드로 동작되는데 좀더 rowLevel형태
그래서 react를 쓰면 좀더 쉽게 앱을 개발할 수 있다.
더나은 ux경험을 줄수 있다.

React는 전체페이지의 일부분을 컨트롤 하기 위해 이용할 수 있고,
리액트는 웹 어플리케이션의 전체를 컨트롤 하기 위해이용 될수도 있다.
spa: 서버는 는 오직 하나의 html페이지를 전달하고 

react와 vue angular
컴포넌트에 초점을 맞춘다. 
vue : 는 리액트와 앵귤러보다 덜 유명하지만 대부분의 complete component-based ui framework이다.
angular : complete component-based ui framework, 타입스크립트를 이용하지만 작은 프로젝트에는 지나치다.

3가지 주요 섹션
1. Basics.
   - Components & Building UIs
   - Working with Event & Data
   - Styling React App & Component
   - Introduction into React Hooks
2. advanced Concept
   - SideEffects, Refs, More React Hooks
   - React's Context API & Redux
   - Http Requests & Custom Hooks
   PerformanceResourceTiming, Deployment, NextJS & More
3. summary & Refreshers(Optimizing your time)
   - Javscript Refresher
   - ReactJs Summary


Theory /Small DeferredPermissionReques & Examples
More Realistic ReducerExample
Challenge & Excercise

2가지 옵션
첫번째 접근 전체 단계를 순서대로 배운다.
Javascript refresher는 넘어가도 좋다.
use React summaryModule 
두번째 급하다면 서머리 접근 React Summary module까지 접근해라 이건 standalone 이기 때문에 괜찮다.
선택적으로 refresher모듈 
서머리를 다 배운다음 전체를 봐도 좋다

const vs let 
const는 재할당이 불가능 하다.

arrow function
1. 더 짧게 사용가능
2. 내가 가지는 javascript this와 관련된 많은 이슈를 해결할 수 있다. 
  내가 자바스크립트를 사용할때 this키워드가 어떤걸 참조하는지 모르는 경우가 있지만
    arrowfunction 안에서는 this키워드에 대한 이슈가 없다 항상 콘텍스트를 유지하고 바꾸지 않는다 이것은 놀랍다 . 

Export & Imports (Modules)
파일을 나눈다.
person.js 
const person = {name: 'Max'};
export default person

utility.js
export const clean = () => {...}
export const baseDat = 10;

applicationCache.js
import person from './person.js';

import {baseData } from './utility.js';
import {claen } from 'utility.js';

