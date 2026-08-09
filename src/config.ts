export const CONFIG = {
  http: {
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    timeout: 60000,
    retries: 3,
    retryDelay: 800,
    retryStatusCodes: [429, 500, 502, 503, 504],
  },

  rss: {
    defaultOpmlPath: './feeds/follow.opml',
    maxConcurrency: 20,
    feedTimeout: 60000,
    replacements: {
      'https://rsshub.app/infoq/recommend': 'https://www.infoq.cn/feed',
      'https://rsshub.app/huggingface/blog-zh': 'https://huggingface.co/blog/feed.xml',
      'https://rsshub.app/readhub/daily': 'https://readhub.cn/rss',
      'https://rsshub.app/36kr/hot-list': 'https://36kr.com/feed',
      'https://rsshub.app/sspai/index': 'https://sspai.com/feed',
      'https://rsshub.app/sspai/matrix': 'https://sspai.com/feed',
      'https://rsshub.app/meituan/tech': 'https://tech.meituan.com/feed',
      'https://mjg59.dreamwidth.org/data/rss': 'http://mjg59.dreamwidth.org/data/rss',
    } as Record<string, string>,
    skipPrefixes: [
      'https://rsshub.app/telegram/channel/',
      'https://rsshub.app/jike/',
      'https://rsshub.app/bilibili/',
      'https://rsshub.app/zhihu/',
      'https://rsshub.app/xiaoyuzhou/podcast/',
      'https://rsshub.app/xyzrank',
      'https://rsshub.app/mittrchina/hot',
      'https://wechat2rss.bestblogs.dev/',
      'https://werss.bestblogs.dev/',
      'http://47.122.94.119:18080/',
    ],
    skipExact: new Set([
      'https://rachelbythebay.com/w/atom.xml',
      'https://flak.tedunangst.com/rss',
    ]),
  },

  waytoagi: {
    defaultUrl:
      'https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e?fromScene=spaceOverview',
    historyFallback: 'https://waytoagi.feishu.cn/wiki/FjiOwWp2giA7hRk6jjfcPioCnAc',
  },

  timezone: 'Asia/Shanghai',

  filter: {
    aiKeywords: [
    "长川科技",
    "澜起科技",
    "佰维存储",
    "江波龙",
    "SK海力士",
    "半导体",
    "存储芯片",
    "DRAM",
    "NAND"
    ],
   
    enSignalPattern:
      /(?<![a-z0-9])(ai|aigc|llm|gpt|openai|anthropic|deepseek|gemini|claude|robot|robotics|embodied|autonomous|machine learning|artificial intelligence|transformer|diffusion|agent)(?![a-z0-9])/i,
  },
};
