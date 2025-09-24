import Myoffericon from "./myoffericon"
import Icons from "./icons"

export default function Offercomponent(){
    return(
        <section>
            <div className="shadow-lg">
                <div className="m-4 p-4">
                 <h2 className="text-xl font-serif font-black">What this place offer</h2>
                 <p className="text-lg font-sans">Each home is fully equipped to meet your needs, with ample space and privacy.</p>
                </div>
                <div className="flex flex-row">
                <div className="m-4 p-4 flex-col">
                    <Myoffericon offericon="/icon/Group.png" offertext="Mountain view"/>
                    <Myoffericon offericon="/icon/Group1.png" offertext="Chef"/>
                    <Myoffericon offericon="/icon/broom1.png" offertext="Cleaning available during stay"/>
                    <Myoffericon offericon="/icon/pool1.png" offertext="Pool - infinity"/>
                    <Myoffericon offericon="/icon/pan1.png" offertext="Kitchen" />
                </div>
                
                <div className="m-4 p-4 flex-col">
                    <Myoffericon offericon="/icon/Group.png" offertext="Mountain view"/>
                    <Myoffericon offericon="/icon/Group1.png" offertext="Chef"/>
                    <Myoffericon offericon="/icon/broom1.png" offertext="Cleaning available during stay"/>
                    <Myoffericon offericon="/icon/pool1.png" offertext="Pool - infinity"/>
                    <Myoffericon offericon="/icon/pan1.png" offertext="Kitchen" />
                </div>
                </div>
                <div className="p-4 m-2 font-semibold">
                    <Icons icon="/icon/Star_1.png" num="4.9 ( 345 reviews )" />
                </div>
            </div>
        </section>
    )
} 