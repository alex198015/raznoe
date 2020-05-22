const fs = require('fs');
const path = require('path');
const example = require('./one1.json');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const results = [];
const http = require('http');
const url = require('url');
const {parse} = require('querystring');



//
// fs.writeFile('files/New3.txt' , 'qwe\nrty',(err) => console.log(err));
// fs.writeFile('New2.txt' , '66666',(err) => console.log(err));


// fs.readFile('New.txt', 'utf-8', (err, data) => {
//     console.log(data)
// });
//
// let text = fs.readFileSync('New2.txt', 'utf-8');
// console.log(text);
// console.log('===================');

// fs.readdir('files', (err, data) => {
//     console.log(data);
//     data.forEach(file => {
//         // console.log(file);
//         // console.log(`extention: ${path.extname(file)}`);
//         // console.log('\t' + fs.statSync('files/' + file).size);
//         fs.readFile('files/' + file, 'utf-8',(err, data) => {
//             console.log(data);
//
//         });
//     })
// });


// const person = {
//     age: 25,
//     height: 1999,
//     name: 'Alex',
//     profession: 'it blogger'
// };
//
// fs.writeFile('one1.json', JSON.stringify(person), (err) => {
//     if(err) console.log(err)
// });
//
//
// console.log(example);


// fs.createReadStream('csvfile.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//     });
// const person = [
//     {
//     age: 25,
//     height: 1999,
//     name: 'Alex',
//     profession: 'it blogger'
// },
//     {
//         age: 42,
//         height: 555,
//         name: 'bnbn',
//         profession: 'it blo444gger'
//     },
//     {
//         age: 99,
//         height: 8777,
//         name: 'Alebnx',
//         profession: 'it blog77ger'
//     },
// ];
//
// const csvWriter = createCsvWriter({
//     path: 'test.csv',
//     header: [
//         {id: 'age', title: 'qwerty'},
//         {id: 'height', title: 'ggggg'},
//         {id: 'name', title: '444'},
//         {id: 'profession', title: 'jm44'},
//
//     ]
// });
// csvWriter.writeRecords(person)       // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });
// http.createServer((request, response) => {
//     console.log('server work');
//     if (request.method === 'GET') {
//         console.log(request.method);
//         let urlRequest = url.parse(request.url, true)
//         // console.log(urlRequest);
//
//         console.log(urlRequest.query.test);
//         if (urlRequest.query.test % 2 === 0) {
//             response.end('even');
//         }
//         response.end('odd');
//     } else {
//         // POST
//         let body = '';
//         request.on('data', chunk => {
//             body += chunk.toString();
//         });
//         request.on('end', () => {
//             console.log(body);
//             let params = parse(body);
//             console.log(params);
//             console.log(params.hi);
//             response.end('ok');
//         });
//     }
//
//
// }).listen(3000);


const httpServer = http.createServer((req, res) => {
    const urlRequest = url.parse(req.url)
    console.log(urlRequest)
    if(req.method === 'GET'){
        switch (urlRequest.pathname) {
            case '/':
                homepage(req, res)
                break
            case '/about':
                about(req, res)
                break
            case '/test':
                test(req, res)
                break
            default:
                page404(req, res)
                break

        }

    }
    else if (req.method === 'POST'){
        switch (urlRequest.pathname) {
            case '/about2':
                about2(req, res)
                break
            default:
                page404(req, res)
                break

        }
    }
    else{
        page404(req, res)
    }

});


const PORT = process.env.PORT || 3000
httpServer.listen(3000, () => {

    console.log(`Server has been started on ${PORT}...`)
})

function homepage(req, res) {
    res.end('homepage')
}

function about(req, res) {
    res.end('about')
}

function about2(req, res) {
    res.end('about2')
}


function page404(req, res) {
    res.end('404')
}