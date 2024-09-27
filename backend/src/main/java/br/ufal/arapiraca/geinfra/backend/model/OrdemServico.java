package br.ufal.arapiraca.geinfra.backend.model;

import java.time.LocalDateTime;

public class OrdemServico {
    private Long id;
    private String numeroOrdem;
    private String TAG;
    private LocalDateTime dataAbertura;
    private String equipamento;
    private LocalDateTime inicioServico;
    private LocalDateTime terminoServico;
    private String descricaoServicoExecutado;
    private StatusOrdem Status;
    private String materialUtilizado;
    private String executante;
    private String responsavel;
    private TipoManutencao tipoManutencao;
    
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        OrdemServico other = (OrdemServico) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNumeroOrdem() {
        return numeroOrdem;
    }
    public void setNumeroOrdem(String numeroOrdem) {
        this.numeroOrdem = numeroOrdem;
    }
    public String getTAG() {
        return TAG;
    }
    public void setTAG(String tAG) {
        TAG = tAG;
    }
    public LocalDateTime getDataAbertura() {
        return dataAbertura;
    }
    public void setDataAbertura(LocalDateTime dataAbertura) {
        this.dataAbertura = dataAbertura;
    }
    public String getEquipamento() {
        return equipamento;
    }
    public void setEquipamento(String equipamento) {
        this.equipamento = equipamento;
    }
    public LocalDateTime getInicioServico() {
        return inicioServico;
    }
    public void setInicioServico(LocalDateTime inicioServico) {
        this.inicioServico = inicioServico;
    }
    public LocalDateTime getTerminoServico() {
        return terminoServico;
    }
    public void setTerminoServico(LocalDateTime terminoServico) {
        this.terminoServico = terminoServico;
    }
    public String getDescricaoServicoExecutado() {
        return descricaoServicoExecutado;
    }
    public void setDescricaoServicoExecutado(String descricaoServicoExecutado) {
        this.descricaoServicoExecutado = descricaoServicoExecutado;
    }
    public StatusOrdem getStatus() {
        return Status;
    }
    public void setStatus(StatusOrdem status) {
        Status = status;
    }
    public String getMaterialUtilizado() {
        return materialUtilizado;
    }
    public void setMaterialUtilizado(String materialUtilizado) {
        this.materialUtilizado = materialUtilizado;
    }
    public String getExecutante() {
        return executante;
    }
    public void setExecutante(String executante) {
        this.executante = executante;
    }
    public String getResponsavel() {
        return responsavel;
    }
    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }
    public TipoManutencao getTipoManutencao() {
        return tipoManutencao;
    }
    public void setTipoManutencao(TipoManutencao tipoManutencao) {
        this.tipoManutencao = tipoManutencao;
    }    
}
