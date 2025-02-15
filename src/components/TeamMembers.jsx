import { LocateFixedIcon, User2 } from "lucide-react";

export default function TeamMembers({ img, names }) {
    return (
        <div className="relative flex flex-col p-2 shadow-md">
            {/* <LocateFixedIcon className="absolute text-white" /> */}
            <img src={img} className='object-cover overflow-hidden' style={{ borderRadius: "20px", width: "150px", height: "150px" }} />
            <div className="flex items-center gap-2 mt-5">
                <span><User2 /></span>
                <h3 className="text-xl font-semibold text-black">{names}</h3>
            </div>

        </div>
    )
}
