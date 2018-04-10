# Rss Reader

## Installation

```
rake db:drop db:create db:schema:load db:seed
rake sync:feeds
```

## Running
```
rails server
```
Open reader at `http://localhost:3000` or other url you have configured for local servers.

The UI contains a button to sync rss feeds, but you can also run `rake sync:feeds` at any time. After a server-side sync you may need to refresh the browser as there is no polling implemented.

## Testing

Server code uses rspec for testing. UI tested with cucumber.
```
rspec
cucumber
```

After running tests code coverage is available via
```
open coverage\index.html
```
