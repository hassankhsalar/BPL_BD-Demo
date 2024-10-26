import React from 'react';

const Footer = () => {
    return (
        <div>
            <main className="flex-grow">
    <section className="relative">
        {/* newsletter part */}
        <div id="newsletter" className="bg-gradient-to-tr from-cyan-200 via-neutral-100 to-yellow-100 h-[384px] w-10/12 mx-auto rounded-3xl flex flex-col items-center justify-center relative z-10 -mb-48">
            <h2 className="text-xl font-bold pb-3">Subscribe To Our Newsletter</h2>
            <p className="text-sm">Get the latest updates and news right in your inbox!</p>
            <div className="flex flex-row mt-4">
                <input 
                    type="text" 
                    placeholder="Enter your Email" 
                    className="input input-sm input-bordered text-black p-1 text-xs h-8 w-48 rounded-md" 
                />
                <button 
                    className="btn btn-sm bg-gradient-to-r from-orange-50 via-yellow-200 to-pink-500 text-xs px-3 py-1 h-8 border-none rounded-md"
                >
                    Subscribe
                </button>
            </div>
        </div>
    </section>
</main>

{/* Footer aligned at the bottom */}
<footer className="bg-slate-900 flex flex-col justify-center items-center pt-60 relative z-0">
    <div>
        <img src="https://i.ibb.co.com/xHtCytz/logo-footer.png" alt="logo-footer" border="0" />
    </div>
    <div className="footer text-base-content p-10 flex justify-center gap-40 bg-slate-900 text-white h-[480px] pt-24">
        <nav className="w-40">
            <h6 className="footer-title">About Us</h6>
            <p>We are a passionate team dedicated to providing the best services to our customers.</p>
        </nav>

        <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
        </nav>
        <form>
            <h6 className="footer-title">Subscribe</h6>
            <fieldset className="form-control w-80">
                <label className="label">
                    <span className="label-text">Subscribe to our newsletter for the latest updates.</span>
                </label>
                <div className="join">
                    <input 
                        type="text" 
                        placeholder="Enter your Email" 
                        className="input input-bordered join-item text-black" 
                    />
                    <button 
                        className="btn bg-gradient-to-r from-orange-50 via-yellow-200 to-pink-500 join-item border-none"
                    >
                        Subscribe
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
    <div className="bg-slate-900 w-full text-center py-2">
        <p className="text-gray-500 text-xs">@2024 Your Company All Rights Reserved.</p>
    </div>
</footer>

        </div>
    );
};

export default Footer;