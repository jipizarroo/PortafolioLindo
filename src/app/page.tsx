import ScrambleWords from '@/components/others/ScrambleWords'
import Image from 'next/image'
import style from './sticky.module.css'

export default function Home() {
  return (
    <main className={style.mainContainer}>
      <div className={style.stickyContainer}>
        <ScrambleWords text={'Javier Pizarro Ortega'} />
      </div>
      <div className={style.movingContainer}>
        HOLIS
      </div>
    </main>
  )
}
