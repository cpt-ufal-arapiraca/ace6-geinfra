package br.ufal.arapiraca.geinfra.backend.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.ufal.arapiraca.geinfra.backend.controller.dto.UnidadeDTO;
import br.ufal.arapiraca.geinfra.backend.controller.form.UnidadeForm;
import br.ufal.arapiraca.geinfra.backend.model.Unidade;
import br.ufal.arapiraca.geinfra.backend.repository.UnidadeRepository;
import jakarta.validation.Valid;

@RestController
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

    @GetMapping("/{id}")
    public ResponseEntity<UnidadeDTO> detalharSolicitacao(@PathVariable Long id) {
        Optional<Unidade> opt = unidadeRepository.findById(id);
        if(opt.isPresent()){
            return ResponseEntity.ok(new UnidadeDTO(opt.get()));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping
    public List<UnidadeDTO> lista() {
        List<Unidade> lista = unidadeRepository.findAll();
        
        return UnidadeDTO.converter(lista);
    }
}
