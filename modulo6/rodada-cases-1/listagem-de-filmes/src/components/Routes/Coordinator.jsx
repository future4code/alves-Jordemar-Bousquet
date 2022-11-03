export const goToDetailpage = (navigate,id) =>{
    navigate(`/detail/${id}`)
    window.scrollTo(0, 0)
  
}

export const goToHomePage = (navigate) =>{
    navigate("/")
}

export const refreshDetailpage = (navigate,id) =>{
    navigate(`/detail/${id}`)
    window.scrollTo(0, 0)
}