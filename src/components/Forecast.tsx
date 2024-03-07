import { forecastType } from '../types'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props): JSX.Element => {
  return (
    <div className="w-full md:max-w-[500px] py-4 md: py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 background-blur-1s rounded drop-shadow-lg ">
      <div className="mx-auto w-[300px]">
        <section>
          <h2 className="text-2xl font-black">
            {data.name}, <span> {data.country}</span>
          </h2>
        </section>
      </div>
    </div>
  )
}
export default Forecast
