gittwits.com
---------------

# Install

You will need gulp to run dev tasks. If you don't have gulp installed already, install it first.

```
npm install gulp -g
```

```
git clone https://github.com/iamchairs/gittwits.com.git
cd gittwits.com
```

# Develop

This will run watchers and compile `app` to `public` at runtime. It does not do live-reload. You will still need to run the node server to see it work.

```
gulp develop
```

# Run

If you are running `gulp develop` you don't need to inject first. Otherwise you need to build the `public` directory.

```
gulp inject
```

Then start the node server.

```
chmod 700 run.sh
./run.sh
```