
import { Deserializable } from "./deserializable.model";




export class InvestmentTypeModel implements Deserializable{
    
    public id:number = 0
    public name:string = ""

    deserialize(input: any): this {
        return Object.assign(this,input)
    }
    getName():string{
        return this.name
    }
}


