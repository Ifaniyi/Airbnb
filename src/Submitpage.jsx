import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Booking from "./components/ui/booking"
import Contactform from "./components/Contactform"
 

const Submit = () => {
    return(
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <Booking />
            </main>
            <div>
                 <div className="text-2xl font-semibold mb-4" decoration-underline>
                    <span className="m-4"> Contact Detail</span>
                </div>
                <Contactform />
            </div>


            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Submit