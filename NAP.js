const urlParams = new URLSearchParams(window.location.search);

const hymnTitle = urlParams.get('title');

const hymnsData = {

"1. UNYIBWIRE EBYA YESU": "1. Unyibwire ebia Yesui, saka bio komutima, Bianganyibohola kundu, okuebibi binene.\nTuangamwimbira nomuhwa oyo watuholera, Erihenia oko Mungu nobuholo oko kihugho.\n\nUnyibwire ebia Yesui, saka bio komutima, Bianganyibohola kundu, okuebibi binene.\n\n2. Tuangabwira bandu mwatsi, owasihire kundu, Ngoko tuangabana ngebe, Omuesi Wa Ye Kristo.\nUamamukwama nomuhwa, inia kueria kuebibi, iwabana ubutseme nengebe, eyo yerikota",
"2. ERIA KOKALVARI YESU MWATUHALO": "1. Eria kokalvari, mohabya omuti, musalaba Wesisoni, Okomuti oyo omubuya moakwa. Busana na bandu babi.\n\nNgandipipa Yesu Mulamia, oyo warihire ebibi, moamba engebe yerikota, naghe namwanzire kwenenene.\nNgandipipa iye Yesu mubuya, eya Yesu Kristo.\n\n2. Oko muti oyo, mobagalyaYesu, nesiotutu siomo 'biala, neritumo erio moriamutsimita. Bosana neritulamya.\n\n3. Ingye nakwamire, Yesu wakalvari, Omulamia wekihugo, nikwa ngandilinda, inyinemotula. Engulu yowene yiwe",
"3. YESU MOATUGENYERA KUNDU": "1. Yesu mwatughenyera kundu, moakwa aho tuangakwirire, eria ko kitwa kiakalvari. Moatuholera okomuti.\n\nHaleluya, abiritulusia kwebibi,\nHaleluya, Obuengebuwebulabire.\nHaleluya, haleluya, Haleluya, haleluya.\n\n2. Ebibi bietu ni binene, ebialeka iniasyahola, buenge buwe bualekire. Iniaturihira 'lubanza\n\n3. Obuenge buwe buasyatuma, inalola kobusu buwe, musasi wuwe mutika. Erinyihira ewa Yesu",
"4. MUSONDOLI WA BAKRISTO": "1. Yesu musondoli wabakristo, Yesu muanze welubula, Abirasihali nga Yesu, Owendata alabire.\n\nHaleluya kani Yesu, Haleluya, werikota,\nAkanyilamaya, erinyibika, namaka erihika oko nduli.\n\n2. Yesu uri maka wabakristo, Yesu ukatukindira, Mwatoka erilengwako kera, eritutokisya netu.\n\n3. Yesu nabuene Mungu mubuya, Yesu akasibikaya, Eno ndi mugheni kutse nzama, eria Yesu andindire.","5. TUIMBE OLUIMBO LUOMUATSI": "1. Tuimbe oluimbo luamuatsi wa Yesu Omulamia, Oyo wakwa Okomuti, nerilamia 'kihugo.\n\nEga, tupipe Muami Wetu,\nOyo watuha ngebe,\nIye mwatukola kibuya,\nAbirituwanituwania.\n\n2. Omulamya Yesu kristo mwalua omobutuku, Mwalola okobulighe, nerituha 'butseme.\n\n3. Nabya 'mundu weritala monzira yamalolo, Yesu mwanyibirikira, mwanyilusyakwebibi.",
"6. TUPIPE MUNGU NI MWENGE": "1. Tupipe Mungu ni muenge, tumupipe 'bandu bosi, Mumupipe abalaika, Ise, Mwana n'Ekirimu.\n\n2. Akario ako tukarya, Mungu abirituhako, Abirituha engebe, wasingya komulamia.","7. MUNGU NI MUENGE": "1. Mungu ni mwenge, kamuatuma Yesu neritulamia lino mo 'nzira nyibi.\n\nAleluya tumukwame, Aleluya kundu, Aleluya YesuKristo, utuwanaye.\n\n2. Tuyire Yesu, Muinene ngomuami, kosangwa 'birihola neritulamia.\n\n3. Utusulaye, nolwanzo loluwawe, n'obutseme bunene bwe biro biosi.\n\n4. Tuleke bindu bye 'kihugo kino, tukwame Yesu Kristo, Mukama Wetu.",
"8. YESU MWAHOLA KOMUTI":"HORATIUS BONAR, Arr./ JAMES MC GRANAHAN\n\n1. Yesu mwahola komuti, aleluya, aleluya, e rikinda e Satana, aleluya, aleluya, erihungarie lifere nekiniga kie kihugo, mobitetamukindaho, mupipe o' Mukama.\n\nHaleluya, haleluya, tupipe o' Mukama Yesu,\nHaleluya, haleluya, mwalihire ebibi.\n\n2. Okomusalaba oyo, aleluya, aleluya, Yesu mwatuha omuinda,\naleluya, aleluya, erighanyira rio Mungu riasa busana na Yesu,\nOyo Waliha ebibi, tupipe oMukama.\n\n3. Wasingya tukaha Yesu, aleluya, aleluya, Omulamia no'Mukama,\naleluya, aleluya, ka moatukola kibuya,\nmoakwa ho tuangakwirire, akandisyaya akandi, tupipe oMukama.",
"9. NOYO ANZIRE ASE": "P.P.B./ P.P.BLISS\n\n1. Yesu mwatuanza isitumwasi, mwakwa okomuti neritulamya, mwaheka ebibi bya bandubosi. Ekio ni kiawasingya \n\nNoyoanzire, ase ku Yesu, asyabana ngebe yo yerikota, oyo amawira, amakwa'nyota, angahika ku Yesu.\n\n2. Birikira 'bandu oko Yesu, baleke enzira yerisyahera, bahike ku Yesu, ni Mulamia, oyo anzire, ase.\n\n3. Nerio situlinde balikietu, luyi lwelubula lukingukere, Yesu ni'nzir'eyo, tuangakwamire. Nawe wangingira mo.",
"10. INGYE NYANZIRE ENGULU": "1. Ingye nyanzire engulu, yo ya Yesu Mukama, eritula omwatsi woyo wahola komuti,\nwoyo walwa moisinda, woyo kandisyahika, Neritutwal'ewuwe, aherihenia \n\nIngye nangatulayo, okobihanda biosi, olwanzo lwa Yesu Kristo, Mwami oyo wetu.\n\n2. Ingye nyanzire mubiri, wa Yesu wakalvari, kosangwa mwanyilusya kolu banza luerihera,\nneririha riebibi, mwanyitongolya kundu, nekio kiokiangatuma inamukolera.\n\n3. Ingye nyanzir'eritula, omwatsi womusasi, nesiotutu mo'biala, neritumo molukanga,\nmobyagalia Mukama, Oyo mubughirire, kosangwa atwanzire, wasingya ku Yesu.\n\n4. Ingye nyanzire kitabu, ekiomukama Kristo, kikatubwir'omwatsi, wobuholo ewoMungu,\nkikatubwir'omwatsi, wengebe yerikota, alabire emiatsi yosi ye kihugho.",
"11. INGYE NALAMIRE MOMUSASI": "1. Ingye nalamire momusasi, woyo wanyiholera oko muti, abirinyibika mo lwanzo luwe, nabiribana engebe yiwe.\n\nNindi?(Ka ni Yesu, ka ni Yesu) ni Yesu akabugira ebibi,\nNiki? (Nimusasi, nimusasi) ni musasi woyo wahola komuti.\n\n2. Kera tuabya bana bekihugho, tuaghenda tukakola bibi biakio,\nYesu Kristo mwaliha ndihi yetu, mwatuholera oko Kalvari.\n\n3. Lino tuangabwira bandu mwatsi, ko Yesu mwaholerabo komuti, tuabya ngabo kera Yesu mwatuanza, nabo bangaminya lwanzo luwe.",
"12. KERA KERA MONAKOLA": "1. Kera kera monakola ebibi bya balimu, Nikwa lino Yesu Kristo amanyilamia kundu.\n\nOmutima owaghe amanza, oko ebinywa bya Yesu,\nOmukama owenenga, kayo mwira mubuya.\n\n2. Yesu Kristo kamwanasa bosana nerilamia, Erihera eria bandu nerihabo butseme.\n\n3. Yesu Kristo kamwahola bosana nerieria, mitima ya bandu babi nerilusya ebibi.",
"13. MUNGU NI KAGALA KETU": "1. Mungu ni kaghala ketu, wasingya ku Yesu, Siendisyasiga buwe na kera na kera.\n\n2. Hakuhi noMungu wetu, sihari obuba, Satana abirikindwa tutsemire kundu.\n\n3. Yehova Mukama wetu, Oyo werikota, Mwabumba 'bihugho biosi na kagala kuwe.",
"14. SULIWAHIKA KU YESU MULAMYA": "1. Suliwahika ku Yesu Mulamia? Suliwahenia momusasi? Wabirikiriya erina riwe? Omutima wawe erire?\n\nMutima (Mutima) erire (erire), Erire momusasi wuwe? (waYesu?) Wabirikiriya ku Yesu Kristo? Werire momusasi wuwe?\n\n2. Unemusaba nomuhwa munene? Omutima wawe erire? Unemutula engulu yowene ? Nomutima wawe erire?\n\n3. Unemulinda Omukama Yesu? Nomutima oyo erire? Wabirileka enzira yebibi? Omutima wawe erire?","16. OMUTIMA WAGHE AMABINDUKIRA": "1. Omutima waghe amabindukira, Omukama wetu Yesu ekyakakala kiwe kyabirihika, Ekiri Yesu mwingira.\n\nEkiro Yesu mwingira\n(Yesu mwingira, Yesu mwingira)\nmuno momutima waghe\n(muno momutima oyuwaghe)\nobutseme bungi mobwahika kundu, ekiro Yesu mwingira.\n\n2. Nabirileka erikwama Satana ekiro Yesu mwingira abirieria bibi byaghe ebiosi, ekiro Yesu mwingira.\n\n3. Monayiketera oMukama Kristo ekiro Yesu mwingira atokire emiatsi eyosi yaghe, wasingya ko Yesu Kristo.",
"15. BYANGABYA NGE NZURURU":"FANNY J. CROSBY/WH DOANE\n\n1. Ebibi ebikinire biangabya ngomusohe; sohe. Omuhindania(omuhinda) webibi, angabya mue si.\n\nEbibi ebikinire ebibi ebikinire,\nBiangabya nge nzururu, biangabya ngenzururu.\n\n2. Tasuba lino ko Mungu hulikirira tahi, tahi, Omulenge Owa Yesu, wamowa tahi.\n\n3. Angabugira ebibi ibiakuhwako biosi; biosi, Tasamalirako Yesu, embiro ihwe.",
"16. OMUTIMA WAGE AMABINDUKIRA": "R. H. MC DANIEL/CHAS. H. GABRIEL\n\n1. Omutima wage amabindukira, Omukama wetu Yesu, ekiakakala kiwe kiabirihika, Ekiro Yesu muingira.\n\nEkiro Yesu muingira muno momutima wage\n(Yesu muingira, Yesu muingira, muno momutima oyu wage)\nObutseme bungi mobwahika kundu, Ekiro Yesu muingira.\n\n2. Nabirileka erikwama Satana ekiro Yesu moingira abirieria bibi byage ebyosi, Ekiro Yesu muingira.\n\n3. Monayiketera omukama Kristo ekiro Yesu moingira, atokire emiatsi eyosi yage, Wasingya ko Yesu Kristo.",
"17. MWANGABUTWA 'KANDI": "1. Nikodemo mwasa ko Yesu kera, eribulya enzira yerilama Nerio Omukama mwamusubiria, mwangabutwa kandi(kandi).\n\nMuangabutwa akandi (kandi), muangabutwa akandi (kandi),\nKwenene Yesu ati ngakubwira, muangabutwa kandi(kandi).\n\n 2. Omundu amanza erilamibwa okwebibi nobulighe bunene, angaha Yesu omutima wuwe iniabutwa kandi(kandi).\n\n3. Omundu amakulinda endata oko muyi ahate oluholo, wamasonda eriswamulolako, Iwabutwa kandi (kandi).",
"18. YESU AKALAMAYA": "1. Yesu anzire abo bathere omobibi akababirikira, neribaha engebe\n\nMwangimbalo (kamwangimbalo) esiongendo nyingi(siongendu nyingi), Yesu Kristo(Kristo oMulamya) akalamaya, (Yesu akalamaya) wangabwira(wangabwirabo)bo akandi ndeke (akandi ndeke), Yesu akalamaya.\n\n2. Uase akandikuha engebe yerikota, angakukokya lino, uwe mundu webibi.\n\n3. Lino nabirilama, namikirirya Yesu, abirieria biosi, nebitingu byebibi",
"19. SINDI MOMULIKI WESATANA": "1. Sindi momuliki wesatana, Nabirilama ku Yesu Kristo. Abirinyitongolia kwenene. Moakinda Satana n'esionzigu siosi\n\nMoatoka kundu, wasingya. Abirisaka erina riaghe, omokitabu ekio kiengebe, Yesu Kristo Mukama uri mubuya.\n\n2. Uase lino mundu webibi ukandibana ebughira, ulwe momuliki weSatana, Yesu akandikubohola kwenene.\n\n3. Omusasi womukama Kristo, Abiririha lubanza lwetu, Ingye sindi momuliki lino, nabere omundu owa Yesu Kristo.",
"20. EKIBANZA KYEKANISA": "1. Kibanza kiekanisa ni Mukama Yesu, Naye abumbireyo nakaghala kuwe,\nAsa neritusonda, tubye 'bana buwe, Kosangwa moatughula nomusasi wuwe.\n\n2. Tukaliwa ko 'bihanda biosi biekihugho, Nikwa turi mugoma oko Mwami Kristo,\nEkanisa ya Yesu sihari eyindi\nNerina rio righoma nirya Yesu Kristo.\n\n3. Omokihugo kino muri emitabu, N'ekanisa eyosi yangakwama Kristo\nMo'nzira yobulighe siendisyatusigha, Akatuha buholo obo buerikota.",
"21. ERIKIRIRIA": "1. Erikiriria eriabakristo, riangabya nakagala kosi, Situangatoga mo'nzira yiwe, kusangwa Mwami arinetu.\n\nYesu Kristo, tukwanzire, niwe tukwamire, kundu.\nYesu Kristo, tukwanzire, niwe tukwamire, kundu.\nYesu Kristo, tukwanzire, niwe tukwamire, kundu.\nYesu Kristo, tukwanzire, niwe tukwamire, kundu.\n\n2. Banabi balola kobulige, busana nerina ryaYesu, Netu tukwamir'enzira yabo, sitwendileka oMulamia\n\n3. Mobendererya Mulamia wetu, mobamwita komusalaba, Netu tuasyasaga 'mundu wahi, Yesu amabya arinetu.\n\n4. Ekindi 'kiro akandisyasa, netu itwagenda ewuwe, Lino tukole 'mubiri wuwe, ngabakalinda Mwami wabo.",
"22. ERINA RYA YESU RIBUYA": "1. Erina rya Yesu ribuya,rikasiha omo matwi, Rikaleta engebe lino ne rihiga eriubaha.\n\n2. Yesu Kristo uri engebe nenzira busana netu, Uri Omukama n'Omwami, twamakusima kwenene.\n\n3. Sihari erindi erina monakihugo eyikwa, Rikaleka itwamusaba, iye Mugala woMungu.\n\n4. Yesu Mungu atuholera, erilusia olubanza, Nawe ukakolaki lino, n'oyo wariha bingaha.",
"23. AKALEMBERA OMUTIMA WAGE": "FANNY J. CROSBY/WM. J. KIRKPATRICK\n\n1. Yesu ni Mulamia wage mubuya nabirimusima kundu; Abirinyipingya nabirilama oMukama amatoka\n\nAkalembera omutima wage, Okwitebya rye kihugo, akalembera engebe yo yage, Omo lwanzo olo luwe, sinangubaha ekindu.\n\n2. Omulamya wage ni mwenge kundu, mwaheka ebibi byage, Akamba kagala nolwanzo luwe, bilabire ekihugo.\n\n3. Ekiro nasyangirirwa endata, nekanisa Eyo yiwe, Amalige wage asyahinduka, mo butseme obwa Yesu.",
"24. UBWIRE YESU": "J. E. RANKIN/E.S. LORENZ\n\n1. Ukaluha umwesi webibi, ubwire Yesu, ubwire Yesu, obilige bwamakuhikako, ubwire Yesu byosi.\n\nUbwire Yesu, ubwire Yesu, Iye ni mwira kundu, siwendisyabana 'gundi ngaye, ubwire Yesu byosi.\n\n2. Uamasaga eriendereria, ubwire Yesu, ubwire Yesu, Yesu akandi kuha 'butseme, umubwire ebiosi.\n\n3. Uamabya ukubaha luholo, ubwire Yesu, ubwire Yesu, wamamwikiriria nomutima, Akandisyakulamya.",
"25. MWATSI OYO NI WA YESU": "CHARLIE D. TILLMAN/M. E. ABBEY\n\n1. Mwatsi oyo ni wa Yesu ni 'mwatsi wakalamu, Ati aheka ebibi, busana netu bosi,\nMwariha lubanza lwetu, monzo ni mwenge kundu, Oyo ni Mulamya wetu, Yesu Mwana wOmungu.\n\nAleluya, aleluya, tumupipe Mukama\nNabalailka bosi bati, Yesu ni mwenge kundu\n\n2. Mwatsi oyo ni wa Yesu ni kagala kOmnungu, Lwanzo olu ni lunene, lulabire lwabandu\nTumukwame ho hakuhi, atuanzire kwenene Tuangabya bakwenda buwe, Yesu Mwana wOmunungu.\n\n3. Mwatsi oyo ni wa Yesu ni 'nzira yelubula, Tuleke 'nzira yebindu, nengumbu yomubiri,\nEwOmungu iri 'ngebe, sihari nobukoni, Naho hate noluholo, ni muyi womukama.",
"26. NASYABYA OKO PERO EYO": "J. W. V./ J. W. VAN DE VENTER\n\n1. Ekirokio lubanza kiasyasa, tuasyahangana yo, Yesu asyatswera abalaika, nage, nawe, nawe.\n\nNasyabya oko pero eyo, nyerire momusasi wuwe\n\n2. Akakira Yesu asyambako, akabuya buya, Emiaka itabahwa tuli yo, nekiana kiembuli.\n\n3. Erigabana siriri kandi, eriluha rihwe. Ituahumula nabalikietu, erihika eka.",
"27. ERILAGA ERISIHIRE KWENENE": "C. H. G./ CHAS. H. GABRIEL\n\n1. Erilaga risihire kwenene, ati sindiendisyakwibirirwa, omuirimia amabya omonzira, Omuesi wuwe asyanyikolera.\n\nSinangakuibirirwa na hake,\n (Sinangibirirwa, Sinangibirirwa),\n omobiala ebiage, ngandisyakuwatako,\nSinangakuibirirwa na hake,\n(Sinangibirirwa, na hake),\nIngye ndi Mulamia, ngakulembera.\n\n2. Ngikiiraya erilaga riwe, ati sindiendi syakwibirirwa, nomo abira basyanyisigania, Tata wage akandisyanyibuka.\n\n3. Omugulu nasyahika endata, obilige bwage bosi bwasyahwa, nasyatsema busana neriowa, wasingya mugombe werikirirya.",
"28. TATA ASI": "S. M. I. HENRY/ E.O.EXCELL\n\n1. Nyasi Tata wage asi, amalige wage gosi, mwalola okueriagalwa, okomuti waKalvari, okomuti waKalvari.\n\nAsi, (Nyasi asi) asi, (nyasi asi)\namalige wage gosi,\n(amalige wage gosi, gosi),\nAsi, (nyasi asi) asi (nyasi asi),\nakanyangirira gosi(akanyangirira gosi, gosi).\n\n2. Nyasi Tata wage asi, erilwala riomubiri, ebiosi ebikahika, okuitwe abana buwe, Tata wage asi biosi.\n\n3. Nyasi Tata wage asi, ekiro ngandisyalola oko Yesu, nasyalola oko Yesu.",
"29. KA NI YESU": "T. O. CHISHOLM / CHAS H. GABRIEL\n\n1. Ko nindi oyu kahika, monyumba yesionde, Siawite nyumba eyiwe, kutse ngotsero,\n Nikwa akasondibawa na bakoni bosi, Awite amaka mangi, koyu ni mundu wahi?\n\nKa ni Yesu, ka ni Yesu, Mugala wo Mungu,\nKa ni Yesu, omubuya, moatoka Kalvari. \n\n2. Ko nindi kabuga nga ye, ebinywa byengebe, Ebibi ebyo muhanya, akamubugira,\n Akasubaya baholi, akatoka ngetse, Eha muli awiteyo, koyu ni mundu wahi?\n\n3. Ko nindi bakatwalayo, nabasoda bangi, Ko nindi wapulayalo, olutehi luawe,\n Ulangire mundu oyo, oko musalaba, Bakamuseka abosi, koyu ni munduwahi?",
"30. KANDI OMWATSI": "E. E. HEWITT/JNO. R. SWENEY\n\n1. Kandi omwatsi wa Yesu nyanzire eriowago, Moayaho nangakwirire mowa amalige wage.\n\nAkandi olwanz olwanzo lwa Yesu,\nNgandibwira mulikietu, eriganyira rioMungu.\n\n2. Kandi ekinywa kia Yesu ekio kialwa elubulla, Ekikabya ngoluseke Omonzira yage yosi.\n\n3. Kandi tupipe Mukama Oyu wasa erilamya, Oyu wasyaswasa luba eribohola kihugo.",
"31. MONUWA OMULENGE": "HORATIUS BONAR\n\n1. Monuwa omulenge wa Yesu akanyibirikira. Uase lino ubane omuesi wage eriluhuka.\nMonasa ko Yesu ngoko nabya nyinaluhire kutsibu, Nabueneho buluhuke obo nabula mo kihugo.\n\n2. Kandi Yesu akabirikira ubuge nyota yawe. Nyiri isoko eriengebe uase kuingye upulaye.\nUbyeho kundu omuesi wage lino nyikuhe butseme, Uluhuke okwebikaluhaya omutima wawe.",
"32. SIHARI MWIRA NGA YESU KRISTO": "JOHNSON OATMAN, Jr./ GEO. C. HUGG\n\n1. Sihari muira nga Yesu Kristo, sihari, sihari. Ng'oyo angatulamya koebibi, sihari, sihari.\n\nItwe tunemutsema ringi, busana na Yesu Kristo\nItwe tuasyagenda elubula, mutseme, mutseme.\n\n2. N'ogundi akatuanza ngoMungu, sihari, sihari. N'omundu mwenge nga Yesu Kristo, sihari, sihari.\n\n3. Nindi akasya tutwal'ewuWe, ni Yesu, ni Yesu. Nerituha ebihembo bingi, ni Yesu, ni Yesu.",
"33. YESU LENDERA NETU":"FANNY J. CROSBY/ SILAS J. VAIL\n\n1. Kristo uri werikota ulabire abeno, omonzira yetu yosi Yesu lendera netu. \n\nLendera, hakuhi, lendera na Yesu,\n\n2. Situetsema nekihugo kutse eriyipipa, niwe utholere Kristo Yesu lendera netu.\n\n3. Tulabe mu misya yosi yobulige hanisi oko lukyo luerikota nasingira na Kristo.",
"34. MUESI WENDATA":"H. J. ZELLEY/ G.H.COOK\n\n1. Omuesi nekiro ni bibiri, sibietulungana haguma. Kuti muKristo? Leka ebibi, Yesu angabya muesi wawe.\n\nMuesi wendata, muesi wendata, uangatakola muese wage\nHaleluya netu tutseme, Yesu ka ni Mulamia wage.\n\n2. Emiatsi yekiro ka ni mingi, siyitholere ko baKristo, Tuamabibindula omutima, omuesi iniakola kandi.\n\n3. Abandu bekiro ka ni bangi, omuhindo wabo ni kiuna, Eyo ni rira nerirya meno, omuhindania womutima.\n\n4. Nawe tahi tahurikirira, libula nzira Yesu ase, Gusa ebibi binduka lino, omuesi wendata takwama.",
"35. OMUKAMA WATOKIRE":"JOHN J. MC LAURIN/E. O. EXCELL\n\n1. Omukama uatokire busana nage\nUimaye ebiosi byage, byanga bya byawe,\nUimaye ebyosi byage, byangabya byawe.\n\n2. Omukama mowagalwa busana nage\nMowaheka okomuti ebibi byage,\nMowaheka okomuti ebibi byage.\n\n3. Omukama nyitsemire busana nawe,\nOmubiri asihire busana nawe,\nOmubiri asihire busana nawe.",
"36. OBUNDU TUKARYA":"MARY A. LATHBURY/W. F. SHERWIN\n\n1. Obundu tukarya bukabuga, omubiri wuwe abunika, olutehi olu lukatula, engulu yoluholo lua Yesu.\n\n2. Turi na wasingya O'Mulamia, busana n'engebe yerikota, yalwa koKalvari Kobulige, bwa Yesu Omugala woMungu.\n\n3. Uwe uri 'bundu bo buengebe, bualwa elubula, Yesu Kristo, utuhe olwanzo ngolo lwawe, tukwanzire kundu omulamya.",
"37. AHO HARI ERITSEMA":"CLELAND B. MC AFEE/CLELAND B. MC AFEE\n\n1. Aho hari eritsema, hakuhi noMungu,\nEbibi sibiri aho, hakuhi noMungu.\n\nOmuluhukia wetu, moaIwa elubula,\nErituleta eyo, hakuhi noMungu.\n\n2. Sihari omuirimia, hakuhi noMungu,\nTuasyahindana na Yesu, hakuhi noMungu.\n\n3. Yesu akatutwalayo, hakuhi noMungu,\nTukandikinda Satana hakuhi noMungu.",
"38. OMULAMYA TUKASYAKUPIPA":"JOHN ELLERTON/ EDWARD J. HOPKINS\n\n1. Omulamia tukasyakupipa, Erihana riawe ni ribuya,\nUtubikire ebinywa byawe, ituakulinda nerikukenga.\n\n2. Omokiro tukuibuke Yesu, oko wawe sihali muirimia,\nUkoleraye Omuisi wetu, ekyakakala ekio kiengebe.\n\n3. Obusayiro bwetu ni Kristo, omusibikia omobulige.\nOmwami wetu uri mukulu, ututsumule nengebe yawe.",
"39. YESU NI MWANA WOMUNGU":"Mrs. LYDIA BAXTER/W. H. DOANE\n\n1. Yesu ni Mwana w'oMungu, oyo abiritwanza, Tuamabya tuamikirirya, tukandilama lino.\n\nErina, ria Yesu (ria Yesu), erina rio Mulaimya,\nTumwanze (tumwanze), 'biro biosi (biro ebiosi), ni Muami muenge wetu.\n\n2. Tuyire erina riwe, muinene biro biosi, Ni erina rierilama, kumbe uamikirirya.\n\n3. Usabe koe 'rina riwe, uamabya nobulige, Akandikuha 'butseme, na kagala kanene.",
"40. MUGENDI WE GALILI":"Mrs. C. H. MORRIS/Mrs. C. H. MORRIS\n\n1. Mohabya omundu oko ngetse, engetse (engetse) ni ya (ni ya) Gali(Galili.)li. Esiondeko mosiakwama oyo, Muge(Muge) ndi we Galili (ndi we Galili).\nMoalibula ameso wabandu, abalema mobasuba, nabangi mobalama mo biala, Byo Mugendi we Galili.\n\nNage ka nangamwanza na kera (kera, na kera), omundu mubuya oyo, (omundu mubuya, mubuya oyo,)\nAbye Mulamia wage Yesu (abye ni wage,), Mugendi we Galili.\n\n2. Omundu oyo ka moanyisonda, inabiritala kundu. Ebironda byebibi byanyita, ka nabya omuhania.\nEnzira yiwe moyabanika, nebibi mobiabugirwa, nehamuli namaka angaha, WoMugendi we Galili.\n\n3. Obundu buengebe burihahi, namagetse werikota? Nedawa yamakoni wenoka, neriagaIwa misindo?\nSusondaye hali mulikietu, erilama rieri hano, ebiosi biri mo biala bioyo, OMugendi we Galili.",
"41. ABIRIKINDA AKASYAKINIDA":"SALLIE MARTIN/JNO. R. SWENEY\n\n1. Abirikinda, akasyakinda, Omwami wetu Kristo. Abirikinda enzigu yetu, monzo ni muenge ku ndu,\nNetu baKristo tutseme, tupipe, Yesu Kristo, Abiritoka kwenene, tumukwame 'twe bosi.\n\nAkagala ketu ni Yesu, omutoki webiosi\nMwase tupipe Mukama, Owekihugo kiosi.\n\n2. Abirikinda, akasyakinda, Oyu ni Mwami wetu, N'abandu buwe nabo ni bahi? abakamukolera,\nIye ni Yesu Mụkama, Omutongolia wetu, Nabo bamabya baKristo, aboMungu wendata.\n\n3. Wabirikinda, ukasyakinda, Yesu uri mubuya. Amami gosi bakasyahẹra, nikwa ukasyakota,\nNawe ukandisyahemba, abakwenene bosi, Tuasyakusaba endata, wamuwania kundu.",
"42. MUNDU WAYESU UKWAME NDEKE":"T.O. CHISHOLM/ HAROLD LOWDEN\n\n1. Mundu wa Yesu, ukwame ndeke, ubye hakuhi noyo'kwanzire,\nUmuhe lino ebiala biawe, enzira yiwe yangabya yawe.\n\nO Yesu uli mwenge, ngahika okuwe, kusangwa mwahola erinyilamia, uri Mukama wage, Ulabire biosi, ngandikukolera lino, O Kristo owene.\n\n2. Yesu moayaho, nangakwirire, ebibi biage moaheka biosi,\nOlwanzo luwe. nyikwamirelo, ndi 'mundu wuwe, wa Yesu Kristo.\n\n3. Engulu yiwe, nganditulayo, Erina riwe tukasabario,\nSindiubaha 'bulige bosi, tukanditsema haguma naye.",
"43. MWAMI WAGE NGAKUPIPA":"JENNIE EVELYN HUSSEY/WM J. KIRKPATRICK\n\n1. Mwami wage ngakupipa, tuabirikusima,\nNerio situangibirirwa, muti waKalvari.\n\nNerio situibirirawe, eriagalwa eriwe,\nNolwanzo luwe lunene eyo ko Kalvari.\n\n2. Mobamuta omuisinda, nobulige bungi,\nMoyitetamuhambaho, moakinda luholo.\n\n3. Erina ria Yesu Kristo, tuyiketererio,\nNomusasi oyo wuwe, akinatueraya.",
"44. UBYE NETU":"HENRY F. LYTE/WILLIAM H. MONK\n\n1. Ubye netu, nakagala kawe, netu situangubaha Satana,\nMomuirimia we kihugo kino, uangabya 'luseke lwetu, Kristo.\n\n2. Ubye netu, nerihenia riawe, biro ni bike ebyekihugo,\nNabandu bangabinduka luba, uwe werikota, ubye netu.\n\n3. Ubye netu, Tata werikota, tuganiraye luholo lwawe,\ntukulinde komubiri wawe, Yesu Mulamya ubye netu.",
"45. NI WAWE NA WAGE":"E. E. HEWITT/ E. O. EXCELL\n\n1. Hari eribugira, ni riawe, ni riage,\nErilusia riebibi, ni riawe nage.\n\nNi riawe wamaliga wamanza erilama,\nAngakukokia lino, ni riawe, ni riage.\n\n2. Olukimba lubuya, ni luawe, ni luage,\nNomuyi ahenirie, ni wawe nage.\n\n3. Hari Tata endata, ni wawe, ni wage,\nHari gundi eyikwa, siwawe nage.",
"46. TUPIPE MWAMI OWEKIHUGO":"Sir ROBERT GRANT/FRANCIS JOSEPH HAYDN\n\n1. Tupipe Mwami owekihugo, nakandi muangimba, tumusime Yesu.\nAkatulembera, akatubika, netu twangamusaba, neriha wasingya.\n\n2. Tubwire bandu omuatsi wuwe, situluhe kandi, akaha kagala.\nIye ni munene, akatabala, muaha engebe yiwe, erilamiya bandu.\n\n3. Awite maka kuilaba bosi, nolwanzo lwa Yesu, lwaleta buholo.\nAbiri tuyira, mobana buwe, ngabagala be kundu, twangamukolera.",
"47. AMBALE OBUKAMA":"OLIVER HOLDEN\n\n1. Tasamalira kagala kerina rya Yesu,\nLeta akakira akobwami, ambale obukama,\nLeta akakira okobwami, angambala obukama.\n\n2. Muase abalaika bosi nebinanda bieno,\nTuhe obukulu oko Yesu, ambale obukama\nTuhe obukulu oko Yesu. Angambala obukama.\n\n3. Kumbe turiyo nabandi eriunama yo,\nTuangabuga nomulenge oyu, ambale obukama\nTuangabuga nomulenge oyu angambala obukama.",
"48. NINDI ANGATULAMYA":"R. L. /ROBERT LOWRY\n\n1. Nindi angatulamya, ni na Yesu iyowene,\nNiki kio kiangatuerya, gonomụsasi wa Yesu.\n\nWamatuwania Yesu Omulamya,\nTuabirikirirya, oko musasi wa Yesu.\n\n2. Alihire ebibi, gonomusasi wa Yesu,\nAmalusya lubanza, gonomusasi wa Yesu.\n\n3. Wangahika hakuhi, okomusasi wa Yesu,\nEyindi 'nzira siri, gonomusasi wa Yesu.",
"49. ATOLERE":"GEORGE O WEBSTER/CHAS H. GABRIBL\n\n1. Atolere erinyitongolia, omobiala bienzigu Satana,\nYesu wetu angatutolera, sihari gundi wamaka atutolere.\n\nAtolere(Atolere kundu), Yesu wetu(Yesu Kristo wetu), Yehova noMukama, (Mukama)\nAngatolera lino Angatolera mungya, ni Alfa na Omega a tutolere.\n\n2. Oyu nindi wangatutolera, wangatukindisya eSatana,\nYesu wetu angatutolera, abirilaba embere atutolere.\n\n3. Atolere siaribirirawa, siariyato esaa yobulige,\nYesu wetu ngayiketera Ye, akasondola enzira atutolere.",
"50. AKALEMBERA":"ADA R. HABERSHON/ROBERT HARKNESS\n1. Omugulu wobulige akalembera, Nokondambi yeriluha akanyilembera.\n\nAkalembera, (kundu), akalembera, (kundu). Ebiro ne ndambi yosi akalembera.\n\n2. Ekiro kierilengwako, akalembera, abirinyilamya kundu. Akalembera.\n3. Erilinda omukama, akalembera, amaha ayo wa yesu, akalembera.",
"51. EBIHUGO NI BIWE":"WILL L. THOMPSON\n\n1. Kumbe bihugo biosi biangabya bya yesu, kumbe abandu bosi bamuanzire kundu.\nEbihanda ebiosi biangabya bia kristo.\n(Ebihanda ebiosi biangabya bia kristo. Ebiwe.)\nOyo bita komuti akandisyakinda.\n\nEbihugo ni biwe, ni biwe, ebihugo biangabya bia yesu.\n\n2. Kumbe bihugo biosi biasi omukama, nesindi esiodeni nesionzigu nibya.\nYesu atolerebo endambi ni nguhi.\n(Yesu atolerebo endambi ni nguhi. Enguhi.)\nEngunga yangabuga inyasa mobitu.\n\n3. Kumbe bihugo biosi biangasikia yesu, ebitsira ebiosi ne Congo hagoma. Obunandi buhike nobupiri bosi.\n(Obunandi buhike nobupiri bosi. Abosi)\nAbami nabagunda bangabya abuwe.",
"52. KA NYISIKIRE":"S.E.L./CHARLIE D. TILLMAN\n\n1. Kanyisikire erigalwa, busana na Yesu, Kanyisikire erisaba busana na bandu.\n\nNyisikire, eritula, omuatsi wa Kristo, erikolera omukama, okuisonda riwe.\n\n2. Kanyisikire erigenda, ngomukwenda wuwe, Omobihugo ebiahali, amanyitumayo.\n\n3. Kanyisikire eriteya, omubiri wuwe, Erihangana na kagala, monzira ya Yesu.\n\n4. Kanyisikire erikunga, ababirihera, omo 'nzira yenzigu yetu, Yesu anzirebo.",
"53. ITIWE TURI BANA BOMWAMI MUNENE":"KNOWLES SHAW/GEORGE A. MINOR\n\n1. Itwe turi 'bana boMwami munene, tuabirikirirya 'binywa bia Yesu, tualekire 'bibi bie kihugo kino, tuabana 'butseme bwoMulamya.\n\nTubwire 'bandu, 'binywa bia Yesu, tutule omuatsi wenzira yiwe\nTusabe Yesu nerina riwe, Mungu asyalusya ebibibiosi.\n\n2. Mo'kihugo kino, muri 'bandu bangi, ababirihera mo'nzira nyibi, tuangasaba Mungu baleke ebibi, tuangakangayabo ebinywa biwe.\n\n3. Enzira ya Yesu ni'nzira yowene, muri eritsema, muri kagala, enzigu satana n'abalaika bayo bakandisyahera mo'nzira nyibi.", 
"54. KRISTO APIPAWE":"Tr. EDWARD CASWALL/ JOSEPH BARNBY\n\n1. Omugulu werikya ngatang'eriahula, omukama Yesu, kutse komubiri, kutse kwerisaba, Kristo apipawe.\n\n2. Oko Mungu endata, ngatulago kandi, Yesu apipawe, kamoaleta maha, moaleta nendihi, Kristo apipawe.\n\n3. Ekiro kiobulige, ekirongaluha, Akanyisikaya, akambirikira, inyaswanyikunga, Kristo apipawe.\n\n4. Akatambi ni kake, nyikole nomuhwa, yesu apipawe, tugese engano, yerire muirima, Kristo apipawe",
"55. TUASYAHINDANA ELUBULA":"R.L./ ROBERT LOWRY\n\n1. Tuasyahindan'elubula, oko wetu ewoMungu,\nAbandu babirianza, batsemire kutsibu 'tsibu.\n\nTuasyahindan'elubula, oko lusi lubuya olwengebe,\nAbandu bosi batsemire yo, endambi yosi baneyo.\n\n2. Bariyo bakimba 'luimbo, obulige sibuliho,\nOluimbo lua Yesu Kristo, Omukama munene wetu.\n\n3. Abayo balinamaka, sibeluala nerihola,\nEbibi biosi biamahwa, sibiangatok'eringirayo.",
"56. ALELUYA":"J. MC G./ JAMES MC GRANAHAN\n\n1. Aleluya, Yesu moalwa muisinda, tukasima Omulamia Oyu, eyisinda moyiteta mutoka, Yesu ni Mwami wabami bosi.\n\nTukapipa Yesu Kristo, Tukalinda Mwami wetu, tugende mokihugo, tutul'engulu, naye akandibya netu.\n\n2.Aleluya, tutsemire ku Yesu, oyo watubohola kwenene, enzigu yetu Kristo moakindayo, Ebiro biomuliki biahwere.\n\n3. Aleluya, Omukama asyasa, tuyitsinge komubiri wuwe, elubula eriluha siriri, obutseme no buholo busa.",
"57. YESU MOARIHA":"Mrs E. M. HALL /JOHN T. GRAPE\n\n1. Yesu asi amaka wawe ni angaha, \"Usabe neriteya\" ebio ni binywa biwe.\n\nYesu moariha lubanza luage, ebibi biabya bingi, Naye moeria biosi.\n\n2. Omukama ni kundu akagala kawe, kakatoka mutima owakalire nabi.\n\n3. Ka singwite omuira ngo Mukama wage, Imene ho hakuhi, naye akalembera.\n\n4. Ngakunda nomuhwa Alfa na Omega, erihika eriawe rikaleta Obwami.",
"58. NENYU MWASE":"1. Nenyu muase, nenyu muase, nenyu muase lino.\nLino muangamuikirirya, muikirirye Yesu.\n\n2. Akuanzire, akuanzire, akuanzire kundu.\nKumbe wabirimuminya, akuanzire kundu.\n\n3. Lwa koebibi, Iwa koebibi, Iwa koebibi lino.\nWasyabana obutseme, oko Yesu Kristo.",
"59. RIBYE RIBUYA":"JEAN PERRY/ MABEL JOHNSTON CAMP\n\n1. Nyasi erina erioMulamia eriahika eno kera, omulaika mualetario kera, erina eribuya.\n\nRibye ribuya, ribye ribuya, erina rilabire kundu, riangabya ribuya, ribye ribuya, erina eria Yesu.\n\n2. Muenye erina erio ribuya moahola oko Kalvari, ebibi biage bialeka oyo, iniagaIwa kutsibu.\n\n3. Mungu ahana erina erio ribye endata kogosi, basyakukama embere siwe, abamuseka kera.",
"60. YESU KRISTO ATWANZA":"CHARLES WESLEY/S.B. MARSH\n\n1. Yesu Kristo watuanza, uri Mulamia wetu, Setani situanzire yikatukola nabi.\nYesu Kristo tuamasa oko wawe wowene,\nUtulamaye lino nomusasi gowene.\n\n2. Yesu Kristo Mulamia uatusondire kera; Tuamabya 'bandu babi, ulusaye ebibi.\nUtubise ho uli ahate no bulige,\nSituwite 'kagala, tuamasa, utuhe ko.\n\n3. Engebe yerikota yikalwa oko wawe, utusulaye lino no'mutima mubuya.\nYesu twamakukwama, utukangaye ndeke,\nTuamaleka 'kihugo, tukuanze 'biro biosi.",
"61. SABA SABA":"E.R.W./EDNA R. WORRELL\n1. Saba saba akagala, saba saba, siumbaye, uangakinda esatana, saba saba uangatoka.\n\n2. Saba saba mulikietu, saba saba siumbaye, hatikana okomalwi, saba saba akatoka.\n\n3. Saba saba asyaswasa, saba saba ritolere, saba ngerisonda riwe, saba saba, yesu ane.",
"62. NYANZIRE ERIBYA HAKUHI":"JESSIE BROWN POUNDS/ CHAS H. GABRIEL\n\n1. Nyanzire eribya hakuhi, nOmukama wage Yesu, erimulolako nerimukwama, nyanzire eribyaye.\n\nHakuni naye, na Yesu Kristo, nyanzire erisiba, erimulolako nerimukwama, nangabya hakuhi naye.\n\n2. Nangabya hakuhi na yesu, omugulu werilwala, erisaba neri mukwamirira, nasyakota naye kera.\n\n3. Nyanzire erihika riwe, erinyitwala ewuwe, ahate obulige neririra okomuyi welubula.",
"63. YESU AKATUSONDOLA":"G.A. YOUNG/G.A. YOUNG\n\n1. Omonzira yiwe yitunganene, Yesu aka tusondola, esaa yobulige, esaa yobutseme, Yesu akatusondola.\n\nAbo mombeho nobulige, nabandi nibia bakagalawa, Yehova akasondola bosi, omo kiro neritungi riosi.\n\n2. Ekiro kiobulige neriagalwa, Yesu akatusondola, ekiro tutelangira muesi ndeke, Yesu akatusondola.\n\n3. Tuamalengwako nenzigu satana, Yesu asyatusondola, tuangakinda enzigu namaka wuwe, kusangwa akasondola.",
"64. OMUKAMA YESU":"JAMES MONTGOMERY/ SPENCER LANE\n\n1. Omukama Yesu unyilamaye, lero si nyitoge mo'nzira yawe. Unyiwate ko'biala, unyihire hakuhi, sinyikole nabi, ndi'mundu wawe.\n\n2. Bindu bie kihugo bianganyitebya, Omukama Yesu unyilamaye. Unyiringekanaye, busana na Kalvari, sinyibirirawe, oluanzo luawe.\n\n3. Amakoni mangi akanahika, neriendererya rio ria satana. Utuhe 'menge wawe, n'omuhwa werisaba,  oluanzo lo luawe, ni luerikota.",
"65. TUKWAME YESU":"1. Tukwame yesu endambi yosi, sihari muirimia mo'nzira yiwe, obutseme kutse bulige, Yesu wage alabire biosi.",
"66. NGATSEMA OMWIYE":"E.O. E./ E. O. EXCELL\n\n1. Ngatsema kundu oko Yesu, kusangwa akinanyanza,\nMulenge wuwe akowana, kumbe nangamulolako.\n\nNgatsema omuiye, ngatsema omuiye,\n(Ngatsema omuiye, ngatsema omuiye)\nLukogo luwe luasire kera, nyitsemire omuiye.\n\n2. Yesu kamwanyisonda sonda, omugulu nabyamubi,\nMoanyilusia kwebibi biage, lino muli obutseme.\n\n3. Oluanzo luwe ni lubuya, lukanyitimbako lino,\nYesu ari haguma nage, erinyilembera hosi.",
"67. KUNO TURI BAGENDI":"Arr by F. A. Clark/CA. TINDLEY\n\n1, Kuno turi bagendi, turi banduba Yesu,\nBaka tukwa ekiniga nerituendereria,\nNikwa ho Yesu ari sihari amalolo,\nYesu asyatuhira ho habuya(habuya.)\n\nElubula ni 'muyi wetu, Yesu Kristo ni Mulamia,\nturi nobutseme biro biosi n'omuatsi wetu akandisyuwana.(wasingya.)\n\n2. Omubiri wa Yesu, ni mubiri munene,\nSitowee bikatebaya biebindu bierihonda,\nTuangakinda Satana nomuyari woMungu,\nnetu akagala ketu ni Yesu.(ni Yesu.)\n\n3. Erihika ria Yesu, ati riri hakuhi,\nKatuasyowa omnulenge womulaika munene,\nN'engunga yo yoMungu ikandisyatubukia,\ntuasiahinda na'ndata noMukama (Mukama.)",
"68. INGYE NYANZIRE MWATSI":"C. H. G. /CHAS H. GABRIEL\n\n1. Ingye nyanzire 'muatsi wa Yesu, ni Mukama wakwenene, nikwa akandisyahika luba, Tuasikala naye kundu.\n\nSihari bulige neriagalwa Oko muyi werikota, nasyahangana hakuhi naye; Omukama webihugo.\n\n2. Biro ni bike monakihugo, O'Mukama asyahika, eriIwalayo neriswaluha, Sibiehik'eyo na hake.\n\n3. Biro ni bike bieritulayo, engulu ya Yesu Kristo tuhangane tuyitsinge lino, Omuirimia akahika.",
"69. IRI EKIHUGO KIOWENE":"S. FILLMORE BENNETT/ JOS. P. WEBSTER\n\n1. Iri ekihugo kiowene, ekia Tata wetu oMungu, anemukokotyaho wetu, tuasyasiba naye buholo.\n\nTuasyahi(tuasyahi)kabolo(kabolo) Okomuyi wa Tata wetu(owetu), tuasyahi(tuasyahi) ndanayo(ndanayo), oko muyi mubuya kundu.\n\n2. Tuasimba oko muyi oyo, esionyimbo sya Yesu Kristo, ahate 'bulige no buke, kutse eriIwala 'makoni.\n\n3. Wasingia ko Mukama Yesu, oyo watuholera kera wasiagya koMulamia wetu, oyo watulusya koebibi.",
"70. MUNGU MUBIRI WAGE AHWERE":"FANNY J. CROSBY/ JNO. R SWENEY\n\n1. Omugulu mubiri wage ahwere hano, ngandihika elubula habuya,\nnasyamuminya omutongolia wage luba, naye asyatsema erinyikokia.\n\nNasyami(nasyaminya)nya Yesu Kristo, kusangwa abirinyitongolia, Nasyami(nasyaminya)nya Yesu Kristo, nesiongolu omobiala biwe.\n\n2. Abakristo bangi bangendire emuliro, bakatulinda nobuholo buwe,\ntuasyatse haguma emuliro wa Yesu, nikwa nyanzire Mukama ko bosi.\n\n3. Nganditsema erilangira obusu buwe, noluanzo oluri komeso wuwe,\nngandisyamupipa busana noluanzo luwe, nobuenge buwe bwabirinyilamya.",
"71. EKIRO AKASYATUENDA":"J.M.B./ J.M. BLACK\n\n1. Ekiro Yesu akasyatuenda abandu buwe, N'engunga yo Mungu ikasyabuga, abandu buwe bosi bakandisyalwa 'mwisinda, tuasyahindana eria elubula.\n\nNasyabya yo elubula, hagoma na\n(Nasyabya elubula wasingia, hagoma na)\nYesu Kristo, Nasyabya yo elubula, ngandikwama Yesu monzira yosi.\n(Yesu Kristo wasingia, Nasyabya yo elubula)\n\n2. Mungu amatubirikra m'omitima yetu, sianzire abandu bakasyahera, tuamaleka ebibi biosi bya balimu babi, Yesu angatulamya lino lino.\n\n3. Ego tukole omubiri wo Mungu goluba, Omwirimia akasyahika luba, n'a bandu bangi sibasi omulamya wetu, tubirikirebo balame lino.",
"72. MOMABOKO WA YESU":"FANNY J. CROSBY/ W H DOANE\n\n1. Momaboko wa Yesu, oyo werikota, oyo awite 'kagala, akeritulamya.\nOyo ni Mungu wetu, oyo atuanza kera, Atuma O'Mulamya eririha ebibi.\n\nMomaboko wa Yesu,  ahali kagala,\nNerilamia erinene, eriorio Mungu wetu.\n\n2. Momaboko wa Yesu, ahate 'bulige, Setani sianganyitoka, yikubaha Mukama,\nOmulamya asyasa, ituaya naye eria, Ahate erihola, kutse eriswagalwa.\n\n3. Momaboko wa Yesu, ahate obuba, ahari erihenia rio rioMulamya wetu.\nKumbe twamakw' omuhwa werimulangirako, Ituansyamulangira, nomutima mubuya.",
"73. EBINYWA BYENGEBE":"P.P.B./ P.P. BLISS\n\n1. Akandi wanganyibwira, ebinywa ebia Yesu, Ebisihire kwenene, ebinywa ebiengebe, Ebinywa bilabire ebiosi ebia bandu.\n\nNibiengebe, nibiengebe, ebinywa bia Yesu Kristo.\n\n2.Kristo abiriha bosi, ebinywa ebiengebe, Akabirikira lino omundu webibi, Akakuha buyira butsera erigula.\n\n3. Engulu yowene yiwe, ebinywa ebiengebe, Bikaleta obuholo, wamamwikiriria. Ogundi wangalamya siariho nomuguma.",
"74. WASE MWAMI MUNENE":"CHARLES WESLEY/ FELICE GIARDINI \n\n1. Uase muami munene, tupipe erina riawe, tukusikie tatawerihenia, uwe 'bugirire, uangaronga kandi, Muami wetu.\n\n 2. Uase Mulamia muenge, uambale muyari wawe, uangatowa, tunemukusaba, utuhe kagala; kirimu kio Mungu, utueraye.\n\n3. Mungu tukupipire, tuangakusikia kwenene, uri muenge tuangakulangira, eyo mo 'lubula, O'Mukama wetu, Aleluya.",
"75. ERIHIKA ERIA YESU":"J.H. HOPKINS\n\n 1. Erihika eria Yesu, moriabya mo buera biosi, muabutwa mo nyumba ye sionde, Yesu amuami wetu.\n\nYesu o'Mukama wasingia tukatseme okuwe,\nTuamabya nengebe busana nerina eriawe. \n\n2. Muabutwa ngomundu weno, nomubiri weriagalwa, Asyatabala ngo'Muami wekihugo ekiosi. \n\n3. Mobaleta erihitia, abamenge wekiendata, Netu tukaleta erisaba rietu o'Mungu.",
"76. MUNABWIRE":"Rev. JOSEPH MOHR/ FRANZ GRUBER \n\n1. Munabwire, Yesu Kristo, muabutwa ngomwana, Mulamia wekihugo kiosi, Yesu Kristo mubuya kundu, abirituwania, Yesu mulamia wetu.\n\n 2. Towe 'muatsi, wobuholo, mulamia asire, erituleta eritsema, ne'siongebe esierikota, Tumuanze no'mutima, Yesu Mulamial wetu. \n\n3. Tukatsema, Aleluya, Mulamia owene, tumukwame endambi yosi, tumusabe nomuhwa gosi, Erihenia ko'Mungu, Yesu Mulamia moasa.",
"77. OBUTSEME BWAHIKIRE":"ISAAC WATTS/ G.F. HANDEL\n\n 1. Obutseme buhikire, o'Mukama 'sire, Ase momitima yetu, ni Muami wa bami bosi, tumusikaye lino(Tusikaye Yesu), Alengire 'bindu biosi(Tusikaye Yesu), Alengire, alengire 'bindu biosi.\n\n2. Obutseme bwahikire, busana na Yesu, muase abalaika bosi, muase abandu hanisi, tupipe oMulamia, tumupipe oMulamia, tumupipe, tumupipe oMulamia.\n\n3. Akabugira ebibi, nomusasi wuwe, Abirilusya lubanza, olo luabya oko bandu, atuhire omuinda, abirituha omuinda, atuhire, atuhire omusasi.",
"78. MWASE ABAKRISTO":"1. Muase abaKristo, ababirimwanza, muase oko Yesu, ka tuangamukenga, tungerera ni Muami owabalaika.\n\nMuase tuangamupipa, muase tuangamupipa, muase tuangamupipa Yesu Kristo.\n\n2. Muimbe abalaika muimbe nobutseme, muimbe imwe abosi abelubula, tuhe ko Mungu erikapipa kundu.\n\n3. Omukama wetu, tunemukusikya, erina eriawe riangabya inene, Mungu munene, kani Muami waBami.",
"79. MOLUKAHIKA OMOKIRO":"E. H. SEARS/ R. STORRS WILLIS\n\n1. Molukahika omokiro oluimbo oluabalaika, Obuholo oko kihugo obubuya ko bandu\nHulikirira omulenge, owakahula ye Yesu. Omulamia abiributwa, eririha ebibi\n\n2. Oko mirongo yobulige engulu eyi ikasa, Hangana gusa eririra uhambe Yesu Kristo.\nImanuel erina riwe ni Mungu haguma netu. Amaha ayo akaleka, abalaika ibimba.\n\n3. Omulamia oyo moahika oko kiro ekiakera, Moahira ebiala biamaka oko kihugo kino.\nTahira ebiala okuitwe, ituabana erilama. Ekihugo kiangowa kandi, mulenge wa Yesu.",
"80. TWANGOWA ENGULU EYI":"C. WESLEY\n\n1. Tuangowa engulu eyi, erihenia koYesu, obuholo nobubuya, biahika 'kiro ekio. Tutsange abandu bosi,\nSetani abirikindwa, tutseme nabalaika, Yesu wa Betelehemu, tutseme nabalaika, Yesu wa Betelehemu.\n\n2. Kristo Muami werikota, moabutwa mo 'kihugo, moaleta oluanzo luwe, n'obuholo ko bandu. Kristo moahika enoka,\nYesu oMulamia wetu Mungu atugenyera, moatutumira Mula mia, Mungu atugenyera moatutumira Mulamia.\n\n3. Wasingya koMuami wetu, mundu atunganene, moaleta ekiakakala n'engebe yerikota. Moalusya lubanza luetu,\nMoaliha ebibi bietu, Muami moabutwa eno, eritutwala ewuwe, Muami moabutwa eno, ertutwala ewuwe.",
"81. TUTULE OMWATSI WA YESU":"GEORGE W. DOANE/ J. BAPTISTE CALKIN\n\n1. Tutule mwatsi wa Yesu, ehosi monakihugo, Oluholo olwa Yesu, luatokire olubanza.\n\n2. Tutule mwatsi wa Yesu, oluanzo Iwa Tata wetu, Moatuma Mugala wuwe, erilamia ekihugo.\n\n3. Tutule mwatsi wa Kristo, oko bihanda bia bandu, Bakalinda omulenge, womukangiriria wuwe.",
"82. NATSEMIRE KIRO EKY0":"P. DODDRIDGE/ E. F. RIMBAULT\n\n1. Natsemire 'kiro ekio nikiriraya Mulamia, Moanyilusya koamalolo, moanyerya koebibi biosi.\n\nMoatukangya erisaba neritsema 'biro biosi,\nTutseme, tutseme, Yesu moatuerya koebibi.\n\n2. Sihari 'gundi Mulamia, ni na Yesu iyowene, Ni mubuya, amatoka, amalusya olubanza.\n\n3. Abiririha ebibi, abirikinda luholo, Moalubuka omuisinda, abirikinda Satana.",
"83. ENGULU YERILAMIA":"J. M. D./ J. M. DRIVER\n\n1. Engulu yerilamia unyibwire kandi, engulu yangaswekia, unyibwire kandi, abalaika ka basiyo, Abalisia bakowago, nawe uangikiririago, Engulu ya Kalvari.\n\nUnasi siwasi. Kumbe uasi, Omundu wa Kalvari.\nEngulu yerilamia, Engulu yerilamia, Engulu yerilamia.\n\n2. Engulu yerilamia segera hakuhi, engulu yangaswekia, ikinalamaya, amagetse owengebe, Obundu obuerikota, bikinakubirikira, Engulu ya Kalvari.\n\n3. Engulu yerilamia ni na Yesu Kristo, engulu yeriswekia, uamatendikwama, Elubula lukalinda, bayisogawa na Kristo, abakimba oluimbo, Luengulu ya Kavari.",
"84. KA NABIRIGULWA NA YESU":"FANNY J. CROSBY/ ROBERT LOWRY\n\n1. Ka nabiriguIwa na Yesu, ekiana ekio kiembuli, Omusasi abiritoka, ndi muana wuwe na kera.\n\nNi Ye, Yesu, obuguli ni musasi,\n(Ni Ye, Yesu, Ni Ye, Yesu)\nekiana kiembuli, Abiringira mo wuwe.\n(Ni Ye, Yesu, Ni Ye, Yesu)\n\n2. Nyitsemire muesi wa Yesu, nerihenia riwe riosi, Ngasaba inyinemutsema, ndi muana wuwe na kera.\n\n3. Nyasi nasyalola ko Muami, nasyahangana endata, Ekinywa kiwe kikalaga, kikakinda neSatana.",
"85. ERINA RIWE YESU":"P.P. B/P. P. BLISS\n\n1. Erina riwe Yesu Omugala wo'Mungu, Ahika eno kera erilamia ekihugo.\n\n2. Moaheka esisoni neriagalwa riomuti, Eririha ebibi, Aleluya mulamia.\n\n3. Omukulu asyasa erienda abuwe, Neyo tuasimba kandi, Aleluya omulamia.",
"86. ALUBUKA":"R. L./ ROBERT LOWRY\n\n1. Abya omoisinda, Yesu Mulamia; Mobamuta muyo, Omukama.\n\nMoalwa omoisinda(moasuba), moakinda esionzigu siwe, (moakinda), moakinda oluholo n'eyisinda, moasinga enzigu yetu\nSetani,moasuba(moasuba), moasuba(moasuba), Yesu Kristo moasuba.\n\n2. Mobamuteyaho, Yesu Mulamia; Baluha buyira, Moalubuka.\n\n3. Nindi ari ngaYe, Yesu Mulamia; Ni Muami wabami, Omukama.",
"87. KRISTO ABIRILUBUKA":"CHARLES WESLEY/ HENRY CAREY\n\n1. Kristo abirilubuka, Aleluya.\nMuangimba abandu bosi, Aleluya.\nMutseme abalaika, Aleluya.\nMuimbe elubula nekihugo, Aleluya.\n\n2. Mobateyaho buyira, Aleluya.\nKristo moakinda lifero, Aleluya.\nLuholo moluakindwa, Aleluya.\nKristo moakingula elubula, Aleluya.\n\n3. Omuami aneho kandi, Aleluya.\nEriswagalwa siriri, Aleluya.\nMoatuholera kera, Aleluya.\nNa lino anemutusabira, Aleluya.",
"88. ERISIASA RYA YESU":"H.L.TURNER/ JAMES MC GRANAHAN\n\n1. Rianganabya muitungi kutse mokiro, erihika ria Yesu Mulamia wetu, akandihika neritutwala eka, erikota naye eyo.\n\n2. Tuasy'imba Hosana ko Mukama wetu, Oyo Watuholera komusalaba, akandisyasa nerihenia rinene erituletera maha.\n3. Unasikire erigenda endata, Mulamia amakubirikira lino, Kristo amakueya inionemuteya, wasyabana akakira.\n\nOmukama Kristo tubye nerikuimbirira, uasyaswasa Haleluya, Haleluya Amen, Haleluya Amen.",
"89. ASYAHIKA KANDI":"M. J. C./ MABEL JOHNSTON CAMP\n\n1. Simuluhe, bandu baKristo, mulangire Yesu asyasa, mo kihugo muri mwirimia, bakalinda ekiakakala kiwe.\n\n Asyahika kandi, asyahika kandi, ni Ye Yesu Kristo oyo itawa.\n Asyahika kandi, asyahika kandi, anemwendisyasa neriheniariwe. (eriwe.)\n\n2. Omuirimnia, abya munene, ebibi biatukinda eno, nikwa lino twabirilama, nakandi asyatutwala ewuwe.\n\n3. Tukatsema, tuabirilama, tukatsema Yesu asyasa, tuangatula engulu yiwe, tuangabwira bandu ko Yesu ane.",
"90. KA RIOWENE KUNDU KUNDU":"Mrs. LOUISA M. R. STEAD/ WM. J. KIRKPATRICK\n\n1. Ka riowene kundu kundu, uamikirirya Yesu;\nUamikirirye 'mibuge, yoMulamia wetu.\n\nYesu, Yesu, namabianza, nabirikwanza kundu,\nYesu, Yesu, ka ni 'muira, namnakusima lino.\n\n2. Ka riowene kundu kundu, muamaleka ebibi,\nImuabana esiongebe, n'obutseme kwenene.\n\n3. Kariowene kundu kundu, uamaminya 'Ye Kristo;\nUamaminya kuasikala, hagjma netu eno.",
"91. OMULAMYA YESU KRISTO":"C.F.O.\n\nOmulamia, Yesu Kristo, akanyilembera 'biro biosi,\nEritungi n'omokiro, akanyilembera'biro biosi, biosi,\nAbirinyilamia neriganyira riwe, abirinyigula nomusasi,\nIngye ndi monzira eyo yelubula, omu 'muesi goMungu.",
"92. OBUHOLO BURI MOMUTIMA":"Mrs. W. L. M./ Mrs. WILL. L. MURPHY\n\n1. Obuholo buri momutima wage, ObutaIwa mo 'kihugo, ni buholo bua Yesu Mukamna wetu, ni 'buholo buerikota.\n\nTumukwamirire, Yesu Kristo, Tumukwamirire\n(Tumukwamirire, Tumukwamirire Omulamia ni Yesu Kristo tumukwamirire tumukwamirire,)\n\nMuami wetu sialitusiganaya\n(Muami wetu ni Muami wetu, siangatusiga, ka siangatusiga),\n\nmonzo ni muenge Yesu siarindisyatwibirirwa ni wasingya\n(monzo ni muenge, muenge, Yesu Kristo siaribirirawa, ni wasingya).\n\n2. Omubiri wetu ni 'nyumba ya Yesu, turi bagendi hanisi, nikwa asyatuenda nerihenia riwe, tuasyakota elubula.\n\n3. Tukandimupipa Omukama wetu, Muenye ekihugo kino, tuangamukolera nomutima gosi, Yesu uri omubuya.",
"93. ITWE TUAMABANA MWIRA":"JOSEPH SCRIVEN/ CHARLES C. CONVERSE\n\n1. Itwe tuamabana, Muira, Yesu Kristo Mulamia, Moaheka ebibi bietu, amatuha butseme.\nTuangamusaba 'kagala, asi 'mitabu yetu, Ni Mulamia muenge kundu, Yesu Kristo ni Muira.\n\n2. Tuabya turi nobulige, n'enzira ikalire, Yesu akanditulamia, nakagala kanene.\nSituangaluha na hake, akandituwatikya, Tumusabe biro biosi, Yesu Kristo ni Muira.\n\n3. Mungu moakola kiowene, moatuma Muana wuwe, Nerilamia ko muIimu, Yesu Kristo ni Muira.\nTuasyasoker'ewa Tata, ahate nobulige, Tumutualire abandu, bangabya bana buwe.",
"94. KINGULA AHIKEMO":"H.D. C./ HARRY D. CLARKE\n\nOko lukyo oIwomutima, omulamia akalinda,\nSurimowa, Yesu Kristo, kingula ahikemo.",
"95. HARI MUNGANGA MUNENE":"WM. HUNTER/ J. H. STOCKTON\n\n1. Hari Munganga munene, ni Yesu, Bwana Yesu. Akasonda erilamya abandu bobulige.\n\nErina ria Yesu riri na kagala kalabire, Kalabire komena, gosi wekihugo.\n\n2. Ebibi biawe ni bingi, Yesu, inialusyabio. Uikiriraye ku Yesu, nerio uabirilama.\n\n3. Yesu siaribirirawa, akandisyaswatuenda. Tumukwame 'biro biosi, nomutima mubuya.",
"96. WAMATAMBAKI NAWE":"FRANCES R. HAVERGAL/ P.P. BLISS\n\n1. Enyumba ya Tate wage nerihenia riayo, Nasigabio, nasigabio, erikusonda eno. Naha naha engebe yage, Uamatambaki nawe?\n\n2. Monalusya eka wage erisanganibwa, Erilama, neribugira, erikuha ngebe. Bindu ebindu namaleta, Uamaletaki nawe?\n\n3. Monaheka eriagaIwa ria Kalvari kera, Erikulusia okuitsanda rie kihugo kino. Monakuhekera luholo, Uamatambekeraki?",
"97. WASE YESU":"HARRY D. CLARKE/ HARRY D. CLARKE\n\nUase Yesu momutima, momutima wage Yesu,\nUase lino, uikaleho, enyumba yawe Yesu.",
"98. YESU UTUIKALAYE":"FANNY J. CROSBY/ W. H. DOANE\n\n1. Yesu utuikalaye, mo'nzira nyibuya, tukukwame hakuhi, nakagala kawe.\n\nHakuhi, na Yesu, tuikale hakuhi, tusikaye erina, riOmulamia wetu.\n\n2. Utukangiriraye, muatsi werisaba, utusuraye lino, noluanzo lunene.\n\n3. Yesu tuamakukwama, nomutima gosi, tukandibwira bandu, muatsi werilama.",
"99. KOMUSALABA":"P. H./ PAUL HUTCHENS\n\n1. Komusalaba, komusalaba, Kristo moatuholera, Yesu moariha olubanza luetu, komusalaba.\n\n2. Namukwamire, namukwamire, Yesu mubuyirire, Akandisyasa nerisyatuhemba, tukwame Yesu.",
"100. YESU MWAHIKA ENO KERA":"WM. R. NEWELL/ D. B. TOWNER\n\n1. Yesu moahika eno kera, moariha ebibi bia bandu, ka muta omusasi wuwe, eKalvari.\n\nTuabana obutseme aho, ekiro motuamuikirirya, omusasi wuwe moatueria eKalvari.\n\n2. Ebibi byetu ni binene, tuabutwa mobandu babi, kumbe tuamikirirya Yesu waKalvari.\n\n3. Yesu ari haguma netu, tuwite 'kagala koMungu, nindi wangatukinda lino eKalvari.",
"101. BUSANA NAKI NABIRIMUANZA":"I. A. K./ IDA A. KORITZ\n\n1. Busana naki nabirimuanza, Ye Yesu Omuami? Busana naki nabirimuanza, ngandikubwira lino.\n\nKusangwa abirinyiholera komuti,\nEkio kialekire namuanza, Yesu moanyịholera.\n\n2. Busana naki ngandimupipa, Ye Yesu OMungu?\nBusana naki ngandimupipa, ngndikubwira lino.\n\n3. Busana naki ngandimulinda, Ye Yesu Omuami?\nBusana naki ngandimulinda, ngandikubwira lino.",
"102. HAKUHI NA YESU KRISTO":"FANNY J. CROSBY/ Mrs. J. F. KNAPP\n\n1. Hakuhi na Yesu Kristo, namasa hakuhi. Hakuhi noyo wahola, namasa hakuhi.\nHakuhi noyo wasaba, hakuhi noyo moasekwa, Hakuhi noyo moagaIwa, ngahika hakuhi, ngahika hakuhi.\n\n2. Hakuhi nerigenyera, namasa hakuhi. Nomuhwa werimusaba, namasa hakuhi.\nErimupipa Yehova, oMugala oyo muanze, Nyanzir'eribya hakuhi, ngahika hakuhi, ngahika hakuhi.\n\n3. Hakuhi noluanzo luwe, namasa hakuhi. Nerimulinda namaha, namasa hakuhi.\nHakuhi nabalengire, eriambala kakira, Erilolako Muami, ngahika hakuhi, ngahika hakuhi.",
"103. YESU KRISTO MWANYANZA":"ANNA WARNER/ WM. B. BRADBURY\n\n1. Yesu Kristo moanyanza moaliha olubanza, Ingye ndi 'mundu molo naye ni wakagala.\n\nYesu anzire, abandu bosi,\nMonzo ni muenge, ekio ni wasingya.\n\n2. Yesu Kristo Mukama unyilamaye lino, Namaleka Satana n'ebibi biosi biage.\n\n3. Yesu Kristo uasyasa, uasyanyitwal'ewawe, Ngandikola 'mubiri, inakulindirira.",
"104. ASYASWASA ASYASWASA":"W. O. CUSHING/ Dr. GEO. F. ROOT\n\n1. Asyaswasa, asyaswasa, omulamia wetu, asyatwala, asyatwala, abandu buwe.\n\nTuasyatsema kutsibu, ria ewoMungu,\n Nerikota, ewuwe, siturilwayo.\n\n2. Imwe bosi muangaminya,omuatsi wa Yesu. Muangakwama nomutima, imuasyalama.\n\n3. Yesu Kristo asyaswasa, ekiro situasi, umulinde, umulinde, ngOmuami wawe.",
"105. YESU ANZIRE ABANA":"1. Yesu anzire abana abosi b'ekihugo, Bayira n'aBasungu anzĩre bosĩ kundu, anzĩre bana bosĩ b'ekihugo \n\n2. Yesu moahola komuti, neritongolia 'bandu, Bayira n'aBasungu, ni Mulamya kundu, Wabandu bosĩ babi b'ekihugo.",
"106. KRISTO IKERE OMUESI WAGE":"EL NATHAN/ JAMES MC GRANAHAN\n\n1. Kera nabya hali koMungu, nabya kolubanza, Nikwa Yesu moanyigenyera, nyilamire lino.\n\nKristo ikere Omuesi wage,\n(Kristo ikere Omuesi Wage)\nErilama kwenene eria Yesu Kristo.\n\n2. Tukalinda oyo wahola, oyo walubuka, Alengire abandu bosi, ni Mukama Yesu.\n\n3. Sihari erina ngariwe, sihari oluanzo, Sihari obuholo nibya, ngo bua Yesu Kristo.",
"107. OBUTSEME BURI OMOMUTIMA":"GEO. W. COOKE\n\n1. Obutseme buri omomutima, obua Yesu, obua Yesu, kusangwa Yesu abirinyilamia, wasingya ku Yesu.\n\n2. Kusangwa ingye ndi muana wa Yesu, owa Yesu, owa Yesu, abiririha olubanza luage, wasingya ku Yesu.\n\n3. Tukole omubiri w'Omukama, w'Omukama, wOmukama, tutule 'ngulu yiwe oko bandu, engulu ya Yesu.",
"108. UPIPAWE YESU":"SAMUEL MEDLEY/ MOZART Arr. LOWELL MASON\n\n1. Omukama Yesu usikibawe lino, upipawe biro biosi. Kristo werihenia, kumbe tuasi erikupipa, nga balaika bali endata, upipawe Yesu, upipawe Yesu.\n\n2. Tukayiketera omusasi wa Yesu, sihali eyindi nzira, Yeriya elubula, akeraya ebibi byetu, nerituyira ababuya, upipawe Yesu, upipawe Yesu.\n\n3. Ekiro kikandisyasa kumbe ni luba, twasyaya eka ewetu, Itwasyamulolako, neriimba luimbo lubuya, nababugirire abosi upipawe Yesu, upipawe Yesu.",
"109. NI WASINGYA, YESU ANYANZA":"P.P.B./ P.P. BLISS\n\n1. Tata wage ka ari hakuhi, ekitabu kikambwira ekio, emyatsi y'eriswekera mingi, owalabire Yesu anyanza.\n\nNiwasingia Yesu anyanza, ni wasingia ka anyanza,\nKa anyanza oko kalvari, akuanzire nawe.\n\n2. Kera nabye mo kibi kinene, isinyitolere bwami buwe, nikwa oluanzo luwe lunene, moluanyiyira mo mundu muhia.\n\n3. Konage nawe twangakolaki, itwe abanze bobuami buwe, tuangasonda omubiri wuwe, eritendi biha kutse kindi.",
"110. YESU MWAHOLA OKO MUTI":"E.A. HOFFMAN/ J. H. STOCKTON\n\n1. Yesu moahola okomuti, moahola eritulamia, Omusasi wuwe mutika, eritueria.\n\nErina ria Yesu riowene, rikalamaya.\nTuyire 'rina riwe, muinene ndambi yosi.\n\n2. Yesu moaliha olubanza, ritolere ituikirirya, wase ku Yesu munawire, monasesene.\n\n3. Yesu akandikala netu, akasikala biro biosi, umuhe Omutima wawe, akandieryago.",
"111. 'BANDU BOSI BAMINYE YESU":"HARRY DIXON LOES\n\n'Bandu bosi baminye Yesu, Yesu Kristo,\n(Yesu Kristo Omulamia)\nKomuti ahola busana nabo, abosi bangamwikiriria.",
"112. MWATSI OYO WA YESU":"1. Muatsi oyo waYesu, ni 'muatsi werilama Ni muatsi wakagala, kerilamya kihugo.\n\n2. Ni muatsi wobutseme, ni 'muatsi wobutseme, Ni 'muatsi wobutseme, muatsi oyo wa Yesu.\n\n3. Ni kagala koMungu, ni kagala koMungu, Ni kagala koMungu, akatulamia nako.\n\n4. Kumbe wamikirirya, kumbe wamikirirya, Kumbe wamikirirya, ni Mulamia wetu.",
"113. YESU UNYIHIRE HAKUHI":"FRED WOODROW/ CARL FISCHER\n\n1. Yesu ulabire biosi, unyihire hakuhi,\nSinyibye ngakuibirirwa mo muirimia hanisi.\n\nYesu ngandikwama, Yesu ngandikwama, ngandikwama hakuhi.\n\n2. Uwe Kristo watokire, erikunga engetse,\nNerihunga rikakowa, biosi mo biala biawe.\n\n3. Ebiengebe noluholo, ni bieha muli yawe,\nUnyilembere muitebia, sinangatikatika.",
"114. YESU MOANYIGENDERA EKALVARI":"P. P. BILHORN\n\nYesu moanyigendera eKalvari,\neKalvari, eKalvari, erilusya 'kibi.",
"115. HARI EYISOKO YOSWIRE":"WILLIAM COWPER/ LOWELL MASON\n\n1. Hari eyisoko yoswire, nomusasi wa Yesu Kristo, N'oyo anzire rihenia, angahika ku Yesu.\nAsyalusibwa okoebibi, n'engumbu yenzira nyibi, n'oyo anzire erihenia, angahika ku Yesu.\n\n2. Itwe tunemutsema ringi, tuabiribana Omulamia, Ari nakagala kanene, kerikinda Satana\nYesu moakinda erihola, moalubuka omuisinda, ari nakagala kanene, kerikinda Satana.\n\n3. Oyo abirikwa komuti, akandisyahika akandi, Nerisyatutwala ewuwe, ahate n'obulige.\nTusikaye erina riwe, tumuhe mitima yetu, tukandisyahika ewuwe, ahate n'obuige.",
"116. NGAHA EBYOSI KU YESU":"MARY D. JAMES\n\n1. Ebiala biage ni biwe, Ebiangamukolera, N'ebisandu biage nabio, biangamukwamirira. Ebiosi biosi ku Yesu, nangamukwamirirara.\n\n2. Ameso wage ku Yesu, N'obuno bumupipe, Sinyisamalire 'gundi, ni na Yesu Mukama. Yesu, Yesu iyowene, Oyo wakwa komutiti.\n\n3. Namasweka, namasweka, busana n'Omukama, Yesu Muami muenge wetu, Anzire mundu ngangye. Tumupipe, tumupipe, anzire 'mundu ngangyengye.",
"117. KWAMA, KWAMA, WANGAKWAMA YESU":"1. Kwama, kwama, wangakwama Yesu, ka akuholera oko Kalvari,\nKwama, kwama, wangakwama Yesu, Angaminya oluanzo luawe ati?\n\n2. Kwama, kwama, wangakwama Yesu, hakuhi, nehali, wangamukwama,\nKwama, kwama, wangakwama Yesu, siwangibirirwa kiakukolera.",
"118. NGANDIBAYIRA BASOHI":"HARRY D. CLARKE/ HARRY D. CLARKE Har. by TALMAGE J. BITTIKOFER\n\n1. Ngandibayira basohi, abasohi, abasohi, Mukandisyasoha bandu, muamanyikwama, muamanyikwama, muamanyikwama, ngandibayira 'basohi, muamanyikwama.\n\n2. Kristo akabirikira, muase kuingye, muase kuingye, Kristo abiritulaga, eriluhuka. Eriluhuka, Eriluhuka, Krtsto abiritulaga, eriluhuka.\n\n3. Tuangambala emipira, emipira, eyoMungu, Tuangabya bafundi buwe, tuamamukwama. Tuambale Yesu, Tuambale Yesu, asyatuyira 'basohi, tuamamukwama.",
"119. YESU AMABIRIKIRA":"Mrs. CECIL F. ALEXANDER/ WILLIAM H. JUDE\n\n1. Yesu amabirikira tuleke nzira nyibi, Tumukwame, tumupipe, tumuanze, ni Mulamia.\n\n2. Omusasi wOMulamia akeraya ebibi, Abiritugula mugo, tuangamuha wasingya.\n\n3. Omukama Yesu Kristo akandisyasa kandi, Nerihenia erioMungu, n'abalaika abosi.",
"120. OMUSASI ANGERIA EBIBI":"EL NATHAN/ JAMES MC GRANAHAN\n\n1. Omusasi ogutika angeria ebibi, Nimusasi Womulamia oyo wagalawa.\n\nNi kitabu, ekioMungu, kikatubwirago,\n(ni kitabu, ekioMungu,)\nOmusasi, wOmulania, angeria ebibi.\n(OmusaSi, wOmulamia,)\n\n2. Erilamia eria Yesu, ukahabawario, oko muti waKalvari moaheka ebibi.\n\n3. Erihitana rioMungu eriendibya kuitwe, Moriahirwa oko Yesu, moa turihirario.",
"121. EBIBI BINGI BIAMAKULUHYA":"C. H. M./ C. H. MORRIS\n\n1. Ebibi bingi biamaku luhia, wase ko Yesu lino lino, naye akandilusyabio biosi, Uwe, uhike ko Yesu.\n\nLino, wangowa Yesu, subye ukagana Ye, ubindule mutima, uhike ko Yesu lino.\n\n2. Uamasonda mutima owene, uikiriraye Yesu lino, ulangire olusi luengebe, Uhike ko Yesu lino.\n\n3. Bulige buamabya bungi, uikiriraye Yesu lino, Setani siiri neritsema, Uwe, uhike ko Yesu.\n\n4. BaKristo bakakubirikira, uikiriraye Yesu lino, nawe iwikala nobutseme, Uhike ku Yesu lino.",
      
};

