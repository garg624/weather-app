import { IoSunny } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import { GrMapLocation } from "react-icons/gr";
type Props = {}

export default function Navbar(props: Props){
  return (
    <nav className="sticky top-0 left-0 z-8 w-screen  bg-slate-300 ">
        <div className="flex h-[80px] items-center justify-between max-w-7xl px-3 mx-auto">
            <div className=" flex items-center justify-center gap-2">
                <h2 className="text-gray-500 text-3xl decoration-sky-500">Weather</h2>
                <IoSunny className="text-5xl text-orange-600" />
            </div>
           <div className="flex items-center justify-center gap-2">
           <GrLocationPin className="text-3xl  ease-in-out hover:scale-150 hover:text-black " />
           <h1 className="text-4xl">India</h1>
           <GrMapLocation className="text-gray-700 text-3xl"/>

           </div>
        </div>
    </nav>
  )
}