import { action, makeObservable, observable } from 'mobx'
import clientsData from'./data.json'

export class clients {
   constructor(){
     this.clients = [...clientsData]
     this.owners = [...this.getOwners()]
     this.ownerName = ''
     this.emailTybe = ''
     
     makeObservable(this , {
        clients : observable , 
        owners : observable , 
        emailTybe : observable ,
        ownerName : observable ,
        getOwners : action ,
        handelActionsInputs : action
     })
   }

   getOwners(){
       let owners = new Set()
       this.clients.forEach(element => {
           owners.add(element.owner)
       });
       return Array.from(owners)
   }

   handelActionsInputs(name , value){
      this[name] = value
   }

   
}