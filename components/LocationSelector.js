import { useState } from 'react'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `pt-3`,
  searchHeader: `italic w-full text-teal-500 font-bold  inline flex items-center text-3xl p-4 overflow-hidden`,
  inputBoxes: `flex flex-col mb-4 relative`,
  inputBox: `rounded-full h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
  input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent  h-full w-full text-lg`,
  inputLabel: 'py-1 px-6 text-black mb-3 text-xl',

}

const LocationSelector = () => {

  const { pickup, setPickup, dropoff, setDropoff } = useContext(UberContext)

  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>Enter your pick up and drop off location</div>
      <div className={style.inputBoxes}>
        <div className={style.inputLabel}>Pickup Location:</div>
        <div
          className={style.inputBox}>
          <input
            className={style.input}
            placeholder='Enter pickup location...'
            value={pickup}
            onChange={e => setPickup(e.target.value)}/>
        </div>
        <div className={style.inputLabel}>Dropoff Location:</div>
        <div
          className={style.inputBox}>
          <input
            className={style.input}
            placeholder='Enter dropoff location...'
            value={dropoff}
            onChange={e => setDropoff(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default LocationSelector
