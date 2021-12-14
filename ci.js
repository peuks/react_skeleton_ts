name: CI

on: [push]

jobs:
  build:
    name: Build
    runs-on: ubuntu-18.04
    strategy:
      matrix:
        node_version: [14]

    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v1
        with:
          node_version: ${{ matrix.node_version }}

      - name: run CI
        run: |
           yarn install
           yarn lint
           yarn test
           yarn build