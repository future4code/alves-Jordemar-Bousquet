
export const goToSignUp = (navigate) =>{
    navigate("/signup")

}

export const goToPost = (navigate,id,title,body,username) =>{
    navigate(`/post/${id}/${title}/${body}/${username}`)

}


export const goToFeed = (navigate) =>{
    navigate("/feed")

}

export const goToLogin = (navigate) =>{
    navigate("/")

}