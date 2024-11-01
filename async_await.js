const getUserData= async function(userId){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("fetching userdata");
               resolve({
                    userId:userId,
                    userName:"Admin"
                })
        },1000)
    }) 
}

const getServices = async function({userId,userName}){
    console.log("userId:",userId)
    console.log("userName:",userName)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userName !=="Admin"|| userName===undefined){
               reject("Access Denied");
            }else{
                console.log(`Getting Services for the ${userName} from the Api... `)
               resolve(["VPN","WiFi","DataBase"]);
            }
        },2000);
    })
    
}

const getServicesCost=async function(services){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(services.length*100);
         },3000)
    })
}

const showServicesCost= async function(){
    try{
        const userData=await getUserData(100);
        const userServices= await getServices(userData);
        const serviceCost= await getServicesCost(userServices);
    
        return Promise.resolve(serviceCost);
    }catch(err){
        console.log(err);
    }
}
showServicesCost().then((result)=>{
    console.log("Your service cost is :",result);
}).catch((err)=>console.log(err));