const currentTitle = urlParams.get('title');

function getAdjacentHymn(direction) {
    const titles = Object.keys(hymnsData);
    const currentIndex = titles.indexOf(currentTitle);

    if (direction === 'next' && currentIndex < titles.length - 1) {
        return titles[currentIndex + 1];
    } else if (direction === 'previous' && currentIndex > 0) {
        return titles[currentIndex - 1];
    }
    return null;
}

function goToNextSong() {
    const nextHymn = getAdjacentHymn('next');
    if (nextHymn) {
        window.location.replace(`NAPp.html?title=${encodeURIComponent(nextHymn)}&from=button`);
    }
}

function goToPreviousSong() {
    const previousHymn = getAdjacentHymn('previous');
    if (previousHymn) {
        window.location.replace(`NAPp.html?title=${encodeURIComponent(previousHymn)}&from=button`);
    }
}


let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 100) {
        const nextHymn = getAdjacentHymn('next');
        if (nextHymn) {
            window.location.replace(`NAPp.html?title=${encodeURIComponent(nextHymn)}&from=swipe`);
        }
    } else if (swipeDistance < -100) {
        const previousHymn = getAdjacentHymn('previous');
        if (previousHymn) {
            window.location.replace(`NAPp.html?title=${encodeURIComponent(previousHymn)}&from=swipe`);
        }
    }
}

