# Paginations

The json files give the correlation between the paginations and the scans in the different collections:

- 1GS66030 = Cone Tanjur
- 1KG12671 = Egoo Collection
- 1KG13126 = Peking Tanjur
- 1KG13607 = Phugbrag Kanjur
- 1PD127393 = Shey Kanjur
- 1PD96684 = Peking Kanjur
- 1PD96685 = Cone Kanjur
- 22083 = Stog Kanjur
- 3CN1302 = Mustang Charang Kanjur
- 3CN20612 = Derge Kanjur Reprint
- 4CZ5369 = Derge Kanjur LOC
- 4CZ445313 = Hemis He Kanjur
- 22084 = Derge Kanjur
- 22703 = Narthang Kanjur
- 22704  =Narthang Tanjur
- 23702 = Golden Tanjur
- 23703 = Derge Tanjur
- 26071 = Lhasa Kanjur
- 29468 = Urga Kanjur
- 4CZ7445 = Lithang Kangyur

TODO:
- missing files:
   * 1KG13607/1KG14011.json
   * 1GS66030/1GS66181.json
- the volumes of the outline of 4CZ7445 seem not to be in sync with the json file names, for instance the transition khri brgyad / khri pa happens in 1KG9899 in the json files while it happens in 1KG9903 in the outline
- 22084/0891.json should be checked against the new files that were reimported (see https://github.com/buda-base/library-issues/issues/259), some default values have been applied
- 1KG13126/I1KG13246.json is very weird (for images > 1000)
- files that were marked with !!!:
   * 4CZ7445/1KG9899.json


This sequence is bizarre (duplicate before main?):

"572":{"pagination":"287a","tibetanpg":"གཉིས་བརྒྱ་ གྱ་བདུན་","psection":"mngon pa","file":"bdr:I1GS66175::I1GS661750579.tif","note":"ཉིས་བརྒྱ་གྱ་བདུན་འོག་མ།"},
"573":{"pagination":"287b","tibetanpg":"","psection":"mngon pa","file":"bdr:I1GS66175::I1GS661750580.tif","note":"None"},
"574":{"pagination":"287a","tibetanpg":"གཉིས་བརྒྱ་ གྱ་བདུན་","psection":"mngon pa","file":"bdr:I1GS66175::I1GS661750581.tif","note":"ཉིས་བརྒྱ་གྱ་བདུན།"},
"575":{"pagination":"287b","tibetanpg":"","psection":"mngon pa","file":"bdr:I1GS66175::I1GS661750582.tif","note":"None"},

same pattern here:

"100":{"pagination":"51a","tibetanpg":"ང་གཅིག་","psection":"dkar chag","file":"bdr:I1GS66240::I1GS662400105.tif","note":"ང་གཅིག་འོག་མ།"},
"101":{"pagination":"51b","tibetanpg":"","psection":"dkar chag","file":"bdr:I1GS66240::I1GS662400106.tif","note":"None"},
"102":{"pagination":"51a","tibetanpg":"ང་གཅིག་","psection":"dkar chag","file":"bdr:I1GS66240::I1GS662400107.tif","note":"ང་གཅིག།"},
"103":{"pagination":"51b","tibetanpg":"","psection":"dkar chag","file":"bdr:I1GS66240::I1GS662400108.tif","note":"None"},

and here:

"697":{"pagination":"350a","tibetanpg":"གསུམ་བརྒྱ་ ལྔ་བཅུ་","psection":"rgyud 'grel","file":"bdr:I1PD31378::I1PD313780699.tif","note":"སུམ་བརྒྱ ལྔ་བཅུ་འོག"},
"698":{"pagination":"350b","tibetanpg":"","psection":"rgyud 'grel","file":"bdr:I1PD31378::I1PD313780700.tif","note":"None"},
"699":{"pagination":"350a","tibetanpg":"གསུམ་བརྒྱ་ ལྔ་བཅུ་","psection":"rgyud 'grel","file":"bdr:I1PD31378::I1PD313780701.tif","note":"None"},
"700":{"pagination":"350b","tibetanpg":"","psection":"rgyud 'grel","file":"bdr:I1PD31378::I1PD313780702.tif","note":"None"},

even more strange:

"727":{"pagination":"363a","tibetanpg":"གསུམ་བརྒྱ་ རེ་གསུམ་","psection":"mdo 'grel","file":"bdr:I1PD31437::I1PD314370729.tif","note":"སུམ་བརྒྱ རེ་གསུམ་འོག"},
"728":{"pagination":"363b","tibetanpg":"","psection":"mdo 'grel","file":"bdr:I1PD31437::I1PD314370730.tif","note":"None"},
"729":{"pagination":"363a","tibetanpg":"གསུམ་བརྒྱ་ རེ་གསུམ་","psection":"mdo 'grel","file":"bdr:I1PD31437::I1PD314370731.tif","note":"None"},
"730":{"pagination":"363b","tibetanpg":"","psection":"mdo 'grel","file":"bdr:I1PD31437::I1PD314370732.tif","note":"None"},
"731":{"pagination":"363a","tibetanpg":"གསུམ་བརྒྱ་ རེ་གསུམ་","psection":"mdo 'grel","file":"bdr:I1PD31437::I1PD314370733.tif","note":"སུམ་བརྒྱ རེ་གསུམ གོང་།"},
"732":{"pagination":"363b","tibetanpg":"","psection":"mdo 'grel","file":"bdr:I1PD31437::I1PD314370734.tif","note":"None"},