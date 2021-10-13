import Contact from '../components/Contact'
import Header from '../components/Header'
import Homes from '../components/Home'
import Portfolio from '../components/Portfolio'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{ minHeight: '200vh'}}>
    <Header/>
    <Homes />
    <Portfolio />
    <Contact />
    </div>
  )
}
