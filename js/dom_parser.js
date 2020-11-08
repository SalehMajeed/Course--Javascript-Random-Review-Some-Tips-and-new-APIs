const parser = new DOMParser();
const parser_document = parser.parseFromString(
    `
    <html>
        <head>
            <title>New Document</title>
        </head>
        <body>
            <h1 id="page-title">dcode</h1>
            <p>
                How's it going?
            </p>
        </body>
    </html>
`,
    'text/html'
);

const page_title = parser_document.getElementById('page-title');

document.body = parser_document.body;
