
function Description() {
    const car = ['Description', 'What we offer', 'Reviews', 'About host']

    return(
        <div className="w-5/8">
            <hr className="text-gray-400"/>
            <div className="flex flex-row gap-4 w-full justify-between items-center text-lg font-semibold mb-4 mt-4">
                {car.map((item, index) => (
                    <div 
                        key={index} 
                        className="inline-block hover:underline hover:cursor-pointer hover:text-green-400"
                    >
                        {item} 
                    </div>
                ))}
                <div>Publish date</div> 

            </div>
            <hr className="text-gray-300"/>
        </div>
    )
}
export default Description;
