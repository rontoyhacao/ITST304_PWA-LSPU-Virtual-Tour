var APP_DATA = {
  "scenes": [
    {
      "id": "0-roadside-view",
      "name": "Roadside View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.5037420259958161,
        "pitch": 0.07963614558120113,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.9343654622980928,
          "pitch": 0.1227925915033623,
          "rotation": 0,
          "target": "1-lspu-main-gate"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9557940133426897,
          "pitch": -0.055698923514984955,
          "title": "Laguna State Polytechnic University",
          "text": "San Pablo City Campus"
        },
        {
          "yaw": 0.04516723913249798,
          "pitch": 0.07112601711438771,
          "title": "Landbank",
          "text": "ATM"
        }
      ]
    },
    {
      "id": "1-lspu-main-gate",
      "name": "LSPU Main Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.03682247419545348,
        "pitch": 0.034558157240187626,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.03907826652740809,
          "pitch": 0.2226340864138141,
          "rotation": 0,
          "target": "2-cte-bldg"
        },
        {
          "yaw": -3.1075122677682447,
          "pitch": 0.1421292782969612,
          "rotation": 0,
          "target": "0-roadside-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.056690168488994885,
          "pitch": -0.6382541844537464,
          "title": "LSPU SPCC",
          "text": "Main Entrance"
        }
      ]
    },
    {
      "id": "2-cte-bldg",
      "name": "CTE Bldg.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.6799450504794038,
        "pitch": 0.05691703410883342,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.008773415031953391,
          "pitch": 0.12123583549492878,
          "rotation": 0,
          "target": "3-admission-bldg"
        },
        {
          "yaw": -3.088336276998282,
          "pitch": 0.14878451786941582,
          "rotation": 0,
          "target": "1-lspu-main-gate"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.47517571252083,
          "pitch": -0.05897921480864454,
          "title": "LED Wall",
          "text": "Managed by the ICTS Office"
        },
        {
          "yaw": -2.2202106542911206,
          "pitch": 0.00963157359422695,
          "title": "COVID-19 Disinfection Tent",
          "text": "Part of COVID-19 Protocols"
        },
        {
          "yaw": -1.3237875872606288,
          "pitch": -0.19679409782659363,
          "title": "CTE Building",
          "text": "College of Teacher Education"
        },
        {
          "yaw": -0.6993782467202969,
          "pitch": -0.09632822998824153,
          "title": "Admissions Bldg.",
          "text": "Handle all transactions here."
        }
      ]
    },
    {
      "id": "3-admission-bldg",
      "name": "Admission Bldg.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.14096890112262273,
        "pitch": 0.029776503812954047,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.06083542210140358,
          "pitch": 0.16606753808865804,
          "rotation": 0,
          "target": "4-hospitality"
        },
        {
          "yaw": -3.0871321245818883,
          "pitch": 0.10153665741495033,
          "rotation": 0,
          "target": "2-cte-bldg"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6779633297922594,
          "pitch": -0.004051384406835723,
          "title": "Admissions Bldg.",
          "text": "Handle all transactions here."
        }
      ]
    },
    {
      "id": "4-hospitality",
      "name": "Hospitality",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.06701742955885415,
        "pitch": 0.09128236077642882,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.01579011865673685,
          "pitch": 0.170666804553818,
          "rotation": 0,
          "target": "5-further-in"
        },
        {
          "yaw": -3.081064804478185,
          "pitch": 0.11967659322644764,
          "rotation": 0,
          "target": "3-admission-bldg"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7006627779150421,
          "pitch": 0.29448071267083087,
          "title": "Road-side Statements",
          "text": "Mission, Vision, etc."
        },
        {
          "yaw": -1.0440150908139678,
          "pitch": -0.10192442284774117,
          "title": "Hospitality Bldg.",
          "text": "Feel like a VIP here."
        }
      ]
    },
    {
      "id": "5-further-in",
      "name": "Further In",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.08995158452586516,
        "pitch": 0.1302722041816864,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.012678395058776104,
          "pitch": 0.11054926639511464,
          "rotation": 0,
          "target": "6-a-great-view"
        },
        {
          "yaw": -3.0869280446531118,
          "pitch": 0.1162153776804935,
          "rotation": 0,
          "target": "4-hospitality"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-a-great-view",
      "name": "A Great View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.8346448508081235,
        "pitch": -0.04667468226113769,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.5895651341446175,
          "pitch": 0.0915935415782414,
          "rotation": 0,
          "target": "7-open-field"
        },
        {
          "yaw": -1.1319148405790767,
          "pitch": 0.14855946066284886,
          "rotation": 0,
          "target": "8-otw"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.069587944895389,
          "pitch": 0.017148978461808184,
          "title": "COE, CCS, etc.",
          "text": "More LSPU SPCC Facilities."
        },
        {
          "yaw": 2.37333743453196,
          "pitch": 0.15782009091672755,
          "title": "Library, Parking Lot, etc.",
          "text": "The library is open to all."
        },
        {
          "yaw": -1.687715099897673,
          "pitch": 0.21120988803280838,
          "title": "More Facilities and Bldgs.",
          "text": "Walkway"
        },
        {
          "yaw": -2.4543407814469713,
          "pitch": 0.09581820615587944,
          "title": "LSPU SPCC Open Field",
          "text": "This way to the open field."
        },
        {
          "yaw": -1.238110907155452,
          "pitch": 0.024261281963847026,
          "title": "University Pool",
          "text": "This way."
        }
      ]
    },
    {
      "id": "7-open-field",
      "name": "Open Field",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.1388849936488317,
        "pitch": -0.5820848610077292,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.043831411647851,
          "pitch": -0.2232823938467483,
          "rotation": 0,
          "target": "6-a-great-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.143092094387363,
          "pitch": -0.47513489035527634,
          "title": "Flagpole",
          "text": "Open Field Flagpole"
        },
        {
          "yaw": 0.3385400943289678,
          "pitch": -0.4052675031792834,
          "title": "LSPU SPCC Gymnasium",
          "text": "University Gymn"
        },
        {
          "yaw": 2.243330889328175,
          "pitch": -0.11350619378089633,
          "title": "The boys having a break.",
          "text": "Intense Training."
        }
      ]
    },
    {
      "id": "8-otw",
      "name": "OTW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.5006788020952264,
        "pitch": -0.011762330055123726,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.531832997236565,
          "pitch": 0.24248679269527784,
          "rotation": 0,
          "target": "6-a-great-view"
        },
        {
          "yaw": -0.5196117540531073,
          "pitch": 0.32485718544403497,
          "rotation": 0,
          "target": "9-university-pool-a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-university-pool-a",
      "name": "University Pool A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.0482162329410514,
        "pitch": -0.03901918155237283,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.5717654293468044,
          "pitch": 0.01714670182672684,
          "rotation": 0,
          "target": "8-otw"
        },
        {
          "yaw": -2.782406027396826,
          "pitch": 0.13553050375276676,
          "rotation": 0,
          "target": "10-university-pool-b"
        },
        {
          "yaw": 2.7808053124097887,
          "pitch": 0.05577172667669572,
          "rotation": 0,
          "target": "11-university-pool-c"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8215807227138594,
          "pitch": -0.13275773922169343,
          "title": "Vegeta",
          "text": "Prince of No Ultra Instinct"
        }
      ]
    },
    {
      "id": "10-university-pool-b",
      "name": "University Pool B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.6323462136071782,
        "pitch": -0.0018457685938635393,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.899228209395119,
          "pitch": -0.07450941291915036,
          "rotation": 0,
          "target": "9-university-pool-a"
        },
        {
          "yaw": -2.2351694097800063,
          "pitch": -0.33250414087275715,
          "rotation": 0,
          "target": "12-sleeping-beauty"
        },
        {
          "yaw": -1.8611835994036436,
          "pitch": -0.10599291477319639,
          "rotation": 0,
          "target": "11-university-pool-c"
        },
        {
          "yaw": 0.14435702834513364,
          "pitch": -0.14945435276722208,
          "rotation": 0,
          "target": "14-university-pool-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6167645264446673,
          "pitch": -0.05293745810006634,
          "title": "LSPU SPCC",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">University Pool</span>"
        }
      ]
    },
    {
      "id": "11-university-pool-c",
      "name": "University Pool C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.8673537298902243,
        "pitch": -0.035018493130971606,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.1744711880791154,
          "pitch": 0.05310218270691891,
          "rotation": 0,
          "target": "9-university-pool-a"
        },
        {
          "yaw": 0.011606062246242388,
          "pitch": -0.17310346447088776,
          "rotation": 0,
          "target": "12-sleeping-beauty"
        },
        {
          "yaw": 3.033995329263176,
          "pitch": 0.03616413124662721,
          "rotation": 0,
          "target": "13-university-pool-d"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.15651526430269946,
          "pitch": -0.3204411813257373,
          "title": "Sleeping Beauty",
          "text": "Sleep with sleeping beauty."
        }
      ]
    },
    {
      "id": "12-sleeping-beauty",
      "name": "Sleeping Beauty",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.4190851855612934,
        "pitch": -0.013682396458472468,
        "fov": 1.2702581232118664
      },
      "linkHotspots": [
        {
          "yaw": -1.5369367012352484,
          "pitch": 0.14343274047044474,
          "rotation": 0,
          "target": "11-university-pool-c"
        },
        {
          "yaw": 0.37573783063151467,
          "pitch": 0.21141169329128218,
          "rotation": 0,
          "target": "9-university-pool-a"
        },
        {
          "yaw": 0.008615062685095154,
          "pitch": 0.14193055713088043,
          "rotation": 0,
          "target": "10-university-pool-b"
        },
        {
          "yaw": -2.2427893062685555,
          "pitch": 0.06612663112715289,
          "rotation": 0,
          "target": "13-university-pool-d"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-university-pool-d",
      "name": "University Pool D",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.316697704777651,
        "pitch": -0.06772917588799032,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.767579112728951,
          "pitch": 0.028683515154392936,
          "rotation": 0,
          "target": "11-university-pool-c"
        },
        {
          "yaw": 2.075152792473279,
          "pitch": -0.1430060615775428,
          "rotation": 0,
          "target": "12-sleeping-beauty"
        },
        {
          "yaw": 0.1676030945688538,
          "pitch": -0.10037709628300995,
          "rotation": 0,
          "target": "14-university-pool-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7980650221873784,
          "pitch": 0.02694053602670543,
          "title": "LSPU SPCC",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">University Pool</span>"
        }
      ]
    },
    {
      "id": "14-university-pool-e",
      "name": "University Pool E",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.7470608759629425,
        "pitch": -0.31345000723359817,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.1053905071051453,
          "pitch": -0.24482719135189157,
          "rotation": 0,
          "target": "13-university-pool-d"
        },
        {
          "yaw": -1.638464217955331,
          "pitch": -0.22154468566466612,
          "rotation": 0,
          "target": "10-university-pool-b"
        },
        {
          "yaw": -0.6476880431211534,
          "pitch": 0.0030568344529307012,
          "rotation": 0,
          "target": "15-in-the-pool"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1046800454730707,
          "pitch": -0.051315120660500924,
          "title": "LSPU SPCC",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">University Pool</span>"
        }
      ]
    },
    {
      "id": "15-in-the-pool",
      "name": "In The Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.4121053881582757,
        "pitch": -1.5707963267948966,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.3818387630903093,
          "pitch": -1.389687730439789,
          "rotation": 0,
          "target": "14-university-pool-e"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
