const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ status: 'alive', server: 'mcp-server' });
});

app.get('/tools', (req, res) => {
  res.json({ tools: ['ping', 'echo'] });
});

app.post('/echo', (req, res) => {
  res.json({ echo: req.body });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`MCP server running on port ${PORT}`);
});
