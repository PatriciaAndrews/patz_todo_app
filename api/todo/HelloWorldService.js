import axios from 'axios'
class HelloWorldService{
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
        //console.log("executeHelloWorldService");
    }
    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
        //console.log("executeHelloWorldService");
    }
    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
        //console.log("executeHelloWorldService");
    }
}
export default new HelloWorldService()