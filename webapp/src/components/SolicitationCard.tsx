import { Solicitacao } from "@/models/Solicitacao";
import { MdPlace, MdSettings } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { Button } from "./ui/button";

type Props = {
    solicitation: Solicitacao,
}

const statusColors = {
    'ENVIADA': 'bg-[#49c8de]',
    'REJEITADA': 'bg-[#D95757]',
    'EM_PROGRESSO': 'bg-[#F6A93D]',
    'CONCLUIDA': 'bg-[#549832]',
}

function SolicitationCard({solicitation}: Props) {

    return (
        <div
            className="flex items-center bg-[#F8F8F9] mb-8 pb-3 pt-4 border rounded-lg  border-[#BDBDBD]"
        >
            <div className="w-1/6 flex justify-center font-bold text-2xl pr-6 text-[#333]">
                N° {solicitation.id.toString().padStart(4, '0')}
            </div>

            <div className="w-4/6 text-[#4F4F4F]">
                <div className="text-ellipsis truncate">
                    {solicitation.descricao}
                </div>
                <hr className="my-1"/>
                <div className="flex justify-between">
                    <span className="flex w-full">
                        <span className="flex min-w-28 mr-4 items-center text-ellipsis trucate">
                            <MdPlace size={20} color="#9A4123" className="mr-2"/>
                            {solicitation.setor}
                        </span>
                        <span className="flex min-w-28 mr-4 items-center text-ellipsis trucate">
                            <FaSchool size={20} color="#2D8800" className="mr-2"/>
                            {solicitation.unidade}
                        </span>
                        <span className="flex min-w-28 items-center text-ellipsis trucate">
                            <MdSettings size={20} color="#13578C" className="mr-2"/>
                            {solicitation.servico}
                        </span>
                    </span>
                    <span className={
                        `rounded-lg
                        ${solicitation?.status ? statusColors[solicitation.status] : 'bg-gray-300'}
                        w-28 text-xs flex justify-center items-center font-bold text-white`
                    }>
                        {/* TODO: ajustar mensagens de status */}
                        {solicitation?.status}
                    </span>
                </div>
            </div>

            <div className="w-1/6 flex justify-center pl-6">
                <Button
                    className="bg-primary-blue font-bold text-xs h-8 px-8"
                >
                    Detalhes
                </Button>
            </div>
        </div>
    )
  }
  
  export default SolicitationCard;
  