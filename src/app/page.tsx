" use client "

import { Header } from "./components/Header"

const Page = () => {
  return(
    <div className="bg-secondary h-screen">
      <Header />
      <div className="mx-auto max-w-[980px] mt-[150px]">
        <div>
          <h1 className="text-3xl text-white font-bold capitalize">Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
          
        </div>
        <div className="text-white flex mt-20 justify-between max-w-[640px] mx-auto font-bold text-2xl border-b-white border-b-4 pb-6">
            <p>Tarefa</p>
            <p>Status</p>
            <p>Opções</p>
        </div>
      </div>
    </div>
  )
}

export default Page