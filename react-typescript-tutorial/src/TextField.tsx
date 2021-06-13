import React, { useRef, useState } from 'react';
interface People{
    firstName:string;
    lastName: string;
}

interface Props{
    text: string;
    ok?: boolean;
    i?:number;
    fn?: (bob:string) => string;
    people:People;
    handleChange: (event: React.ChangeEvent<HTMLInputElement> )=> void
}

interface TextNode {
    text: string
}
export const TextFiled: React.FC <Props> = ({handleChange}) =>{

    const [count, setCount] = useState<TextNode>({text:''});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef(null);
    


    return<div ref={divRef}>{count}
    <input ref={inputRef} onChange={handleChange}></input>
    </div>
}