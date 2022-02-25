function fillPath(path, params) {
    if (typeof path !== 'string' || typeof params !== 'object' || path.length === 0) return '';

    if (Object.keys(params).length === 0) return path;

    let pathNotcolon = path.split(':').join('');
    const objectInArray = Object.entries(params);
    let compareCorressponding;
    let strokeIdx;

    objectInArray.forEach(([key, value]) => {
        pathNotcolon.indexOf('/', pathNotcolon.indexOf(key)) > 0 ?
            (strokeIdx = pathNotcolon.indexOf('/', pathNotcolon.indexOf(key))) :
            (strokeIdx = pathNotcolon.length);
        compareCorressponding = pathNotcolon.slice(pathNotcolon.indexOf(key), strokeIdx);
        if (compareCorressponding === key) pathNotcolon = pathNotcolon.replace(key, value);
    });
    return pathNotcolon;
}