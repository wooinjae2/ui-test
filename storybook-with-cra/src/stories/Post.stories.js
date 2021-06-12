import React from 'react';

import { Post } from './Post';


export default {
  title: 'Component/Post',
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});


export const Title = Template.bind({});
Title.args = {
  title:'제목입니다.',
};

export const TitleAndContent = Template.bind({});
TitleAndContent.args = {
  title:'제목입니다.',
  refList:['출처1', '출처2'],
  children:<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
};

