const userName = document.querySelector("#userName")
const password = document.querySelector("#password")
const loginBtn = document.querySelector("#loginBtn")
const dashboardBtn = document.querySelector("#dashboardBtn")
const loginSection = document.querySelector("#loginSection")
const dashboardSection = document.querySelector("#dashboardSection")

const tokenChecker = document.querySelector(".tokenChecker")
const checkToken = () => {
    if (localStorage.getItem("token")) {
        tokenChecker.innerHTML = "Token Present."
        tokenChecker.classList.add("tokenPresent")
    } else {
        tokenChecker.innerHTML = "Token Absent."
        tokenChecker.classList.remove("tokenPresent")
    }
}

checkToken()

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault()

    let name = userName.value
    let word = password.value

    try {
        const { data } = await axios.post(
            "http://localhost:5000/api/v1/login",
            {
                userName: name,
                password: word,
            }
        )

        loginSection.innerHTML = data.msg
        localStorage.setItem("token", data.token)
        checkToken()
    } catch (error) {
        loginSection.innerHTML = error.response.data.msg
        localStorage.removeItem("token")
        checkToken()
    }

    setTimeout(() => {
        loginSection.innerHTML = ""
    }, 2000)
})

dashboardBtn.addEventListener("click", async (e) => {
    e.preventDefault()

    try {
        const { data } = await axios.get(
            "http://localhost:5000/api/v1/dashboard",
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )
        if (data) {
            dashboardSection.innerHTML = data.msg
        }
    } catch (error) {
        dashboardSection.innerHTML = error.response.data.msg
    }

    setTimeout(() => {
        dashboardSection.innerHTML = ""
    }, 2000)
})
