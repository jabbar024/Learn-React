import Asidebar from './Asidebars/Asidebar'
import Footer from './Footers/Footer'
import MainContent from './MainContent/MainContent'
import Navbar from './Navbar/Navbar'

const Components = () => {
 
  return (
    <>
        <Navbar />

            <div className='h-[90vh] w-[100vw] flex flex-row'>
                <Asidebar />
                <MainContent />
            </div>

        <Footer />
    </>
  )
}

export default Components
