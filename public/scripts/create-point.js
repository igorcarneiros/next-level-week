function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  //.then((res) => {return res.json()}) é uma versão longa do código abaixo
    .then(res => res.json()) 
    .then(states => {
      //ufSelect.innerHTML = ufSelect.innerHTML + `<option value="1">Valor</option>` é uma versão longa do código abaixo
        
      for( const state of states){
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` 
      }
            
    })
}
populateUFs()

function getCities (event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value 
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true


    fetch(url)
    .then(res => res.json()) 
    .then(cities => {
        
      for( const city of cities){
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` 
      }
           citySelect.disabled = false
    })
}
 

document
    .querySelector("select[name=uf]")//faço uma procura denro do documento pelo select que tem o nome uf
    .addEventListener("change", getCities)//essa funcionalidade vai ficar ligada ouvindo eventos da pagina, como por exemplo o evento de mudança da uf
  
//itens de coleta: temos que adicionar um ouvidor de eventos para vários itens, então preciso de uma estrutura de repetição OU melhor ainda, pegar todos os "li`s"

const itemsToCollect = document.querySelectorAll(".items-grid li")//todos os "li" encontrados eu coloco no itemsToCollect.
  for (const item of itemsToCollect){//para cada item de itemsToCollect:
    item.addEventListener("click", handleSelectedItem)
  }

 
  const collectedItems = document.querySelector("input[name=items]")

  let selectedItems = []//let é uma variável, const é uma constante

  function handleSelectedItem(event){//0 função pra selecionar items

    const itemLi = event.target

    //1 adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id
 

    
    //2 verificar se existem itens selecionados. se sim: pegar os itens selecionados.
    //const alreadySelected = selectedItems.findIndex( item => item == itemId) é uma versão enxuta da mesma estrutura abaixo.
    const alreadySelected = selectedItems.findIndex( function(item){
      const itemFound = item == itemId //isso será true ou false
      return itemFound
    })

    //3 se já estiver selecionado, tirar da seleção
    if( alreadySelected >= 0){
      //tirar da seleção
      const filteredItems = selectedItems.filter( item => {
        const itemIsDifferent = item != itemId
        return itemIsDifferent
      })

      selectedItems = filteredItems

    } else { //4 se não tiver elecionado, adicionar à seleção
        selectedItems.push(itemId)
    }

     //5 atualizar o campo escondido com os itens selecionados
      collectedItems.value = selectedItems
  }
