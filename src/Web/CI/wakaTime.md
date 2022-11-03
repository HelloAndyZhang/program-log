---
title: wakatime 配置
---
# wakatime 配置

```

name: WakaTime

on:
  workflow_dispatch:
  push:
    branches:
      - main
  schedule:
    - cron: '0 0 * * *'

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: athul/waka-readme@master
        with:
          WAKATIME_API_KEY: ${{ secrets.WAKATIME_API_KEY }}
          SHOW_TITLE: true
          SHOW_TOTAL: true
          # BLOCKS: ⣀⣄⣤⣦⣶⣷⣿
          # BLOCKS: ○◔◑◕● □
          BLOCKS: ▢⚀⚁⚂⚃⚄⚅
          # TIME_RANGE: last_30_days
          TIME_RANGE: last_7_days
          COMMIT_MESSAGE: Updated the README
```


