import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Fourimage from "./components/ui/fourimage";
import Icons from "./components/ui/icons";
import PropertyTitle from "./components/ui/propertyTitle";
import SaveShare from "./components/ui/saveShare";
import Beachsideview from "./components/ui/Beachsideview";
import Beachbackview from "./components/ui/beachbackview";
import Beachrestside from "./components/ui/beachrestside";
import Threeicon from "./components/ui/threeicon"; 
import Description from "./components/ui/description";
import Form from "./components/Form";
import Offercomponent from "./components/ui/offercomponent";
import ReviewCard from "./components/ui/reviewcard";




const Homepage = () => {
    return(
        <div>
            <header>
                <Navbar />
            </header>

            <main>

                <section className="flex justify-between "> 
                    <div className="">
                    <div className="m-8 p-4 flex flex-col">
                        <div className="text-4xl font-bold">
                            <PropertyTitle title="Villa Arrecife Beach" />
                        </div>
                        <div className="flex flex-row space-x-4 mt-2 ">
                            <Icons icon="/icon/Star_1.png" num="4.9 ( 345 reviews )" />
                            <Icons icon="/icon/Mapicon.png" num="Sidemen, Bali, Indonesia" />
                            <Icons icon="/icon/personicon.png" num="Mainstream" />
                        </div>
                    </div>
                    </div> 

                    <div className="">
                    <div className="m-8 p-4 flex flex-row gap-4 ">
                       <SaveShare src="/icon/Heart.png" text="Save"/>              
                       <SaveShare src="/icon/Share.png" text="Share"/>              
                    </div>
                    </div>
                </section>

            </main>
         
            <div className="flex flex-row gap-4 m-8 p-4"> 
                <div classsName="">
                 <Fourimage />
                </div>

                <div className="flex flex-col gap-4">
                <div>
                    <Beachsideview />
                </div>
                <div className="flex flex-row gap-4">

                 <div>
                    <Beachbackview />
                 </div>
                 <div>
                    <Beachrestside />
                 </div>
                </div>
                </div>
            </div>

            <div className="m-8 p-4">
                <Threeicon />
            </div>

            <div className="">

            <div className="">
                <div className="m-8 p-4">
                <Description />
               
                </div>
               
            </div>

             <div className="m-8 p-4 w-1/4 rounded-lg shadow-md hover:shadow-xl bg-gradient-to-r from-green-200 to-purple-300">
                 <div className="text-2xl font-semibold mb-4" decoration-underline>
                    $2,500 <span className="text-gray-200">/night</span>
                </div>
                <Form />
            </div>
            
            </div>
            <Offercomponent />
            <div className="m-4 p-4 ">
                <ReviewCard />
            </div>
            
        
            <footer>
               <Footer /> 
            </footer>
        </div>
    )
}
export default Homepage;