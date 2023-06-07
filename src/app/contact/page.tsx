import { BsFacebook, BsFillEnvelopeFill, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col gap-3 py-16 items-center text-center text-brown-color w-4/5">
        <h1 className="text-6xl">Get in touch</h1>
        <h2>CONTACT THE CATHIE CATALANO REAL ESTATE GROUP</h2>
        <p className="text-sm px-20">Ready to jump into buying a home? Want to talk through different strategies? Get in touch with us today to talk about how we can work together to meet your real estate needs.</p>
      </div>
      <div className="flex p-10">
        <div className="flex p-10 gap-3">
          <img className="w-60 h-60 rounded-full" src="/cedric-grolet.webp" alt="Descrição da imagem" />
          <div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl">Cedric Grolet®</h2>
              <nav className="flex flex-col gap-3">
                <a className="flex items-center py-1 gap-1 border-b border-black"><BsFillTelephoneFill />XXXX-XXX-XXX</a>
                <a className="flex items-center py-1 gap-1 border-b border-black"><BsFillEnvelopeFill />cedricgrolet@fake.com</a>
                <a className="flex items-center py-1 gap-1 border-b border-black"><BsFacebook />Cedric Grolet</a>
                <a className="flex items-center py-1 gap-1 border-b border-black"><BsInstagram />@cedricgrolet</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex p-10 gap-3">
          <img className="w-60 h-60 rounded-full" src="/cedric-grolet.webp" alt="Descrição da imagem" />
          <div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl">Cedric Grolet®</h2>
              <nav className="flex flex-col gap-3">
                <a className="flex items-center py-1 gap-1 border-b border-black"><BsFillTelephoneFill />XXXX-XXX-XXX</a>
                <a className="flex items-center py-1 gap-1 border-b border-black"><BsFillEnvelopeFill />cedricgrolet@fake.com</a>
                <a className="flex items-center py-1 gap-1 border-b border-black"><BsFacebook />Cedric Grolet</a>
                <a className="flex items-center py-1 gap-1 border-b border-black"><BsInstagram />@cedricgrolet</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-cover h-banner w-full" style={{ backgroundImage: "url('/frutas.webp')" }}>
        <div className="flex flex-col gap-5 p-11 items-center text-center text-brown-color rounded-3xl w-11/12 bg-white">
          <h2 className="text-6xl font-light">Book a free consultation</h2>
          <h3>NOT SURE WHERE TO START? LET'S TALK!</h3>
          <p className="px-7">Book a call through the link here, and we’ll have a 15 minute phone call to discuss your real estate needs. No matter your real estate needs, we can help you find direction for your new home purchase, sale, relocation, and more!</p>
          <button className="px-10 rounded-full bg-brown-color text-white">BOOK A CALL NOW</button>
        </div>
      </div>
    </main>
  );
}