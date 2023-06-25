# AWS Translate API

This repository contains code for a simple API built with Node.js and Express.js that uses AWS Translate to translate text.

## Prerequisites

- Node.js and npm
- An AWS account with access to AWS Translate

## Setup

1. Clone the repository:

```bash
git clone https://github.com/varunsudrik/aws-translate-api.git
cd aws-translate-api

## Installation

  npm install 
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`AWS_ACCESS_KEY_ID=your-access-key`
  
`AWS_SECRET_ACCESS_KEY=your-secret-access-key`

`AWS_REGION=your-region`

## Demo

To translate text, make a POST request to http://localhost:3000/translate with a JSON body containing sourceLanguage, targetLanguage, and text:


`{
    "sourceLanguage": "en",
    "targetLanguage": "es",
    "text": "Hello, world!"
}`


## Contributing

Contributions are always welcome!

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


