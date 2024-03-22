

export const Topbar = () => {

    return (
        <div className="flex items-center justify-center h-16 w-screen z-50">
            <div className="flex mt-3 justify-center h-11 w-10/12
                        bg-slate-500 shadow-2xl
                        rounded-3xl place-content-center
                        border border-solid border-slate-400 border-x-2
                        justify-items-center p-1
                        hover:shadow-xl hover:scale-100 transition-all duration-400">

                <TopbarItem text="Home"/>
                <TopbarItem text="Projects"/>
                <TopbarItem text="Experience"/>
            </div>
        </div>
    );
};

const TopbarItem = ({ text }) => {

    return (
        <div className="topbar-item">
            {text}
        </div>
    );
};