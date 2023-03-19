const statusEl = document.getElementById('status');
const dataEl = document.getElementById('data');
const headersEl = document.getElementById('headers');
const configEl = document.getElementById('config');

const url = 'https://jsonplaceholder.typicode.com/posts';
const url_users = 'https://jsonplaceholder.typicode.com/users';

const get = () => {

    const config = {
        params: {
            _limit: 5
        }
    };

    axios.get(url, config)
        .then(( response ) => renderOutput(response));

    console.log('get');
}

const post = () => {
    const data = {
        title: 'foo',
        body: 'bar',
        userID: 1,
    };

    axios.post(url, data)
        .then(( response ) => renderOutput(response));

    console.log('post');
}

const put = () => {
    const data = {
        id: 1,
        title: 'Dev Punk',
        body: 'Dev Full Punkoso Mobile',
        userID: 1,
    };

    axios.put(`${url}/1`, data)
        .then(( response ) => renderOutput(response));

    console.log('put');
}

const patch = () => {
    const data = {
        title: 'Dev Punk da Silva',
    };

    axios.patch(`${url}/1`)
        .then(( response ) => renderOutput(response));

    console.log('patch');
}

const del = () => {
    axios.delete(url)
        .then(( response ) => renderOutput(response));

    console.log('delete');
}

const multiple = () => {
    Promisse.all([
        axios.get(`${url}?_limit=5`),
        axios.get(`${url_users}?_limit=5`),
    ]).then(( response ) =>  {
        console.table(response[0].data);
        console.table(response[1].data);
    });

    console.log('multiple');
}

const transform = () => {
    const config = {
        params: {
            _limit: 5
        },
        transformResponse: [( data ) => {
            const payload = JSON.parse(data).map(( item ) => {
                return {
                    title: item.title
                }
            });

            return payload;
        }],
    };

    axios.get(url, config)
        .then(( response ) => renderOutput(response));

    console.log('transform');
}

const errorHandling = () => {
    console.log('errorHandling');
}

const cancel = () => {
    console.log('cancel');
}

const clear = () => {
    statusEl.innerHTML = '';
    statusEl.className = '';
    dataEl.innerHTML = '';
    headersEl.innerHTML = '';
    configEl.innerHTML = '';
}

const renderOutput = (response) => {
    // Status
    const status = response.status;
    statusEl.removeAttribute('class');
    let statusElClass = 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium';
    if (status >= 500) {
        statusElClass += ' bg-red-100 text-red-800';
    } else if (status >= 400) {
        statusElClass += ' bg-yellow-100 text-yellow-800';
    } else if (status >= 200) {
        statusElClass += ' bg-green-100 text-green-800';
    }

    statusEl.innerHTML = status;
    statusEl.className = statusElClass;

    // Data
    dataEl.innerHTML = JSON.stringify(response.data, null, 2);
    Prism.highlightElement(dataEl);

    // Headers
    headersEl.innerHTML = JSON.stringify(response.headers, null, 2);
    Prism.highlightElement(headersEl);

    // Config
    configEl.innerHTML = JSON.stringify(response.config, null, 2);
    Prism.highlightElement(configEl);
}

document.getElementById('get').addEventListener('click', get);
document.getElementById('post').addEventListener('click', post);
document.getElementById('put').addEventListener('click', put);
document.getElementById('patch').addEventListener('click', patch);
document.getElementById('delete').addEventListener('click', del);
document.getElementById('multiple').addEventListener('click', multiple);
document.getElementById('transform').addEventListener('click', transform);
document.getElementById('cancel').addEventListener('click', cancel);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('clear').addEventListener('click', clear);
