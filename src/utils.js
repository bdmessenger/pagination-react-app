const paginate = (followers) => {
    const itemsPerPage = 12;
    const numOfPages = Math.floor(followers.length / itemsPerPage)

    const newFollowers = Array.from({ length: numOfPages}, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage);
    })

    return newFollowers;
}

export default paginate