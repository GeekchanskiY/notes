export async function register_request(username, email, password){
    const url = "https://localhost:44366/api/register"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: username,
            email: email,
            password: password
        })
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    return data;
    // id, name, email, roleid, userrole (id, rolename), notes, password, token?
}

export async function login_request(email, password){
    const url = "https://localhost:44366/api/login"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    if (response.status == 200){
        return data
    } else {
        return {"error": "Invalid credentials"}
    }

    // id, name, email, roleid, userrole (id, rolename), notes, password, token?
}

export async function logout_request(token){
    const url = "https://localhost:44366/api/logout" 
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authentification': 'Token ' + token
     },
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    if (response.status == 200){
        return data
    } else {
        return {"error": "Invalid request"}
    }

    // id, name, email, roleid, userrole (id, rolename), notes, password, token?
}

export async function GetUserByID_request(token, id){
    const url = "https://localhost:44366/api/GetUserById/" + id 
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authentification': 'Token ' + token
     },
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    if (response.status == 200){
        return data
    } else {
        return {"error": "Invalid request"}
    }

    // id, name, email, roleid, userrole (id, rolename), notes, password, token?
}

export async function GetUserByEmail_request(token, email){
    const url = "https://localhost:44366/api/GetUserByEmail/" + email
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authentification': 'Token ' + token
     },
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    if (response.status == 200){
        return data
    } else {
        return {"error": "Invalid request"}
    }

    // id, name, email, roleid, userrole (id, rolename), notes, password, token?
}

export async function DelUser_request(token, id){
    const url = "https://localhost:44366/api/DeleteUser/" + id
    const requestOptions = {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authentification': 'Token ' + token
     },
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    if (response.status == 200){
        return data
    } else {
        return {"error": "Invalid request"}
    }

    // -
}

export async function GetRoles_request(token, id){
    const url = "https://localhost:44366/api/GetRoles" + id
    const requestOptions = {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authentification': 'Token ' + token
     },
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    if (response.status == 200){
        return data
    } else {
        return {"error": "Invalid request"}
    }

    // id, RoleName
}