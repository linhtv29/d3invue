export const salaryData = {
  graphId: "46",
  isBookmark: false,
  title: "部門別年収箱髭図",
  verticalAxisLabel: "年収（万円）",
  horizontalAxisLabel: "部署",
  conditions: "全ての在籍区分",
  categories: {
    1: "test1",
    2: "営業本部20230101",
    3: "技術本部(2017/03/01)",
    4: "署英字名",
    5: "人事総務部（略）",
    6: "総務課（略）",
    7: "人事課",
    8: "経理部(略)",
    9: "経理課(略)",
    10: "東日本営業部★略称",
    11: "西日本営業部",
    12: "東京開発事業部",
    13: "沖縄開発事業部",
    14: "東日本営業１課",
    15: "東日本営業２課",
    16: "東日本営業３課",
    17: "西日本営業１課",
    18: "西日本営業２課",
    19: "東京アプリケーション開発センター",
    20: "Security center",
    // 21: "沖縄アプリケーション開発センター",
    // 22: "カスタマーサポート事業部",
    // 23: "社長室",
    // 24: "経営企画課",
    // 25: "札幌営業所",
    // 26: "東北営業所",
    // 27: "大阪営業所",
    // 28: "福岡営業所",
    // 29: "BP事業部（略称）20230101",
    // 30: "BP営業1課",
    // 31: "BP営業2課",
    // 32: "テクニカルサポートセンター",
    // 33: "アプリケーションサポートセンター",
    // 34: "お客様相談室",
    // 35: "情報システム室",
    // 36: "商品部",
    // 37: "商品開発課",
    // 38: "業務課",
    // 39: "マーケティング本部",
    // 40: "ＰＲ促進部（略）",
    // 41: "ＷＥＢマーケティング課",
    // 42: "販売企画課",
    // 43: "ブランド戦略室",
    // 44: "国内プロモーション課",
    // 45: "アジアプロモーション課",
    // 46: "採用予定者20220505",
    // 47: "株式会社大松（略称）",
    // 48: "HR事業本部",
    // 49: "株式会社サイダスネットワークス",
    // 50: "株式会社サイダスセキュリティー",
    // 51: "★CYDAS Inc.★",
    // 52: "QAU（略）（履歴22'1/8〜）",
    // 53: "ビジネスソリューション部　ビジネスソリューション室　ソリューション支援グループ",
    // 54: "100文字100文字100文字100文字100文字100文字100文字100文字100文字100文字",
    // 76: "テストユニット＃1",
    // 77: "テストユニット＃2",
    // 78: "テストユニット＃３",
    // 230: "19100101略称",
    // 231: "19100101設立2",
    // 240: "配下QA2",
    // 246: "QAチーム#10",
    // 286: "QAチーム#2 tên viết tắt",
    // 289: "更新_QAチーム#5",
    // 292: "QAチーム#8",
    // 294: "更新_QAチーム#10",
    // 295: "更新_QAチーム#11",
    // 307: "更新_QAチーム#23",
    // 324: "更新_QAチーム#40",
    // 368: "更新_QAチーム#84",
    // 378: "人事処理で使う",
    // 379: "最新の組織図に入れる",
    // 380: "組織図に入れる",
    // 381: "テンプレート設定（標準）に使う",
    // 386: "tên viết tắt",
    // 389: "QA007",
    // 391: "廃部予定",
    // 392: "組織図から外す予定",
    // 394: "エッジ",
    // 395: "QAチーム#8",
    // 396: "QAチーム#5",
    // 397: "QAチーム#1",
    // 398: "QAチーム#2",
    // 399: "QAチーム#4",
    // 400: "QAチーム#20",
    // 402: "QAチーム#22",
    // 403: "QAチーム#23",
    // 404: "QAチーム#33",
    // 405: "QAチーム#35",
    // 406: "QAチーム#37",
    // 407: "QAチーム#39",
    // 408: "QAチーム#41",
    // 409: "QAチーム#43",
    // 410: "五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ",
    // 411: "QAチーム#47",
    // 412: "QAチーム#49",
    // 413: "QAチーム#50",
    // 414: "QAチーム#52",
    // 415: "QAチーム#53",
    // 416: "QAチーム#55",
    // 417: "QAチーム#56",
    // 418: "QAチーム#58",
    // 419: "QAチーム#59",
    // 420: "QAチーム#61",
    // 421: "QAチーム#62",
    // 422: "QAチーム#64",
    // 423: "QAチーム#65",
    // 424: "QAチーム#67",
    // 425: "QAチーム#69",
    // 426: "QAチーム#70",
    // 427: "QAチーム#71",
    // 428: "QAチーム#72",
    // 429: "QAチーム#74",
    // 430: "QAチーム#75",
    // 431: "QAチーム#76",
    // 432: "QAチーム#78",
    // 433: "QAチーム#79",
    // 434: "QAチーム#81",
    // 435: "QAチーム#82",
    // 436: "QAチーム#84",
    // 437: "QAチーム#85",
    // 438: "QAチーム#87",
    // 439: "QAチーム#88",
    // 440: "QAチーム#90",
    // 441: "QAチーム#9",
    // 442: "QAチーム#10",
    // 443: "更新_QAチーム#95",
    // 444: "QAチーム#96",
    // 445: "QAチーム#97",
    // 446: "更新_QAチーム#98",
    // 447: "QAチーム#99",
    // 448: "QAチーム#100",
    // 449: "QAチーム#101",
    // 450: "更新_QAチーム#102",
    // 451: "更新_QAチーム#103",
    // 452: "QAチーム#104",
    // 453: "QAチーム#105",
    // 454: "B-2-8",
    // 455: "B-2-9",
    // 456: "B-2-10",
    // 457: "QAチーム#109",
    // 458: "QAチーム#110",
    // 459: "B-2-13",
    // 460: "B-2-14",
    // 461: "QAチーム#113",
    // 462: "QAチーム#114",
    // 463: "QAチーム#115",
    // 464: "QAチーム#116",
    // 465: "QAチーム#117",
    // 466: "更新_QAチーム#118",
    // 467: "QAチーム#119",
    // 468: "QAチーム#120",
    // 469: "QAチーム#121",
    // 470: "QAチーム#122",
    // 471: "QAチーム#123",
    // 472: "QAチーム#124",
    // 473: "QAチーム#125",
    // 474: "QAチーム#126",
    // 475: "QAチーム#127",
    // 476: "QAチーム#128",
    // 477: "QAチーム#129",
    // 478: "QAチーム#130",
    // 479: "QAチーム#131",
    // 480: "QAチーム#132",
    // 481: "更新_QAチーム#133",
    // 482: "QAチーム#134",
    // 483: "更新_QAチーム#135",
    // 484: "QAチーム#136",
    // 485: "更新_QAチーム#137",
    // 486: "QAチーム#138",
    // 487: "更新_QAチーム#139",
    // 488: "QAチーム#140",
    // 489: "更新_QAチーム#141",
    // 490: "五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ五十文字だ",
    // 491: "QAチーム#143",
    // 492: "QAチーム#144",
    // 493: "更新_QAチーム#145",
    // 494: "QAチーム#146",
    // 495: "更新_QAチーム#147",
    // 496: "更新_QAチーム#148",
    // 497: "QAチーム#149",
    // 498: "更新_QAチーム#150",
    // 499: "更新_QAチーム#151",
    // 500: "QAチーム#152",
    // 501: "更新_QAチーム#153",
    // 502: "更新_QAチーム#154",
    // 503: "QAチーム#155",
    // 504: "更新_QAチーム#156",
    // 505: "更新_QAチーム#157",
    // 506: "QAチーム#158",
    // 507: "更新_QAチーム#159",
    // 508: "更新_QAチーム#160",
    // 509: "QAチーム#161",
    // 510: "更新_QAチーム#162",
    // 511: "更新_QAチーム#163",
    // 512: "QAチーム#164",
    // 513: "更新_QAチーム#165",
    // 514: "QAチーム#166",
    // 515: "更新_QAチーム#167",
    // 516: "更新_QAチーム#168",
    // 517: "更新_QAチーム#169",
    // 518: "更新_QAチーム#170",
    // 519: "QAチーム#171",
    // 520: "QAチーム#172",
    // 521: "更新_QAチーム#173",
    // 522: "更新_QAチーム#174",
    // 523: "QAチーム#175",
    // 524: "更新_QAチーム#176",
    // 525: "更新_QAチーム#177",
    // 526: "QAチーム#178",
    // 527: "更新_QAチーム#179",
    // 528: "更新_QAチーム#180",
    // 529: "QAチーム#181",
    // 530: "更新_QAチーム#182",
    // 531: "更新_QAチーム#183",
    // 532: "QAチーム#184",
    // 533: "更新_QAチーム#185",
    // 534: "更新_QAチーム#186",
    // 535: "QAチーム#187",
    // 536: "更新_QAチーム#188",
    // 538: "QAチーム#190",
    // 539: "QAチーム#191",
    // 540: "QAチーム#192",
    // 541: "QAチーム#193",
    // 542: "QAチーム#194",
    // 543: "QAチーム#195",
    // 546: "QAチーム#198",
    // 547: "QAチーム#199",
    // 550: "QAチーム#202",
    // 552: "QAチーム#204",
    // 553: "QAチーム#205",
    // 556: "QAチーム#208",
    // 557: "QAチーム#209",
    // 558: "QAチーム#210",
    // 564: "すず1",
    // 567: "hatsurei002（設立前）",
    // 570: "hatsurei003（廃止後）",
    // 572: "管理本部（略称）",
    // 573: "営業本部",
    // 576: "部署B",
    // 577: "部署C",
    // 591: "20200106_1",
    // 593: "履歴更新2",
    // 595: "takaku1",
    // 596: "すず２（配下）",
    // 598: "takakutest（略）",
    // 602: "takakutest（略）",
    // 604: "0001(略）",
    // 606: "hao1",
    // 607: "児玉テスト課（略）",
    // 608: "児玉てすと部（略）",
    // 609: "児玉MBOテスト用(略)",
    // 612: "すず３",
    // 618: "100文字テキスト100文字テキスト100文字テキスト100文字テキスト100文字テキスト100文字テキスト100文字テキスト100文字テキスト100文字テキスト100文字テキスト100文字テキスト！",
    // 619: "check1",
    // 622: "テスト用",
    // 623: "B-2-1",
    // 624: "B-2-2",
    // 625: "B-2-3",
    // 626: "B-2-6",
    // 627: "B-2-7",
    // 628: "B-2-15",
    // 629: "山田てすと部2",
    // 631: "高久",
    // 632: "pdm室",
    // 634: "takaku-002",
    // 636: "テスト１",
    // 637: "テスト２",
    // 638: "テスト３",
    // 639: "テスト４",
    // 640: "テスト５",
    // 641: "テスト１１",
    // 642: "そな11（部署日本語略称）",
    // 643: "そな12（日本語略称）",
    // 644: "そな21（部署名略称）",
    // 645: "sona22略",
    // 646: "sona31（部署略称）",
    // 647: "AY002略",
    // 648: "AY0011_2010",
    // 649: "AY0012",
    // 650: "AY000",
    // 654: "MCU",
    // 655: "GOG",
    // 656: "MTT",
    // 657: "CTA",
    // 658: "BP",
    // 659: "IRM",
    // 660: "DTS",
    // 661: "カスタマーサポート",
    // 662: "管理本部",
    // 663: "Z0002",
    // 665: "検証001",
    // 666: "new0401",
    // 667: "すずA（触らないで）",
    // 668: "すずB（触らないで）",
    // 673: "モア1",
    // 674: "モア2",
    // 675: "hoge1",
    // 676: "hoge2",
    // 677: "hoge3",
    // 678: "hoge4",
    // 679: "hoge5",
    // 681: "QA 26074",
    // 682: "QA 26070",
    // 683: "QA 2607",
    // 684: "QA 2607",
    // 685: "QA 26079",
    // 688: "本部１Name(略称)",
    // 689: "兼部２Name(略称)",
    // 690: "兼 部ー配下ー３Name(略称)",
    // 691: "第三",
    // 692: "konv 5",
    // 693: "本部ー配下６Name(略称)",
    // 694: "h1",
    // 695: "児玉テスト課2（略）",
    // 696: "del1日本",
    // 697: "新規短縮",
    // 701: "haoen",
    // 703: "AY001_20220901_JA",
    // 704: "2909",
    // 705: "t",
    // 706: "AY004_略称",
    // 707: "HaoモアQA ハオ",
    // 708: "quynh21",
    // 709: "quynh2411",
    // 710: "AY005_部署略称Updated",
    // 715: "hao002",
    // 740: "QAQA01",
    // 749: "AY2001略",
    // 754: "hao1",
    // 755: "hao01 tên viết tắt hao01 tên viết tắthao01",
    // 759: "hao",
    // 760: "配下_QA3(sugaya)",
    // 765: "C100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００も",
    // 766: "更新c100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１００もじ100文字１０",
    // 775: "PdM",
    // 776: "部署ハイパーキャッシュ",
    // 777: "配下ハイパーキャッシュ",
    // 778: "sona04",
    // 783: "所属なしユニット",
    // 784: "De_Vi000INPUT",
    // 787: "第三",
    // 788: "英語テスト",
    // 789: "thang test",
    // 790: "登録日テスト部署",
    // 791: "58098a_QA1",
    // 792: "58098b_QA2",
    // 793: "58098c_QA3",
    // 794: "58098d_QA4",
    // 796: "ロールモデル分析テスト01",
    // 798: "部署略称",
    // 799: "abcde01",
    // 800: "経営企画室",
    // 801: "depart 1",
    // 802: "dv001",
    // 803: "nakama部署1",
    // 804: "nakama部署2",
    // 805: "nakama部署1-2",
    // 806: "nakama部署2-2",
    // 807: "FB360",
  },
  series: {
    boxPlot: {
      1: {
        0: 1,
        25: "-",
        50: "-",
        75: "-",
        100: 398.9,
      },
      2: {
        0: 593.4,
        25: "-",
        50: "-",
        75: "-",
        100: "-",
      },
      3: {
        0: 8,
        25: 8,
        50: 8,
        75: 736.1,
        100: 964.8,
      },
      4: [],
      5: {
        0: 398.9,
        25: 515.6,
        50: 659.7,
        75: 694.1,
        100: 694.1,
      },
      6: {
        0: 551.4,
        25: 617.7,
        50: 676.9,
        75: 736.1,
        100: 736.1,
      },
      7: {
        0: 323.6,
        25: "-",
        50: "-",
        75: "-",
        100: 551.4,
      },
      8: [],
      9: {
        0: 323.6,
        25: "-",
        50: "-",
        75: "-",
        100: 659.7,
      },
      10: {
        0: 515.6,
        25: "-",
        50: "-",
        75: "-",
        100: "-",
      },
      11: [],
      12: {
        0: 515.6,
        25: "-",
        50: "-",
        75: "-",
        100: 899.1,
      },
      13: {
        0: 1,
        25: "-",
        50: "-",
        75: "-",
        100: 1191.3,
      },
      14: {
        0: 0,
        25: 434.9,
        50: 593.4,
        75: 659.7,
        100: 736.1,
      },
      15: {
        0: 323.6,
        25: 434.9,
        50: 593.4,
        75: 736.1,
        100: 1050,
      },
      16: {
        0: 3.3,
        25: 593.4,
        50: 659.7,
        75: 964.8,
        100: 1385.4,
      },
      17: {
        0: 359.6,
        25: 434.9,
        50: 593.4,
        75: 659.7,
        100: 964.8,
      },
      18: {
        0: 323.6,
        25: 359.6,
        50: 434.9,
        75: 659.7,
        100: 659.7,
      },
      19: {
        0: 323.6,
        25: 398.9,
        50: 572.4,
        75: 659.7,
        100: 964.8,
      },
      20: {
        0: 323.6,
        25: 617.7,
        50: 676.9,
        75: 736.1,
        100: 964.8,
      },
      // 21: {
      //   0: 323.6,
      //   25: 551.4,
      //   50: 593.4,
      //   75: 617.7,
      //   100: 899.1,
      // },
      // 22: {
      //   0: 323.6,
      //   25: 473.6,
      //   50: 626.6,
      //   75: 694.1,
      //   100: 694.1,
      // },
      // 23: {
      //   0: 1,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 694.1,
      // },
      // 24: {
      //   0: 323.6,
      //   25: 434.9,
      //   50: 604.9,
      //   75: 821.3,
      //   100: 821.3,
      // },
      // 25: {
      //   0: 359.6,
      //   25: 434.9,
      //   50: 554.5,
      //   75: 899.1,
      //   100: 899.1,
      // },
      // 26: {
      //   0: 359.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 515.6,
      // },
      // 27: {
      //   0: 359.6,
      //   25: 515.6,
      //   50: 626.6,
      //   75: 899.1,
      //   100: 899.1,
      // },
      // 28: {
      //   0: 0,
      //   25: 434.9,
      //   50: 434.9,
      //   75: 659.7,
      //   100: 659.7,
      // },
      // 29: {
      //   0: 434.9,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 515.6,
      // },
      // 30: {
      //   0: 359.6,
      //   25: 434.9,
      //   50: 434.9,
      //   75: 515.6,
      //   100: 515.6,
      // },
      // 31: {
      //   0: 359.6,
      //   25: 551.4,
      //   50: 659.7,
      //   75: 899.1,
      //   100: 899.1,
      // },
      // 32: {
      //   0: 398.9,
      //   25: 473.6,
      //   50: 593.4,
      //   75: 593.4,
      //   100: 593.4,
      // },
      // 33: {
      //   0: 398.9,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 821.3,
      // },
      // 34: {
      //   0: 398.9,
      //   25: 473.6,
      //   50: 473.6,
      //   75: 821.3,
      //   100: 821.3,
      // },
      // 35: {
      //   0: 323.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 323.6,
      // },
      // 36: {
      //   0: 398.9,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 1050,
      // },
      // 37: {
      //   0: 323.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 323.6,
      // },
      // 38: {
      //   0: 323.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 323.6,
      // },
      // 39: {
      //   0: 1299.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: "-",
      // },
      // 40: {
      //   0: 323.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 821.3,
      // },
      // 41: {
      //   0: 323.6,
      //   25: 359.6,
      //   50: 593.4,
      //   75: 694.1,
      //   100: 694.1,
      // },
      // 42: {
      //   0: 323.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 323.6,
      // },
      // 43: [],
      // 44: {
      //   0: 323.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: "-",
      // },
      // 45: {
      //   0: 515.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: "-",
      // },
      // 46: {
      //   0: 323.6,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 398.9,
      // },
      // 47: [],
      // 48: [],
      // 49: [],
      // 50: [],
      // 51: {
      //   0: 1191.3,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: "-",
      // },
      // 52: {
      //   0: 0,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 398.9,
      // },
      // 53: [],
      // 54: [],
      // 76: {
      //   0: 659.7,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: "-",
      // },
      // 77: [],
      // 78: [],
      // 230: [],
      // 231: [],
      // 240: [],
      // 246: [],
      // 286: [],
      // 289: [],
      // 292: [],
      // 294: [],
      // 295: [],
      // 307: [],
      // 324: [],
      // 368: [],
      // 378: [],
      // 379: [],
      // 380: [],
      // 381: [],
      // 386: [],
      // 389: [],
      // 391: [],
      // 392: [],
      // 394: [],
      // 395: {
      //   0: 617.7,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: "-",
      // },
      // 396: [],
      // 397: [],
      // 398: [],
      // 399: [],
      // 400: [],
      // 402: [],
      // 403: [],
      // 404: [],
      // 405: [],
      // 406: [],
      // 407: [],
      // 408: [],
      // 409: [],
      // 410: [],
      // 411: [],
      // 412: [],
      // 413: [],
      // 414: [],
      // 415: [],
      // 416: [],
      // 417: [],
      // 418: [],
      // 419: [],
      // 420: [],
      // 421: [],
      // 422: [],
      // 423: [],
      // 424: [],
      // 425: [],
      // 426: [],
      // 427: [],
      // 428: [],
      // 429: [],
      // 430: [],
      // 431: [],
      // 432: [],
      // 433: [],
      // 434: [],
      // 435: [],
      // 436: [],
      // 437: [],
      // 438: [],
      // 439: [],
      // 440: [],
      // 441: [],
      // 442: [],
      // 443: [],
      // 444: [],
      // 445: [],
      // 446: [],
      // 447: [],
      // 448: [],
      // 449: [],
      // 450: [],
      // 451: [],
      // 452: [],
      // 453: [],
      // 454: [],
      // 455: [],
      // 456: [],
      // 457: [],
      // 458: [],
      // 459: [],
      // 460: [],
      // 461: [],
      // 462: [],
      // 463: [],
      // 464: [],
      // 465: [],
      // 466: [],
      // 467: [],
      // 468: [],
      // 469: [],
      // 470: [],
      // 471: [],
      // 472: [],
      // 473: [],
      // 474: [],
      // 475: [],
      // 476: [],
      // 477: [],
      // 478: [],
      // 479: [],
      // 480: [],
      // 481: [],
      // 482: [],
      // 483: [],
      // 484: [],
      // 485: [],
      // 486: [],
      // 487: [],
      // 488: [],
      // 489: [],
      // 490: [],
      // 491: [],
      // 492: [],
      // 493: [],
      // 494: [],
      // 495: [],
      // 496: [],
      // 497: [],
      // 498: [],
      // 499: [],
      // 500: [],
      // 501: [],
      // 502: [],
      // 503: [],
      // 504: [],
      // 505: [],
      // 506: [],
      // 507: [],
      // 508: [],
      // 509: [],
      // 510: [],
      // 511: [],
      // 512: [],
      // 513: [],
      // 514: [],
      // 515: [],
      // 516: [],
      // 517: [],
      // 518: [],
      // 519: [],
      // 520: [],
      // 521: [],
      // 522: [],
      // 523: [],
      // 524: [],
      // 525: [],
      // 526: [],
      // 527: [],
      // 528: [],
      // 529: [],
      // 530: [],
      // 531: [],
      // 532: [],
      // 533: [],
      // 534: [],
      // 535: [],
      // 536: [],
      // 538: [],
      // 539: [],
      // 540: [],
      // 541: [],
      // 542: [],
      // 543: [],
      // 546: [],
      // 547: [],
      // 550: [],
      // 552: [],
      // 553: [],
      // 556: [],
      // 557: [],
      // 558: [],
      // 564: {
      //   0: 1,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: "-",
      // },
      // 567: [],
      // 570: [],
      // 572: [],
      // 573: [],
      // 576: [],
      // 577: [],
      // 591: [],
      // 593: [],
      // 595: [],
      // 596: [],
      // 598: [],
      // 602: [],
      // 604: [],
      // 606: [],
      // 607: [],
      // 608: [],
      // 609: [],
      // 612: [],
      // 618: [],
      // 619: [],
      // 622: [],
      // 623: [],
      // 624: [],
      // 625: [],
      // 626: [],
      // 627: [],
      // 628: [],
      // 629: [],
      // 631: [],
      // 632: [],
      // 634: [],
      // 636: [],
      // 637: [],
      // 638: [],
      // 639: [],
      // 640: [],
      // 641: [],
      // 642: {
      //   0: 0,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 515.6,
      // },
      // 643: [],
      // 644: [],
      // 645: [],
      // 646: [],
      // 647: [],
      // 648: [],
      // 649: [],
      // 650: {
      //   0: 617.7,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: "-",
      // },
      // 654: [],
      // 655: [],
      // 656: [],
      // 657: [],
      // 658: [],
      // 659: [],
      // 660: [],
      // 661: [],
      // 662: [],
      // 663: [],
      // 665: [],
      // 666: [],
      // 667: {
      //   0: 1,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 1,
      // },
      // 668: {
      //   0: 1,
      //   25: "-",
      //   50: "-",
      //   75: "-",
      //   100: 1,
      // },
      // 673: [],
      // 674: [],
      // 675: [],
      // 676: [],
      // 677: [],
      // 678: [],
      // 679: [],
      // 681: [],
      // 682: [],
      // 683: [],
      // 684: [],
      // 685: [],
      // 688: [],
      // 689: [],
      // 690: [],
      // 691: [],
      // 692: [],
      // 693: [],
      // 694: [],
      // 695: [],
      // 696: [],
      // 697: [],
      // 701: [],
      // 703: [],
      // 704: [],
      // 705: [],
      // 706: [],
      // 707: [],
      // 708: [],
      // 709: [],
      // 710: [],
      // 715: [],
      // 740: [],
      // 749: [],
      // 754: [],
      // 755: [],
      // 759: [],
      // 760: [],
      // 765: [],
      // 766: [],
      // 775: [],
      // 776: [],
      // 777: [],
      // 778: [],
      // 783: [],
      // 784: [],
      // 787: [],
      // 788: [],
      // 789: [],
      // 790: [],
      // 791: [],
      // 792: [],
      // 793: [],
      // 794: [],
      // 796: [],
      // 798: [],
      // 799: [],
      // 800: [],
      // 801: [],
      // 802: [],
      // 803: [],
      // 804: [],
      // 805: [],
      // 806: [],
      // 807: [],
    },
    employee: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
      13: [],
      14: [],
      15: [],
      16: [],
      17: [],
      18: [],
      19: [],
      20: [],
      21: [],
      22: [],
      23: [],
      24: [],
      25: [],
      26: [],
      27: [],
      28: [],
      29: [],
      30: [],
      31: [],
      32: [],
      33: [],
      34: [],
      35: [],
      36: [],
      37: [],
      38: [],
      39: [],
      40: [],
      41: [],
      42: [],
      43: [],
      44: [],
      45: [],
      46: [],
      47: [],
      48: [],
      49: [],
      50: [],
      51: [],
      52: [],
      53: [],
      54: [],
      76: [],
      77: [],
      78: [],
      230: [],
      231: [],
      240: [],
      246: [],
      286: [],
      289: [],
      292: [],
      294: [],
      295: [],
      307: [],
      324: [],
      368: [],
      378: [],
      379: [],
      380: [],
      381: [],
      386: [],
      389: [],
      391: [],
      392: [],
      394: [],
      395: [],
      396: [],
      397: [],
      398: [],
      399: [],
      400: [],
      402: [],
      403: [],
      404: [],
      405: [],
      406: [],
      407: [],
      408: [],
      409: [],
      410: [],
      411: [],
      412: [],
      413: [],
      414: [],
      415: [],
      416: [],
      417: [],
      418: [],
      419: [],
      420: [],
      421: [],
      422: [],
      423: [],
      424: [],
      425: [],
      426: [],
      427: [],
      428: [],
      429: [],
      430: [],
      431: [],
      432: [],
      433: [],
      434: [],
      435: [],
      436: [],
      437: [],
      438: [],
      439: [],
      440: [],
      441: [],
      442: [],
      443: [],
      444: [],
      445: [],
      446: [],
      447: [],
      448: [],
      449: [],
      450: [],
      451: [],
      452: [],
      453: [],
      454: [],
      455: [],
      456: [],
      457: [],
      458: [],
      459: [],
      460: [],
      461: [],
      462: [],
      463: [],
      464: [],
      465: [],
      466: [],
      467: [],
      468: [],
      469: [],
      470: [],
      471: [],
      472: [],
      473: [],
      474: [],
      475: [],
      476: [],
      477: [],
      478: [],
      479: [],
      480: [],
      481: [],
      482: [],
      483: [],
      484: [],
      485: [],
      486: [],
      487: [],
      488: [],
      489: [],
      490: [],
      491: [],
      492: [],
      493: [],
      494: [],
      495: [],
      496: [],
      497: [],
      498: [],
      499: [],
      500: [],
      501: [],
      502: [],
      503: [],
      504: [],
      505: [],
      506: [],
      507: [],
      508: [],
      509: [],
      510: [],
      511: [],
      512: [],
      513: [],
      514: [],
      515: [],
      516: [],
      517: [],
      518: [],
      519: [],
      520: [],
      521: [],
      522: [],
      523: [],
      524: [],
      525: [],
      526: [],
      527: [],
      528: [],
      529: [],
      530: [],
      531: [],
      532: [],
      533: [],
      534: [],
      535: [],
      536: [],
      538: [],
      539: [],
      540: [],
      541: [],
      542: [],
      543: [],
      546: [],
      547: [],
      550: [],
      552: [],
      553: [],
      556: [],
      557: [],
      558: [],
      564: [],
      567: [],
      570: [],
      572: [],
      573: [],
      576: [],
      577: [],
      591: [],
      593: [],
      595: [],
      596: [],
      598: [],
      602: [],
      604: [],
      606: [],
      607: [],
      608: [],
      609: [],
      612: [],
      618: [],
      619: [],
      622: [],
      623: [],
      624: [],
      625: [],
      626: [],
      627: [],
      628: [],
      629: [],
      631: [],
      632: [],
      634: [],
      636: [],
      637: [],
      638: [],
      639: [],
      640: [],
      641: [],
      642: [],
      643: [],
      644: [],
      645: [],
      646: [],
      647: [],
      648: [],
      649: [],
      650: [],
      654: [],
      655: [],
      656: [],
      657: [],
      658: [],
      659: [],
      660: [],
      661: [],
      662: [],
      663: [],
      665: [],
      666: [],
      667: [],
      668: [],
      673: [],
      674: [],
      675: [],
      676: [],
      677: [],
      678: [],
      679: [],
      681: [],
      682: [],
      683: [],
      684: [],
      685: [],
      688: [],
      689: [],
      690: [],
      691: [],
      692: [],
      693: [],
      694: [],
      695: [],
      696: [],
      697: [],
      701: [],
      703: [],
      704: [],
      705: [],
      706: [],
      707: [],
      708: [],
      709: [],
      710: [],
      715: [],
      740: [],
      749: [],
      754: [],
      755: [],
      759: [],
      760: [],
      765: [],
      766: [],
      775: [],
      776: [],
      777: [],
      778: [],
      783: [],
      784: [],
      787: [],
      788: [],
      789: [],
      790: [],
      791: [],
      792: [],
      793: [],
      794: [],
      796: [],
      798: [],
      799: [],
      800: [],
      801: [],
      802: [],
      803: [],
      804: [],
      805: [],
      806: [],
      807: [],
    },
  },
};
