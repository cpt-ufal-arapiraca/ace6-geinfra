import { SolicitacaoCreateDto } from "@/models/Solicitacao"
import NavBreadcrumb from "@/components/NavBreadcrumb"
import { Button } from "@/components/ui/button"
import solicitacaoService from "@/services/solicitacaoService"
import { useEffect, useState } from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { RiEqualizerFill } from "react-icons/ri";
import InputComponent from "@/components/InputComponent"
import { useNavigate } from 'react-router-dom';
import SolicitationCard from "@/components/SolicitationCard"

function Solicitations() {

  const navigate = useNavigate();

  const goBack = () => navigate('/');

  const [solicitacaoDto] = useState({} as SolicitacaoCreateDto);
  const [selectedServicoIdx, setSelectedServicoIdx] = useState(0);
  const [otherServico, setOtherServico] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchSolicitations() {
    try {
      await solicitacaoService.post(solicitacaoDto);
      //TODO: implemment another action to be taken when 'solicitacao' is created
    } catch (error) {
      console.error(error);
      alert('Ocorreu uma erro ao buscar as solicitação cadastradas');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    //TODO: fazer fetch dos dados
    
  }, [])

  return (
    <main className="container h-screen flex flex-col">
      <nav className="py-4">
        <NavBreadcrumb/>
      </nav>

      <h1 className="text-5xl font-bold text-heading mt-8 mb-4">
        Lista de solicitações
      </h1>

      <div className="flex items-end">
        <InputComponent
          inputClassName="h-12 text-lg text-slate-900"
          startIcon={ImSearch}
          placeholder="Pesquisar..."
          onTxtChange={(v) => console.log(v)}
        />
        <Button
          className="bg-primary-blue h-12 font-bold px-12 ml-4"
          disabled={loading}
        >
          <RiEqualizerFill className="mr-4"/>
          Filtros
        </Button>
      </div>

      {/* TODO: Verify if this scroll is okay */}
      <section className="flex flex-col items-stretch mt-8 grow overflow-y-auto">
        {
          [1,2,3].map(x => (
            <SolicitationCard key={x}/>
          ))
        }
      </section>

      <footer className="flex justify-between items-center pb-10 pt-4">
        <Button
          variant="ghost"
          size="icon"
          type="button"
          onClick={goBack}
        >
          <FaAngleLeft
            className="cursor-pointer"
            size={40}
            color="#374957"
          />
        </Button>
      </footer>
    </main>
  )
}

export default Solicitations
