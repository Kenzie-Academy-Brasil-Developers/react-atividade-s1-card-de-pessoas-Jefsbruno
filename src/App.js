
import './App.css';
import PersonNome from './components/Developer';


function App() {

  const names = {name1:'Gabriel', name2:'Filipe', name3:'Mariana'}
  const idades = {idade1:19, idade2:28, idade3:24}
  const paises = {pais1:'Brasil', pais2:'Itália'}

 

  console.log(idades.idade1)

  return (
    <div className="App">
      <div className="App-header">
       <PersonNome 
          name = {names.name1} 
          age = {idades.idade1} 
          country = {paises.pais1} 
        />
         <PersonNome 
          name = {names.name2} 
          age = {idades.idade2} 
          country = {paises.pais1} 
        />
         <PersonNome 
          name = {names.name3} 
          age = {idades.idade3} 
          country = {paises.pais2} 
        />

      </div>
    </div>
  );
}

export default App;
