[![Code Climate](https://codeclimate.com/github/GordonDiggs/digger.png)](https://codeclimate.com/github/GordonDiggs/digger)

# Digger

## Find out which record stores to go to

Digger takes an address, and tells you nearby record stores. You can pick a group of them and it will plan a walking tour.

Record store listings are from [recordshops.org](http://www.recordshops.org/) and are updated occasionally. Geocoding and itineries use various Google APIs.

### Installation

Digger uses mongodb; install that in whatever way is appropriate for your system and start the server.

```bash
$ bundle install
$ ruby ./digger.rb
```

### License

The MIT License (MIT)

Copyright (c) 2013 Gordon Diggs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
