import React from 'react'

type Props = {
    titulo: string;
}

export const Title = (props: Props) => {
    const {titulo} = props;

  return (
    <>
    <div className='p-4 rounded-lg bg-rose-100'>
    <div className='px-10 text-[36px] font-bold text-center text-transparent uppercase bg-clip-text bg-gradient-to-b from-pink-400 to-pink-800'>{titulo}</div>
    </div>
    </>
  )
}