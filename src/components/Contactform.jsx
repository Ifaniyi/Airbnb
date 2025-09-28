import Label from "./ui/label"
export default function Contactform() {
    return (
        <div className="m-4">
            <div className="flex gap-4">
                <Label firstname="First Name" placeholder=""/>
                <Label firstname="Last Name" placeholder=""/>
            </div>

            <div className="flex gap-4">
                <Label firstname="First Name" placeholder=""/>
                <Label firstname="Last Name" placeholder=""/>
            </div>

            <div className="mt-4 mb-4">
                <p>✅ Receive text message update about booking. Messages rates may apply.</p>
            </div>

            <hr className="text-gray-200" />


            <div className="">
                <p className="mb-4 mt-4">Pay with</p>
                    

                <section className="flex flex-col">
                
                    <Label placeholder="Credit or debit card" className="mb-4 "/>
              

                
                    <Label placeholder="Card number" src="/icon/cardicon.png"/>           
                 
                    <Label placeholder="Expiration date "/>
                    <Label placeholder="CVV"/>
                  
                </section>
                    
            </div>
            

            
        </div>
    )
}