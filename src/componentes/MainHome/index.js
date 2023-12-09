
import SecaoBanner from '../SecaoBanner';
import SecaoEventos from '../SecaoEventos';
import SecaoSobre from '../SecaoSobre';
import SecaoTitulo from '../SecaoTitulo';

function MainHome(){
    return(
        <div>
          <SecaoTitulo />
          <SecaoBanner />
          <SecaoEventos />
          <SecaoSobre />
        </div>
    )
}
export default MainHome;