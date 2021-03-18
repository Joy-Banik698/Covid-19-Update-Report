//var x=0
/*var y=[{"country":"World","cases":108883496,"todayCases":169897,"deaths":2397990,"todayDeaths":5289,"recovered":81064786,"active":25420720,"critical":99087,"casesPerOneMillion":13969,"deathsPerOneMillion":307,"totalTests":0,"testsPerOneMillion":0},
{"country":"USA","cases":28118795,"todayCases":12091,"deaths":492789,"todayDeaths":268,"recovered":18042596,"active":9583410,"critical":19917,"casesPerOneMillion":84643,"deathsPerOneMillion":1483,"totalTests":332240363,"testsPerOneMillion":1000110},
{"country":"India","cases":10898663,"todayCases":6113,"deaths":155653,"todayDeaths":65,"recovered":10603213,"active":139797,"critical":8944,"casesPerOneMillion":7850,"deathsPerOneMillion":112,"totalTests":204789784,"testsPerOneMillion":147502},
{"country":"Brazil","cases":9765694,"todayCases":0,"deaths":237601,"todayDeaths":0,"recovered":8678327,"active":849766,"critical":8318,"casesPerOneMillion":45742,"deathsPerOneMillion":1113,"totalTests":28600000,"testsPerOneMillion":133962},
{"country":"Russia","cases":4057698,"todayCases":14861,"deaths":79696,"todayDeaths":502,"recovered":3577907,"active":400095,"critical":2300,"casesPerOneMillion":27798,"deathsPerOneMillion":546,"totalTests":106400000,"testsPerOneMillion":728900},
{"country":"UK","cases":4027106,"todayCases":13308,"deaths":116908,"todayDeaths":621,"recovered":2125331,"active":1784867,"critical":2943,"casesPerOneMillion":59129,"deathsPerOneMillion":1717,"totalTests":81044007,"testsPerOneMillion":1189955},
{"country":"France","cases":3427386,"todayCases":0,"deaths":81448,"todayDeaths":0,"recovered":238753,"active":3107185,"critical":3337,"casesPerOneMillion":52436,"deathsPerOneMillion":1246,"totalTests":47466482,"testsPerOneMillion":726197},
{"country":"Spain","cases":3056035,"todayCases":0,"deaths":64747,"todayDeaths":0,"recovered":null,"active":null,"critical":4432,"casesPerOneMillion":65347,"deathsPerOneMillion":1384,"totalTests":35782465,"testsPerOneMillion":765138},
{"country":"Italy","cases":2710819,"todayCases":13532,"deaths":93356,"todayDeaths":311,"recovered":2216050,"active":401413,"critical":2062,"casesPerOneMillion":44876,"deathsPerOneMillion":1545,"totalTests":35962939,"testsPerOneMillion":595348},
{"country":"Turkey","cases":2572190,"todayCases":0,"deaths":27284,"todayDeaths":0,"recovered":2461204,"active":83702,"critical":1250,"casesPerOneMillion":30297,"deathsPerOneMillion":321,"totalTests":31289306,"testsPerOneMillion":368547},
{"country":"Germany","cases":2332420,"todayCases":1998,"deaths":65238,"todayDeaths":202,"recovered":2112000,"active":155182,"critical":3736,"casesPerOneMillion":27783,"deathsPerOneMillion":777,"totalTests":41758675,"testsPerOneMillion":497423},
{"country":"Colombia","cases":2185169,"todayCases":0,"deaths":57196,"todayDeaths":0,"recovered":2072793,"active":55180,"critical":3482,"casesPerOneMillion":42664,"deathsPerOneMillion":1117,"totalTests":10770359,"testsPerOneMillion":210286},
{"country":"Argentina","cases":2015496,"todayCases":0,"deaths":50029,"todayDeaths":0,"recovered":1814160,"active":151307,"critical":3538,"casesPerOneMillion":44343,"deathsPerOneMillion":1101,"totalTests":6739079,"testsPerOneMillion":148268},
{"country":"Mexico","cases":1978954,"todayCases":10388,"deaths":172557,"todayDeaths":1323,"recovered":1535786,"active":270611,"critical":4798,"casesPerOneMillion":15250,"deathsPerOneMillion":1330,"totalTests":5051401,"testsPerOneMillion":38926},
{"country":"Poland","cases":1583621,"todayCases":6586,"deaths":40709,"todayDeaths":284,"recovered":1336467,"active":206445,"critical":1270,"casesPerOneMillion":41872,"deathsPerOneMillion":1076,"totalTests":9178403,"testsPerOneMillion":242681},
{"country":"Iran","cases":1510873,"todayCases":7120,"deaths":58883,"todayDeaths":74,"recovered":1291726,"active":160264,"critical":3720,"casesPerOneMillion":17847,"deathsPerOneMillion":696,"totalTests":9993224,"testsPerOneMillion":118045},
{"country":"South Africa","cases":1487681,"todayCases":0,"deaths":47670,"todayDeaths":0,"recovered":1383626,"active":56385,"critical":546,"casesPerOneMillion":24890,"deathsPerOneMillion":798,"totalTests":8641447,"testsPerOneMillion":144579},
{"country":"Ukraine","cases":1268049,"todayCases":5182,"deaths":24285,"todayDeaths":111,"recovered":1112299,"active":131465,"critical":177,"casesPerOneMillion":29104,"deathsPerOneMillion":557,"totalTests":6447576,"testsPerOneMillion":147981},
{"country":"Peru","cases":1220748,"todayCases":0,"deaths":43255,"todayDeaths":0,"recovered":1130923,"active":46570,"critical":2051,"casesPerOneMillion":36709,"deathsPerOneMillion":1301,"totalTests":6825553,"testsPerOneMillion":205250},
{"country":"Indonesia","cases":1210703,"todayCases":8844,"deaths":32936,"todayDeaths":280,"recovered":1016036,"active":161731,"critical":0,"casesPerOneMillion":4398,"deathsPerOneMillion":120,"totalTests":10025524,"testsPerOneMillion":36416},
{"country":"Czechia","cases":1082849,"todayCases":8782,"deaths":18058,"todayDeaths":73,"recovered":963707,"active":101084,"critical":1088,"casesPerOneMillion":101000,"deathsPerOneMillion":1684,"totalTests":6926172,"testsPerOneMillion":646020},
{"country":"Netherlands","cases":1025837,"todayCases":4194,"deaths":14793,"todayDeaths":66,"recovered":null,"active":null,"critical":538,"casesPerOneMillion":59786,"deathsPerOneMillion":862,"totalTests":6970400,"testsPerOneMillion":406239},
{"country":"Canada","cases":820306,"todayCases":0,"deaths":21162,"todayDeaths":0,"recovered":762200,"active":36944,"critical":672,"casesPerOneMillion":21617,"deathsPerOneMillion":558,"totalTests":22883055,"testsPerOneMillion":603033},
{"country":"Portugal","cases":784079,"todayCases":2856,"deaths":15183,"todayDeaths":149,"recovered":661525,"active":107371,"critical":803,"casesPerOneMillion":77035,"deathsPerOneMillion":1492,"totalTests":7766721,"testsPerOneMillion":763072},
{"country":"Chile","cases":772395,"todayCases":3924,"deaths":19443,"todayDeaths":98,"recovered":730204,"active":22748,"critical":1530,"casesPerOneMillion":40192,"deathsPerOneMillion":1012,"totalTests":8666840,"testsPerOneMillion":450984},
{"country":"Romania","cases":760091,"todayCases":2415,"deaths":19325,"todayDeaths":48,"recovered":706394,"active":34372,"critical":969,"casesPerOneMillion":39675,"deathsPerOneMillion":1009,"totalTests":5707776,"testsPerOneMillion":297935},
{"country":"Belgium","cases":735220,"todayCases":2120,"deaths":21599,"todayDeaths":48,"recovered":50520,"active":663101,"critical":294,"casesPerOneMillion":63267,"deathsPerOneMillion":1859,"totalTests":8824522,"testsPerOneMillion":759369},
{"country":"Israel","cases":718746,"todayCases":0,"deaths":5304,"todayDeaths":0,"recovered":651522,"active":61920,"critical":1002,"casesPerOneMillion":78145,"deathsPerOneMillion":577,"totalTests":11358022,"testsPerOneMillion":1234891},
{"country":"Iraq","cases":641628,"todayCases":2190,"deaths":13164,"todayDeaths":7,"recovered":605980,"active":22484,"critical":271,"casesPerOneMillion":15736,"deathsPerOneMillion":323,"totalTests":6192076,"testsPerOneMillion":151857},
{"country":"Sweden","cases":608411,"todayCases":0,"deaths":12428,"todayDeaths":0,"recovered":null,"active":null,"critical":218,"casesPerOneMillion":60012,"deathsPerOneMillion":1226,"totalTests":5510486,"testsPerOneMillion":543535},
{"country":"Pakistan","cases":561625,"todayCases":1262,"deaths":12276,"todayDeaths":58,"recovered":523700,"active":25649,"critical":1692,"casesPerOneMillion":2513,"deathsPerOneMillion":55,"totalTests":8399623,"testsPerOneMillion":37578},
{"country":"Philippines","cases":547255,"todayCases":1960,"deaths":11507,"todayDeaths":12,"recovered":500781,"active":34967,"critical":807,"casesPerOneMillion":4953,"deathsPerOneMillion":104,"totalTests":8288845,"testsPerOneMillion":75026},
{"country":"Switzerland","cases":540727,"todayCases":0,"deaths":9750,"todayDeaths":3,"recovered":317600,"active":213377,"critical":219,"casesPerOneMillion":62197,"deathsPerOneMillion":1121,"totalTests":4674340,"testsPerOneMillion":537666},
{"country":"Bangladesh","cases":540266,"todayCases":291,"deaths":8266,"todayDeaths":13,"recovered":486767,"active":45233,"critical":0,"casesPerOneMillion":3260,"deathsPerOneMillion":50,"totalTests":3835216,"testsPerOneMillion":23145},
{"country":"Morocco","cases":477656,"todayCases":0,"deaths":8450,"todayDeaths":0,"recovered":457956,"active":11250,"critical":320,"casesPerOneMillion":12847,"deathsPerOneMillion":227,"totalTests":5504749,"testsPerOneMillion":148055},
{"country":"Austria","cases":432303,"todayCases":1433,"deaths":8195,"todayDeaths":25,"recovered":409877,"active":14231,"critical":266,"casesPerOneMillion":47831,"deathsPerOneMillion":907,"totalTests":4821686,"testsPerOneMillion":533478},
{"country":"Serbia","cases":419493,"todayCases":1622,"deaths":4214,"todayDeaths":15,"recovered":31536,"active":383743,"critical":135,"casesPerOneMillion":48132,"deathsPerOneMillion":484,"totalTests":2762877,"testsPerOneMillion":317008},
{"country":"Japan","cases":413154,"todayCases":1403,"deaths":6849,"todayDeaths":75,"recovered":380569,"active":25736,"critical":693,"casesPerOneMillion":3273,"deathsPerOneMillion":54,"totalTests":7539403,"testsPerOneMillion":59725},
{"country":"Hungary","cases":385755,"todayCases":2020,"deaths":13636,"todayDeaths":93,"recovered":293542,"active":78577,"critical":299,"casesPerOneMillion":39995,"deathsPerOneMillion":1414,"totalTests":3357672,"testsPerOneMillion":348122},
{"country":"Saudi Arabia","cases":372410,"todayCases":337,"deaths":6429,"todayDeaths":5,"recovered":363303,"active":2678,"critical":456,"casesPerOneMillion":10596,"deathsPerOneMillion":183,"totalTests":12946778,"testsPerOneMillion":368355},
{"country":"UAE","cases":345605,"todayCases":2631,"deaths":1001,"todayDeaths":15,"recovered":326780,"active":17824,"critical":0,"casesPerOneMillion":34685,"deathsPerOneMillion":100,"totalTests":27907006,"testsPerOneMillion":2800755},
{"country":"Jordan","cases":344803,"todayCases":1240,"deaths":4444,"todayDeaths":11,"recovered":325892,"active":14467,"critical":153,"casesPerOneMillion":33588,"deathsPerOneMillion":433,"totalTests":4178921,"testsPerOneMillion":407077},
{"country":"Lebanon","cases":334093,"todayCases":0,"deaths":3915,"todayDeaths":0,"recovered":224380,"active":105798,"critical":886,"casesPerOneMillion":49085,"deathsPerOneMillion":575,"totalTests":2777796,"testsPerOneMillion":408114},
{"country":"Panama","cases":330985,"todayCases":0,"deaths":5595,"todayDeaths":0,"recovered":306634,"active":18756,"critical":202,"casesPerOneMillion":75974,"deathsPerOneMillion":1284,"totalTests":1782418,"testsPerOneMillion":409134},
{"country":"Slovakia","cases":276234,"todayCases":2330,"deaths":5812,"todayDeaths":79,"recovered":255300,"active":15122,"critical":586,"casesPerOneMillion":50580,"deathsPerOneMillion":1064,"totalTests":1895523,"testsPerOneMillion":347084},
{"country":"Nepal","cases":272614,"todayCases":57,"deaths":2054,"todayDeaths":0,"recovered":268929,"active":1631,"critical":0,"casesPerOneMillion":9254,"deathsPerOneMillion":70,"totalTests":2113549,"testsPerOneMillion":71746},
{"country":"Belarus","cases":267029,"todayCases":1745,"deaths":1840,"todayDeaths":10,"recovered":255980,"active":9209,"critical":0,"casesPerOneMillion":28265,"deathsPerOneMillion":195,"totalTests":4662913,"testsPerOneMillion":493566},
{"country":"Ecuador","cases":265527,"todayCases":2010,"deaths":15269,"todayDeaths":49,"recovered":220398,"active":29860,"critical":486,"casesPerOneMillion":14911,"deathsPerOneMillion":857,"totalTests":940866,"testsPerOneMillion":52834},
{"country":"Georgia","cases":265200,"todayCases":535,"deaths":3343,"todayDeaths":7,"recovered":257441,"active":4416,"critical":0,"casesPerOneMillion":66559,"deathsPerOneMillion":839,"totalTests":2434181,"testsPerOneMillion":610926},
{"country":"Malaysia","cases":261805,"todayCases":3499,"deaths":958,"todayDeaths":5,"recovered":209289,"active":51558,"critical":263,"casesPerOneMillion":8026,"deathsPerOneMillion":29,"totalTests":5503992,"testsPerOneMillion":168722},
{"country":"Croatia","cases":237459,"todayCases":379,"deaths":5299,"todayDeaths":17,"recovered":229709,"active":2451,"critical":89,"casesPerOneMillion":58065,"deathsPerOneMillion":1296,"totalTests":1260970,"testsPerOneMillion":308343},
{"country":"Bolivia","cases":235098,"todayCases":1244,"deaths":11107,"todayDeaths":63,"recovered":175958,"active":48033,"critical":71,"casesPerOneMillion":19972,"deathsPerOneMillion":944,"totalTests":635869,"testsPerOneMillion":54019},
{"country":"Azerbaijan","cases":231995,"todayCases":155,"deaths":3178,"todayDeaths":5,"recovered":226514,"active":2303,"critical":0,"casesPerOneMillion":22754,"deathsPerOneMillion":312,"totalTests":2495198,"testsPerOneMillion":244732},
{"country":"Bulgaria","cases":229010,"todayCases":0,"deaths":9594,"todayDeaths":0,"recovered":196204,"active":23212,"critical":304,"casesPerOneMillion":33114,"deathsPerOneMillion":1387,"totalTests":1513852,"testsPerOneMillion":218896},
{"country":"Dominican Republic","cases":228895,"todayCases":1131,"deaths":2932,"todayDeaths":15,"recovered":175329,"active":50634,"critical":255,"casesPerOneMillion":20971,"deathsPerOneMillion":269,"totalTests":1134670,"testsPerOneMillion":103954},
{"country":"Tunisia","cases":221455,"todayCases":0,"deaths":7461,"todayDeaths":0,"recovered":181198,"active":32796,"critical":354,"casesPerOneMillion":18618,"deathsPerOneMillion":627,"totalTests":918123,"testsPerOneMillion":77186},
{"country":"Ireland","cases":207720,"todayCases":0,"deaths":3865,"todayDeaths":0,"recovered":23364,"active":180491,"critical":169,"casesPerOneMillion":41779,"deathsPerOneMillion":777,"totalTests":3288084,"testsPerOneMillion":661344},
{"country":"Denmark","cases":204067,"todayCases":274,"deaths":2284,"todayDeaths":4,"recovered":196027,"active":5756,"critical":64,"casesPerOneMillion":35155,"deathsPerOneMillion":393,"totalTests":15049553,"testsPerOneMillion":2592587},
{"country":"Kazakhstan","cases":200964,"todayCases":920,"deaths":2540,"todayDeaths":0,"recovered":183315,"active":15109,"critical":221,"casesPerOneMillion":10624,"deathsPerOneMillion":134,"totalTests":6399596,"testsPerOneMillion":338330},
{"country":"Costa Rica","cases":199187,"todayCases":0,"deaths":2714,"todayDeaths":0,"recovered":160946,"active":35527,"critical":168,"casesPerOneMillion":38882,"deathsPerOneMillion":530,"totalTests":629031,"testsPerOneMillion":122789},
{"country":"Lithuania","cases":190241,"todayCases":510,"deaths":3057,"todayDeaths":17,"recovered":173505,"active":13679,"critical":128,"casesPerOneMillion":70497,"deathsPerOneMillion":1133,"totalTests":2015282,"testsPerOneMillion":746801},
{"country":"Slovenia","cases":179148,"todayCases":1005,"deaths":3705,"todayDeaths":13,"recovered":162248,"active":13195,"critical":149,"casesPerOneMillion":86166,"deathsPerOneMillion":1782,"totalTests":855861,"testsPerOneMillion":411647},
{"country":"Kuwait","cases":176903,"todayCases":851,"deaths":998,"todayDeaths":6,"recovered":165254,"active":10651,"critical":129,"casesPerOneMillion":41050,"deathsPerOneMillion":232,"totalTests":1660406,"testsPerOneMillion":385293},
{"country":"Egypt","cases":172602,"todayCases":0,"deaths":9899,"todayDeaths":0,"recovered":134215,"active":28488,"critical":90,"casesPerOneMillion":1667,"deathsPerOneMillion":96,"totalTests":1000000,"testsPerOneMillion":9660},
{"country":"Greece","cases":171466,"todayCases":1222,"deaths":6103,"todayDeaths":26,"recovered":151418,"active":13945,"critical":293,"casesPerOneMillion":16501,"deathsPerOneMillion":587,"totalTests":4694239,"testsPerOneMillion":451744},
{"country":"Moldova","cases":169805,"todayCases":979,"deaths":3640,"todayDeaths":14,"recovered":156836,"active":9329,"critical":284,"casesPerOneMillion":42155,"deathsPerOneMillion":904,"totalTests":666446,"testsPerOneMillion":165448},
{"country":"Armenia","cases":169022,"todayCases":192,"deaths":3140,"todayDeaths":2,"recovered":160942,"active":4940,"critical":0,"casesPerOneMillion":56973,"deathsPerOneMillion":1058,"totalTests":679135,"testsPerOneMillion":228921},
{"country":"Guatemala","cases":166283,"todayCases":0,"deaths":6057,"todayDeaths":0,"recovered":152920,"active":7306,"critical":5,"casesPerOneMillion":9177,"deathsPerOneMillion":334,"totalTests":845614,"testsPerOneMillion":46670},
{"country":"Palestine","cases":166200,"todayCases":0,"deaths":1918,"todayDeaths":0,"recovered":155362,"active":8920,"critical":56,"casesPerOneMillion":32122,"deathsPerOneMillion":371,"totalTests":1071752,"testsPerOneMillion":207139},
{"country":"Honduras","cases":159024,"todayCases":669,"deaths":3848,"todayDeaths":10,"recovered":63153,"active":92023,"critical":416,"casesPerOneMillion":15900,"deathsPerOneMillion":385,"totalTests":406690,"testsPerOneMillion":40663},
{"country":"Qatar","cases":156804,"todayCases":453,"deaths":255,"todayDeaths":1,"recovered":148137,"active":8412,"critical":86,"casesPerOneMillion":55846,"deathsPerOneMillion":91,"totalTests":1459551,"testsPerOneMillion":519819},
{"country":"Ethiopia","cases":145548,"todayCases":0,"deaths":2177,"todayDeaths":0,"recovered":127864,"active":15507,"critical":260,"casesPerOneMillion":1247,"deathsPerOneMillion":19,"totalTests":2033790,"testsPerOneMillion":17427},
{"country":"Nigeria","cases":144521,"todayCases":0,"deaths":1734,"todayDeaths":0,"recovered":118866,"active":23921,"critical":10,"casesPerOneMillion":691,"deathsPerOneMillion":8,"totalTests":1398630,"testsPerOneMillion":6683},
{"country":"Paraguay","cases":142598,"todayCases":0,"deaths":2904,"todayDeaths":0,"recovered":118750,"active":20944,"critical":243,"casesPerOneMillion":19842,"deathsPerOneMillion":404,"totalTests":693803,"testsPerOneMillion":96542},
{"country":"Myanmar","cases":141543,"todayCases":0,"deaths":3188,"todayDeaths":0,"recovered":129287,"active":9068,"critical":0,"casesPerOneMillion":2591,"deathsPerOneMillion":58,"totalTests":2473356,"testsPerOneMillion":45270},
{"country":"Oman","cases":136622,"todayCases":0,"deaths":1539,"todayDeaths":0,"recovered":128461,"active":6622,"critical":45,"casesPerOneMillion":26344,"deathsPerOneMillion":297,"totalTests":1550000,"testsPerOneMillion":298877},
{"country":"Venezuela","cases":132259,"todayCases":0,"deaths":1267,"todayDeaths":0,"recovered":124253,"active":6739,"critical":107,"casesPerOneMillion":4659,"deathsPerOneMillion":45,"totalTests":2764178,"testsPerOneMillion":97379},
{"country":"Libya","cases":126881,"todayCases":0,"deaths":2014,"todayDeaths":0,"recovered":109262,"active":15605,"critical":0,"casesPerOneMillion":18312,"deathsPerOneMillion":291,"totalTests":692111,"testsPerOneMillion":99888},
{"country":"Bosnia and Herzegovina","cases":125402,"todayCases":0,"deaths":4881,"todayDeaths":0,"recovered":104135,"active":16386,"critical":0,"casesPerOneMillion":38371,"deathsPerOneMillion":1494,"totalTests":625798,"testsPerOneMillion":191486},
{"country":"Bahrain","cases":111312,"todayCases":0,"deaths":395,"todayDeaths":0,"recovered":103878,"active":7039,"critical":59,"casesPerOneMillion":64063,"deathsPerOneMillion":227,"totalTests":2874570,"testsPerOneMillion":1654383},
{"country":"Algeria","cases":110303,"todayCases":0,"deaths":2932,"todayDeaths":0,"recovered":75628,"active":31743,"critical":42,"casesPerOneMillion":2488,"deathsPerOneMillion":66,"totalTests":0,"testsPerOneMillion":0},
{"country":"Kenya","cases":102792,"todayCases":179,"deaths":1795,"todayDeaths":1,"recovered":84952,"active":16045,"critical":31,"casesPerOneMillion":1886,"deathsPerOneMillion":33,"totalTests":1238343,"testsPerOneMillion":22723},
{"country":"North Macedonia","cases":96872,"todayCases":354,"deaths":2976,"todayDeaths":5,"recovered":87446,"active":6450,"critical":131,"casesPerOneMillion":46499,"deathsPerOneMillion":1428,"totalTests":485147,"testsPerOneMillion":232872},
{"country":"Albania","cases":91987,"todayCases":1152,"deaths":1543,"todayDeaths":12,"recovered":55983,"active":34461,"critical":37,"casesPerOneMillion":31986,"deathsPerOneMillion":537,"totalTests":402000,"testsPerOneMillion":139785},
{"country":"Kyrgyzstan","cases":85441,"todayCases":43,"deaths":1441,"todayDeaths":2,"recovered":82184,"active":1816,"critical":50,"casesPerOneMillion":12964,"deathsPerOneMillion":219,"totalTests":697762,"testsPerOneMillion":105875},
{"country":"S. Korea","cases":83199,"todayCases":362,"deaths":1514,"todayDeaths":7,"recovered":73227,"active":8458,"critical":157,"casesPerOneMillion":1622,"deathsPerOneMillion":30,"totalTests":6115337,"testsPerOneMillion":119215},
{"country":"Uzbekistan","cases":79381,"todayCases":41,"deaths":622,"todayDeaths":0,"recovered":77829,"active":930,"critical":153,"casesPerOneMillion":2351,"deathsPerOneMillion":18,"totalTests":1377915,"testsPerOneMillion":40805},
{"country":"Latvia","cases":76282,"todayCases":773,"deaths":1443,"todayDeaths":12,"recovered":64528,"active":10311,"critical":97,"casesPerOneMillion":40723,"deathsPerOneMillion":770,"totalTests":1306305,"testsPerOneMillion":697371},
{"country":"Sri Lanka","cases":74484,"todayCases":428,"deaths":384,"todayDeaths":0,"recovered":67831,"active":6269,"critical":0,"casesPerOneMillion":3469,"deathsPerOneMillion":18,"totalTests":1831420,"testsPerOneMillion":85306},
{"country":"Ghana","cases":74347,"todayCases":0,"deaths":505,"todayDeaths":0,"recovered":66333,"active":7509,"critical":109,"casesPerOneMillion":2362,"deathsPerOneMillion":16,"totalTests":822643,"testsPerOneMillion":26140},
{"country":"Montenegro","cases":68476,"todayCases":472,"deaths":882,"todayDeaths":2,"recovered":58927,"active":8667,"critical":68,"casesPerOneMillion":109018,"deathsPerOneMillion":1404,"totalTests":252977,"testsPerOneMillion":402756},
{"country":"Zambia","cases":68454,"todayCases":773,"deaths":940,"todayDeaths":9,"recovered":62575,"active":4939,"critical":369,"casesPerOneMillion":3661,"deathsPerOneMillion":50,"totalTests":1010701,"testsPerOneMillion":54053},
{"country":"Norway","cases":66294,"todayCases":58,"deaths":592,"todayDeaths":0,"recovered":57004,"active":8698,"critical":18,"casesPerOneMillion":12170,"deathsPerOneMillion":109,"totalTests":3562573,"testsPerOneMillion":653989},
{"country":"Singapore","cases":59786,"todayCases":9,"deaths":29,"todayDeaths":0,"recovered":59604,"active":153,"critical":1,"casesPerOneMillion":10170,"deathsPerOneMillion":5,"totalTests":6799834,"testsPerOneMillion":1156673},
{"country":"El Salvador","cases":57428,"todayCases":0,"deaths":1727,"todayDeaths":0,"recovered":51983,"active":3718,"critical":58,"casesPerOneMillion":8826,"deathsPerOneMillion":265,"totalTests":717882,"testsPerOneMillion":110334},
{"country":"Afghanistan","cases":55492,"todayCases":19,"deaths":2427,"todayDeaths":0,"recovered":48392,"active":4673,"critical":1012,"casesPerOneMillion":1406,"deathsPerOneMillion":61,"totalTests":273745,"testsPerOneMillion":6936},
{"country":"Luxembourg","cases":52699,"todayCases":160,"deaths":606,"todayDeaths":0,"recovered":49301,"active":2792,"critical":10,"casesPerOneMillion":83352,"deathsPerOneMillion":958,"totalTests":1996270,"testsPerOneMillion":3157441},
{"country":"Estonia","cases":51749,"todayCases":760,"deaths":491,"todayDeaths":5,"recovered":41199,"active":10059,"critical":33,"casesPerOneMillion":38994,"deathsPerOneMillion":370,"totalTests":837593,"testsPerOneMillion":631151},
{"country":"Finland","cases":50007,"todayCases":435,"deaths":710,"todayDeaths":0,"recovered":40000,"active":9297,"critical":18,"casesPerOneMillion":9017,"deathsPerOneMillion":128,"totalTests":3059382,"testsPerOneMillion":551632},
{"country":"Mozambique","cases":49135,"todayCases":547,"deaths":525,"todayDeaths":11,"recovered":31506,"active":17104,"critical":0,"casesPerOneMillion":1546,"deathsPerOneMillion":17,"totalTests":380622,"testsPerOneMillion":11973},
{"country":"Uruguay","cases":47828,"todayCases":0,"deaths":527,"todayDeaths":0,"recovered":41966,"active":5335,"critical":79,"casesPerOneMillion":13739,"deathsPerOneMillion":151,"totalTests":920230,"testsPerOneMillion":264344},
{"country":"Uganda","cases":40019,"todayCases":40,"deaths":328,"todayDeaths":0,"recovered":14520,"active":25171,"critical":0,"casesPerOneMillion":858,"deathsPerOneMillion":7,"totalTests":854532,"testsPerOneMillion":18329},
{"country":"Cuba","cases":37483,"todayCases":888,"deaths":261,"todayDeaths":4,"recovered":32509,"active":4713,"critical":69,"casesPerOneMillion":3311,"deathsPerOneMillion":23,"totalTests":2124774,"testsPerOneMillion":187662},
{"country":"Namibia","cases":35797,"todayCases":243,"deaths":386,"todayDeaths":2,"recovered":34099,"active":1312,"critical":13,"casesPerOneMillion":13933,"deathsPerOneMillion":150,"totalTests":281997,"testsPerOneMillion":109761},
{"country":"Zimbabwe","cases":35045,"todayCases":0,"deaths":1393,"todayDeaths":0,"recovered":29959,"active":3693,"critical":12,"casesPerOneMillion":2337,"deathsPerOneMillion":93,"totalTests":311364,"testsPerOneMillion":20763},
{"country":"Cyprus","cases":32288,"todayCases":0,"deaths":219,"todayDeaths":0,"recovered":2057,"active":30012,"critical":29,"casesPerOneMillion":26623,"deathsPerOneMillion":181,"totalTests":1442930,"testsPerOneMillion":1189757},
{"country":"Cameroon","cases":32098,"todayCases":0,"deaths":479,"todayDeaths":0,"recovered":29609,"active":2010,"critical":25,"casesPerOneMillion":1191,"deathsPerOneMillion":18,"totalTests":149000,"testsPerOneMillion":5529},
{"country":"Ivory Coast","cases":30717,"todayCases":0,"deaths":173,"todayDeaths":0,"recovered":28914,"active":1630,"critical":0,"casesPerOneMillion":1147,"deathsPerOneMillion":6,"totalTests":378905,"testsPerOneMillion":14150},
{"country":"Senegal","cases":30641,"todayCases":265,"deaths":741,"todayDeaths":6,"recovered":25162,"active":4738,"critical":61,"casesPerOneMillion":1801,"deathsPerOneMillion":44,"totalTests":356372,"testsPerOneMillion":20946},
{"country":"Australia","cases":28892,"todayCases":5,"deaths":909,"todayDeaths":0,"recovered":26113,"active":1870,"critical":1,"casesPerOneMillion":1125,"deathsPerOneMillion":35,"totalTests":13577766,"testsPerOneMillion":528680},
{"country":"Malawi","cases":28630,"todayCases":0,"deaths":926,"todayDeaths":0,"recovered":13347,"active":14357,"critical":4,"casesPerOneMillion":1473,"deathsPerOneMillion":48,"totalTests":168776,"testsPerOneMillion":8685},
{"country":"Sudan","cases":27820,"todayCases":0,"deaths":1849,"todayDeaths":0,"recovered":22208,"active":3763,"critical":0,"casesPerOneMillion":625,"deathsPerOneMillion":42,"totalTests":0,"testsPerOneMillion":0},
{"country":"Botswana","cases":24926,"todayCases":0,"deaths":202,"todayDeaths":0,"recovered":21214,"active":3510,"critical":1,"casesPerOneMillion":10470,"deathsPerOneMillion":85,"totalTests":706026,"testsPerOneMillion":296554},
{"country":"Thailand","cases":24405,"todayCases":126,"deaths":80,"todayDeaths":0,"recovered":21180,"active":3145,"critical":1,"casesPerOneMillion":349,"deathsPerOneMillion":1,"totalTests":1217873,"testsPerOneMillion":17421},
{"country":"DRC","cases":24240,"todayCases":88,"deaths":693,"todayDeaths":2,"recovered":15217,"active":8330,"critical":0,"casesPerOneMillion":266,"deathsPerOneMillion":8,"totalTests":0,"testsPerOneMillion":0},
{"country":"Angola","cases":20294,"todayCases":0,"deaths":490,"todayDeaths":0,"recovered":18786,"active":1018,"critical":8,"casesPerOneMillion":606,"deathsPerOneMillion":15,"totalTests":178539,"testsPerOneMillion":5331},
{"country":"Malta","cases":19651,"todayCases":154,"deaths":290,"todayDeaths":2,"recovered":17017,"active":2344,"critical":18,"casesPerOneMillion":44432,"deathsPerOneMillion":656,"totalTests":651155,"testsPerOneMillion":1472295},
{"country":"Madagascar","cases":19360,"todayCases":0,"deaths":285,"todayDeaths":0,"recovered":18490,"active":585,"critical":16,"casesPerOneMillion":688,"deathsPerOneMillion":10,"totalTests":114282,"testsPerOneMillion":4063},
{"country":"Jamaica","cases":18830,"todayCases":303,"deaths":372,"todayDeaths":4,"recovered":12545,"active":5913,"critical":21,"casesPerOneMillion":6342,"deathsPerOneMillion":125,"totalTests":183961,"testsPerOneMillion":61957},
{"country":"French Polynesia","cases":18263,"todayCases":0,"deaths":135,"todayDeaths":0,"recovered":4842,"active":13286,"critical":5,"casesPerOneMillion":64782,"deathsPerOneMillion":479,"totalTests":26355,"testsPerOneMillion":93486},
{"country":"Maldives","cases":17507,"todayCases":0,"deaths":58,"todayDeaths":2,"recovered":15142,"active":2307,"critical":178,"casesPerOneMillion":32041,"deathsPerOneMillion":106,"totalTests":453895,"testsPerOneMillion":830707},
{"country":"Rwanda","cases":17200,"todayCases":0,"deaths":236,"todayDeaths":0,"recovered":13937,"active":3027,"critical":16,"casesPerOneMillion":1308,"deathsPerOneMillion":18,"totalTests":938902,"testsPerOneMillion":71406},
{"country":"Mauritania","cases":16954,"todayCases":0,"deaths":427,"todayDeaths":0,"recovered":16186,"active":341,"critical":23,"casesPerOneMillion":3589,"deathsPerOneMillion":90,"totalTests":156527,"testsPerOneMillion":33132},
{"country":"French Guiana","cases":16456,"todayCases":0,"deaths":80,"todayDeaths":0,"recovered":9995,"active":6381,"critical":11,"casesPerOneMillion":54236,"deathsPerOneMillion":264,"totalTests":143389,"testsPerOneMillion":472581},
{"country":"Eswatini","cases":16455,"todayCases":0,"deaths":630,"todayDeaths":0,"recovered":12140,"active":3685,"critical":67,"casesPerOneMillion":14093,"deathsPerOneMillion":540,"totalTests":141608,"testsPerOneMillion":121283},
{"country":"Guinea","cases":14860,"todayCases":0,"deaths":84,"todayDeaths":0,"recovered":14412,"active":364,"critical":24,"casesPerOneMillion":1113,"deathsPerOneMillion":6,"totalTests":127079,"testsPerOneMillion":9519},
{"country":"Syria","cases":14765,"todayCases":0,"deaths":971,"todayDeaths":0,"recovered":8520,"active":5274,"critical":0,"casesPerOneMillion":831,"deathsPerOneMillion":55,"totalTests":0,"testsPerOneMillion":0},
{"country":"Cabo Verde","cases":14647,"todayCases":0,"deaths":139,"todayDeaths":0,"recovered":14134,"active":374,"critical":23,"casesPerOneMillion":26169,"deathsPerOneMillion":248,"totalTests":113493,"testsPerOneMillion":202770},
{"country":"Tajikistan","cases":13308,"todayCases":0,"deaths":90,"todayDeaths":0,"recovered":13218,"active":0,"critical":0,"casesPerOneMillion":1376,"deathsPerOneMillion":9,"totalTests":0,"testsPerOneMillion":0},
{"country":"Mayotte","cases":12702,"todayCases":0,"deaths":72,"todayDeaths":0,"recovered":2964,"active":9666,"critical":28,"casesPerOneMillion":45881,"deathsPerOneMillion":260,"totalTests":88733,"testsPerOneMillion":320515},
{"country":"Gabon","cases":12577,"todayCases":0,"deaths":73,"todayDeaths":0,"recovered":11534,"active":970,"critical":22,"casesPerOneMillion":5570,"deathsPerOneMillion":32,"totalTests":480180,"testsPerOneMillion":212667},
{"country":"Belize","cases":12134,"todayCases":0,"deaths":313,"todayDeaths":0,"recovered":11623,"active":198,"critical":1,"casesPerOneMillion":30179,"deathsPerOneMillion":778,"totalTests":77212,"testsPerOneMillion":192039},
{"country":"Haiti","cases":12016,"todayCases":0,"deaths":246,"todayDeaths":0,"recovered":9258,"active":2512,"critical":0,"casesPerOneMillion":1046,"deathsPerOneMillion":21,"totalTests":49333,"testsPerOneMillion":4294},
{"country":"Burkina Faso","cases":11538,"todayCases":0,"deaths":137,"todayDeaths":0,"recovered":10758,"active":643,"critical":0,"casesPerOneMillion":543,"deathsPerOneMillion":6,"totalTests":0,"testsPerOneMillion":0},
{"country":"Réunion","cases":10907,"todayCases":0,"deaths":47,"todayDeaths":0,"recovered":10049,"active":811,"critical":17,"casesPerOneMillion":12129,"deathsPerOneMillion":52,"totalTests":98785,"testsPerOneMillion":109851},
{"country":"Hong Kong","cases":10768,"todayCases":12,"deaths":193,"todayDeaths":1,"recovered":10160,"active":415,"critical":21,"casesPerOneMillion":1429,"deathsPerOneMillion":26,"totalTests":7089664,"testsPerOneMillion":940951},
{"country":"Andorra","cases":10427,"todayCases":0,"deaths":106,"todayDeaths":0,"recovered":9833,"active":488,"critical":15,"casesPerOneMillion":134817,"deathsPerOneMillion":1371,"totalTests":193595,"testsPerOneMillion":2503103},
{"country":"Lesotho","cases":9852,"todayCases":0,"deaths":225,"todayDeaths":0,"recovered":2940,"active":6687,"critical":0,"casesPerOneMillion":4576,"deathsPerOneMillion":105,"totalTests":53730,"testsPerOneMillion":24959},
{"country":"Guadeloupe","cases":9351,"todayCases":0,"deaths":156,"todayDeaths":0,"recovered":2242,"active":6953,"critical":5,"casesPerOneMillion":23368,"deathsPerOneMillion":390,"totalTests":124404,"testsPerOneMillion":310881},
{"country":"Suriname","cases":8778,"todayCases":0,"deaths":166,"todayDeaths":0,"recovered":8179,"active":433,"critical":7,"casesPerOneMillion":14881,"deathsPerOneMillion":281,"totalTests":38924,"testsPerOneMillion":65986},
{"country":"Congo","cases":8419,"todayCases":0,"deaths":123,"todayDeaths":0,"recovered":7019,"active":1277,"critical":0,"casesPerOneMillion":1503,"deathsPerOneMillion":22,"totalTests":92500,"testsPerOneMillion":16514},
{"country":"Bahamas","cases":8311,"todayCases":0,"deaths":178,"todayDeaths":0,"recovered":6931,"active":1202,"critical":1,"casesPerOneMillion":21010,"deathsPerOneMillion":450,"totalTests":63374,"testsPerOneMillion":160211},
{"country":"Mali","cases":8222,"todayCases":0,"deaths":340,"todayDeaths":0,"recovered":6154,"active":1728,"critical":0,"casesPerOneMillion":399,"deathsPerOneMillion":16,"totalTests":145929,"testsPerOneMillion":7082},
{"country":"Guyana","cases":8181,"todayCases":0,"deaths":186,"todayDeaths":0,"recovered":7281,"active":714,"critical":7,"casesPerOneMillion":10370,"deathsPerOneMillion":236,"totalTests":54546,"testsPerOneMillion":69142},
{"country":"Trinidad and Tobago","cases":7637,"todayCases":0,"deaths":137,"todayDeaths":0,"recovered":7323,"active":177,"critical":2,"casesPerOneMillion":5446,"deathsPerOneMillion":98,"totalTests":89241,"testsPerOneMillion":63639},
{"country":"Aruba","cases":7368,"todayCases":0,"deaths":68,"todayDeaths":0,"recovered":7017,"active":283,"critical":11,"casesPerOneMillion":68830,"deathsPerOneMillion":635,"totalTests":93566,"testsPerOneMillion":874065},
{"country":"Martinique","cases":6553,"todayCases":0,"deaths":45,"todayDeaths":0,"recovered":98,"active":6410,"critical":3,"casesPerOneMillion":17471,"deathsPerOneMillion":120,"totalTests":94694,"testsPerOneMillion":252461},
{"country":"Nicaragua","cases":6347,"todayCases":0,"deaths":171,"todayDeaths":0,"recovered":4225,"active":1951,"critical":0,"casesPerOneMillion":951,"deathsPerOneMillion":26,"totalTests":0,"testsPerOneMillion":0},
{"country":"Iceland","cases":6033,"todayCases":0,"deaths":29,"todayDeaths":0,"recovered":5978,"active":26,"critical":0,"casesPerOneMillion":17609,"deathsPerOneMillion":85,"totalTests":488851,"testsPerOneMillion":1426831},
{"country":"Djibouti","cases":5967,"todayCases":0,"deaths":63,"todayDeaths":0,"recovered":5854,"active":50,"critical":0,"casesPerOneMillion":5986,"deathsPerOneMillion":63,"totalTests":111672,"testsPerOneMillion":112025},
{"country":"Togo","cases":5757,"todayCases":0,"deaths":80,"todayDeaths":0,"recovered":4899,"active":778,"critical":0,"casesPerOneMillion":686,"deathsPerOneMillion":10,"totalTests":218125,"testsPerOneMillion":25975},
{"country":"Equatorial Guinea","cases":5694,"todayCases":31,"deaths":87,"todayDeaths":0,"recovered":5426,"active":181,"critical":1,"casesPerOneMillion":3979,"deathsPerOneMillion":61,"totalTests":93607,"testsPerOneMillion":65411},
{"country":"South Sudan","cases":5310,"todayCases":176,"deaths":74,"todayDeaths":2,"recovered":3769,"active":1467,"critical":9,"casesPerOneMillion":471,"deathsPerOneMillion":7,"totalTests":97068,"testsPerOneMillion":8609},
{"country":"Somalia","cases":5075,"todayCases":0,"deaths":146,"todayDeaths":0,"recovered":3733,"active":1196,"critical":0,"casesPerOneMillion":314,"deathsPerOneMillion":9,"totalTests":0,"testsPerOneMillion":0},
{"country":"CAR","cases":4996,"todayCases":0,"deaths":63,"todayDeaths":0,"recovered":4885,"active":48,"critical":2,"casesPerOneMillion":1023,"deathsPerOneMillion":13,"totalTests":35523,"testsPerOneMillion":7277},
{"country":"Niger","cases":4678,"todayCases":0,"deaths":169,"todayDeaths":0,"recovered":4135,"active":374,"critical":3,"casesPerOneMillion":189,"deathsPerOneMillion":7,"totalTests":76869,"testsPerOneMillion":3107},
{"country":"Curaçao","cases":4643,"todayCases":0,"deaths":22,"todayDeaths":0,"recovered":4559,"active":62,"critical":2,"casesPerOneMillion":28223,"deathsPerOneMillion":134,"totalTests":46639,"testsPerOneMillion":283504},
{"country":"Benin","cases":4560,"todayCases":0,"deaths":56,"todayDeaths":0,"recovered":3772,"active":732,"critical":0,"casesPerOneMillion":370,"deathsPerOneMillion":5,"totalTests":443877,"testsPerOneMillion":36037},
{"country":"Gambia","cases":4302,"todayCases":0,"deaths":135,"todayDeaths":0,"recovered":3891,"active":276,"critical":1,"casesPerOneMillion":1750,"deathsPerOneMillion":55,"totalTests":38070,"testsPerOneMillion":15487},
{"country":"Gibraltar","cases":4215,"todayCases":3,"deaths":84,"todayDeaths":0,"recovered":4054,"active":77,"critical":8,"casesPerOneMillion":125130,"deathsPerOneMillion":2494,"totalTests":172413,"testsPerOneMillion":5118391},
{"country":"Channel Islands","cases":3980,"todayCases":0,"deaths":83,"todayDeaths":0,"recovered":3568,"active":329,"critical":4,"casesPerOneMillion":22762,"deathsPerOneMillion":475,"totalTests":342089,"testsPerOneMillion":1956438},
{"country":"Sierra Leone","cases":3817,"todayCases":0,"deaths":79,"todayDeaths":0,"recovered":2535,"active":1203,"critical":0,"casesPerOneMillion":473,"deathsPerOneMillion":10,"totalTests":116448,"testsPerOneMillion":14418},
{"country":"Chad","cases":3597,"todayCases":0,"deaths":128,"todayDeaths":0,"recovered":3131,"active":338,"critical":0,"casesPerOneMillion":215,"deathsPerOneMillion":8,"totalTests":0,"testsPerOneMillion":0},
{"country":"Comoros","cases":3290,"todayCases":0,"deaths":125,"todayDeaths":0,"recovered":2730,"active":435,"critical":0,"casesPerOneMillion":3735,"deathsPerOneMillion":142,"totalTests":0,"testsPerOneMillion":0},
{"country":"San Marino","cases":3278,"todayCases":0,"deaths":72,"todayDeaths":0,"recovered":2956,"active":250,"critical":6,"casesPerOneMillion":96483,"deathsPerOneMillion":2119,"totalTests":37012,"testsPerOneMillion":1089389},
{"country":"Guinea-Bissau","cases":2869,"todayCases":0,"deaths":46,"todayDeaths":0,"recovered":2432,"active":391,"critical":3,"casesPerOneMillion":1437,"deathsPerOneMillion":23,"totalTests":47889,"testsPerOneMillion":23987},
{"country":"Liechtenstein","cases":2538,"todayCases":1,"deaths":52,"todayDeaths":0,"recovered":2457,"active":29,"critical":2,"casesPerOneMillion":66447,"deathsPerOneMillion":1361,"totalTests":26039,"testsPerOneMillion":681721},
{"country":"Saint Lucia","cases":2487,"todayCases":0,"deaths":23,"todayDeaths":0,"recovered":1654,"active":810,"critical":2,"casesPerOneMillion":13506,"deathsPerOneMillion":125,"totalTests":27885,"testsPerOneMillion":151428},
{"country":"Eritrea","cases":2429,"todayCases":0,"deaths":7,"todayDeaths":0,"recovered":1828,"active":594,"critical":0,"casesPerOneMillion":679,"deathsPerOneMillion":2,"totalTests":23693,"testsPerOneMillion":6624},
{"country":"New Zealand","cases":2328,"todayCases":2,"deaths":25,"todayDeaths":0,"recovered":2258,"active":45,"critical":0,"casesPerOneMillion":465,"deathsPerOneMillion":5,"totalTests":1583469,"testsPerOneMillion":316561},
{"country":"Mongolia","cases":2293,"todayCases":46,"deaths":2,"todayDeaths":0,"recovered":1653,"active":638,"critical":5,"casesPerOneMillion":693,"deathsPerOneMillion":0,"totalTests":1308949,"testsPerOneMillion":395361},
{"country":"Vietnam","cases":2195,"todayCases":53,"deaths":35,"todayDeaths":0,"recovered":1529,"active":631,"critical":0,"casesPerOneMillion":22,"deathsPerOneMillion":0,"totalTests":1529651,"testsPerOneMillion":15628},
{"country":"Yemen","cases":2136,"todayCases":0,"deaths":616,"todayDeaths":0,"recovered":1430,"active":90,"critical":23,"casesPerOneMillion":71,"deathsPerOneMillion":20,"totalTests":17404,"testsPerOneMillion":576},
{"country":"Sint Maarten","cases":1991,"todayCases":0,"deaths":27,"todayDeaths":0,"recovered":1870,"active":94,"critical":1,"casesPerOneMillion":46114,"deathsPerOneMillion":625,"totalTests":16065,"testsPerOneMillion":372082},
{"country":"Liberia","cases":1956,"todayCases":0,"deaths":84,"todayDeaths":0,"recovered":1770,"active":102,"critical":2,"casesPerOneMillion":381,"deathsPerOneMillion":16,"totalTests":67081,"testsPerOneMillion":13075},
{"country":"Barbados","cases":1947,"todayCases":0,"deaths":21,"todayDeaths":0,"recovered":1587,"active":339,"critical":1,"casesPerOneMillion":6770,"deathsPerOneMillion":73,"totalTests":110086,"testsPerOneMillion":382784},
{"country":"Turks and Caicos","cases":1833,"todayCases":0,"deaths":12,"todayDeaths":0,"recovered":1433,"active":388,"critical":8,"casesPerOneMillion":46952,"deathsPerOneMillion":307,"totalTests":15932,"testsPerOneMillion":408094},
{"country":"Seychelles","cases":1802,"todayCases":0,"deaths":7,"todayDeaths":0,"recovered":1236,"active":559,"critical":0,"casesPerOneMillion":18253,"deathsPerOneMillion":71,"totalTests":5200,"testsPerOneMillion":52672},
{"country":"Burundi","cases":1797,"todayCases":0,"deaths":3,"todayDeaths":0,"recovered":773,"active":1021,"critical":0,"casesPerOneMillion":148,"deathsPerOneMillion":0,"totalTests":90019,"testsPerOneMillion":7435},
{"country":"Monaco","cases":1752,"todayCases":0,"deaths":21,"todayDeaths":0,"recovered":1490,"active":241,"critical":7,"casesPerOneMillion":44451,"deathsPerOneMillion":533,"totalTests":51953,"testsPerOneMillion":1318136},
{"country":"Sao Tome and Principe","cases":1478,"todayCases":0,"deaths":19,"todayDeaths":0,"recovered":1100,"active":359,"critical":0,"casesPerOneMillion":6668,"deathsPerOneMillion":86,"totalTests":11592,"testsPerOneMillion":52297},
{"country":"St. Vincent Grenadines","cases":1418,"todayCases":23,"deaths":6,"todayDeaths":0,"recovered":554,"active":858,"critical":2,"casesPerOneMillion":12757,"deathsPerOneMillion":54,"totalTests":33210,"testsPerOneMillion":298764},
{"country":"Saint Martin","cases":1408,"todayCases":0,"deaths":12,"todayDeaths":0,"recovered":1050,"active":346,"critical":7,"casesPerOneMillion":36037,"deathsPerOneMillion":307,"totalTests":18619,"testsPerOneMillion":476543},
{"country":"Taiwan","cases":937,"todayCases":0,"deaths":9,"todayDeaths":0,"recovered":859,"active":69,"critical":0,"casesPerOneMillion":39,"deathsPerOneMillion":0,"totalTests":167278,"testsPerOneMillion":7016},
{"country":"Papua New Guinea","cases":914,"todayCases":0,"deaths":9,"todayDeaths":0,"recovered":846,"active":59,"critical":0,"casesPerOneMillion":101,"deathsPerOneMillion":1,"totalTests":43728,"testsPerOneMillion":4831},
{"country":"Bhutan","cases":863,"todayCases":0,"deaths":1,"todayDeaths":0,"recovered":855,"active":7,"critical":0,"casesPerOneMillion":1111,"deathsPerOneMillion":1,"totalTests":496858,"testsPerOneMillion":639580},
{"country":"Diamond Princess","cases":712,"todayCases":0,"deaths":13,"todayDeaths":0,"recovered":699,"active":0,"critical":0,"casesPerOneMillion":0,"deathsPerOneMillion":0,"totalTests":0,"testsPerOneMillion":0},
{"country":"Bermuda","cases":694,"todayCases":0,"deaths":12,"todayDeaths":0,"recovered":675,"active":7,"critical":3,"casesPerOneMillion":11169,"deathsPerOneMillion":193,"totalTests":168422,"testsPerOneMillion":2710582},
{"country":"Faeroe Islands","cases":657,"todayCases":0,"deaths":1,"todayDeaths":0,"recovered":653,"active":3,"critical":1,"casesPerOneMillion":13414,"deathsPerOneMillion":20,"totalTests":226225,"testsPerOneMillion":4618911},
{"country":"Mauritius","cases":595,"todayCases":0,"deaths":10,"todayDeaths":0,"recovered":546,"active":39,"critical":0,"casesPerOneMillion":467,"deathsPerOneMillion":8,"totalTests":289552,"testsPerOneMillion":227443},
{"country":"Tanzania","cases":509,"todayCases":0,"deaths":21,"todayDeaths":0,"recovered":183,"active":305,"critical":7,"casesPerOneMillion":8,"deathsPerOneMillion":0,"totalTests":0,"testsPerOneMillion":0},
{"country":"Cambodia","cases":479,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":463,"active":16,"critical":0,"casesPerOneMillion":28,"deathsPerOneMillion":0,"totalTests":428016,"testsPerOneMillion":25384},
{"country":"St. Barth","cases":455,"todayCases":0,"deaths":1,"todayDeaths":0,"recovered":247,"active":207,"critical":0,"casesPerOneMillion":45978,"deathsPerOneMillion":101,"totalTests":15063,"testsPerOneMillion":1522130},
{"country":"Isle of Man","cases":436,"todayCases":0,"deaths":25,"todayDeaths":0,"recovered":408,"active":3,"critical":0,"casesPerOneMillion":5111,"deathsPerOneMillion":293,"totalTests":29876,"testsPerOneMillion":350197},
{"country":"Antigua and Barbuda","cases":419,"todayCases":0,"deaths":9,"todayDeaths":0,"recovered":199,"active":211,"critical":1,"casesPerOneMillion":4257,"deathsPerOneMillion":91,"totalTests":11607,"testsPerOneMillion":117921},
{"country":"Cayman Islands","cases":416,"todayCases":0,"deaths":2,"todayDeaths":0,"recovered":378,"active":36,"critical":1,"casesPerOneMillion":6284,"deathsPerOneMillion":30,"totalTests":70163,"testsPerOneMillion":1059896},
{"country":"Caribbean Netherlands","cases":360,"todayCases":0,"deaths":3,"todayDeaths":0,"recovered":244,"active":113,"critical":0,"casesPerOneMillion":13650,"deathsPerOneMillion":114,"totalTests":5145,"testsPerOneMillion":195078},
{"country":"Brunei","cases":184,"todayCases":0,"deaths":3,"todayDeaths":0,"recovered":175,"active":6,"critical":0,"casesPerOneMillion":418,"deathsPerOneMillion":7,"totalTests":94954,"testsPerOneMillion":215772},
{"country":"Grenada","cases":148,"todayCases":0,"deaths":1,"todayDeaths":0,"recovered":146,"active":1,"critical":0,"casesPerOneMillion":1312,"deathsPerOneMillion":9,"totalTests":20288,"testsPerOneMillion":179785},
{"country":"Dominica","cases":121,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":110,"active":11,"critical":0,"casesPerOneMillion":1678,"deathsPerOneMillion":0,"totalTests":9977,"testsPerOneMillion":138383},
{"country":"British Virgin Islands","cases":114,"todayCases":0,"deaths":1,"todayDeaths":0,"recovered":95,"active":18,"critical":0,"casesPerOneMillion":3756,"deathsPerOneMillion":33,"totalTests":13223,"testsPerOneMillion":435612},
{"country":"Timor-Leste","cases":101,"todayCases":1,"deaths":0,"todayDeaths":0,"recovered":62,"active":39,"critical":0,"casesPerOneMillion":76,"deathsPerOneMillion":0,"totalTests":19919,"testsPerOneMillion":14933},
{"country":"Fiji","cases":56,"todayCases":0,"deaths":2,"todayDeaths":0,"recovered":54,"active":0,"critical":0,"casesPerOneMillion":62,"deathsPerOneMillion":2,"totalTests":27932,"testsPerOneMillion":31020},
{"country":"Falkland Islands","cases":53,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":38,"active":15,"critical":0,"casesPerOneMillion":14963,"deathsPerOneMillion":0,"totalTests":6940,"testsPerOneMillion":1959345},
{"country":"New Caledonia","cases":52,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":49,"active":3,"critical":0,"casesPerOneMillion":181,"deathsPerOneMillion":0,"totalTests":21897,"testsPerOneMillion":76245},
{"country":"Macao","cases":48,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":46,"active":2,"critical":0,"casesPerOneMillion":73,"deathsPerOneMillion":0,"totalTests":4369,"testsPerOneMillion":6672},
{"country":"Laos","cases":45,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":41,"active":4,"critical":0,"casesPerOneMillion":6,"deathsPerOneMillion":0,"totalTests":107208,"testsPerOneMillion":14605},
{"country":"Saint Kitts and Nevis","cases":40,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":38,"active":2,"critical":0,"casesPerOneMillion":749,"deathsPerOneMillion":0,"totalTests":8293,"testsPerOneMillion":155207},
{"country":"Greenland","cases":30,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":30,"active":0,"critical":0,"casesPerOneMillion":528,"deathsPerOneMillion":0,"totalTests":17382,"testsPerOneMillion":305854},
{"country":"Vatican City","cases":27,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":15,"active":12,"critical":0,"casesPerOneMillion":33666,"deathsPerOneMillion":0,"totalTests":0,"testsPerOneMillion":0},
{"country":"Saint Pierre Miquelon","cases":24,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":16,"active":8,"critical":0,"casesPerOneMillion":4155,"deathsPerOneMillion":0,"totalTests":3729,"testsPerOneMillion":645602},
{"country":"Montserrat","cases":19,"todayCases":0,"deaths":1,"todayDeaths":0,"recovered":13,"active":5,"critical":0,"casesPerOneMillion":3805,"deathsPerOneMillion":200,"totalTests":930,"testsPerOneMillion":186223},
{"country":"Anguilla","cases":18,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":16,"active":2,"critical":0,"casesPerOneMillion":1193,"deathsPerOneMillion":0,"totalTests":8256,"testsPerOneMillion":547262},
{"country":"Solomon Islands","cases":18,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":14,"active":4,"critical":0,"casesPerOneMillion":26,"deathsPerOneMillion":0,"totalTests":4500,"testsPerOneMillion":6454},
{"country":"Western Sahara","cases":10,"todayCases":0,"deaths":1,"todayDeaths":0,"recovered":8,"active":1,"critical":0,"casesPerOneMillion":16,"deathsPerOneMillion":2,"totalTests":0,"testsPerOneMillion":0},
{"country":"MS Zaandam","cases":9,"todayCases":0,"deaths":2,"todayDeaths":0,"recovered":7,"active":0,"critical":0,"casesPerOneMillion":0,"deathsPerOneMillion":0,"totalTests":0,"testsPerOneMillion":0},
{"country":"Wallis and Futuna","cases":9,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":5,"active":4,"critical":0,"casesPerOneMillion":810,"deathsPerOneMillion":0,"totalTests":1202,"testsPerOneMillion":108132},
{"country":"Marshall Islands","cases":4,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":4,"active":0,"critical":0,"casesPerOneMillion":67,"deathsPerOneMillion":0,"totalTests":0,"testsPerOneMillion":0},
{"country":"Samoa","cases":3,"todayCases":1,"deaths":0,"todayDeaths":0,"recovered":2,"active":1,"critical":0,"casesPerOneMillion":15,"deathsPerOneMillion":0,"totalTests":0,"testsPerOneMillion":0},
{"country":"Micronesia","cases":1,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":1,"active":0,"critical":0,"casesPerOneMillion":9,"deathsPerOneMillion":0,"totalTests":0,"testsPerOneMillion":0},
{"country":"Vanuatu","cases":1,"todayCases":0,"deaths":0,"todayDeaths":0,"recovered":1,"active":0,"critical":0,"casesPerOneMillion":3,"deathsPerOneMillion":0,"totalTests":470,"testsPerOneMillion":1509},
{"country":"China","cases":89756,"todayCases":8,"deaths":4636,"todayDeaths":0,"recovered":84357,"active":763,"critical":12,"casesPerOneMillion":62,"deathsPerOneMillion":3,"totalTests":160000000,"testsPerOneMillion":111163}];*/

