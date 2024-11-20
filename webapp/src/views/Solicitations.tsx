import InputComponent from "@/components/InputComponent"
import { SolicitacaoCreateDto } from "@/models/Solicitacao"
import { Setor } from "@/models/Setor"
import { Unidade } from "@/models/Unidade"
import NavBreadcrumb from "@/components/NavBreadcrumb"
import RadioGroupComponent from "@/components/RadioGroupComponent"
import SelectComponent from "@/components/Select"
import TextAreaComponent from "@/components/TextAreaComponent"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import solicitacaoService from "@/services/solicitacaoService"
import { FormEvent, useEffect, useState } from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import unidadeService, { mockUnidades } from "@/services/unidadeService"
import setorService, { mockSetores } from "@/services/setorService"
import { TIPOS_SERVICOS_DEFAULT } from "@/utils/common"

function Solicitations() {

  const navigate = useNavigate();

  const goBack = () => navigate('/');

  const [solicitacaoDto] = useState({} as SolicitacaoCreateDto);
  const [setores, setSetores] = useState([] as Setor[]);
  const [unidades, setUnidades] = useState([] as Unidade[]);
  const [selectedServicoIdx, setSelectedServicoIdx] = useState(0);
  const [otherServico, setOtherServico] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSaveClick(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //TODO: Implemment form validation here...

    setLoading(true);
    if (selectedServicoIdx < TIPOS_SERVICOS_DEFAULT.length) {
      solicitacaoDto.servico = TIPOS_SERVICOS_DEFAULT[selectedServicoIdx];
    } else {
      solicitacaoDto.servico = otherServico;
    }

    try {
      console.log(solicitacaoDto);
      await solicitacaoService.post(solicitacaoDto);
      alert('SUCESSO!\n A solicitação foi cadastrada!');
      //TODO: implemment another action to be taken when 'solicitacao' is created
    } catch (error) {
      console.error(error);
      alert('Ocorreu uma erro ao cadastrar a solicitação');
    } finally {
      setLoading(false);
    }
  }

  function handleSetorChanged(idx: number) {
    solicitacaoDto.setor = setores[idx].id;
  }

  function handleUnidadeChanged(idx: number) {
    solicitacaoDto.unidade = unidades[idx].id;
  }

  function handleServicoChanged(idx: number) {
    setSelectedServicoIdx(idx);
    setOtherServico('');
  }

  useEffect(() => {
    const fetchUnidades = async () => {
      // const res = await unidadeService.get();
      // setUnidades(res.data);

      setUnidades(mockUnidades); //TODO: remove this
    }

    const fetchSetores = async () => {
      // const res = await setorService.get();
      // setSetores(res.data);

      setSetores(mockSetores);  //TODO: remove this
    }

    fetchUnidades()
      .catch(console.error);

    fetchSetores()
      .catch(console.error);
    
  }, [])

  return (
    <main className="container">
      <nav className="py-4">
        <NavBreadcrumb/>
      </nav>

      <h1 className="text-5xl font-bold text-heading my-8">
        Nova Solicitação
      </h1>

      <form onSubmit={(e) => handleSaveClick(e)} className="mt-8">
        <div className="flex mb-4 gap-x-10">
          <InputComponent
            id='input-nome-solicitante'
            label="Nome do Solicitante (*)"
            onIdxChange={(v) => solicitacaoDto.nomeSolicitante = v}
            placeholder="Nome do solicitante"
            className="basis-2/3"
          />
          <SelectComponent
            id='select-unidade'
            label="Unidade (*)"
            onIdxChange={handleUnidadeChanged}
            placeholder="Unidade"
            items={unidades.map(s => s.nome)}
            className="basis-1/3"
          />
        </div>
        <div className="flex mb-4 gap-x-10">
          <span className="flex gap-x-10 basis-2/3">
            <InputComponent
              id='input-siape'
              label="Siape (*)"
              onIdxChange={(v) => solicitacaoDto.siape = v}
              placeholder="Siape do solicitante"
            />
            <SelectComponent
              id='select-setor'
              label="Setor do Solicitante (*)"
              onIdxChange={handleSetorChanged}
              placeholder="Setor"
              items={setores.map(s => s.nome)}
            />
          </span>

          <InputComponent
              id='input-servico'
              label="Local do serviço (*)"
              onIdxChange={(v) => solicitacaoDto.local = v}
              placeholder="Local do serviço"
              className=" basis-1/3"
            />
          {/* <InputComponent
            label="Data da Solicitação"
            placeholder="00/00/0000 às 00:00h"
            className=" basis-1/3"
            readOnly
          /> */}
        </div>
        <section className="flex items-stretch my-10">
          <div className="w-full">
            <RadioGroupComponent
              label="Tipo de Serviço (*)"
              items={[...TIPOS_SERVICOS_DEFAULT, 'Outro']}
              onChange={handleServicoChanged}
            />
            
            <Input
              id="input-outro"
              value={otherServico}
              onChange={(e) => setOtherServico(e.target.value)}
              placeholder="Outro..."
              className="w-1/2 mt-3"
              disabled={selectedServicoIdx !== TIPOS_SERVICOS_DEFAULT.length}
            />
          </div>
          <span className="bg-[#C4C4C4] w-0.5 mx-10"/>
          <div className="w-full">
            <TextAreaComponent
              onChange={(v) => solicitacaoDto.descricao = v}
              label="Descrição do problema (*)"
              placeholder="Descrição do problema..."
            />
          </div>
        </section>




        <footer className="flex justify-between items-center py-10">
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
          <Button
            className="bg-primary-blue h-14 font-bold px-20"
            type="submit"
            disabled={loading}
          >
            Salvar
          </Button>
        </footer>
      </form>
    </main>
  )
}

export default Solicitations
