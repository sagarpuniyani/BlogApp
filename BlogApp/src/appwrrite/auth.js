import config from "../config/config";
import { Client, Account } from "appwrite";

class  AuthServices {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwrite)
            .setProject(config.projectID)
        this.account = new Account(this.client);
    }
} 

const authServices = new AuthServices();
export default authServices;
