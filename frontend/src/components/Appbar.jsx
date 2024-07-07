export const Appbar = ({name}) => {
    return(
        <div className="shadow h-14 flex justify-between ">
            <div className="flex flex-col text-1xl text-slate-500 font-bold justify-center h-full  ml-4">
                PaisaBhejo
            </div>
            <div className="flex">
                <div className="flex flex-col text-1xl text-slate-500 font-bold justify-center h-full mr-4">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                       { name[0].toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    )
}