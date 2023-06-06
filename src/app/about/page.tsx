export default function About() {
  return (
    <main className="flex flex-col items-center text-brown-color">
      <div className="flex py-16 w-11/12 justify-evenly">
        <img className="w-2/5 pt-10 h-96" src="/masterclass.webp" alt="Descrição da imagem" />
        <div className="flex flex-col w-2/5 gap-5">
          <h1 className="text-5xl">Your real estate partners</h1>
          <h3>ABOUT CATHIE AND CARLY</h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Mother-Daughter team Cathie and Carly share a passion for real estate. Cathie has been a licensed Realtor® in the City of Medicine Hat and surrounding areas since 2003. Carly joined her as a licensed Realtor® in 2022 to extend their reliable and professional services.</p>
            <p className="text-sm">Buying a home is a big undertaking - we use our experience to guide you through the real estate process and ensure every detail is accounted for. As your trusted real estate partners, we'll work to find your dream home and make the process easy to understand. Whether you’re new to Medicine Hat, or already a part of our community, get in touch to see how we can help with all your real estate needs.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-cover w-full h-banner" style={{ backgroundImage: "url('/le-meurice-1.webp')" }}>
        <div className="flex flex-col p-5 gap-10 rounded-2xl items-center text-center w-5/6 bg-white">
          <h2 className="text-2xl pb-5 w-7/12 border-b border-black">Clientes</h2>
          <p className="text-3xl px-10">Os doces dessa patisserie são simplesmente divinos! A variedade de opções é impressionante e a qualidade dos ingredientes é evidente em cada mordida. Mal posso esperar para experimentar mais sabores!</p>
          <h3 className="text-xl">Amanda</h3>
        </div>
      </div>
      <div className="flex flex-col p-16 gap-2 items-center text-center bg-white">
        <h2 className="text-5xl font-light">Expertise in the Medicine Hat Market</h2>
        <h3 className="text-xl">LET US HELP YOU REACH YOUR REAL ESTATE GOALS</h3>
        <p className="text-sm px-32">Whether you are buying for the first time, or downsizing for retirement, our years of experience in the Medicine Hat real estate market have given us a wealth of knowledge about all kinds of real estate needs.</p>
        <div className="flex text-black text-3xl py-10 w-5/6">
          <p className="border-r py-10 px-5 border-black">Moving to Medicine Hat</p>
          <p className="border-r py-10 px-5 border-black">First Time Buyers</p>
          <p className="border-r py-10 px-5 border-black">Downsizing for Retirement</p>
          <p className="py-10 px-5">Finding your Dream Home</p>
        </div>
        <button className="bg-brown-color text-white rounded-full py-0.5 px-20">
          LEARN MORE ABOUT OUR PROCESS
        </button>
      </div>
    </main>
  )
}