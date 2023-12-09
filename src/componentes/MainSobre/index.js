import SecaoSobreBanner from "../../SecaoSobreBanner"
import SecaoContainerSobre from "../SecaoContainerSobre"
import SecaoSobreImagem from "../../componentes/SecaoSobreImagem"

function MainSobre(){
    return(
        <main>
           <SecaoSobreBanner />
           <SecaoContainerSobre />
           <SecaoSobreImagem />
           
        </main>
    )
}
export default MainSobre