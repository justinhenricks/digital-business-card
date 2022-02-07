import DarkSwitch from './DarkSwitch'

const Header = () => {
    return (
        <div className="flex justify-center bg-white px-4 py-2 drop-shadow-sm">
            <div className="flex-1 hidden sm:flex align-center"></div>
            <h1 className="flex-1 flex align-center justify-start sm:justify-center text-xl font-medium">Justin Henricks</h1>
            <DarkSwitch cname="flex-1 flex justify-end" />
        </div>
    )
}

export default Header;
