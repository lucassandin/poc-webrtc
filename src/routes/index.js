import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Suspense } from 'react'
import NotFound from "../Components/NotFound"; 
import Header from "../Components/Header"
import Home from "../Pages/Home";
import VideoChamada from "../Pages/VideoChamada";
import SejaBemVindo from "../Pages/SejaBemVindo";
// fluxo de agendamento INIT
import TitularBeneficiario from "../Pages/TitularBeneficiario"; // 1 ok
import PreencherDados from "../Pages/PreencherDados"; // 2 ok
import DataCalendario from "../Pages/DataCalendario"; // 3 ok
import Hora from "../Pages/Hora"; // 4 ok
import Permissao from "../Pages/Permissao"; // 5 ok
import RecomendacaoFacial from "../Pages/RecomendacaoFacial"; // 6 ok
import ReconhecimentoFacial from "../Pages/ReconhecimentoFacial"; // 7 ok
import RecomendacaoAnexo from "../Pages/RecomendacaoAnexo"; // 8 ok
import AnexoDocumentoFrente from "../Pages/AnexoDocumentoFrente"; // 9 ok
import AnexoDocumentoVerso from "../Pages/AnexoDocumentoVerso"; // 10 ok
import DocumentoVisaoGeral from "../Pages/DocumentoVisaoGeral"; // 11 ok
import DocumentosRecebidos from "../Pages/DocumentosRecebidos"; // 12 ok
import ConfirmacaoAgendamento from "../Pages/ConfirmacaoAgendamento"; // 13 ok
// fluxo de agendamento END

const RoutesComponent = () => {
  return (
      <Router>
        <Suspense fallback={<></>}>
           <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/chamada" element={<VideoChamada />} />
            <Route path="/seja-bem-vindo" element={<SejaBemVindo />} />

            {/* // fluxo de agendamento INIT */}
            <Route path="/agendamento/titular-beneficiario" element={<TitularBeneficiario />} />
            <Route path="/agendamento/preencher-dados" element={<PreencherDados />} />
            <Route path="/agendamento/data-calendario" element={<DataCalendario />} />
            <Route path="/agendamento/hora" element={<Hora />} />
            <Route path="/agendamento/permissao" element={<Permissao />} />
            <Route path="/agendamento/recomendacao-facial" element={<RecomendacaoFacial />} />
            <Route path="/agendamento/reconhecimento-facial" element={<ReconhecimentoFacial />} />
            <Route path="/agendamento/recomendacao-anexo" element={<RecomendacaoAnexo />} />
            <Route path="/agendamento/anexoDocumento-frente" element={<AnexoDocumentoFrente />} />
            <Route path="/agendamento/anexoDocumento-verso" element={<AnexoDocumentoVerso />} />
            <Route path="/agendamento/documento-visao-geral" element={<DocumentoVisaoGeral />} />
            <Route path="/agendamento/documentos-recebidos" element={<DocumentosRecebidos />} />
            <Route path="/agendamento/confirmacao-agendamento" element={<ConfirmacaoAgendamento />} />
            {/* // fluxo de agendamento END */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
  )
}

export default RoutesComponent