

export const Header = () => {
    return(
        <div className="bg-primary h-[100px] w-screen flex items-end px-10 text-white capitalize cursor-pointer">
            <div  className="mr-2 p-2 hover:bg-white hover:text-primary text-xl font-bold rounded-t-lg transition-all">
                <a >Organização</a>
            </div>
            <div className="p-2 hover:bg-white hover:text-primary text-xl font-bold rounded-t-lg transition-all">
                <a >Tarefas</a>
            </div>
        </div>
    )
}