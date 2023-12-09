import "./style.css"

function SecaoSobre(){
    return(
        <div>
           <section className="secao-sobre-nos">
             <img src="assets/sobre-image.jpg" alt="pessoas comendo sorvete" />
             <div  className="texto-secao-sobre-nos">
                <h2>SOBRE NÓS</h2>
                <span>Alegria em cada casquinha!</span>
                <p>
                  Venha tomar o melhor sorvete da região aqui com a gente! Nós
                  estamos há anos no mercado produzindo o que tem de melhor para o
                  nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                  uma visita e aproveite o melhor atendimento e o melhor sorvete
                  da cidade.
                </p>
             </div>
           </section>
        </div>
    )
}
export default SecaoSobre