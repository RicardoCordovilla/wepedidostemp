const getConfig = (email) => ({
    headers: {
        Authorization: `jwt ${localStorage.getItem(`${email}`)}`
    }
})

export default getConfig