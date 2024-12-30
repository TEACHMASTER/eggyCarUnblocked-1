import ShowGame from '@/src/components/showgame'
import Podcasts from '@/src/components/podcasts'
import Description from '@/src/components/description'
import Testimonials from '@/src/components/testimonials'
import SubscribeForm from '@/src/components/subscribe-form'
import GamesList from '@/src/components/gameslist'

export default function Home() {
  return (
    <>
      <ShowGame slug="/shouye" />
      <GamesList slug="car" />
      <Description slug="/shouye" />
      <Testimonials slug="/shouye" />
      <Podcasts/>
      <SubscribeForm />
    </>
  )
}
