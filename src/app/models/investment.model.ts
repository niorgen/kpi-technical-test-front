
import { Deserializable } from "./deserializable.model";




export class InvestmentModel implements Deserializable{
    public id:number = 0
    public titreoperation:string = ""
    public entreprise:string = ""
    public annee_de_livraison:string = ""
    public ville:string = ""
    public mandataire:string = ""
    public ppi:string = ""
    public lycee:string = ""
    public notification_du_marche:string = ""
    public codeuai:string = ""
    public longitude:number = 0
    public etat_d_avancement: number= 0;
    public montant_des_ap_votes_en_meu:number = 0
    public cao_attribution:string = ""
    public latitude:number = 0
    public maitrise_d_oeuvre:string = ""
    public mode_de_devolution:string = ""
    public annee_d_individualisation:string = ""
    public enveloppe_prev_en_meu:number = 0
    

    deserialize(input: any): this {
        return Object.assign(this,input)
    }

    setStatus(id:number){
        this.etat_d_avancement = id;
    }

    getStatus(){
        return this.etat_d_avancement
    }

    getOperationTitle(){
        return this.titreoperation
    }
    getVille(){
        return this.ville
    }

}


