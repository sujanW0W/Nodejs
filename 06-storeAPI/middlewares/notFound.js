const notFound = (req, res) => {
    res.status(404).json({ msg: "Not Found." })
}

module.exports = notFound
