import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Suspense, lazy } from 'react'

const NotFound = lazy(() => import("../Components/NotFound"));
const Header = lazy(() => import("../Components/Header"));
const HomeComponent = lazy(() => import("../Components/Home"));
const Home = lazy(() => import("../Pages/Home"));
const VideoChamada = lazy(() => import("../Pages/VideoChamada"));
const ChamadaDeVideo = lazy(() => import('../Pages/ChamadaDeVideo'));
const SejaBemVindo = lazy(() => import("../Pages/SejaBemVindo"));
const TitularBeneficiario = lazy(() => import("../Pages/TitularBeneficiario"));
const PreencherDados = lazy(() => import("../Pages/PreencherDados"));
const DataCalendario = lazy(() => import("../Pages/DataCalendario"));
const Hora = lazy(() => import("../Pages/Hora"));
const Permissao = lazy(() => import("../Pages/Permissao"));
const RecomendacaoFacial = lazy(() => import("../Pages/RecomendacaoFacial"));
const ReconhecimentoFacial = lazy(() => import("../Pages/ReconhecimentoFacial"));
const RecomendacaoAnexo = lazy(() => import("../Pages/RecomendacaoAnexo"));
const AnexoDocumentoFrente = lazy(() => import("../Pages/AnexoDocumentoFrente"));
const AnexoDocumentoVerso = lazy(() => import("../Pages/AnexoDocumentoVerso"));
const DocumentoVisaoGeral = lazy(() => import("../Pages/DocumentoVisaoGeral"));
const DocumentosRecebidos = lazy(() => import("../Pages/DocumentosRecebidos"));
const ConfirmacaoAgendamento = lazy(() => import("../Pages/ConfirmacaoAgendamento"));
const Orientacoes = lazy(() => import("../Pages/Orientacoes"));
const TesteConexao = lazy(() => import("../Pages/TesteConexao"));
const TesteConexaoVerificando = lazy(() => import("../Pages/TesteConexaoVerificando"));
const TesteConexaoOk = lazy(() => import("../Pages/TesteConexaoOk"));



const RoutesComponent = () => {
  return (
      <Router>
        <Suspense fallback={<></>}>
          <HomeComponent>
           <Header />
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video/chamada/:sessionid" element={<VideoChamada />} />
              <Route path="/chamada-de-video" element={<ChamadaDeVideo />} />
              <Route path="/seja-bem-vindo" element={<SejaBemVindo />} />

              <Route path="/agendamento/titular-beneficiario" element={<TitularBeneficiario />} />
              <Route path="/agendamento/preencher-dados" element={<PreencherDados />} />
              <Route path="/agendamento/data-calendario" element={<DataCalendario />} />
              <Route path="/agendamento/hora" element={<Hora />} />
              <Route path="/agendamento/permissao" element={<Permissao />} />
              <Route path="/agendamento/recomendacao-facial" element={<RecomendacaoFacial />} />
              <Route path="/agendamento/reconhecimento-facial" element={<ReconhecimentoFacial />} />
              
              <Route path="/agendamento/recomendacao-anexo" element={<RecomendacaoAnexo />} />
              <Route path="/agendamento/documento-frente" element={<AnexoDocumentoFrente />} />
              <Route path="/agendamento/documento-verso" element={<AnexoDocumentoVerso />} />
              <Route path="/agendamento/documento-visao-geral" element={<DocumentoVisaoGeral />} />
              <Route path="/agendamento/documentos-recebidos" element={<DocumentosRecebidos />} />
              <Route path="/agendamento/confirmacao-agendamento" element={<ConfirmacaoAgendamento />} />

              <Route path="/chamada-de-video/orientacoes" element={<Orientacoes />} />
              <Route path="/chamada-de-video/reconhecimento-facial" element={<ReconhecimentoFacial />} />
              <Route path="/chamada-de-video/testeconexao" element={<TesteConexao />} />
              <Route path="/chamada-de-video/testeconexaoverificando" element={<TesteConexaoVerificando />} />
              <Route path="/chamada-de-video/testeconexaook" element={<TesteConexaoOk />} />

              <Route path="*" element={<NotFound />} />
            </Routes>

          </HomeComponent>
        </Suspense>
      </Router>
  )
}

export default RoutesComponent