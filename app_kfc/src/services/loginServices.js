const api = 'http://localhost:8081/login';

export default async function login(user) {
    fetch(api, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(
    response =>{
        console.log(response); 
        return response;
        }
    );
}
