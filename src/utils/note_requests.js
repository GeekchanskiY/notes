export async function GetUserNotes_request(token, id){
    const url = "https://localhost:44366/api/GetNotes/" + id
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

    // id, user, creator, name, body, creationDate, editDate
}

export async function GetAllNotes_request(token){
    const url = "https://localhost:44366/api/GetNotes/"
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

    // id, user, creator, name, body, creationDate, editDate
}

export async function AddNote_request(token, name, body){
    const url = "https://localhost:44366/api/AddNote"
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authentification': 'Token ' + token
     },
     body: JSON.stringify({
        name: name,
        body: body
    })
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    if (response.status == 201){
        return data
    } else {
        return {"error": "Invalid request"}
    }

    // noteparams
}

export async function UpdateNote_request(token, noteid, name, body){
    const url = "https://localhost:44366/api/AddNote"
    const requestOptions = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authentification': 'Token ' + token
     },
     body: JSON.stringify({
        id: noteid,
        name: name,
        body: body
    })
    };
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    if (response.status == 200){
        return data
    } else {
        return {"error": "Invalid request"}
    }

    // noteparams
}
export async function DeleteNote_request(token, noteid){
    const url = "https://localhost:44366/api/Delete/"+noteid
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

    // noteparams
}