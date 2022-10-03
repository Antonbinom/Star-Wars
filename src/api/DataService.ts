import { URL_API } from "./const";
import axios from "axios";

class DataService {
	getAll(): Promise<any> {
		return axios.get(`${URL_API}/people`)
	}
}

export default new DataService()