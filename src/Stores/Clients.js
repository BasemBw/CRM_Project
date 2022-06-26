import clientsData from'./data.json'

export class clients {
   constructor(){
     this.clients = [...clientsData]
     this.owners = [...this.getOwners()]
   }

   getOwners(){
       let owners = new Set()
       this.clients.forEach(element => {
           owners.add(element.owner)
       });
       return Array.from(owners)
   }
   
}