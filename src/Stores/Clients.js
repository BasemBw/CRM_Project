import clientsData from'./data.json'

export class clients {
   constructor(){
     this.clients = []
   }

   getClients (){
       this.clients = [...clientsData]
   }
}