import Navbar from '../components/Navbar'
import Map from '../components/Map'
import LocationSelector from '../components/LocationSelector'
import Confirm from '../components/Confirm'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-2/3 flex-1 z-10`,
  rideRequestContainer: `h-full w-1/3  py-18 absolute left-2/3 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[851px] bg-white flex flex-col overflow-auto`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <Map />   
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  )
}