function displayLyrics(title) {
    const lyricsDiv = document.getElementById('hlyrics');
    const hymnTitleElement = document.getElementById('hymn-title');
    hymnTitleElement.innerText = title;
    lyricsDiv.innerText = hymnsData[title] || "Maneno ya wimbo haipatikani.";
}

if (hymnTitle && hymnsData[hymnTitle]) {
    displayLyrics(hymnTitle);
} else {
    document.getElementById('hlyrics').innerText = "Nyimbo haipatikani.";
}

document.getElementById('back-button').addEventListener('click', () => {
    window.history.back();
});

let fontSize = localStorage.getItem('fontSize') ? parseInt(localStorage.getItem('fontSize')) : 16;

function updateFontSize() {
    const lyricsDiv = document.getElementById('hlyrics');
    lyricsDiv.style.fontSize = `${fontSize}px`;
    localStorage.setItem('fontSize', fontSize); 
}

document.addEventListener('DOMContentLoaded', () => {
    updateFontSize();
    applyTheme();
    document.getElementById('theme').addEventListener('click', toggleTheme);
});

document.getElementById('AI').addEventListener('click', () => {
    if (fontSize < 50) {
        fontSize += 2;
        updateFontSize();
    }
});

document.getElementById('AD').addEventListener('click', () => {
    if (fontSize > 10) { 
        fontSize -= 2;
        updateFontSize();
    }
});

