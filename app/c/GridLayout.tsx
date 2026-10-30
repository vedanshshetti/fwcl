import {ReactNode} from 'react'

function GridLayout({children}: {children: ReactNode}) {
  return (
    <div className='grid'>
        {children}
    </div>
  )
}

export default GridLayout