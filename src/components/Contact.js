import React from "react";
const Contact = ()=>{
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4 "> Contact Us Page</h1>
            <form>
            <input className="border border-black m-2 p-2 rounded-lg" placeholder="Name"/>
            <input className="border border-black m-2 p-2 rounded-lg" placeholder="Message"/>
            <button className="bg-black text-white font-bold m-2 p-2 rounded-lg">Submit</button>

            </form>
        </div>
    )
}
export default Contact;