const copyButton = document.getElementById('cop');
const textToCopy = document.getElementById('hlyrics');

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(textToCopy.innerText)
        .then(() => {
            alert('Maandishi yamenakiliwa kwenye ubao wa kunakili!'); 
        })
        .catch(err => {
            console.error('Imeshindikana kunakili maandishi: ', err); 
        });
});

document.getElementById('Fav').addEventListener('click', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(songTitle)) {
        favorites.push(songTitle);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${songTitle} imeongezwa kwenye vipendwa!`);
    } else {
        alert(`${songTitle} ipo tayari kwenye vipendwa.`);
    }
});

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', ''); 
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px'; 
    document.body.appendChild(textarea);
    textarea.select();
    try {
        const success = document.execCommand('copy');
        if (success) {
            alert('Text copied to clipboard!');
        } else {
            alert('Copy not supported. Please copy manually.');
        }
    } catch (err) {
        console.error('Fallback failed:', err);
    }
    document.body.removeChild(textarea);
}

document.getElementById('favo').addEventListener('click', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length > 0) {
        window.location.href = `FavN.html`;
    } else {
        alert('Hakuna nyimbo za vipendwa bado!');
    }
});

if (window.location.pathname.endsWith('FavN.html')) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');
    if (favorites.length > 0) {
        favorites.forEach(song => {
            const li = document.createElement('li');
            li.textContent = song;
            favoritesList.appendChild(li);
        });
    } else {
        favoritesList.textContent = 'Hakuna nyimbo za vipendwa bado!';
    }
}

function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.className = theme;
    }
}

