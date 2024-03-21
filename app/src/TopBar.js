import { FaFire } from 'react-icons/fa'

const TopBar = () => {

    return (
        <div className="fixed top-0 justify-center h-16 w-screen
                        flex flex-col bg-transparent">

            {/* <TopBarEntry icon={<FaFire size="28"/>}/> */}
            
        </div>
    );
};

const TopBarEntry = ({ icon, text = "Tooltip 🔨"}) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    );
};

export default TopBar;