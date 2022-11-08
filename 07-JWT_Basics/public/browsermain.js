const userName = document.querySelector("#userName")
const password = document.querySelector("#password")
const loginBtn = document.querySelector("#loginBtn")
const dashboardBtn = document.querySelector("#dashboardBtn")
const loginSection = document.querySelector("#loginSection")
const dashboardSection = document.querySelector("#dashboardSection")

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
    } catch (error) {
        loginSection.innerHTML = "Login Failed."
    }

    setTimeout(() => {
        loginSection.innerHTML = ""
    }, 2000)
})

dashboardBtn.addEventListener("click", async (e) => {
    e.preventDefault()

    try {
        const { data } = await axios.get("http:localhost:5000/api/v1/dashboard")
        if (data) {
            dashboardSection.innerHTML = data
        }
    } catch (error) {
        dashboardSection.innerHTML = "Cant fetch data."
    }

    setTimeout(() => {
        dashboardSection.innerHTML = ""
    }, 2000)
})