// while(x<=y.length){
    
//     document.write( y[x]["country"]+"<br>")
//  ++x
// }

//buildtable(y)


//function buildtable(data){
    //var table=

    /*for(i=0; i<y.length;i++){
        var row=`<tr>
                    <td>${y[i].country}</td>
                    <td>${y[i].cases}</td>
                    <td>${y[i].todayCases}</td>
                    <td>${y[i].deaths}</td>
                    <td>${y[i].todayDeaths}</td>
                    <td>${y[i].recovered}</td>
                    
                    <td>${y[i].critical}</td>
                    <td>${y[i].casesPerOneMillion}</td>
                    <td>${y[i].deathsPerOneMillion}</td>
                    <td>${y[i].totalTests}</td>
                    <td>${y[i].testsPerOneMillion}</td>

                </tr>`

                document.querySelector(".mytable").innerHTML += row
    }*/
//}

url="https://coronavirus-19-api.herokuapp.com/countries"
fetch(url).then((response)=>{
    
    return response.json()
}).then((data)=>{
    
        for(i=0; i<data.length;i++){
        var row=`<tr>
                    <td>${data[i].country}</td>
                    <td>${data[i].cases}</td>
                    <td>${data[i].todayCases}</td>
                    <td>${data[i].deaths}</td>
                    <td>${data[i].todayDeaths}</td>
                    <td>${data[i].recovered}</td>
                    <td>${data[i].active}</td>
                    <td>${data[i].critical}</td>
                    <td>${data[i].casesPerOneMillion}</td>
                    <td>${data[i].deathsPerOneMillion}</td>
                    <td>${data[i].totalTests}</td>
                    <td>${data[i].testsPerOneMillion}</td>

                </tr>`

                document.querySelector(".mytable").innerHTML += row;
        }
})


