

export default function AboutComp() {
    return (
        <div className="flex flex-col h-full items-center"
            style={{
                backgroundImage: `url(/background_artxacid.png)`
            }}>
            <div className="lg:mt-20 max-w-xl">
                <img src="/about.png" alt="about" />
            </div>
            
            <div className="grid gap-4 p-8 lg:p-12  mb-10 lg:mb-20 items-center text-center max-w-xl lg:max-w-3xl xl:max-w-7xl text-lg lg:text-2xl bg-yellow-300">
                <p>Estampando SMILES por onde passa, inovando o conceito de colagens, levando humor e irreverência, Rennan " CHAPA " Paulim vem conquistando seguidores com a ótima combinação de cores vibrantes e sobreposição de personagens, ícones pop e desenhos criativos dentro das suas artes.</p>
                <p>Cada projeto desenvolvido traz experiências memoráveis e sensações expoentes de uma mente criativa, influenciada pela psicodelia moderna e pela prolificidade digital.</p>
                <p>O Street Art, também, é uma das maiores marcas nas comunicações feitas pelo Design de Moda e DJ autodidata.</p>
                <p>Art x Acid, sua marca, foi fundada em 2018 em uma viagem para Califórnia que juntamente com a cidade de São Paulo, abrigam as maiores influências da cultura de rua do artista paulistano.</p>
            </div>
           
        </div>
    )
}