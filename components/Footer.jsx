
export default function Footer() {
    return(
        <>
        <div className="flex flex-col justify-center h-72 bg-black text-center sm:w-full w-60 
        sm:px-0 px-14 gap-12 text-white">
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-2 justify-center font-bold">
                <a href="#">About</a>
                <a href="#">Store locator</a>
                <a href="#">FAQs</a>
                <a href="#">News</a>
                <a href="#">Careers</a>
                <a href="#">Contact Us</a>
            </div>
            <p className="font-medium">shopping@website.com</p>
        </div>
        </>
    )
}