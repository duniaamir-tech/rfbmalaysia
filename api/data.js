// Serverless API endpoint for Vercel / Netlify
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'database.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      data: jsonData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
