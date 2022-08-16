//ex2//
type User ={
   id:number,
   name:string,
   phone:string,
   email:string,
   website:string
   //ex6 - Optei por colocar dentro do usuários pois atribui cada postagem a um usuário difererente  //
   post:Post[]
}

type Post ={
   id:number,
   title:string,
   body:string,
}

//ex3//
export const users:User[] = [
   {  
      id: 1,
      name:'Leanne Graham',
      phone:'1-770-736-8031 x56442',
      email:'Sincere@april.biz',
      website:'hildegard.org',
      post:[{
         id:1,
         title:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
         body:'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }]
   },
   {
      id: 2,
      name:'Ervin Howell',
      phone:'90566-7771',
      email:'Shanna@melissa.tv',
      website:'anastasia.net',
      post:[{
         id:2,
         title:'qui est esse',
         body:'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }]

   }
]
