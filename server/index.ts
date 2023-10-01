import {Nitro} from "nitropack"
import mongoose from "mongoose"

export default async (_nitroApp:Nitro)=>{
    const config = useRuntimeConfig();
    try{
        await mongoose.connect(config.mongoUrl)
        console.log('connect')
    }catch(e){
        console.log(e)
    }
}
