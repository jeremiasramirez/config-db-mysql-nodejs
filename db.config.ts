import mysql from "mysql";


class ConfigDB{

    private host:string;
    private userDB:string;
    private passwordDB:string;
    private databaseDB: string;

    constructor(){
        this.host = "localhost";
        this.userDB = "jeremias";
        this.passwordDB = "0847";
        this.databaseDB = "public";
    }

    /*
    *  getter configs
    */
    protected getHost(): string{
        return this.host;
    }
    protected getUserDB(): string{
        return this.userDB;
    }
    protected getPasswordDB(): string{
        return this.passwordDB;
    }
    protected getDatabaseDB(): string{
        return this.databaseDB;
    }
 
}


export default class ConnectionDB extends ConfigDB{
    


    constructor(){
        // inheritance from configDB
        super()
    }


    public connected(): mysql.Connection {
     
       const queryConnect:mysql.Connection=mysql.createConnection({
            host: this.getHost(),
            user: this.getUserDB(),
            password: this.getPasswordDB(),
            database: this.getDatabaseDB()
        })

        queryConnect.connect((err,res)=>{
            if(res) console.log("connected to db");
              
            else console.log({err: true, name: err.message}); 

        })
         
        return queryConnect


    }




}
