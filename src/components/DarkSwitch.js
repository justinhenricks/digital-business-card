const DarkSwitch = (props) => {
    return (
        <div className={props.cname}>
            <div className="form-check form-switch flex items-center gap-2">
                <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked ></input>
                <label className="form-check-label inline-block text-gray-800" for="flexSwitchCheckChecked">Dark Mode</label>
            </div>
        </div>
    )
}

export default DarkSwitch;