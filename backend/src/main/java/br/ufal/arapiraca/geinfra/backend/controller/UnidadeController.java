package br.ufal.arapiraca.geinfra.backend.controller;

import java.net.URI;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import br.ufal.arapiraca.geinfra.backend.controller.form.SolicitacaoForm;
import br.ufal.arapiraca.geinfra.backend.controller.form.UnidadeForm;
import br.ufal.arapiraca.geinfra.backend.model.Solicitacao;
import br.ufal.arapiraca.geinfra.backend.model.Unidade;
import br.ufal.arapiraca.geinfra.backend.repository.UnidadeRepository;

@RequestMapping("/unidade")
public class UnidadeController {

    @Autowired
    private UnidadeRepository unidadeRepository;

     @PostMapping
    @Transactional
    public ResponseEntity<Unidade> cadastrar(@RequestBody @Valid UnidadeForm form, UriComponentsBuilder uriBuilder){
        Unidade unidade = form.converter();
        unidadeRepository.save(unidade);

        URI uri = uriBuilder.path("/unidade/{id}").buildAndExpand(unidade.getId()).toUri();
        return ResponseEntity.created(uri).body(unidade);
    }
}
