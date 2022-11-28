export const isLoggedIn=()=>{

    let token=localStorage.getItem("token");
    if (token != null) return true;
    else return false;
}

export const doLogin=(token,next)=>{

localStorage.setItem("token",token);
next()

}

export const doLogout =(next)=>{

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("loanInfo");
    next()
}

export const getCurrentUserDetail=()=>{

    if(isLoggedIn){
     return JSON.parse(localStorage.getItem("user"));

    }else{

        return false;
    }

}

export const getToken=()=>{

    if(isLoggedIn){
     return JSON.parse(localStorage.getItem("token"));

    }else{

        return false;
    }

}
