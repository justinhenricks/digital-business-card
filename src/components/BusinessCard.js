import Info from './Info'
import ContentBlock from './ContentBlock'
import Headshot from './Headshot'
import Footer from './Footer'

const BusinessCard = () => {
    return (
        <div className='flex flex-col rounded-lg bg-slate-100 shadow-xl w-full h-full sm:w-96 sm:h-5/6'>
            <Headshot />
            <div className='flex-1 p-6 overflow-auto overscroll-contain'>
                <Info />    
                <ContentBlock contentHeader="About" contentPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam erat justo, blandit non faucibus ac, imperdiet at mauris. Donec arcu augue, efficitur at vestibulum in, imperdiet nec nibh. 
                Nam quis elementum leo. Ut elementum nunc rutrum ultrices placerat." />
                
                <ContentBlock headerClassName="mt-2" contentHeader="Interests" contentPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam erat justo, blandit non faucibus ac, imperdiet at mauris. Donec arcu augue, efficitur at vestibulum in, imperdiet nec nibh. 
                Nam quis elementum leo. Ut elementum nunc rutrum ultrices placerat." />
            </div>
            <Footer />
        </div>
    )
}

export default BusinessCard;