storybook 실행
npm run storybook

$ npm info "eslint-config-airbnb@latest" peerDependencies
eslint: '^5.16.0 || ^6.8.0 || ^7.2.0',
'eslint-plugin-import': '^2.22.1',
'eslint-plugin-jsx-a11y': '^6.4.1',
'eslint-plugin-react': '^7.21.5',
'eslint-plugin-react-hooks': '^4 || ^3 || ^2.3.0 || ^1.7.0'

eslint airbnb를 사용하기 위해 설치해야 하는 다른 패키지 목록 확인가능
cra를 통해 프로젝트를 구성할 경우 추가되어 있으므로 eslint-config-airbnb만 추가하면 된다.

따라하기에 너무 불편하거나 불필요한 코드스타일은 제외시킬 수 있습니다. 한번 위에서 뜬 오류들을 끄는 방법에 대해서 알아보겠습니다.

create-react-app --template typescript 
npx -p @storybook/cli sb init
