import { Solicitacao } from "@/models/Solicitacao"
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

  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await solicitacaoService.get();
      setSolicitacoes(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      //alert('Ocorreu uma erro ao buscar as solicitação cadastradas');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
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
          solicitacoes?.length ? (
            solicitacoes.map(s => (
              <SolicitationCard solicitation={s} key={s.id}/>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-20">Nenhuma solicitação encontrada</p>
          )
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
