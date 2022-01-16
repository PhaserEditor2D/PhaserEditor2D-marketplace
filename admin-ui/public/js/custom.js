function requestOpenFolder(path) {

    fetch("/open/file", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            filePath: path
        })
    });
}