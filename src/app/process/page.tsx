import Link from "next/link";

export default function Process() {
  return (
    <main className="flex flex-col text-brown-350 items-center justify-center pt-space-header">
      <div className="flex flex-col gap-2 py-10 items-center text-center w-5/6 ">
        <h1 className="text-4xl font-light">Simplificando o nosso processo</h1>
        <h2 className="text-sm font-medium">ENTENDA O NOSSO PROCESSO DESDE A ESCOLHA DOS NOSSOS PRODUTOS</h2>
        <p className="text-xs pb-3 w-4/5">Escolher um serviço especializado para o seu evento é crucial. Nossa equipe de profissionais experientes está pronta para ajudá-lo em todas as etapas, desde a concepção até a execução, garantindo que cada detalhe seja cuidadosamente planejado e personalizado de acordo com suas necessidades. Conte conosco para criar uma experiência memorável e de sucesso para o seu evento.</p>
        <Link href='/contact' className="text-xs transition duration-500 px-10 py-0.5 rounded-full border border-brown-350 hover:bg-brown-350 hover:text-white">
          AGENDE UMA CONSULTA
        </Link>
      </div>
      <div className="flex max-sm:flex-col items-center py-5 w-4/5 max-sm:w-[90%]">
        <div className="flex flex-col p-6 max-sm:p-4 gap-3 max-sm:gap-2">
          <h2 className="text-3xl">Processo de compra dos produtos</h2>
          <h3 className="text-sm">O ESSENCIAL PARA COMPRA DE PRODUTOS DE QUALIDADE</h3>
          <p className="text-xs">Desejando adquirir produtos de alta qualidade? Sua busca chegou ao fim. Abaixo, apresentamos os 4 passos essenciais do nosso processo de compra, destacando a importância de cada etapa. Como especialistas em seleção de produtos, guiaremos você ao longo desse processo, assegurando sua satisfação em cada passo do caminho.</p>
        </div>
        <img className="w-1/2 max-sm:w-full h-80 max-sm:h-auto p-6" src="/kends-patisserie.webp" alt="Descrição da imagem" />
      </div>

      <div className="flex max-sm:flex-col pt-4 pb-16 w-4/5">
        <div className="flex flex-col gap-4 max-sm:gap-1 items-center text-center border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:py-4 w-1/4 max-sm:w-full px-5 border-brown-350">
          <h2 className="flex items-center justify-center text-xl rounded-full h-10 w-10 border border-brown-350">1</h2>
          <h3 className="font-medium text-xl">Pesquisa e Inspiração</h3>
          <p className="text-xs">Nossa equipe realiza uma extensa pesquisa de mercado para identificar tendências e inspirações gastronômicas. Buscamos ingredientes e sabores inovadores que estejam alinhados com a proposta da Grolet Patisserie.</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-1 items-center text-center border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:py-4 w-1/4 max-sm:w-full px-5 border-brown-350">
          <h2 className="flex items-center justify-center text-xl rounded-full h-10 w-10 border border-brown-350">2</h2>
          <h3 className="font-medium text-xl">Seleção dos Ingredientes Finos</h3>
          <p className="text-xs">Cada ingrediente utilizado em nossos produtos é selecionado com rigor e qualidade. Trabalhamos em parceria com fornecedores renomados, garantindo ingredientes frescos e de alto padrão para oferecer uma experiência excepcional aos nossos clientes.</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-1 items-center text-center border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:py-4 w-1/4 max-sm:w-full px-5 border-brown-350">
          <h2 className="flex items-center justify-center text-xl rounded-full h-10 w-10 border border-brown-350">3</h2>
          <h3 className="font-medium text-xl">Testes e Avaliações</h3>
          <p className="text-xs">Realizamos testes rigorosos para avaliar a combinação de sabores, texturas e apresentação dos produtos. Nosso objetivo é assegurar que cada item oferecido pela Grolet Patisserie atenda aos mais altos padrões de qualidade e satisfaça os paladares mais exigentes.</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-1 items-center text-center py-10 max-sm:py-4 w-1/4 max-sm:w-full px-5">
          <h2 className="flex items-center justify-center text-xl rounded-full h-10 w-10 border border-brown-350">4</h2>
          <h3 className="font-medium text-xl">Curadoria de Produtos</h3>
          <p className="text-xs">Com base nos resultados dos testes e nas preferências dos nossos clientes, fazemos uma cuidadosa seleção dos produtos que serão oferecidos em nosso estabelecimento. Levamos em consideração a diversidade, a sazonalidade e a originalidade para proporcionar uma variedade de opções irresistíveis.</p>
        </div>
      </div>

      <div className="flex max-sm:flex-col-reverse items-center justify-center py-10 max-sm:py-4 gap-5 w-4/5 max-sm:w-[90%]">
        <div className="w-[45%] max-sm:w-[90%] h-72 max-sm:h-56 bg-cover" style={{ backgroundImage: "url('/bolo-cubo-magico.webp')" }}/>
        <div className="flex flex-col w-1/2 max-sm:w-full p-5 max-sm:gap-1 gap-3">
          <h2 className="text-3xl">Processo de criação</h2>
          <h3 className="text-sm">OS PASSOS PARA A CRIAÇÃO DE UMA NOVA RECEITA</h3>
          <p className="text-xs">Aqui na nossa patisserie, compartilhamos os 4 passos fundamentais do nosso processo de criação de novas receitas, para garantir que cada doce seja uma obra de arte culinária. Como especialistas em confeitaria, trabalhamos com paixão e criatividade, cuidando de cada detalhe para oferecer a você uma experiência gastronômica excepcional.</p>
        </div>
      </div>

      <div className="flex max-sm:flex-col pt-4 pb-16 w-4/5">
        <div className="flex flex-col gap-4 max-sm:gap-1 items-center text-center border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:py-4 w-1/4 max-sm:w-full px-5 border-brown-350">
          <h2 className="flex items-center justify-center text-xl rounded-full h-10 w-10 border border-brown-350">1</h2>
          <h3 className="font-medium text-xl">Busca de Inspiração</h3>
          <p className="text-xs">Nesse primeiro passo, nossa equipe de chefs busca inspiração em diversas fontes, como ingredientes sazonais, tendências gastronômicas e sabores inovadores. Exploramos novas combinações e conceitos para criar receitas únicas e deliciosas.</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-1 items-center text-center border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:py-4 w-1/4 max-sm:w-full px-5 border-brown-350">
          <h2 className="flex items-center justify-center text-xl rounded-full h-10 w-10 border border-brown-350">2</h2>
          <h3 className="font-medium text-xl">Experimentação Culinária</h3>
          <p className="text-xs">Após encontrar a inspiração, entramos na fase de experimentação. Nossos chefs testam diferentes proporções de ingredientes, técnicas de preparo e combinações de sabores. É um processo criativo e meticuloso, onde buscamos aperfeiçoar cada detalhe da nova receita.</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-1 items-center text-center border-r max-sm:border-r-0 max-sm:border-b py-10 max-sm:py-4 w-1/4 max-sm:w-full px-5 border-brown-350">
          <h2 className="flex items-center justify-center text-xl rounded-full h-10 w-10 border border-brown-350">3</h2>
          <h3 className="font-medium text-xl">Refinamento da Receita</h3>
          <p className="text-xs">Com base nos resultados dos testes, aprimoramos a receita. Fazemos ajustes nas quantidades, temperaturas, tempos de cozimento e outros aspectos importantes para garantir um sabor e uma textura excepcionais. Cada detalhe é cuidadosamente analisado para atingir a perfeição.</p>
        </div>
        <div className="flex flex-col gap-4 max-sm:gap-1 items-center text-center py-10 max-sm:py-4 w-1/4 max-sm:w-full px-5">
          <h2 className="flex items-center justify-center text-xl rounded-full h-10 w-10 border border-brown-350">4</h2>
          <h3 className="font-medium text-xl">Finalização e Apresentação</h3>
          <p className="text-xs">Nessa etapa, além do sabor, damos atenção especial à apresentação visual da nova receita. Trabalhamos na decoração, na disposição dos elementos e na harmonia de cores, criando uma experiência visualmente deslumbrante. Assim, cada doce se torna uma verdadeira obra de arte culinária.</p>
        </div>
      </div>
    </main>
  );
}