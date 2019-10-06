import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onFindPetsClick = (event) => {
    if (this.state.filters.type == 'all'){
      fetch('/api/pets').then(response => this.state.pets: response)
    } else if (this.state.filters.type == 'cat'){
        fetch('/api/pets?type=cat').then(response => this.state.pets: response)
    } else if (this.state.filters.type == 'dog'){
        fetch('/api/pets?type=dog').then(response => this.state.pets: response)
    } else if (this.state.filters.type == 'micropig'){
        fetch('/api/pets?type=micropig').then(response => this.state.pets: response)
    }
  }

  onAdoptPet = petId => {
   const pets = this.state.pets.map(p => {
     return p.id === petId ? { ...p, isAdopted: true } : p;
   });
   this.setState({ pets });
 };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChange={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}  />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
