import express from 'express';
import { createServer } from 'http';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../src/client/AppContent.jsx';

const app = express();

// app.use(express.static('public'));
app.use((req, res) => {
  const context = {};
  const html = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Some app</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `)
});

app.get('/testing', (req, res) => {
  res.status(200).send({msg: 'hello'});
});

app.listen(8080, () => {
  console.log('Server listening on 8080');
});
