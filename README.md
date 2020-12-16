# Building a very basic App with Node, Bootstrap & MongoDB

The code for the following [SitePoint article](https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/).

## Requirements

* [Node.js](http://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [MongoDB Compass](https://www.mongodb.com/products/compass) (optional)

## Installation Steps

1. Clone repo
2. Run `npm install`
3. Create a `.env` file in the project root with database connection details, e.g. DATABASE=mongodb+srv://xxx:yyy@cluster0.y5r7h.mongodb.net/zzz?retryWrites=true&w=majority     Check MongoDB documentation for syntax.
4. Start MongoDB (using `mongod`) if running locally (you could alternatively run it on MongoDB Atlas online on a free account)
5. Run `npm run watch`
6. Visit http://localhost:3000 to create a new order
7. Visit http://localhost:3000/orders to view entered orders (you'll need to configure username:password in the file users.htpasswd)

## License

Licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
