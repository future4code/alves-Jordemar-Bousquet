type usuário = {
    name:string,
    email:string,
    role:string
}


const DadosUsuário = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function RetornaAdmin(value:any) {
    if(value.role === "admin")
    return value
}

const AdmEmail = DadosUsuário.filter(RetornaAdmin)
 AdmEmail.forEach(user =>{
	console.log(user.email)
 })