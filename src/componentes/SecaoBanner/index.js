import "./style.css"
function SecaoBanner(){
    return(
        <div>
          <section className="secao-nossos-sabores">
            <img src="assets/banner-sabores.jpg" alt="sorvertes diversos" />
            <div className="texto-secao-nossos-sabores">
                <h2>Nossos Sabores</h2>
                <span>Novos e deliciosos!</span>
                <p>
                    Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
                    gelateria todos os nossos produtos são naturais, à base de
                    frutas e sem nenhum conservante! Também temos opções sem lactose
                    e sem açúcar. Venha conhecer e perceber que tem como o sorvete
                    ser delicioso e saudável ao mesmo tempo! 
                </p>
            </div>
          </section>
        </div>
    )
}
export default SecaoBanner;