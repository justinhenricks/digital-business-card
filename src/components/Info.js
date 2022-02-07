import Mail from '../icons/Mail.png'
const Info = () => {
    return (
        <div>
            <h2 className="text-center text-2xl text-slate-900 font-bold">Justin Henricks</h2>
            <h3 className="text-center text-sm font-medium text-orange-500">Full Stack Developer</h3>
            <button className='my-4 flex gap-2 items-center justify-center 
            w-full p-2 border border-solid border-slate-500 bg-white rounded drop-shadow-sm hover:drop-shadow-md'>
                <img src={Mail} />
                
                <a href="mailto:justinhenricks@gmail.com">Email Me</a>
            </button>
        </div>
            
    )
}

export default Info;