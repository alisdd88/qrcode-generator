import { writeFile, createWriteStream } from 'node:fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            'type': 'input',
            'name': 'url',
            'message': 'Enter a URL: '
        }
    ])
    .then((answers) => {
        let url_to = answers.url;
        let qr_url = qr.image(url_to);
        qr_url.pipe(createWriteStream('url_qr.png'));
        writeFile('url.txt', url_to, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });



